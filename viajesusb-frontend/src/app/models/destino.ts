import { TipoDestino } from "./tipo-destino";

export class Destino {
    idDest!: number;
    codigo!: string;
    nombre!: string;
    descripcion!: string;
    aire!: string;
    mar!: string;
    tierra!: string;
    fechaCreacion!: Date;
    fechaModificacion?: Date;
    usuCreador!: string;
    usuModificador?: string;
    estado!: string;
    tipoDestino!: TipoDestino;
    tipoDestinoCodigo!: string;
} 