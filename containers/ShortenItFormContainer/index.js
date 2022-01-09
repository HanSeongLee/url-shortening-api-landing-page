import React, {useCallback, useState} from "react";
import ShortenItForm from "../../components/ShortenItForm";
import {useAppContext} from "../../context/AppContext";

const ShortenItFormContainer = () => {
    const [error, setError] = useState('');
    const [_, dispatch] = useAppContext();

    const onSubmit = useCallback((e) => {
        const link = e.target.url.value;
        setError('');

        // dispatch({ type: 'add_link', value: {
        //         link,
        //         shortLink: "https:\/\/shrtco.de\/test",
        //     },
        // });
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
