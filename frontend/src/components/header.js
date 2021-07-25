import { Link } from "react-router-dom";

const Header = () => {


    return (
        <header>
            <div class="px-3 py-2 bg-dark text-white">
                <div class="container">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">

                        </a>

                        <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li>
                                <a href="#" class="nav-link text-secondary">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link text-white">
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link text-white">
                                    Orders
                                </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link text-white">

                                    Products
                                </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link text-white">

                                    Customers
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="px-3 py-2 border-bottom mb-3">
                <div class="container d-flex flex-wrap justify-content-center">
                    <form class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
                        <input type="search" class="form-control" placeholder="Search..." aria-label="Search" />
                    </form>

                    <div class="text-end">
                        <button type="button" class="btn btn-light text-dark me-2">Login</button>
                        <a component={Link} to="/register" class="btn btn-primary">Sign-up</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;