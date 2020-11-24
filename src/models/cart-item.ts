// Lista dos produtos do carrinho de compras
import { ProdutoDTO } from "./produto.dto";

export interface CartItem {
    quantidade: number,
    produto: ProdutoDTO
}