import { Formik } from 'formik';
import app_config from '../config';

const Register = () => {

    const url = app_config.api_url;

    const registerForm = {
        fullname: '',
        email: '',
        password: '',
        age: 0,
    }

    const submitForm = (values) => {
        console.log(values);

        const reqOptions = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
        }

        fetch(url + '/user/add', reqOptions)
            .then((res) => { res.json() })
            .then((data) => { console.log(data) });

    }


    return (
        <div className="col-md-10">
            <div class="row" style={{ marginTop: '10rem' }}>
                <div className="col-md-6"></div>
                <div className="col-md-6">

                    <Formik initialValues={registerForm} onSubmit={submitForm}>
                        {({
                            handleChange,
                            handleSubmit
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <h2 className="text-center">SIGNUP FORM</h2>
                                <hr />

                                <label>Full Name</label>
                                <input className="form-control" name="fullname" onChange={handleChange} />

                                <label>Email</label>
                                <input type="email" className="form-control" name="email" onChange={handleChange} />

                                <label>Password</label>
                                <input type="password" className="form-control" name="password" onChange={handleChange} />

                                <label>Age</label>
                                <input type="number" className="form-control" name="age" onChange={handleChange} />

                                <button type="submit" className="btn btn-primary w-100 mt-5">Submit</button>

                            </form>
                        )}
                    </Formik>

                </div>
            </div>
        </div>
    )
}

export default Register;