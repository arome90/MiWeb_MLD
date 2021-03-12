function pressButton(){
	var titulo = document.getElementById("titulo");
	titulo.innerHTML = "<strong>Adios mundo</strong>";
	titulo.style.color = "blue";
}

function checkForm(){
	var titulo = document.getElementById("email");
	var feedback = document.getElementById("feedback");
	if(titulo.value.includes("@")){
		feedback.innerHTML = ""
	}
	else {
		feedback.innerHTML = "Un email debe llevar @"
		feedback.style.color = "red";
	};

	for (var i = 0; i<5;i++){

	}

	var cont =0;
	while (cont <5){
		console.log(cont);
		cont++;
	}
}