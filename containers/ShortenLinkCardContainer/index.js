import React from "react";
import ShortenLinkCard from "../../components/ShortenLinkCard";
import {useAppContext} from "../../context/AppContext";

const ShortenLinkCardContainer = () => {
    const [state, _] = useAppContext();

    return (
        <>
            {state?.links?.map((item) => (
                <ShortenLinkCard {...item} />
            ))}
        </>
    );
}

export default ShortenLinkCardContainer;
