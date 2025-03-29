import styles from './index.module.css';

export const CategoryCard = ({ category, matches }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{category}</h2>
            <div className={styles.matches}>
                {matches?.map((match, index) => (
                    <div key={index} className={styles.match}>
                        {match}
                    </div>
                ))}
            </div>
        </div>
    );
};
