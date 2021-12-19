
// let formattedDate = jsDate.format()
// console.log(formattedDate);
// let currentTime = moment();
// console.log(currentTime.get());

let textArray = ['', '', '', '', '', '', '', '', ''];

function displayDay() {
    let currentDate = moment(new Date);
    let formattedDate = currentDate.format('dddd, MMMM Do');
    $('#currentDay').text(formattedDate);
}

displayDay();

function displayHourBlocks() {
    for (times of textArray) {

    }
}


function relativeTime(num) {
    if (num < 9) {
        num += 12;
    }

    if (num < moment().format('H')) {
        return 'past';
    } else if (num == moment().format('H')) {
        return 'present';
    } else {
        return 'future';
    }
}
displayHourBlocks();


localStorage.setItem('tasks', JSON.stringify(textArray));