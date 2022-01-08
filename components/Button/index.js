import React from "react";
import styles from './style.module.scss';
import cn from "classnames";

const Button = ({ variants = 'round', size = 'large', children, ...props }) => {
    return (
        <button className={cn(styles.button, {
            [styles.round]: variants === 'round',
            [styles.roundedOval]: variants === 'rounded-oval',

            [styles.large]: size === 'large',
            [styles.small]: size === 'small',
        })}
                {...props}
        >
            {children}
        </button>
    );
};

export default Button;
