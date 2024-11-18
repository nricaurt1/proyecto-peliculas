import {useState} from "react"
import {ARREGLO_PELICULAS} from "../mocks/Pelicula-mocks"
import {Pelicula} from "../modelos/Pelicula"

export const PeliListar = () => {
    const [peliculas] = useState<Pelicula[]>(ARREGLO_PELICULAS)

    return (
      <>
          <div className="pt-4 d-flex justify-content-center">
              <div className="col-md-8">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>código</th>
                        <th>nombre de la pélicula</th>
                        <th>protagonista</th>
                        <th>duración</th>
                        <th>imagen</th>
                      </tr>
                    </thead>
                    <tbody>
                      {peliculas.map(pelicula => (
                          <tr key={pelicula.codigo}>
                            <th>{pelicula.codigo}</th>
                            <td>{pelicula.nombre}</td>
                            <td>{pelicula.protagonista}</td>
                            <td>{pelicula.duracion}</td>
                            <td><img src={pelicula.imagen_base64} alt="" className="peliculaImagen" /></td>
                          </tr>
                      ))}
                    </tbody>
                  </table>
              </div>
          </div>
      </>
    )
}
