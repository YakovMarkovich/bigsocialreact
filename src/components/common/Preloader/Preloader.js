import React from 'react';
import preloader from "../../../assets/images/Spinner-3.4s-200px.svg";

const Preloader = (props) => {
    return (
        <div style={{backgroundColor: 'white'}}><img src={preloader}/></div>
    );
};

export default Preloader;