import React from 'react';
import chat from '../../assets/img/chat.svg';
import App from '../../components/App/App';
import './Home.scss';


const Home = () => {
    return (
        <div className="container-home">
            <App img={chat} color="white" route="/chat" />
        </div>
    )
}

export default Home;