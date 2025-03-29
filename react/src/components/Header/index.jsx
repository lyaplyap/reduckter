import { SettingsIcon, ProfileIcon, MenuIcon } from '../../icons';
import { Breadcrumbs } from '../Breadcrumbs';
import { Button } from '../Button';

import styles from './index.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <ul className={styles.left}>
                <li>
                    <a className={styles.logotype} href="/" aria-label="Логотип">
                        <img src="/duck.png" />
                    </a>
                </li>
                <li>
                    <Breadcrumbs
                        className={styles.breadcrumbs}
                        options={[
                            {
                                label: 'Reduckter',
                                href: '/'
                            },
                            {
                                label: 'Классификатор 🤖',
                                href: '/classifier'
                            }
                        ]}
                    />
                </li>
            </ul>
            <span className={styles.name}>Reduckter</span>
            <ul className={styles.right}>
                <li className={styles.settings}>
                    <Button icon={<SettingsIcon color="var(--text-tertiary)" />} />
                </li>
                <li className={styles.profile}>
                    <Button icon={<ProfileIcon color="var(--text-tertiary)" />} />
                </li>
                <li className={styles.menu}>
                    <Button icon={<MenuIcon size="l" color="var(--text-tertiary)" />} />
                </li>
            </ul>
        </header>
    );
};
