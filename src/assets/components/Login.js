import React, {useState, useEffect} from 'react';

function Login() {

    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [loading, setLoading] = useState(false);

    const submitLoginDetails = () => {

        let formData = {};

    };

    useEffect(() => {

    }, []);
    
    return (
        <>
            <div className='auth container m-auto'>
                <div className='login card'>
                    <div className='form-input'>
                        <div className='username group'>
                            <label>Username</label>
                            <input 
                                type="text" 
                                placeholder='Enter username'
                                className="form-input px-4 py-3"
                                value={username}
                                onChange={ (e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className='email'>
                            <label>Email</label>
                            <input 
                                type="email"
                                placeholder='Enter email address'
                                className="form-input px-4 py-3"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <button 
                            className="rounded bg-amber-400 p-2"
                            onClick={submitLoginDetails}
                        >
                            Login
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login