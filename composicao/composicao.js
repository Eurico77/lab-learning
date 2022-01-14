class Freio {
  freiar() {
    this.velocidade = 20;
    console.log('Freio aplicado');
  }
}

class Motor {
  ligar() {
    console.log('Motor ligado');
  }
}

class Carro {

  #composing(class1, class2) {
  }


  ligar() {
    this.motor.ligar();
    this.freio.freiar();
  }
}
