import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [currentUser, setCurrentUser] = useState(sessionStorage.getItem('user'));

    const logout = () => {
        sessionStorage.removeItem('user');
        window.location.replace('/login')
    }

    const loggedIn = () => {
        console.log(currentUser);
        if (currentUser) {
            return <>
                <li>
                    <Link to="/chat" className="nav-link text-dark">
                        Chat
                    </Link>
                </li>
                <li>
                    <Link onClick={logout} className="btn btn-danger">
                        Logout
                    </Link>
                </li>
            </>
        } else {
            return <>
                <li>
                    <Link to="/login" type="button" className="btn btn-light text-dark me-2">Login</Link>
                </li>

                <li>
                    <Link to="/register" className="btn btn-primary">Sign-up</Link>

                </li>
            </>
        }
    }

    return (
        <header>
            <div className="px-3 py-2 bg-light text-dark">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-dark text-decoration-none">
                            <h2>CHAT APP</h2>
                        </a>

                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li>
                                <Link to="/" className="nav-link text-dark">
                                    Home
                                </Link>
                            </li>

                            {
                                loggedIn()
                            }

                        </ul>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header;