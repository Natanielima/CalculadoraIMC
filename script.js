let rangeInput = document.getElementById("range-peso");
rangeInput.addEventListener("input", function () {
	document.getElementById('caixa-peso').value=rangeInput.value;
});

let rangeInput2 = document.getElementById("caixa-peso");
rangeInput2.addEventListener("input", function () {
	document.getElementById('range-peso').value=rangeInput2.value;
});

let rangeInput3 = document.getElementById("range-altura");
rangeInput3.addEventListener("input", function () {
	document.getElementById('caixa-altura').value=rangeInput3.value;
});

let rangeInput4 = document.getElementById("caixa-altura");
rangeInput4.addEventListener("input", function () {
	document.getElementById('range-altura').value=rangeInput4.value;
});

let form = document.getElementById("formulario");
let ressultado = document.getElementById("resultado");

function resultadoFormulario(event) {
	
	event.preventDefault();

	let inputPeso = document.getElementById("caixa-peso").value;
	let inputAltura = document.getElementById("caixa-altura").value;

	let imcTotal = (inputPeso/(inputAltura*inputAltura)).toFixed(2);

	if (imcTotal >= 0.00 && imcTotal <= 18.49){
    resultado.innerHTML = swal({
 							 title: `Seu IMC é de:  ${imcTotal}  - Isso significa que você é muito magro.`,
 							 button: "Você está precisando se alimentar",
 							 closeOnClickOutside: false,
							});
  }
  // Se o IMC do usuário estiver entre 18,5 e 24,9 execute essa linha:
   else if (imcTotal >= 18.50 && imcTotal <= 24.99) {
    resultado.innerHTML = swal({
 							 title: `Seu IMC é de: ${imcTotal} - Seu IMC é considerado "Normal".`,
 							 button: "Você está no caminho certo, parabéns!",
 							 closeOnClickOutside: false,
							});

  }
  // Se o IMC do usuário estiver entre 25,00 e 29,9 execute essa linha:
   else if (imcTotal >= 25.00 && imcTotal <= 29.99) {
    resultado.innerHTML = swal({
 							 title: `Seu IMC é de: <strong> ${imcTotal}  - Isso significa que sua classificação é "Sobrepeso".`,
 							 button: "Começa a se cuidar ai",
 							 closeOnClickOutside: false,
							});

  }
  // Se o IMC do usuário estiver entre 30,00 e 39,9 execute essa linha:
   else if (imcTotal >= 30.00 && imcTotal <= 39.99) {
    resultado.innerHTML = swal({
 							 title: `Seu IMC é de: ${imcTotal} - Você é considerado "Obeso".`,
 							 button: "Ih rapaz, bora cuidar na alimentação?",
 							 closeOnClickOutside: false,
							});
  } 
  // Se o IMC do usuário for maior que 40,00 execute essa linha:
   else if (imcTotal >= 40.00) {
    resultado.innerHTML = swal({
 							 title: `Seu IMC é de:  ${imcTotal}  - Sua classificação é "Obesidade grave", em um terceiro grau de obesidade.`,
 							 button: "Você precisa de ajuda?",
 							 closeOnClickOutside: false,
							});
  }
  // Caso o IMC do usuário não seja nenhum apresentado anteriormente (normalmente costuma ser zero), execute essa linha:
   else {
    resultado.innerHTML = swal({
 							 title: ` Seu IMC é de: 0  - Algo de errado não está certo...`,
 							 button: "Por favor, revise seus dados e entre novamente",
 							 closeOnClickOutside: false,
							});


    swal()
  }
} 

form.addEventListener('submit', resultadoFormulario)