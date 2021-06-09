import { TipoIdentificacion } from "./tipo-identificacion";

export class Cliente {
    idClie!: number;
    numeroIdentificacion!: string;
    primerApellido!: string;
    segundoApellido!: string;
    nombre!: string;
    telefono1!: string;
    telefono2!: string;
    correo!: string;
    sexo!: string;
    fechaNacimiento!: Date;
    fechaCreacion!: Date;
    fechaModificacion!: Date;
    usuCreador!: string;
    usuModificador!: string;
    estado!: string;
    tipoIdentificacion!: TipoIdentificacion;

}