const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const media = numeros.reduce((acc, num) => {

  return {
    total: acc.total + num,
    qtd: ++acc.qtd,
    media: acc.total / acc.qtd
  }

}, { total: 0, qtd: 0, media: 0 });

console.log(media);