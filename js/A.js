function removeClass(){
	var a =document.getElementById("hide_color");
	var result = a.classList.remove("remove_color");
}
function addClass(){
	var b = document.getElementById("green_color");
	var result1 = b.classList.add("add_color");
}
function addRow(){
	var table = document.getElementById("table1");
	var tr = table.insertRow(5);
	var col1 = tr.insertCell(0);
	var col2 = tr.insertCell(1);
	var col3 = tr.insertCell(2);
	col1.innerHTML = "Sweetha";
	col2.innerHTML = "aaa@gmail.com";
	col3.innerHTML = 10000;
};