//function & dom 


function buat_btns(){
	let rumah = document.getElementById("rumahku")
	rumah.innerHTML = '<input type="text" name="" placeholder="Username">';

}

// 

// ariq.onclick = function test(){
// 	console.log("hellow")
// }

function test() {
	let tag = document.createElement("h1") // membuat tag
	let konten = document.createTextNode("Ariq Faridzki") // membuat isi kontent

	 tag.appendChild(konten); // gabungan isi konten dan tag
	document.getElementById("rumahku").appendChild(tag);

}



//function & dom 2

function tampil() {
	let	isi_ID = document.getElementById("isi").value;
	console.log(isi_ID);
}

//test.html
function buatinput() {
	let rumah = document.getElementById("content");
	rumah.innerHTML = "<h1>ariq</h1>"
}

function buattag () {
	let rumah2 = document.getElementById("content");
	let tagh1 = document.createElement("h1");
	let isi = document.createTextNode("Muhammad Ariq Faridzki");

	tagh1.appendChild(isi);
	rumah2.appendChild(tagh1);
}

function buatlist() {
	let daftar = document.getElementById("Daftar")
	let buattagli = document.createElement("li")
	let isidaftar = document.createTextNode("Test")

	buattagli.appendChild(isidaftar)
	daftar.appendChild(buattagli)
}

function hapuslist() {
	let resetlist = document.querySelectorAll("li");

	console.log (resetlist);
	

}