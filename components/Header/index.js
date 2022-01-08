import React, {useCallback, useState} from "react";
import styles from './style.module.scss';
import Link from 'next/link';
import MenuIcon from '/public/icons/icon-menu.svg';
import cn from 'classnames';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const onMenuClick = useCallback(() => {
        setOpenMenu(!openMenu)
    }, [openMenu]);

    return (
        <header className={styles.header}>
            <h1>
                <Link href={'/'}>
                    <a>
                        <img className={styles.logo}
                             src={'/logo.svg'}
                             alt={'shortly'}
                        />
                    </a>
                </Link>
            </h1>

            <nav className={cn(styles.menu, {
                [styles.open]: openMenu,
            })}>
                <ul className={styles.menuList}>
                    <li className={styles.menuItem}>
                        Features
                    </li>
                    <li className={styles.menuItem}>
                        Pricing
                    </li>
                    <li className={styles.menuItem}>
                        Resources
                    </li>
                </ul>

                <ul className={styles.menuList}>
                    <li className={styles.menuItem}>
                        Login
                    </li>
                    <li className={styles.menuItem}>
                        <button className={styles.signUpButton}>
                            Sign Up
                        </button>
                    </li>
                </ul>
            </nav>

            <button className={styles.menuButton}
                    aria-label={'menu'}
                    onClick={onMenuClick}
            >
                <MenuIcon/>
            </button>
        </header>
    );
};

export default Header;
