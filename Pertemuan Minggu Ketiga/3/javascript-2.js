
$("#addlist").click(function () { //mengambil id submit dan menambahkan attribute onclick
	let isitext = $("isitext").value;
	$("#rumah").append(isitext);
});

$("#togglesidebar").click(function (){
	$("#sidebar").toggle()
});
