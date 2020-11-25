/**
 * Estrutura que precisa ser montada para armazenar os dados de um pedido
 * 
 * {
    "cliente" : {"id" : 1},  ----------------  ESSA CLASSE REFERENCIA ESSA PARTE DA ESTRUTURA
    "enderecoDeEntrega" : {"id" : 1},
    "pagamento" : {
    "numeroDeParcelas" : 10,
    "@type": "pagamentoComCartao"
    },
    "itens" : [
    {
    "quantidade" : 2,
    "produto" : {"id" : 3}
    },
    {
    "quantidade" : 1,
    "produto" : {"id" : 1}
    }
    ]
    }
 */
export interface RefDTO {
    id : string;
}