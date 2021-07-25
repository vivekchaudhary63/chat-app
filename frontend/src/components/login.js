import { useState } from 'react';
import Swal from 'sweetalert2';
import app_config from '../config';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const url = app_config.api_url;

    const submitForm = () => {

        console.log(email, password);

        fetch(url + '/user/getbyemail/' + email)
            .then(res => res.json())
            .then((data) => {
                console.log(data);

                if (data) {
                    if (data.password == password) {
                        console.log('login success');

                        Swal.fire({
                            icon: 'success',
                            title: 'Login Success'
                        })

                    } else {
                        console.log('password incorrect');
                        Swal.fire({
                            icon: 'error',
                            title: 'Login Failed',
                            text: 'Password Incorrect'
                        })
                    }
                } else {
                    console.log('user not found');
                    Swal.fire({
                        icon: 'error',
                        title: 'Login Failed',
                        text: 'User Not Found'
                    })
                }

            })

    }

    return (
        <div className="my-card">
            <h3 className="title">Login Here</h3>
            <hr />

            <label htmlFor="">Email</label>
            <input className="form-control" autoFocus type="text" onChange={(e) => { setEmail(e.target.value) }} />

            <label htmlFor="">Password</label>
            <input className="form-control" type="password" onChange={(e) => { setPassword(e.target.value) }} />

            <button className="btn btn-outline-success mt-5" onClick={submitForm}>Login</button>


        </div>
    )
}

export default Login;