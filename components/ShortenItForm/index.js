import React, {useCallback, useState} from "react";
import styles from './style.module.scss';
import Button from "../Button";
import cn from "classnames";

const ShortenItForm = () => {
    const [error, setError] = useState(false);

    const onInvalid = useCallback((e) => {
        const { validationMessage } = e.target;
        setError(!!validationMessage);
        e.preventDefault();
    }, []);

    return (
        <form className={styles.shortenItForm}
              onInvalid={onInvalid}
        >
            <div>
                <input className={cn(styles.shortenItInput, {
                    [styles.error]: error,
                })}
                       type={'text'}
                       placeholder={'Shorten a link here...'}
                       required
                />
                {error && (
                    <div className={styles.error}>
                        Please add a link
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
