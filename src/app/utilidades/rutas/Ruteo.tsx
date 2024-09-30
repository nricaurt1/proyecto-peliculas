import { Route, Routes } from "react-route-dom"
import { Inicio } from "../../componentes/contenedor/Inicio"

export const Ruteo = () => {
	return (
		<Routes>
			<Route path="/" element={<Inicio/>} />
		</Routes>
	)
}
