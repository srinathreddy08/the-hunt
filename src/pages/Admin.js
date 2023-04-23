import React, { useEffect, useState } from 'react';
import { db } from '../firebase/Firebase'
import { collection, getDocs } from 'firebase/firestore';
import loading from '../assets/images/loading.gif'
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Admin = () => {

    const [data, setData] = useState([])
    const [users, loading, err] = useCollectionData(
        collection(db, "users")
    );

    return (
        <div>
            {
                loading
                    ?
                    <div>
                        <img className='mx-auto d-block' src={loading} alt='loading...' />
                    </div>
                    :
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Trials</th>
                                <th scope="col">Total Duration Spent (in minutes)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((doc, key) => (
                                    <tr>
                                        <td>{key + 1}</td>
                                        <td>{doc.firstname}</td>
                                        <td>{doc.trials}</td>
                                        <td>{doc.duration}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
            }
        </div>
    );
}

export default Admin;
