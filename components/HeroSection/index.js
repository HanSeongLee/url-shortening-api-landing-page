import React from "react";
import styles from './style.module.scss';
import Container from "../Container";
import Button from "../Button";

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
                <Button variants={'rounded-oval'}>
                    Get Started
                </Button>

                <form className={styles.shortenItForm}>
                    <input className={styles.shortenItInput}
                           type={'text'}
                           placeholder={'Shorten a link here...'}
                    />
                    <div className={styles.buttonWrapper}>
                        <Button variants={'round'}
                                size={'small'}
                                type={'submit'}
                        >
                            Shorten It!
                        </Button>
                    </div>
                </form>
            </Container>
        </section>
    );
};

export default HeroSection;
