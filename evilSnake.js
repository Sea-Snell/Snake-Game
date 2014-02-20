var evilDirection = 'right'
var evilX = 100;
var evilY = 100;
var evilSnake = [];
var evilSnakeLength;

function addEvilSnakePiece(){
    var newEvilSnake = $('<div class="evilsnake"></div>');
    $('body').append(newEvilSnake);
    
    if(evilSnake.length){
        newEvilSnake.css('left', evilSnake[evilSnake.length-1].css('left'));
        newEvilSnake.css('top', evilSnake[evilSnake.length-1].css('top'));
    }   
    evilSnake.push(newEvilSnake);
};

function evilSnakePosition() {
if(evilSnake.length == 0){ 
        evilX = Math.floor((Math.random() * 500)+1);
        evilY = Math.floor((Math.random() * 500)+1);
        $('.evilsnake').css('left', (evilX-11) + 'px');
        $('.evilsnake').css('top', (evilY-11) + 'px');
    }
}; 

function evilSnakeSize() {
        evilSnakeLength = Math.floor((Math.random() * 10) + 1);
        switch(evilSnakeLength){
            case 1:
            case 2:
                addEvilSnakePiece();
                addEvilSnakePiece();
            break;
            case 3:
                addEvilSnakePiece();
                addEvilSnakePiece();
                addEvilSnakePiece();
            break;
            case 4:
                addEvilSnakePiece();
                addEvilSnakePiece();
                addEvilSnakePiece();
                addEvilSnakePiece();
            break;
            case 5:
                addEvilSnakePiece();
                addEvilSnakePiece();
                addEvilSnakePiece();
                addEvilSnakePiece();
                addEvilSnakePiece();
            break;
            case 6:
            case 7:
                addEvilSnakePiece();
                addEvilSnakePiece();
                addEvilSnakePiece();
                addEvilSnakePiece();
                addEvilSnakePiece();
                addEvilSnakePiece();
            break;
            case 8:
            case 9:
                addEvilSnakePiece();
                addEvilSnakePiece();
                addEvilSnakePiece();
                addEvilSnakePiece();
                addEvilSnakePiece();
                addEvilSnakePiece();
                addEvilSnakePiece();
                addEvilSnakePiece();
            break;
            case 10:
                addEvilSnakePiece();
                addEvilSnakePiece();
                addEvilSnakePiece();
                addEvilSnakePiece();
                addEvilSnakePiece();
                addEvilSnakePiece();
                addEvilSnakePiece();
                addEvilSnakePiece();
                addEvilSnakePiece();
                addEvilSnakePiece();
            break;
    }
        
};

$(document).ready(function() {
    evilSnakePosition();
    evilSnakeSize();
    setInterval(timer, 1);
    setInterval(randomDirection, 1);
    window.setInterval(evilFrame, 1000/20);
    //$('.evilsnake').css('left', evilX);
    //$('.evilsnake').css('top', evilY);
});

function timer() {
    return(Math.floor((Math.random() * 50) +1));
};

function randomDirection() {
    return(Math.floor((Math.random() * 4) +1));
};

function evilFrame() {
    
    console.log('running frame', 'evilDirection:', evilDirection);
    $('#evilsnakex').html(evilX);
    $('#evilsnakey').html(evilY);
    
    if(timer() == 1) {
        switch(randomDirection()) {
                case 1:
                    if(evilDirection != 'down')evilDirection = 'up';
                break;
                case 2:
                    if(evilDirection != 'up')evilDirection = 'down';
                break;
                case 3:
                    if(evilDirection != 'right')evilDirection = 'left';
                break;
                case 4:
                    if(evilDirection != 'left')evilDirection = 'right';
                break;
       } 
    }
    if(evilDirection == 'up') evilY -= 23;
    if(evilDirection == 'down') evilY += 23;
    if(evilDirection == 'right') evilX += 23;
    if(evilDirection == 'left') evilX -= 23;

    if(evilX < 0 ) evilX = $(window).width()-10
    if(evilX > $(window).width()) evilX = 10;
    
    if(evilY < 0 ) evilY = $(window).height()-10
    if(evilY > $(window).height()) evilY = 10;
    
    var evilCurX = evilX;
    var evilCurY = evilY;
    
   // $('.evilsnake').css('left', evilX);
    //$('.evilsnake').css('top', evilY);
    
    var evilTemp;
    for(var evilSS in evilSnake){
        evilTemp = [evilSnake[evilSS].css('left'), evilSnake[evilSS].css('top')];
        
        evilSnake[evilSS].css('left', evilCurX);
        evilSnake[evilSS].css('top', evilCurY);
        
        evilCurX = evilTemp[0];
        evilCurY = evilTemp[1];   
    }
};
