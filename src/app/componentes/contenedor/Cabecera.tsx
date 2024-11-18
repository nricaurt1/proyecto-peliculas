import { NavLink } from "react-router-dom"
import logo from "../../../assets/img/logoReact.png"

export const Cabecera = () => {
	return (
		<>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink className="nav-item nav-link active" aria-current="page" to="/">Inicio</NavLink>
                                <NavLink className="nav-item nav-link active" aria-current="page" to="/acer">Acerca</NavLink>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toogle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Películas</a>
                                    <ul className="dropdown-menu">
                                        <NavLink className="nav-item nav-link dropdown-item" to="/pelicre">Crear película</NavLink>
                                        <NavLink className="nav-item nav-link dropdown-item" to="/pelilis">Listar película</NavLink>
                                        <NavLink className="nav-item nav-link dropdown-item" to="/peliact/:codigo">Actualizar película</NavLink>
                                        <NavLink className="nav-item nav-link dropdown-item" to="/peliadm">Admin</NavLink>
                                    </ul>
                                </li>
                            </div>
                        </div>
                    </div>
                </nav>
            </nav>
		</>
	)
}
