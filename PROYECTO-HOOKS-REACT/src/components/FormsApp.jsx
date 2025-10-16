import { useState } from "react";

export const FormsApp = () => {

    const [formState, setFormState] = useState({
        username: '',
        nickname: '',
        email: '',
        password: ''
    })

    const { username,nickname, email, password } = formState;

    const onInputChange = ( {target} ) => {
        const { name, value } = target;
        console.log({name, value});
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name='username'
                        value={username}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="nickname" className="form-label">
                        Nickname
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="nickname"
                        name='nickname'
                        value={nickname}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name='email'
                        value={email}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name='password'
                        value={password}
                        onChange={onInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
};
