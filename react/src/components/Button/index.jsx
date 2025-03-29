import cn from 'classnames';

import styles from './index.module.css';

export const Button = ({ className, icon, children, progress, disabled, ...props }) => {
    return (
        <button
            className={cn(styles.button, progress && styles.progress, className)}
            disabled={disabled || progress}
            {...props}
        >
            {Boolean(icon) && icon}
            {Boolean(children) && children}
        </button>
    );
};
