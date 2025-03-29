import cn from 'classnames';

import { ChevronRightIcon } from '../../icons';

import styles from './index.module.css';

export const Breadcrumbs = ({ options, className }) => {
    return (
        <nav className={cn(styles.breadcrumbs, className)} aria-label="Breadcrumbs">
            <ul>
                {options.map(({ label, href }, index) => {
                    const isLastBreadcrumb = index === options.length - 1;

                    return (
                        <li className={styles.breadcrumb} key={index}>
                            <a
                                href={href}
                                aria-current={isLastBreadcrumb ? 'page' : undefined}
                            >
                                {label}
                            </a>
                            {!isLastBreadcrumb && <ChevronRightIcon color="var(--text-tertiary)" />}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
