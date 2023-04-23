import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WQ1 = () => {

    return (
        <div>
            {/* Question goes here */}
            <div>
                <p>
                    Bobos coach has five players:
                    Four are named jojo, koko, lolo, and momo. What is the fifth players name?
                    Options
                </p>
            </div>

            {/* Image goes here */}
            <div>

            </div>

            {/* Options goes here */}
            <div>
                <Link to='/defeat'>
                    <button>Nono</button>
                </Link>
                <Link to='/defeat'>
                    <button>Soso</button>
                </Link>
                <Link to='/defeat'>
                    <button>Hoho</button>
                </Link>
                <Link to='/wq2'>
                    <button>Bobo</button>
                </Link>
            </div>
        </div>
    );
}

export default WQ1;
