import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTime, setDuration, resetSession } from '../../../redux/sessionSlice';
import { db } from '../../../firebase/Firebase'
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

const Q5 = () => {

    const dispatch = useDispatch()
    const session = useSelector((state) => state.session)
    let endTime = 0
    let duration = 0

    const writeSessionToDB = async () => {
        const uid = session.uid
        const querySnapshot = await getDocs(collection(db, "users"))

        let dbData = {}
        let docId = {}

        querySnapshot.forEach((doc) => {
            if(doc.data().uid === uid){
                dbData = doc.data()
                docId = doc.id
            }
        });

        const docRef = doc(db, "users", docId);
        
        const data = {
            uid: uid,
            duration: duration + dbData.duration,
            trials: session.trialCount + dbData.trials,
        }
        await updateDoc(docRef, data);
        dispatch(resetSession())
    }

    const initEndTrial = async () => {
        // calculate end time
        const d = new Date()
        endTime = d.getTime()
        let sessionData = { type: 1, endTime: endTime }

        // calculate duration
        duration = (endTime - session.startTime) / (1000 * 60)
        let durationData = { duration: duration }

        dispatch(setTime(sessionData))
        dispatch(setDuration(durationData))

        await writeSessionToDB()
    }

    return (
        <div>
            {/* Question goes here */}
            <div>
                <p>
                    From the video cited in question-2, What is the name of the statue of dog?
                    Choose the answer as sum of the ASCII values of the letters of dog's name.
                    (Note: choose letters as lower case english alphabets)
                </p>
            </div>

            {/* Image goes here */}
            <div>

            </div>

            {/* Options goes here */}
            <div>
                <Link to='/wq1'>
                    <button>295</button>
                </Link>
                <Link to='/wq1'>
                    <button>299</button>
                </Link>
                <Link to='/won' onClick={() => initEndTrial()}>
                    <button>297</button>
                </Link>
                <Link to='/wq1'>
                    <button>296</button>
                </Link>
            </div>
        </div>
    );
}

export default Q5;