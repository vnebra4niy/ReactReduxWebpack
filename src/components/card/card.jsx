import { useNavigate } from 'react-router-dom';
import React from 'react';

const Card = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate(-1)} className="back-btn">BACK</button>
            card repo
        </div>
    );
};

export default Card;