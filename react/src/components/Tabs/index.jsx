import cn from 'classnames';

import styles from './index.module.css';

export const Tabs = ({ options, activeId, onActiveIdChange }) => {
    return (
        <ul className={styles.tabs}>
            {options.map(({ label, id }) => {
                const isActiveTab = activeId === id;

                return (
                    <button
                        key={id}
                        className={cn(styles.tab, isActiveTab && styles.activeTab )}
                        onClick={() => onActiveIdChange?.(id)}
                    >
                        {label}
                    </button>
                );
            })}
        </ul>
    );
};
