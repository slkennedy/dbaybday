var daniel = {
	bday: new Date(1980, 05, 02),
	get age() {
		return daniel.bday;
	}
};

var clock = $('.clock').FlipClock(timeUntilBDay(), {
	clockFace: 'DailyCounter',
	countdown: true
});

function timeUntilBDay() {
	return 3600*24*364;
}

alert(daniel.age);
