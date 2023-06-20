let output = document.getElementsByClassName("scn")[0];
console.log(output.value)

function dis(num) {
	output.value += num;
}
function calculate(){
	try{
		output.value=eval(output.value);
	}
	catch{
		alert("invalid");
	}
}
function rem(){
	output.value=null;
}

// This second code segment should work but the problem is how to get the button value without using a onclick
/*

let output = document.getElementsByClassName("scn")[0];



let num = document.getElementsByClassName("d");
for (let i = 0;i<num.length;i++){
	num[i].addEventListener("click",disp);
	function disp(num){
	output.value+=num[i].value;
}
}
*/ 

