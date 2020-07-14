var student={
	name:""
	type:"student"
}
document.addEventListener('DomContentLoaded',ContentLoaded);
function CountentLoaded(event){
	document.getElementById('name').addEventListener("keyup",keyup);
}
function keyup(event){
	CalculateNumricOutput();
}
function CalculateNumricOutput(){
	student.name=document.getElementById('name').value;
	var totalNameValue=0;
	for(var i=0;i<student.name.length;i++)
	{
	totalNameValue+=student.name.charAt(i);
	}
var output="Total Numirical Value of persaon name is"+totalNameValue;
document.getElementById('output').innerText=output;
}
