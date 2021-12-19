
// let formattedDate = jsDate.format()
// console.log(formattedDate);
// let currentTime = moment();
// console.log(currentTime.get());

let hoursArray = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
function displayDate() {
    let currentDate = moment(new Date);
    let formattedDate = currentDate.format('dddd, MMMM Do');
    $('#currentDay').text(formattedDate);
}

displayDate();

function displayHourBlocks() {
    for (time of hoursArray) {
        let row = $('<div class="row time-block">');
        let hour = $('<div class="hour col-1">' + time + '</div>');
        row.append(hour);
        $('.container').append(row);
        let textArea = $('<textarea class="description col-10">');
        row.append(textArea);
        let saveBtn = $('<button class="saveBtn col-1">');
        row.append(saveBtn);
    }
}

displayHourBlocks();