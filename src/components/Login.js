import React, {useState} from 'react';

function Login(props) {

    const [username, setUsername] = useState(``);
    const [email, setEmail] = useState(``);
    
    return (
        <>
            <div className='auth container m-auto'>
                <div className='login card w-full max-w-xs m-auto'>
                    <div className=' bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                        <div className='logo-section mb-4 text-center'>
                            <p className='text-2xl'>Funk Harmony</p>
                        </div>

                        <div className='username group mb-4'>
                            <label 
                                className="block text-gray-700 text-sm mb-2" 
                                htmlFor="username"
                            >
                                Username
                            </label>

                            <input 
                                id="username"
                                type="text" 
                                placeholder='Enter username'
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={username}
                                onChange={ (e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className='email'>
                            <label 
                                className="block text-gray-700 text-sm mb-2" 
                                htmlFor="email"
                            >
                                Email (Optional)
                            </label>

                            <input 
                                id="email"
                                type="email"
                                placeholder='Enter email address'
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>


                        <div className="flex items-center justify-center mt-8">
                            <button 
                                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 w100 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={props.submitEvent}
                            >
                                Start Survey
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login