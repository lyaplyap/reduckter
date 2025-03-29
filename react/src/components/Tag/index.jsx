import { CancelIcon } from '../../icons';
import { Button } from '../Button';

import styles from './index.module.css';

export const Tag = ({ label, onDelete }) => {
    return (
        <div className={styles.tag}>
            <span>{label}</span>
            <Button
                icon={<CancelIcon color="var(--accent-primary)" />}
                onClick={onDelete}
                aria-label="Удалить"
            />
        </div>
    );
};
