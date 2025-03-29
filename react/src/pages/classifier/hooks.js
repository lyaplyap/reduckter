import { useState, useCallback } from 'react';
import { pipeline } from '@huggingface/transformers';

import { TEXT, CATEGORIES } from './mock';

export const useText = () => {
    const [text, setText] = useState(TEXT);
    const onTextDelete = useCallback(() => setText(''), []);

    return {
        text,
        onTextChange: setText,
        onTextDelete
    };
};

export const useCategories = () => {
    const [categories, setCategories] = useState(CATEGORIES);
    
    const onCategoryAdd = useCallback((addingCategory) => {
        setCategories([
            ...categories.filter((category) => category !== addingCategory),
            addingCategory
        ]);
    }, [categories]);
    
    const onCategoryDelete = useCallback(
        (removingCategory) => setCategories(
            categories.filter((category) => category !== removingCategory)
        ),
        [categories]
    );

    return {
        categories,
        onCategoryAdd,
        onCategoryDelete
    };
};

export const useClassifier = (text, categories, onSuccess) => {
    const [output, setOutput] = useState([]);
    const [inProgress, setInProgress] = useState(false);
    
    const onClassify = useCallback(
        async () => {
            if (!text || !categories || categories.length === 0) {
                return;
            }

            setInProgress(true);
            
            try {
                const classifier = await pipeline('zero-shot-classification', 'Xenova/nli-deberta-v3-xsmall');
                
                const sentences = text.split('\n');
                const outputMap = categories.reduce((categories, category) => ({ ...categories, [category]: [] }), {});

                for (const sentence of sentences) {
                    try {
                        const { labels } = await classifier(sentence, categories);
                        const [category] = labels;
                        
                        outputMap[category].push(sentence);
                    } catch (error) {
                        console.error('Error classifying text:', error);
                    }
                }

                const output = Object.entries(outputMap).map(([category, matches]) => ({ category, matches }));

                setOutput(output);
                onSuccess?.();
            } catch (error) {
                console.error('Error model loading:', error);
            }

            setInProgress(false);
        },
        [text, categories, onSuccess]
    );

    return {
        output,
        inProgress,
        onClassify
    };
};
