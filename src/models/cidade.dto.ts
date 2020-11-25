import { EstadoDTO } from "./estado.dto";

export interface CidadeDTO {
    id : string;
    nome : string;

    estado? : EstadoDTO; // Campo opicional , alem do endereço vir com a cidade associada a cidade tambem vira com seus estados associados
}