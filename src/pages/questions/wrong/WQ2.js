import React from 'react';
import wq2_image from '../../../assets/images/wq2.jpeg'
import { Link } from 'react-router-dom';

const WQ2 = () => {
    return (
        <div>
            {/* Question goes here */}
            <div>
                <p>
                    Identify the king depicted in below image.
                    (Hint: Founder of Marata Empire)
                </p>
            </div>

            {/* Image goes here */}
            <div>
                <img src={wq2_image} alt='image is not available' />
            </div>

            {/* Question goes here */}
            <div>
                <p>Who is the son above king in given options.</p>
            </div>

            {/* Options goes here */}
            <div>
                <Link to='/defeat'>
                    <button>Thanaji</button>
                </Link>
                <Link to='/wq3'>
                    <button>Sambhaji</button>
                </Link>
                <Link to='/defeat'>
                    <button>Shivaji</button>
                </Link>
                <Link to='/defeat'>
                    <button>Maharana Pratap</button>
                </Link>
            </div>
        </div>
    );
}

export default WQ2;
