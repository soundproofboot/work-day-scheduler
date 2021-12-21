
// let formattedDate = jsDate.format()
// console.log(formattedDate);
// let currentTime = moment();
// console.log(currentTime.get());

let tasksArray = [{
    militaryTime: 9,
    task: '',
},{
    militaryTime: 10,
    task: '',
},{
    militaryTime: 11,
    task: '',

},{
    militaryTime: 12,
    task: '',

},{
    militaryTime: 13,
    task: '',

},{
    militaryTime: 14,
    task: '',

},{
    militaryTime: 15,
    task: '',

},{
    militaryTime: 16,
    task: '',

},{
    militaryTime: 17,
    task: '',
}]

function displayDay() {
    let currentDate = moment(new Date);
    let formattedDate = currentDate.format('dddd, MMMM Do');
    $('#currentDay').text(formattedDate);
}

displayDay();

function displayTasks() {
    if (localStorage.tasks) {
        let fromStorage = JSON.parse(localStorage.tasks);
    let arrayOfHours = $('textarea');
    for (let i = 0; i < fromStorage.length; i++) {
        arrayOfHours[i].value = fromStorage[i].task
    }
    } else {
        localStorage.tasks = JSON.stringify('tasks', tasksArray)
    }
}

function saveItems() {
    let textAreas = $('textarea');
    for (let i = 0; i < textAreas.length; i++) {
        let currentText = textAreas[i].value;
        tasksArray[i].task = currentText;
        localStorage.setItem('tasks', JSON.stringify(tasksArray));
    }
}

function relativeColors() {
    console.log('it went');
    let currentHour = moment().format('H');
    let textAreas = $('textarea');
    for (let i = 0; i < textAreas.length; i++) {
        if (tasksArray[i].militaryTime < currentHour) {
            textAreas[i].classList.add('past');
            textAreas[i].classList.remove('present');
            textAreas[i].classList.remove('future');

        } else if (tasksArray[i].militaryTime == currentHour) {
            textAreas[i].classList.add('present');
            textAreas[i].classList.remove('past');
            textAreas[i].classList.remove('future');

        } else {
            textAreas[i].classList.add('future');
            textAreas[i].classList.remove('past');
            textAreas[i].classList.remove('present');
        }
    }
}

relativeColors();
var colorTimer = setInterval(relativeColors, 60000);
$('button').on('click', saveItems);
displayTasks();

