import React from "react";

import "./styles.scss";


const CardLayout = ({ read, setRead, children }) => {

    const mark = (e) => {
        e.preventDefault();
        setRead(!read);
        console.log('Marked all as read');
        setRead(null);
    };

    return (
        <>
            <div className="card-component">
                <div className="card-header">
                    <h1>Notifications <span>{read === true || read === null ? 0 : 3}</span>
                    </h1>
                    <span onClick={mark}>Mark all as read</span>
                </div>
                <div className="card-content">
                    {children}
                </div>
            </div>
        </>
    );
};

export default CardLayout;