import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import AuthenticationService  from './components/todo/AuthenticationService';
class Header extends Component{
    render(){
        const  isAuthenticated = AuthenticationService.isAuthenticated();
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-light nav-bg">
                    <div className="container-fluid">
                        <div>
                            <Link to="https://www.mrisoftware.com/" className="navbar-brand">
                                <img  className="logo" width="50" height="40"
                                 src="https://16yl983erinlezhvg1hhvxfl-wpengine.netdna-ssl.com/wp-content/themes/mri-moove/assets/images/global/mri-logo.svg" 
                                    alt="MRI Software" />
                            </Link>
                        </div>
                        <ul className="navbar-nav">
                            {isAuthenticated && <li className="nav-item"><Link to="/home/sapan.desai" className="nav-link">Home</Link></li>}
                            {isAuthenticated && <li className="nav-item"><Link to="/dashboard" className="nav-link">Dashboard</Link></li>}
                            {isAuthenticated && <li className="nav-item"><Link to="/todos" className="nav-link">Todos</Link></li>}
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            {!isAuthenticated && <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>}
                            {isAuthenticated && <li className="nav-item"><Link to="/logout" className="nav-link"
                            onClick={AuthenticationService.logout}>Logout</Link></li>}
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default withRouter(Header);