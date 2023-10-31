class heroi{
	constructor(nome, idade, tipo, ataque){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
	this.ataque = ataque
    }
	atacar(){
    	console.log(this.tipo + " atacou usando " + this.ataque)
    }
}

let heroiUm = new heroi ("Tandera", "102", "guerreira", "espada")
let heroiDois = new heroi ("Zeus", "574", "mago", "magia")
let heroiTres = new heroi ("Perseu", "336", "monge", "artes marciais")
let heroiQuatro = new heroi ("Pandora", "259", "ninja", "shuriken")

heroiUm.atacar()
heroiDois.atacar()
heroiTres.atacar()
heroiQuatro.atacar()