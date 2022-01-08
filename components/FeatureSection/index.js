import React from "react";
import styles from './style.module.scss';
import Container from "../Container";
import FeatureCard from "../FeatureCard";

const features = [
    {
        icon: '/icons/icon-brand-recognition.svg',
        title: 'Brand Recognition',
        description: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
    },
    {
        icon: '/icons/icon-detailed-records.svg',
        title: 'Detailed Records',
        description: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    },
    {
        icon: '/icons/icon-fully-customizable.svg',
        title: 'Fully Customizable',
        description: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    },
];

const FeatureSection = () => {
    return (
        <section className={styles.featureSection}>
            <Container>
                <h3 className={styles.title}>
                    Advanced Statistics
                </h3>
                <p className={styles.description}>
                    Track how your links are performing across the web with our advanced statistics dashboard.
                </p>

                <div className={styles.featureCardContainer}>
                    {features?.map((feature) => (
                        <FeatureCard {...feature} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default FeatureSection;
