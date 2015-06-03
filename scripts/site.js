(function () {
	var now = new Date();
	
	var daniel = {
		bday: {
			year: 1980,
			month: 5,
			day: 2,
			hour: 10,
			minute: 53
		},
		get age() {
			var age = 0;
			age = now.getFullYear() - daniel.bday.year;
			var m = now.getMonth() - daniel.bday.month;
			if (m < 0 || m === 0 && now.getDate() < daniel.bday.day) {
				age--;
			}
			return age;
		},
		get timeUntilBDay() {
			return 3600*24*17;
		},
		get isBDay() {
			return daniel.bday.month === now.getMonth() && daniel.bday.day === now.getDate();
		}
	};
	
	var clock = $('.clock').FlipClock(daniel.timeUntilBDay, {
		clockFace: 'DailyCounter',
		countdown: true
	});
	
	var age = daniel.age;
	// alert(age);
	
	document.getElementById("age").innerHTML = age;
	alert(daniel.isBDay);
}());