import React from 'react';
import { Link } from 'react-router-dom';

const WQ3 = () => {
    return (
        <div>
            {/* Question goes here */}
            <div>
                <p>
                    Which cities of India got it's first official Apple store?
                </p>
            </div>

            {/* Image goes here */}
            <div>
                
            </div>

            {/* Options goes here */}
            <div>
                <Link to='/defeat'>
                    <button>Delhi</button>
                </Link>
                <Link to='/defeat'>
                    <button>Hyderabad</button>
                </Link>
                <Link to='/defeat'>
                    <button>Banglore</button>
                </Link>
                <Link to='/exit'>
                    <button>Mumbai</button>
                </Link>
            </div>
        </div>
    );
}

export default WQ3;
