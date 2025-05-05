export class Vivienda{
    id?:number;
    nombre:string;
    direccion:string;
    fechaRegistro?:string;
    montoAcumulado:number;
    constructor(nombre: string, direccion: string, montoAcumulado: number){
        this.nombre = nombre;
        this.direccion = direccion;
        let fechaSinFormato = new Date()
        this.fechaRegistro = fechaSinFormato.toISOString().split("T")[0]
        this.montoAcumulado = montoAcumulado;
    }
}