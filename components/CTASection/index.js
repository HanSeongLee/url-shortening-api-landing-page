import React from "react";
import styles from './style.module.scss';
import Button from "../Button";

const CTASection = () => {
    return (
        <section className={styles.ctaSection}>
            <h2 className={styles.title}>
                Boost your links today
            </h2>
            <Button variants={'rounded-oval'}
                    size={'small'}
            >
                Get Started
            </Button>
        </section>
    );
};

export default CTASection;
