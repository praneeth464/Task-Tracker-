var data = [
	{"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
	{"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
	{"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
	{"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
	{"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
	{"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
	{"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
];

if(localStorage.getItem('dat')!=null) {
	data = JSON.parse(localStorage.getItem('dat'));
}

$(document).ready(function () {
loadData();
});

function clickme() {
		var datax = {};
	datax['name'] = $('input[name=textname]').val();
	datax['date'] = $('input[name=date]').val();
	datax['assigned'] = $('input[name=assigned]').val();
	data.push(datax);
	localStorage.setItem('dat', JSON.stringify(data));
 	loadData();
}

function loadData() {
	 $(".table-grid").html("");
	for(var i=0; i<data.length;i++) {
		$(".table-grid").append("<div><span class='f-bold'>"+data[i].name+"</span><span>"+data[i].date+"</span><span class='f-bold float-r'>"+data[i].assigned+"</span></div>");
	}
}
