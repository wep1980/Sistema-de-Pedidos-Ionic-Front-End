// A interface e definada para esse tipo classes DTO
export interface CategoriaDTO {

    /* O iD e definido como String para deixar o projeto mais flexisivel. 
     * Exp: o uso de um banco de dados onde o iD e String(MONGO DB) */
    id : string; 
    
    nome : string;
}