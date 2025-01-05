function updateCard(){
	document.getElementById("schoolNameVal").value= document.getElementById("schoolName").value;

	var studentNametxt = document.getElementById("studentName").innerText;

	var DateofBirthtxt = document.getElementById("DateofBirth").value;

	var classtxt = document.getElementById("class").value;

	var contectNotxt = document.getElementById("contectNo").value;

	var rollNotxt = document.getElementById("rollNo").value;

	console.log(schoolNametxt,studentNametxt,DateofBirthtxt,classtxt,contectNotxt,rollNotxt);

