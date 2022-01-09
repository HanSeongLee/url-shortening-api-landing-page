import React from "react";
import styles from './style.module.scss';
import Button from "../Button";
import cn from "classnames";

const ShortenItForm = ({ onSubmit, onInvalid, error }) => {

    return (
        <form className={styles.shortenItForm}
              onInvalid={onInvalid}
              onSubmit={onSubmit}
        >
            <div className={styles.inputWrapper}>
                <input className={cn(styles.shortenItInput, {
                    [styles.error]: error,
                })}
                       type={'text'}
                       placeholder={'Shorten a link here...'}
                       name={'url'}
                       required
                />
                {error && (
                    <div className={styles.errorMessage}>
                        {error}
                    </div>
                )}
            </div>
            <div className={styles.buttonWrapper}>
                <Button variants={'round'}
                        size={'normal'}
                        type={'submit'}
                >
                    Shorten It!
                </Button>
            </div>
        </form>
    );
};

export default ShortenItForm;
