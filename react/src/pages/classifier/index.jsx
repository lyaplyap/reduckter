import { useCallback, useState } from 'react';

import { Header } from '../../components/Header';
import { Tabs } from '../../components/Tabs';

import { Input } from './Input';
import { Output } from './Output';
import { useText, useCategories, useClassifier } from './hooks';

import styles from './index.module.css';

export const ClassifierPage = () => {
    const [mode, setMode] = useState('input');
    const switchToOutput = useCallback(() => setMode('output'), []);
    
    const { text, onTextChange, onTextDelete } = useText();
    const { categories, onCategoryAdd, onCategoryDelete } = useCategories();
    const { output, inProgress, onClassify } = useClassifier(text, categories, switchToOutput);

    return (
        <>
            <Header />
            <Tabs
                activeId={mode}
                onActiveIdChange={setMode}
                options={[
                    {
                        label: 'Текст',
                        id: 'input'
                    },
                    {
                        label: 'Результат',
                        id: 'output'
                    }
                ]}
            />
            <main className={styles.layout}>
                <div className={styles.classifier}>
                    <h1 className={styles.title}>
                        Классификация текста по&nbsp;заданным категориям
                    </h1>
                    {mode === 'input' && (
                        <Input
                            text={text}
                            onTextChange={onTextChange}
                            onTextDelete={onTextDelete}
                            categories={categories}
                            onCategoryAdd={onCategoryAdd}
                            onCategoryDelete={onCategoryDelete}
                            onClassify={onClassify}
                            inProgress={inProgress}
                        />
                    )}
                    {mode === 'output' && <Output output={output} />}
                </div>
            </main>
        </>
    );
};