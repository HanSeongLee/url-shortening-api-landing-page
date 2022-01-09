import React, {useCallback, useState} from "react";
import ShortenItForm from "../../components/ShortenItForm";

const ShortenItFormContainer = () => {
    const [error, setError] = useState('');

    const onSubmit = useCallback((e) => {
        const url = e.target.url.value;
        setError('');
        e.preventDefault();
    }, []);

    const onInvalid = useCallback((e) => {
        const { validationMessage } = e.target;
        setError(!!validationMessage ? 'Please add a link' : '');
        e.preventDefault();
    }, []);

    return (
        <ShortenItForm onSubmit={onSubmit}
                       onInvalid={onInvalid}
                       error={error}
        />
    );
};

export default ShortenItFormContainer;
