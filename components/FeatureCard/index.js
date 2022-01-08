import React from "react";
import styles from './style.module.scss';

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className={styles.featureCard}
             key={title}
        >
            <div className={styles.iconWrapper}>
                <img src={icon}
                     alt={''}
                />
            </div>

            <h4 className={styles.title}>
                {title}
            </h4>
            <p className={styles.description}>
                {description}
            </p>
        </div>
    );
};

export default FeatureCard;
