$(document).ready(function () {
  var currentDayEl = $('#currentDay');
  var currentDate = dayjs();
  var currentHour = parseInt(currentDate.format('H'));
 

 
  currentDayEl.text(currentDate.format('dddd, MMMM D, YYYY'));

 
  $('.time-block').each(function () {
    var timeBlock = $(this);
    var timeId = timeBlock.attr('id');
    var blockHour = parseInt(timeId.split('-')[1]);

    if (blockHour < currentHour) {
      timeBlock.addClass('past');
    } else if (blockHour === currentHour) {
      timeBlock.addClass('present');
    } else {
      timeBlock.addClass('future');
    }
  });

  
  $('.time-block').each(function () {
    var timeBlock = $(this);
    var timeId = timeBlock.attr('id');
    var userInput = localStorage.getItem(timeId);

    timeBlock.find('textarea').val(userInput);
  });

  
  $('.saveBtn').on('click', function () {
    var clickedButton = $(this);
    var timeBlock = clickedButton.parent();
    var timeId = timeBlock.attr('id');
    var userInput = timeBlock.find('textarea').val();

    
    localStorage.setItem(timeId, userInput);
  });
});
