import React, {useCallback, useState} from "react";
import styles from './style.module.scss';
import Button from "../Button";

const ShortenLinkCard = ({ link, shortLink }) => {
    const [copied, setCopied] = useState(false);

    const onCopy = useCallback(async () => {
        await navigator.clipboard.writeText(shortLink);
        setCopied(true);
    }, [shortLink]);

    return (
        <div className={styles.shortenLinkCard}
             key={shortLink}
        >
            <div className={styles.originalLink}>
                {link}
            </div>
            <div className={styles.rightSide}>
                <div className={styles.shortenItLink}>
                    {shortLink}
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
