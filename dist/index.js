"use strict";
// 1. Crie uma classe abstrata chamada Ingresso que possui um valor
// em reais e um método imprimeValor()
// a. crie uma classe Normal, que herda Ingresso..
// b. crie uma classe VIP, que herda Ingresso e possui um valor
// adicional. Altere o método imprimeValor para mostrar o valor
// do ingresso somado com o adicional.
// c. crie uma classe Camarote, que herda ingresso e possui um
// valor adicional. Altere o método imprimeValor para mostrar o
// valor do ingresso somado com o adicional.
class Ingresso {
    constructor(valor) {
        this.valor = valor;
    }
}
class Normal extends Ingresso {
    imprimeValor() {
        console.log(`Valor do ingresso normal: R$ ${this.valor.toFixed(2)}`);
    }
}
class VIP extends Ingresso {
    constructor(valor, valorAdicional) {
        super(valor);
        this.valorAdicional = valorAdicional;
    }
    imprimeValor() {
        const valorTotal = this.valor + this.valorAdicional;
        console.log(`Valor do ingresso para a área VIP: R$ ${valorTotal.toFixed(2)}`);
    }
}
class Camarote extends Ingresso {
    constructor(valor, valorAdicional) {
        super(valor);
        this.valorAdicional = valorAdicional;
    }
    imprimeValor() {
        const valorTotal = this.valor + this.valorAdicional;
        console.log(`Valor do ingresso para o Camarote: R$ ${valorTotal.toFixed(2)}`);
    }
}
const ingressoNormal = new Normal(75);
ingressoNormal.imprimeValor();
const ingressoVIP = new VIP(75, 20);
ingressoVIP.imprimeValor();
const ingressoCamarote = new Camarote(75, 50);
ingressoCamarote.imprimeValor();
// 2. Crie a classe Imovel, que possui um endereço e um preço.
// a. crie uma classe Novo, que herda Imovel e possui um adicional
// no preço. Crie métodos de acesso e impressão deste valor
// adicional.
// b. crie uma classe Velho, que herda Imovel e possui um desconto
// no preço. Crie métodos de acesso e impressão para este
// desconto.
class Imovel {
    constructor(endereco, preco) {
        this.endereco = endereco;
        this.preco = preco;
    }
}
class Novo extends Imovel {
    constructor(endereco, preco, precoAdicional) {
        super(endereco, preco);
        this.precoAdicional = precoAdicional;
    }
    imprimeValorAdicional() {
        console.log(`Valor adicional do imóvel: R$ ${this.precoAdicional.toFixed(2)}`);
    }
}
class Velho extends Imovel {
    constructor(endereco, preco, precoDesconto) {
        super(endereco, preco);
        this.precoDesconto = precoDesconto;
    }
    imprimeValorDesconto() {
        console.log(`Valor descontado do imóvel: R$ ${this.precoDesconto.toFixed(2)}`);
    }
}
const imovelNovo = new Novo("Rua xv de novembro", 200000, 10000);
console.log(`Endereço do imóvel: ${imovelNovo.endereco}`);
console.log(`Preço normal do imóvel: R$ ${imovelNovo.preco}`);
imovelNovo.imprimeValorAdicional();
console.log(`Preço do imóvel com o adiocional: R$ ${imovelNovo.preco + imovelNovo.precoAdicional}`);
const imovelVelho = new Velho("Rua vii de setembro", 152000, 5000);
console.log(`Endereço do imóvel: R$ ${imovelVelho.endereco}`);
console.log(`Preço normal do imovel: R$ ${imovelVelho.preco}`);
imovelVelho.imprimeValorDesconto();
console.log(`Preço do imovel com o desconto: R$ ${imovelVelho.preco - imovelVelho.precoDesconto}`);
// 3. Dado o seguinte diagrama:
// Identifique os atributos e comportamentos que são comuns entre os
// 3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
// comportamento diferente para cada animal.
class Animal {
    constructor(cor, sexo, idade) {
        this.cor = cor;
        this.sexo = sexo;
        this.idade = idade;
    }
}
class Cachorro extends Animal {
    constructor(cor, sexo, idade, raca) {
        super(cor, sexo, idade);
        this.raca = raca;
    }
    latir() {
        console.log("au au");
    }
}
class Gato extends Animal {
    constructor(cor, sexo, idade, raca) {
        super(cor, sexo, idade);
        this.raca = raca;
    }
    miar() {
        console.log("miau");
    }
}
class Cavalo extends Animal {
    constructor(cor, sexo, idade, raca) {
        super(cor, sexo, idade);
        this.raca = raca;
    }
    galopar() {
        console.log("galopando");
    }
}
const cachorro = new Cachorro("marrom", "macho", 5, "Labrador");
console.log(cachorro);
cachorro.latir();
const gato = new Gato("preto", "femea", 1, "desconhecida");
gato.miar();
const cavalo = new Cavalo("tordilho", "macho", 10, "Crioulo");
cavalo.galopar();
