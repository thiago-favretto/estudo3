let raio = prompt('Insira o raio do circulo');
raio=parseFloat(raio);
const area=Math.PI*Math.pow(raio,2);
console.log('A area do circulo é:', area);
alert("A area do circulo é:"+area.toFixed(2));