import React from 'react';
import { Link } from 'react-router-dom';

const Q2 = () => {
    return (
        <div>
            {/* Question goes here */}
            <div>
                <p>
                    <b>Watch the below video carefully</b> to answer the question.
                </p>
            </div>

            {/* Image goes here */}
            <div>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/07d2dXHYb94" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>
            </div>

            {/* Question goes here */}
            <div>
                <p>What is the color of the shirt the last person helped by dog was wearing?</p>
            </div>

            {/* Options goes here */}
            <div>
                <Link to='/wq1'>
                    <button>Orange</button>
                </Link>
                <Link to='/wq1'>
                    <button>White</button>
                </Link>
                <Link to='/wq1'>
                    <button>Brown</button>
                </Link>
                <Link to='/q3'>
                    <button>Yellow</button>
                </Link>
            </div>
        </div>
    );
}

export default Q2;