//begin code
$(document).ready(function() {

//Global Variables
//=====================================
var $input = $('#input');
var $submit= $ ('#submit');
var apiKey = 'QzZId0OWSvMmfhzYOMjUVxIktv8Ugt3t';

//get input value when user presses submit
$submit.on('click', function(event) {
    event.preventDefault();
    var inputVal = $input.val();
    getGiphys(inputVal);
});

//ajax request
function getGiphys() {
    $.get('http://api.giphy.com/v1/gifs/search?q='+ inputVal +'&api_key='+ apiKey +'&limit=10')
        .done(function(data){
            for(var i=0; i<10; i++){
                console.log('data' , data);
            }
        });
};

function createBox() {
    var $newImg = $('img');
    var $newDiv = $('div');

    $newImg.append
}





}); //end of code