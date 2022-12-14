import React from "react";

import mark from "../assets/images/avatar-mark-webber.webp";
import angela from "../assets/images/avatar-angela-gray.webp";
import jacob from "../assets/images/avatar-jacob-thompson.webp";
import rizky from "../assets/images/avatar-rizky-hasanuddin.webp";
import kimberly from "../assets/images/avatar-kimberly-smith.webp";
import nathan from "../assets/images/avatar-nathan-peterson.webp";
import anna from "../assets/images/avatar-anna-kim.webp";
import chess from "../assets/images/image-chess.webp";

const Notification = ({ read }) => {
    const notifications = [
        {
            name: 'Mark Webber',
            profileImg: mark,
            action: 'reacted to your recent post',
            time: '1m ago',
            extra: 'My first tournament today!',
            status: 'un-read',
            rightImage: null,
        },
        {
            name: 'Angela Gray',
            profileImg: angela,
            action: 'followed you',
            time: '5m ago',
            extra: null,
            status: 'un-read',
            rightImage: null,
        },
        {
            name: 'Jacob Thompson',
            profileImg: jacob,
            action: 'has joined your group',
            time: '1 day ago',
            link: 'Chess Club',
            extra: null,
            status: 'un-read',
            rightImage: null,

        },
        {
            name: 'Rizky Hasanuddin',
            profileImg: rizky,
            action: 'sent you a private message',
            time: '5 days ago',
            message: `Hello, thanks for setting up the Chess Club. I've been a member for weeks now and I'm already having lots of fun and improving my game.`,
            extra: null,
            status: null,
            rightImage: null,
        },
        {
            name: 'Kimberly Smith',
            profileImg: kimberly,
            action: 'commented on your picture',
            time: '1 week ago',
            extra: null,
            status: null,
            rightImage: chess,
        },
        {
            name: 'Nathan Peterson',
            profileImg: nathan,
            action: 'reacted to your recentt post',
            time: '2 weeks ago',
            extra: '5 end-game startegies to increase your win rate',
            status: null,
            rightImage: null,
        },
        {
            name: 'Anna Kim',
            profileImg: anna,
            action: 'left the group',
            time: '2 weeks ago',
            link: 'Chess Club',
            extra: null,
            status: null,
            rightImage: null,
        },
    ];

    return (
        <>
            <div className="notification-container">
                <div className="notification-content">
                    {/* Single notification */}

                    {
                        notifications.map((notification) => (

                            <div className={`notification ${notification.status && read === false ? "un-read" : null}`} key={`notification-${notification.name}`}>
                                <div className="notification-left-image">
                                    <img src={notification.profileImg} alt={notification.name} />
                                </div>
                                <div className="notification-text">
                                    <p><b className="name">{notification.name} </b>
                                        {notification.action}

                                        {notification.extra && <b className="extra"> {notification.extra}</b>}

                                        {notification.link && <b className="link"> {notification.link}</b>}
                                        {notification.status
                                            &&
                                            read === false
                                            &&
                                            <span className="notification-icon"></span>
                                        }
                                        <br />
                                        {notification.time}
                                    </p>
                                    {
                                        notification.message
                                        &&
                                        <div className="notification-message">
                                            {notification.message}
                                        </div>
                                    }
                                </div>
                                {
                                    notification.rightImage
                                    &&
                                    <div className="notification-right-image">
                                        <img src={notification.rightImage} alt={notification.name} />
                                    </div>
                                }
                            </div>

                        ))}
                    {/* Single notification */}
                </div>
            </div>
        </>
    );
};

export default Notification;