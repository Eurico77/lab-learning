class Freio {
  constructor(tipo) {
    this.tipo = tipo;
  }

  desligar() {
    console.log('Freio desligado');
  }

  ligar() {
    console.log('Freio ligado');
  }
}

class Motor extends Freio {
  constructor(cilindros, combustivel) {
    super();
    this.cilindros = cilindros;
    this.combustivel = combustivel;
  }

  ligarMotor() {
    console.log('Motor ligado');
  }
}

class Carro extends Motor {
  constructor(modelo, ano, cor) {
    super();
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
  }

  ligarMotor() {
    super.ligarMotor();
  }

  ligarFreio() {
    super.ligar();
  }

  desligarFreio() {
    super.desligar();
  }
}

const carro = new Carro('Gol', '2018', 'Azul');
carro.ligarMotor();
carro.ligarFreio();
carro.desligarFreio();
