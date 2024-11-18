export class Pelicula {
    public codigo: number
    public duracion: string
    public nombre: string
    public protagonista: string
    public imagen_base64: string

    constructor(
        codigo: number,
        nombre: string,
        protagonista: string,
        duracion: string,
        imagen_base64: string
    ) {
        this.codigo = codigo
        this.nombre = nombre
        this.protagonista = protagonista
        this.duracion = duracion
        this.imagen_base64 = imagen_base64
    }
}
