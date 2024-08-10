function isAdult(age) {
  return age < 18 ? false : true;
}

const isAdultResult = isAdult(17);
console.log(isAdultResult);

function didStudentPass(score) {
  return score < 70 ? false : true;
}

const didStudentPassResult = didStudentPass(70);
console.log(didStudentPassResult);

function gradeCalculator(score) {
  return score < 0
    ? "How'd you even do that? F-"
    : score < 60
    ? 'F'
    : score < 70
    ? 'D'
    : score < 80
    ? 'C'
    : score < 90
    ? 'B'
    : score <= 100
    ? 'A'
    : 'A++';
}

const gradeCalculatorResult = gradeCalculator(74);
console.log(gradeCalculatorResult);

function seasonMessenger(season) {
  return season === 'summer'
    ? "I'm walking on sunshine, woooah"
    : season === 'spring'
    ? "Little darlin', I feel the ice is slowly melting"
    : season === 'autumn'
    ? 'And the leaves that are green turn to brown' //I had to look up a song for this one but it still counts
    : season === 'winter'
    ? 'The weather outside is frightful, but the fire is so delightful'
    : 'please enter a valid season';
}

const seasonMessengerResult = seasonMessenger('winter');
console.log(seasonMessengerResult);

const weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'Have a good weekend!';
  } else if (weekDays.includes(dayOfTheWeek)) {
    return 'It is a weekday!';
  } else {
    return 'It is not a day!';
  }
}

const dayDetectorResult = dayDetector('wednesday');
console.log(dayDetectorResult);
