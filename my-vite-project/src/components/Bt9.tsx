import React, { useState } from 'react';

let Bt9 = () => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [submitted, setSubmitted] = useState(false);

    let handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <div>
            <h1>Bt9</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
            {submitted && (
                <div>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                </div>
            )}
        </div>
    );
};

export default Bt9;
