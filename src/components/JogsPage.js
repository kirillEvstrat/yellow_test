import React from "react";
import JogsList from "./JogsList";
import JogsFilter from "./JogsFilter";

const JogsPage = () => {
    return (
        <React.Fragment>
            <JogsFilter/>
            <JogsList/>
        </React.Fragment>
    );
};

export default JogsPage;