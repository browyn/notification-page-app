import React from "react";

import Notification from "./Notification";
import "./styles.scss";

const CardLayout = () => {

    const [read, setRead] = React.useState(true);
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
                    <h1>
                        Notifications
                        {read
                            &&
                            <span>3</span>
                        }
                    </h1>
                    <span onClick={mark}>Mark all as read</span>
                </div>
                <div className="card-content">
                    <Notification read={read} />
                </div>
            </div>
        </>
    );
};

export default CardLayout;