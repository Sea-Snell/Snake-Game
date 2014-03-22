
//var highScore = 0;
//var game;
var score = 0;
var w = 87;
var s = 83;
var a = 65;
var d = 68;
var x = 250;
var y = 250;
var direction = 'left';
var foodx, foody;
var snakeHead;
var evilLength;

var foodRandomizer = function() { 
    foodx = Math.floor((Math.random() * 500)+1);
    foody = Math.floor((Math.random() * 500)+1);
    $('#food').css('left', (foodx-11) + 'px');
    $('#food').css('top', (foody-11) + 'px');
}

var snake = [];
function addSnakePiece(){
    var newSnake = $('<div class="snake"></div>');
    $('body').append(newSnake);
    
    if(snake.length){
        newSnake.css('left', snake[snake.length-1].css('left'));
        newSnake.css('top', snake[snake.length-1].css('top'));
    }
        
    snake.push(newSnake);
}


$(document).ready(function() {
   // game = "on";
    foodRandomizer();
    $('.snake').css('left', x);
    $('.snake').css('top', y);
    $('#randomx').html(foodx);
    $('#randomy').html(foody);
    $('#snakex').html(x);
    $('#snakey').html(y);
    $('#score').html(score);
    console.log('started game!');
    window.setInterval(frame, 1000/20);
    addSnakePiece();
    addSnakePiece();
    addSnakePiece();
})
    
$(document).keydown(function(key){
    var keyId = parseInt(key.which,10);
    if(keyId == w && direction != 'down')direction = 'up';
    if(keyId == s && direction != 'up')direction = 'down';
    if(keyId == a && direction != 'right')direction = 'left';
    if(keyId == d && direction != 'left')direction = 'right';
});
function hitTest(el1, el2){
    var x1 = Number(el1.css('left').substring(0,el1.css('left').length-2))
    var x2 = Number(el2.css('left').substring(0,el2.css('left').length-2))
    var y1 = Number(el1.css('top').substring(0,el1.css('top').length-2))
    var y2 = Number(el2.css('top').substring(0,el2.css('top').length-2))
    
    
    var xTest = Math.abs(x1 - x2)< 20;
    var yTest = Math.abs(y1 - y2)< 20;
    
    return (xTest && yTest);
}
function frame(){
    console.log('running frame', 'direction:', direction);
    // - Update Text
    $('#randomx').html(foodx);
    $('#randomy').html(foody);
    $('#snakex').html(x);
    $('#snakey').html(y);

    // Move Snake
    if(direction == 'up') y -= 23;
    if(direction == 'down') y += 23;
    if(direction == 'right') x += 23;
    if(direction == 'left') x -= 23;
    
    if(x < 0 ) x = $(window).width()-10
    if(x > $(window).width()) x = 10;
    
    if(y < 0 ) y = $(window).height()-10
    if(y > $(window).height()) y = 10;
    
    var curX = x;
    var curY = y;
    
    var temp;
    for(var ss in snake){
        temp = [snake[ss].css('left'), snake[ss].css('top')]
        
        snake[ss].css('left', curX);
        snake[ss].css('top', curY);
        
        curX = temp[0];
        curY = temp[1];
        
    }
    
    if(hitTest(snake[0], $('#food'))){
        foodRandomizer();
        addSnakePiece();
        console.log("ate food");
        score ++;
        $('#score').html(score);
        console.log("score: ", score);
    }
    
    for(var i = 2; i < snake.length; i++) {
        if(hitTest(snake[0], snake[i])) {
           // game = "off";
            console.log("game over");
            var die = confirm("you lost do you want to play again");
            score = 0;
            $('#score').html(score);
            snake = [];
            $('.snake').remove();
           // game = "on";
            foodRandomizer();
            addSnakePiece();
            addSnakePiece();
            addSnakePiece();
        }
    }
    
   /* for(var x = 1; i < evilLength; i++) {
        if(hitTest(snake[x], evilSnake[0])) {
            $('.snake').remove();    
            Length = (snake.length);
            snake = [];
            for(var i = 0; i < Length - 1; i++){
                addSnakePiece();
            }
        }
    }
    
    for(var x = 1; i < evilLength; i++) {
        if(hitTest(snake[0], evilSnake[x])) {
            $('.snake').remove();
            Length = (snake.length);
            snake = [];
            for(var i = 0; i < Length + 1; i++){
                addSnakePiece();
            }
            score++;
            $('#score').html(score);
        }
    }*/
    // if(score > highScore) {
   // highScore = score;
    //}
    //$('#highScore').html(highScore);
}; // end frame
