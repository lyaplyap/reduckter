import { useState } from 'react';

import { PlusIcon, TrashBinIcon } from '../../../icons';
import { Button } from '../../../components/Button';
import { Tag } from '../../../components/Tag';

import styles from './index.module.css';

export const Input = ({
    text,
    onTextChange,
    onTextDelete,
    categories,
    onCategoryAdd,
    onCategoryDelete,
    onClassify,
    inProgress
}) => {
    const [categoryValue, setCategoryValue] = useState('');

    const handleCategoryAdd = (event) => {
        event.preventDefault();

        if (categoryValue) {
            onCategoryAdd(categoryValue);
            setCategoryValue('');
        }
    };

    return (
        <div className={styles.content}>
            <div className={styles.main}>
                <div className={styles.text}>
                    <textarea
                        value={text}
                        onChange={({ target: { value } }) => onTextChange(value)}
                        className={styles.textarea}
                        placeholder="Введите текст, который необходимо классифицировать по категориям справа"
                    />
                    <div className={styles.actions}>
                        <Button
                            icon={<TrashBinIcon color="var(--text-tertiary)" />}
                            aria-label="Очистить"
                            onClick={onTextDelete}
                        />
                    </div>
                </div>
                <div className={styles.categories}>
                    <form className={styles.input} onSubmit={handleCategoryAdd}>
                        <input
                            value={categoryValue}
                            onChange={({ target: { value } }) => setCategoryValue(value)}
                            placeholder="Категория"
                        />
                        <Button
                            icon={<PlusIcon color="var(--text-tertiary)" />}
                            aria-label="Добавить"
                            type="submit"
                        />
                    </form>
                    <div className={styles.tags}>
                        {categories?.map((category, index) => (
                            <Tag label={category} key={index} onDelete={() => onCategoryDelete(category)} />    
                        ))}
                    </div>
                </div>
            </div>
            <footer className={styles.footer}>
                <span className={styles.counter}>Количество символов: {text?.length ?? 0}</span>
                <Button
                    className={styles.action}
                    onClick={onClassify}
                    progress={inProgress}
                >
                    Классифицировать
                </Button>
            </footer>
        </div>
    );
};
