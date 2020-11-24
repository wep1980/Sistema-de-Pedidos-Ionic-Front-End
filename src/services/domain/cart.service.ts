// O carrinho e um domain so da aplicação, ele não existe no backend
import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';
import { Cart } from '../../models/cart';
import { ProdutoDTO } from '../../models/produto.dto';

@Injectable()
export class CartService {

    constructor(public storage: StorageService) {
    }

    /**
     * Metodo que cria ou limpa o carrinho do storage
     */
    createOrClearCart() : Cart {
        let cart: Cart = {items: []};
        this.storage.setCart(cart);
        return cart;
    }

    /**
     * Metodo que verifica se o carrinho ja existe, senão existir e criado um novo
     * Pega o carrinho que esta no localStorage
     */
    getCart() : Cart {
        let cart: Cart = this.storage.getCart();
        if (cart == null) {
            cart = this.createOrClearCart();
        }
        return cart;
    }


    /**
     * Método que adiciona um produto no storage e retorna o carrinho atualizado
     * @param produto 
     */
    addProduto(produto: ProdutoDTO) : Cart {
        let cart = this.getCart(); // Pega o carrinho que esta no localStorage

        // Verificando se o produto ja existe. findIndex() -> função que encontra a posição de um elemento(produtos que estão na lista do carrinho) e compara se o id do produto que veio como argumento exite, se o produto existir vai ser retornada a posição dele. 
        let position = cart.items.findIndex(x => x.produto.id == produto.id); 

        // Se nao existir vai ser retornada a posição menos 1 ( -1 )
        if (position == -1) {
            cart.items.push({quantidade: 1, produto: produto}); // Adiciona o elemnto na lista do carrinho
        }
        this.storage.setCart(cart); // Atualiza o carrinho
        return cart;
    }


    /**
     * metodo que remove o produto do carrinho
     * @param produto 
     */
    removeProduto(produto: ProdutoDTO) : Cart {
        let cart = this.getCart();
        let position = cart.items.findIndex(x => x.produto.id == produto.id);
        if (position != -1) {
            // splice(position, 1) -> remove. recebe a posição e o 1 indica uma remoção
            cart.items.splice(position, 1);
        }
        this.storage.setCart(cart);
        return cart;
    }


    /**
     * Incrementa a quantidade de um produto no carrinho
     * @param produto 
     */
    increaseQuantity(produto: ProdutoDTO) : Cart {
        let cart = this.getCart();
        let position = cart.items.findIndex(x => x.produto.id == produto.id);
        if (position != -1) {
            cart.items[position].quantidade++;
        }
        this.storage.setCart(cart);
        return cart;
    }


    /**
     * Diminui a quantidade de um produto no carrinho
     * @param produto 
     */
    decreaseQuantity(produto: ProdutoDTO) : Cart {
        let cart = this.getCart();
        let position = cart.items.findIndex(x => x.produto.id == produto.id);
        if (position != -1) {
            cart.items[position].quantidade--;
            if (cart.items[position].quantidade < 1) { // se a quantidade for menor que 1 o item e excluido do carrinho
                cart = this.removeProduto(produto);
            }
        }
        this.storage.setCart(cart);
        return cart;
    }


    /**
     * Mostra o valor total do carrinho
     */
    total() : number {
        let cart = this.getCart();
        let soma = 0;
        for (var i=0; i<cart.items.length; i++) {
            soma += cart.items[i].produto.preco * cart.items[i].quantidade;
        }
        return soma;
    }
}