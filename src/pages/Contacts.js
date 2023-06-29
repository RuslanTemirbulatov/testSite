import React from 'react';

const Contacts = () => {
    return (
        <div>
            <main className="section">
                <div className="container">
                <h1 className="title-1">Контакты</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Moscow, Russia</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+79051234567">+7 (987) 019-38-99</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:ruslan.temirbulatov001@gmail.com">ruslan.temirbulatov001@gmail.com</a></p>
                    </li>
                </ul>
                </div>
            </main>
        </div>
    );
};

export default Contacts;