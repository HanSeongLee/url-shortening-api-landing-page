import React from "react";
import styles from './style.module.scss';
import Link from 'next/link';
import Logo from '/public/logo.svg';
import FacebookIcon from '/public/icons/icon-facebook.svg';
import TwitterIcon from '/public/icons/icon-twitter.svg';
import PinterestIcon from '/public/icons/icon-pinterest.svg';
import InstagramIcon from '/public/icons/icon-instagram.svg';
import Container from "../Container";

const sitemap = [
    {
        title: 'Features',
        items: [
            {
                name: 'Link Shortening',
                link: '#'
            },
            {
                name: 'Branded Links',
                link: '#'
            },
            {
                name: 'Analytics',
                link: '#'
            },
        ]
    },
    {
        title: 'Resources',
        items: [
            {
                name: 'Blog',
                link: '#'
            },
            {
                name: 'Developers',
                link: '#'
            },
            {
                name: 'Support',
                link: '#'
            },
        ]
    },
    {
        title: 'Company',
        items: [
            {
                name: 'About',
                link: '#'
            },
            {
                name: 'Our Team',
                link: '#'
            },
            {
                name: 'Careers',
                link: '#'
            },
            {
                name: 'Contact',
                link: '#'
            },
        ]
    }
];

const socials = [
    {
        name: 'facebook',
        icon: <FacebookIcon />,
        link: '#',
    },
    {
        name: 'twitter',
        icon: <TwitterIcon />,
        link: '#',
    },
    {
        name: 'pinterest',
        icon: <PinterestIcon />,
        link: '#',
    },
    {
        name: 'instagram',
        icon: <InstagramIcon />,
        link: '#',
    },
];

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.logoWrapper}>
                        <Link href={'/'}>
                            <a aria-label={'shortly'}>
                                <Logo className={styles.logo}/>
                            </a>
                        </Link>
                    </div>

                    <ul className={styles.sitemapList}>
                        {sitemap?.map(({title, items}) => (
                            <li className={styles.sitemapItem}
                                key={title}
                            >
                                {title}
                                <ul className={styles.linkList}>
                                    {items?.map(({name, link}) => (
                                        <li className={styles.linkItem}
                                            key={name}
                                        >
                                            <Link href={link}>
                                                <a>
                                                    {name}
                                                </a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>

                    <ul className={styles.socialList}>
                        {socials.map(({name, icon, link}) => (
                            <li key={name}>
                                <a href={link}
                                   target={'_blank'}
                                   aria-label={name}
                                >
                                    {icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
