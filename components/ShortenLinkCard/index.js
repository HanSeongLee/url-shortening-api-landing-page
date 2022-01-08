import React, {useCallback, useState} from "react";
import styles from './style.module.scss';
import Button from "../Button";

const ShortenLinkCard = ({ link, shortenLink }) => {
    const [copied, setCopied] = useState(false);

    const onCopy = useCallback(async () => {
        await navigator.clipboard.writeText(shortenLink);
        setCopied(true);
    }, [shortenLink]);

    return (
        <div className={styles.shortenLinkCard}
             key={shortenLink}
        >
            <div className={styles.originalLink}>
                {link}
            </div>
            <div className={styles.rightSide}>
                <div className={styles.shortenItLink}>
                    {shortenLink}
                </div>
                <div className={styles.copyButtonWrapper}>
                    {!copied ? (
                        <Button variants={'round'}
                                size={'small'}
                                onClick={onCopy}
                        >
                            Copy
                        </Button>
                    ) : (
                        <Button variants={'round'}
                                size={'small'}
                                disabled
                        >
                            Copied!
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShortenLinkCard;
