var daniel = {
	bday: {
		year: 1980,
		month: 05,
		day: 03
	},
	get age() {
		var age = 0;
		var now = new Date();
		var today = {
			year: now.getFullYear(),
			month: now.getMonth(),
			day: now.getDate()			
		};
		age = today.year - daniel.bday.year;
		var m = today.month - daniel.bday.month;
		if (m < 0 || m === 0 && today.day < daniel.bday.day){
			age--;
		}
		return age;
	}
};

var clock = $('.clock').FlipClock(timeUntilBDay(), {
	clockFace: 'DailyCounter',
	countdown: true
});

function timeUntilBDay() {
	return 3600*24*364;
}
var age = daniel.age;
// alert(age);

document.getElementById("age").innerHTML = age;