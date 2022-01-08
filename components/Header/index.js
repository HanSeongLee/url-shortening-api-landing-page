import React, {useCallback, useState} from "react";
import styles from './style.module.scss';
import Link from 'next/link';
import MenuIcon from '/public/icons/icon-menu.svg';
import cn from 'classnames';
import Container from "../Container";
import Button from "../Button";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const onMenuClick = useCallback(() => {
        setOpenMenu(!openMenu);
    }, [openMenu]);

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.content}>
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
                                <Link href={'#'}>
                                    <a>
                                        Features
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.menuItem}>
                                <Link href={'#'}>
                                    <a>
                                        Pricing
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.menuItem}>
                                <Link href={'#'}>
                                    <a>
                                        Resources
                                    </a>
                                </Link>
                            </li>
                        </ul>

                        <ul className={styles.menuList}>
                            <li className={styles.menuItem}>
                                <Link href={'#'}>
                                    <a>
                                        Login
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.menuItem}>
                                <Button variants={'rounded-oval'}
                                        size={'extra-small'}
                                >
                                    Sign Up
                                </Button>
                            </li>
                        </ul>
                    </nav>

                    <button className={styles.menuButton}
                            aria-label={'menu'}
                            onClick={onMenuClick}
                    >
                        <MenuIcon/>
                    </button>
                </div>
            </Container>
        </header>
    );
};

export default Header;
