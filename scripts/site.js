(function ($) {
	var now = new Date();
	
	var daniel = {
		bday: {
			year: 1980,
			month: 5,
			day: 3,
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
			var bDay = new Date(now.getFullYear(), daniel.bday.month, daniel.bday.day, daniel.bday.hour, daniel.bday.minute);
			if (now.getTime() > bDay.getTime()) {
				bDay.setFullYear(now.getFullYear() + 1);
			}

			return (bDay.getTime() - now.getTime()) / 1000;
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
	
	document.getElementById("age").innerHTML = age;

	$(document).ready(function () {
		var msg = document.querySelector('.message');
		
		if (daniel.isBDay) {
			msg.innerText = "HAPPY BIRTHDAY!";
		}
	});
}(jQuery));
