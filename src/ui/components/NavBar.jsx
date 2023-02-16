import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();

    const onLogout = () =>{
        navigate("/login", {
            replace: true,
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/home">
                logo
            </Link>
        <container>
        <div className="navbar-collapse">
                <div className="navbar-nav ">
                    <NavLink className={({isActive}) => `nav-item nav-link ${isActive ? "active" : ""}`} to="/home">
                        Home
                    </NavLink>
                    <NavLink className= {({isActive}) => `nav-item nav-link ${isActive ? "active" : ""} ms-auto`} to="/menu">
                        Nuestros menus
                    </NavLink>
                    <NavLink className={({isActive}) => `nav-item nav-link ${isActive ? "active" : ""}`} to="">
                        Pedidos
                    </NavLink>
                    <NavLink className={({isActive}) => `nav-item nav-link ${isActive ? "active" : ""}`} to="">
                        Sobre nosotros
                    </NavLink>
                </div>
            </div>
    
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <button onClick={onLogout} className="nav-item nav-link btn">logout</button>
                </ul>
            </div>
        </container>
            
        </nav>
    )
}