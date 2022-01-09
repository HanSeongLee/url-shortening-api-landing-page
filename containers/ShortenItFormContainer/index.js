import React, {useCallback, useState} from "react";
import ShortenItForm from "../../components/ShortenItForm";
import {useAppContext} from "../../context/AppContext";
import axios from "axios";

const ShortenItFormContainer = () => {
    const [error, setError] = useState('');
    const [_, dispatch] = useAppContext();

    const onSubmit = useCallback(async (e) => {
        e.preventDefault();
        const urlInput = e.target.url;
        const {value: link} = urlInput;
        setError('');

        try {
            const {data} = await axios.post(`https://api.shrtco.de/v2/shorten?url=${link}`);
            const {result} = data;

            dispatch({ type: 'add_link', value: {
                    link: result.original_link,
                    shortLink: result.full_short_link,
                },
            });
            urlInput.value = '';
        } catch (e) {
            const {data} = e.response;
            setError(data.error);
        }

    }, []);

    const onInvalid = useCallback((e) => {
        const { validationMessage } = e.target;
        setError(!!validationMessage ? 'Please add a link' : '');
        e.preventDefault();
    }, []);

    const onChange = useCallback(() => {
        setError('');
    }, []);

    return (
        <ShortenItForm onSubmit={onSubmit}
                       onInvalid={onInvalid}
                       error={error}
                       onChange={onChange}
        />
    );
};

export default ShortenItFormContainer;
