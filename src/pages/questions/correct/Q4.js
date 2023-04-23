import React from 'react';
import { Link } from 'react-router-dom';

const Q4 = () => {
    return (
        <div>
            {/* Question goes here */}
            <div>
                <p>
                    The sum of the present ages of a father and his son is 60 years. 
                    Six years ago, father's age was five times the age of the son. 
                    After 6 years, son's age will be:
                </p>
            </div>

            {/* Image goes here */}
            <div>

            </div>

            {/* Options goes here */}
            <div>
                <Link to='/wq1'>
                    <button>12</button>
                </Link>
                <Link to='/wq1'>
                    <button>14</button>
                </Link>
                <Link to='/wq1'>
                    <button>18</button>
                </Link>
                <Link to='/q5'>
                    <button>20</button>
                </Link>
            </div>
        </div>
    );
}

export default Q4;