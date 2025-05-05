export class Vivienda{
    id?:number;
    nombre:string;
    direccion:string;
    fechaRegistro:string;
    constructor(nombre: string, direccion: string ){
        this.nombre = nombre;
        this.direccion = direccion;
        let fechaSinFormato = new Date()
        this.fechaRegistro = fechaSinFormato.toISOString().split("T")[0]
    }
}