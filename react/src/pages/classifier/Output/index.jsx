import { CategoryCard } from '../../../components/CategoryCard';

import styles from './index.module.css';

export const Output = ({ output }) => {
    return (
        <div className={styles.content}>
            {output?.map(({ category, matches }, index) => (
                <CategoryCard
                    category={category}
                    matches={matches}
                    key={index}
                />
            ))}
        </div>
    );
};
