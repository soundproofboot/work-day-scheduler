// array of objects for each hour of the day, to set in localStorage if nothing is saved yet
let tasksArray = [{
    // use military time to make the math easier for relative colors
    militaryTime: 9,
    // the task written into each hour block and saved
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

// function to show the current day in the heading
function displayDay() {
    // create a moment for current day
    let currentDate = moment(new Date);
    // format that moment to how we need it to be displayed
    let formattedDate = currentDate.format('dddd, MMMM Do');
    // use jquery to grab that html element, make it's contents the formatted date
    $('#currentDay').text(formattedDate);
}

// call that function to put current day on page
displayDay();

// function to pull tasks from local storage
function displayTasks() {
    // if there are currently tasks stored
    if (localStorage.tasks) {
        // parse that array from storage
        let fromStorage = JSON.parse(localStorage.tasks);
        // use jquery to grab an array of all the text areas on the page
        let arrayOfHours = $('textarea');
        // loop through that array from storage
        for (let i = 0; i < fromStorage.length; i++) {
        // the value of the textarea at the index is set equal to the same index of the task value from the array from storage
        arrayOfHours[i].value = fromStorage[i].task
    }
    } else {
        // if no tasks are stored the array with times but no tasks is stringified and stored
        localStorage.tasks = JSON.stringify('tasks', tasksArray)
    }
}

// function to save items when save button is clicked
function saveItems() {
    // use jquery to grab all the textareas on the page
    let textAreas = $('textarea');
    // loop through that list
    for (let i = 0; i < textAreas.length; i++) {
        // grab the value of the text area at that index
        let currentText = textAreas[i].value;
        // set the task property of that index of the array to that value
        tasksArray[i].task = currentText;
        // save the tasks array to storage
        localStorage.setItem('tasks', JSON.stringify(tasksArray));
    }
}

// function to set the colors relative to the current time
function relativeColors() {
    // grabs the current hour with moment and formats to military time
    let currentHour = moment().format('H');
    // grabs all textareas on the page
    let textAreas = $('textarea');
    // loops through textAreas
    for (let i = 0; i < textAreas.length; i++) {
        // if the time for that index is less than the current hour
        if (tasksArray[i].militaryTime < currentHour) {
            // add past class to color that block
            textAreas[i].classList.add('past');
            // remove other color classes if set
            textAreas[i].classList.remove('present');
            textAreas[i].classList.remove('future');
        // if time is same as current hour
        } else if (tasksArray[i].militaryTime == currentHour) {
            // add present class
            textAreas[i].classList.add('present');
            // remove other classes if set
            textAreas[i].classList.remove('past');
            textAreas[i].classList.remove('future');
        // if time is neither (meaning future)
        } else {
            // add future class
            textAreas[i].classList.add('future');
            // remove other classes if set
            textAreas[i].classList.remove('past');
            textAreas[i].classList.remove('present');
        }
    }
}

// call function to color blocks appropriately on load
relativeColors();
// set timer to check once every minute to see if the colors need to be updated for current time
var colorTimer = setInterval(relativeColors, 60000);
// use jquery to to run saveItems function when save button is clicked
$('button').on('click', saveItems);
// call function to pull saved tasks from storage
displayTasks();

