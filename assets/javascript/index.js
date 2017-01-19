// Initialize Firebase
 var config = {
    apiKey: "AIzaSyCH02lV8Gc-SVfc8qRgXJ38utghRU5qnNg",
    authDomain: "employeedata-24406.firebaseapp.com",
    databaseURL: "https://employeedata-24406.firebaseio.com",
    storageBucket: "employeedata-24406.appspot.com",
    messagingSenderId: "218223176307"
  };
  firebase.initializeApp(config);

 var database = firebase.database();

 //inital values - 

 var employeeName
 var role
 var startDate
 var monthsWorked
 var monthlyRate

 database.ref().on("value", function(snapshot) {
$("#placeholderID").html(employeeName);
$("#placeholderID").html(role);
$("#placeholderID").html(startDate);
$("#placeholderID").html(monthlyRate);
$("#placeholderID").hmtl(monthsWorked);
 }

$("#onclickplaceholder").on("click", function(event) {
	event.preventDefault();
	employeeName = $("#placeholderID").val();
	role = $("#placeholderID").val();
	startDate = parseInt($("#placeholderID").val());
	monthlyRate = parseInt($("#placeholderID").val());
	monthsWorked = parseInt($("#placeholderID").val());

	database.ref().push({
		employeeName: employeeName,
		role: role,
		startDate: startDate,
		monthsWorked: monthsWorked,
		monthlyRate: monthlyRate
	})
	
}

