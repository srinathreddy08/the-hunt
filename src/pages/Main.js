import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementTrial, resetSession } from '../redux/sessionSlice';
import { setTime } from '../redux/sessionSlice';
import { Link } from 'react-router-dom';

const Main = () => {

    const dispatch = useDispatch()

    const initDispatch = () => {
        dispatch(resetSession())
        dispatch(incrementTrial())
        const d = new Date()
        let time = d.getTime()
        let sessionData = { type: 0, startTime: time }
        dispatch(setTime(sessionData))
    }

    return (
        <div>
            <Link to='/q1' onClick={() => initDispatch()}>
                <button className='btn btn-primary'>
                    Let's Start
                </button>
            </Link>
        </div>
    );
}

export default Main;