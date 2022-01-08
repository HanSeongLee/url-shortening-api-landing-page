import React from "react";
import styles from './style.module.scss';
import Container from "../Container";

const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroImageWrapper}>
                <img className={styles.heroImage}
                     src={'/img/illustration-working.svg'}
                     alt={''}
                />
            </div>

            <Container>
                <h2 className={styles.title}>
                    More than just shorter links
                </h2>
                <p className={styles.description}>
                    Build your brand’s recognition and get detailed insights on how your links are performing.
                </p>
                <button className={styles.getStartedButton}>
                    Get Started
                </button>

                <form className={styles.shortenItForm}>
                    <input className={styles.shortenItInput}
                           type={'text'}
                           placeholder={'Shorten a link here...'}
                    />
                    <button className={styles.shortenItButton}>
                        Shorten It!
                    </button>
                </form>
            </Container>
        </section>
    );
};

export default HeroSection;
