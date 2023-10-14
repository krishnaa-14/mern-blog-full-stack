import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className = "header">
            <Link to = "/">
                <div className = "logo">
                    My Blog
                </div>
            </Link>

            <div className = "nav-items">
                <Link to = "/login">
                    <div className = "nav-item ">
                        SignIn
                    </div>
                </Link>
                <Link to = "/register">
                    <div className = "nav-item  ">
                        SignUp
                    </div>
                </Link>
            </div>
      </div>
    )
}

export default NavBar;