import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import loading from '../assets/images/loading.gif';
import { useDispatch } from 'react-redux';
import { setAdmin, setEmail, setUid } from '../redux/sessionSlice'

const Login = (params) => {

    const [email, setStateEmail] = useState('');
    const [password, setStatePassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const logInWithEmailAndPassword = async () => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            await dispatch(setEmail({email: res.user.email}))
            await dispatch(setUid({uid: res.user.uid}))
            return 1;
        } catch (err) {
            console.error(err);
            alert(err.message);
            return 0;
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault()
        if(email !== '' && password.length >= 6){
            const status = await logInWithEmailAndPassword();
            if (status) {
                params.initDispatch()
                if(email==='admin@gmail.com'){
                    dispatch(setAdmin())
                }
            }
        }
        else{
            alert('enter all requied fields')
        }
    }

    return (
        <div>
            {isLoading
                ?
                <div>
                    <img className='mx-auto d-block' src={loading} alt='loading...' />
                </div>
                :
                <div>
                    <form>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                value={email}
                                onChange={(e) => setStateEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setStatePassword(e.target.value)}
                                required
                            />
                        </div>
                        <button onClick={handleLogin}>login</button>
                    </form>
                    <Link to='/signup'>
                        <button className='btn btn-primary'>Sign Up</button>
                    </Link>
                </div>
            }
        </div>
    );
}

export default Login;