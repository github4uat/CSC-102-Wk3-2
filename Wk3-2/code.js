//same function as timer below, but made more efficient with LOOPS and has CHANGE ORDER REQUEST 
function countDownTimerV3() {
    var count = 10;
    //starting var at 0 puts the number up RIGHT NOW.  
    //starting var at 1 waits 1 second before putting the # up, nicer to view
    //this is the code for doing a count. changed from 10 to 11 
    for (var i = 1; i<=11; i++) {
        //for the first 5 numbers in the countdown (10,9,8,7,6,) it does this
        if(i <= 5){
            setTimeout(function() {
                document.getElementById("countDownTimer").innerHTML = count;
                count--;
            }, 1000 * i);
        //for the last numbers in the countdown (5,4,3,2,1,0) it displays""Warning Less than ½ way to launch, time left = "
        } else if (i == 11) {
        //this is where we tell computer what to say AFTER the countdown
            setTimeout(function  () {
            document.getElementById("countDownTimer").innerHTML = "Blastoff!!";
            count--;
    
        //increase this number by 1000 to accommodate for slowing the count down once the button is clicked.  From 10,000 to 11,000
    }, 11000);
        } else {
            setTimeout(function() {
                document.getElementById("countDownTimer").innerHTML = "Warning Less than ½ way to launch, time left = " + count; 
                count--;
            }, 1000 * i);
        }
        
    }

    
}








//creating a countdown function to count from 10 to 1 and then blastoff.  Note:all time units are in milliseconds.  I.E. 1000=1000milliseconds=1second.  Personal Opinion:while the us does a lot of things correctly, not adapting the metric system is not one of those things.  1 mile=5,280 feet? sure, why not
function countDown() {
    var count = 10;
    //starting countdown at 10
    document.getElementById("countDownTimer").innerHTML = count;
    //this tells the following number to be one less than the current number
    count = count - 1;

    //then going to 9
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        //this tells the following number to be one less than the current number
        count = count - 1;
        //this tells computer that we're subtracting 1 from 10, and going to 9
    }, 1000);


    //then going to 8
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        //this tells the following number to be one less than the current number
        count = count - 1;
        //this tells computer that we're subtracting 2 from 10, and going to 8
    }, 2000);


    //then going to 7
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        //this tells the following number to be one less than the current number
        count = count - 1;
        //this tells computer that we're subtracting 3 from 10, and going to 7
    }, 3000);


    //then going to 6
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        //this tells the following number to be one less than the current number
        count = count - 1;
        //this tells computer that we're subtracting 4 from 10, and going to 6
    }, 4000);


    //then going to 5
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        //this tells the following number to be one less than the current number
        count = count - 1;
        //this tells computer that we're subtracting 5 from 10, and going to 5
    }, 5000);

    //then going to 4
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        //this tells the following number to be one less than the current number
        count = count - 1;
        //this tells computer that we're subtracting 6 from 10, and going to 4
    }, 6000);

    //then 3
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        //this tells the following number to be one less than the current number
        count = count - 1;
        //this tells computer that we're subtracting 7 from 10, and going to 3
    }, 7000);

    //then 2
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        //this tells the following number to be one less than the current number
        count = count - 1;
        //this tells computer that we're subtracting 8 from 10, and going to 2
    }, 8000);

    //then 1
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        //this tells the following number to be one less than the current number
        count = count - 1;
        //this tells computer that we're subtracting 9 from 10, and going to 1
    }, 9000);


    //then Blastoff!!!
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blastoff!!!";
        //this tells the following number to be one less than the current number
        count = count - 1;
        //this tells computer that we're subtracting 10 from 10, and going to Blastoff!
    }, 10000);
}

function playCraps() {
    //create die1 variable
    var die1;
    //create die2 variable
    var die2;
    //variable sum
    var sum;
    //this says that Die 1's math ceiling will be 6, so it doesn't go off into infinity
    die1 = Math.ceil(Math.random() * 6);
    //this says that the Die 2's math ceiling will be 6, so it doesn't go off into infinity
    die2 = Math.ceil(Math.random() * 6);
    //we want to see the sum of die1 and die2, not subtraction or multiplication
    sum = die1 + die2;
    //die1Res=results for die1
    document.getElementById("die1Res").innerHTML = die1;
    //die2Res=results for die2
    document.getElementById("die2Res").innerHTML = die2;
    //sumRes= sum of the results, what was the result for die 1 + result for die 2
    document.getElementById("sumRes").innerHTML = sum;

    //lose sequence 7 or 11
    if (sum == 7 || sum == 11) {
        document.getElementById("crapsResults").innerHTML = "Craps! You lose!";

        //win sequence double and even    
    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsResults").innerHTML = "Doubles, you win!";

        //if it wasn't a win or a loss (not familiar with craps)...Not a 7 or 11 sum, and not doubles or evens
    } else {
        document.getElementById("crapsResults").innerHTML = "Push. Please try again.";
    }
}
//this code accomplishes the same thing in far less lines of code than the timer  above
function runSandbox() {
    var count = 10;

    //starting var at 0 puts the number up RIGHT NOW.  
    //starting var at 1 waits 1 second before putting the # up, nicer to view
    for (var i = 1; i<=10; i++) {
        setTimeout(function() {
            document.getElementById("sandboxDisplay").innerHTML = count;
            count--;
        }, 1000 * i);
    }

    setTimeout(function  () {
        document.getElementById("sandboxDisplay").innerHTML = "Blastoff";
        count--;
    //increase this number by 1000 to accommodate for slowing the count down once the button is clicked.  From 10,000 to 11,000
    }, 11000);
}