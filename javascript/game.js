$(document).ready(function() {


    // *** RANDOM VARIABLES *** //
    
    
    var computerNum = Math.floor(Math.random() * 101 + 19);
    var randNum1 = Math.floor(Math.random() * 11 + 1);
    var randNum2 = Math.floor(Math.random() * 11 + 1);
    var randNum3 = Math.floor(Math.random() * 11 + 1);
    var randNum4 = Math.floor(Math.random() * 11 + 1);
    
    
    // *** COUNTERS *** //
    
    var userScore = 0;
    var wins = 0;
    var losses = 0;
    
    // *** Initial write to the screen *** //
    
    $('#jsUserScore').text(userScore);
    $('#jsWins').text('Wins: ' + wins);
    $('#jsLosses').text('Losses: ' + losses);
    $('#jsRandom').text(computerNum);
    
    console.log(randNum1);
    console.log(randNum3);
    console.log(randNum2);
    console.log(randNum4);
    
    // *** OnClick Functions *** //
    
    $('#gem').on('click', function(){
        userScore = userScore + randNum1;
        console.log('Current user score is ' + userScore);
            $('#jsUserScore').text(userScore);
    
        winLose();
    });
    
    $('#pearl').on('click', function(){
        userScore = userScore + randNum2;
        console.log('Current user score is ' + userScore);
            $('#jsUserScore').text(userScore);
    
        winLose();
    
    });
    
    
    $('#gold').on('click', function(){
        userScore = userScore + randNum3;
        console.log('Current user score is ' + userScore);
            $('#jsUserScore').text(userScore);
    
        winLose();
    });
    
    $('#stone').on('click', function(){
        userScore = userScore + randNum4;
        console.log('Current user score is ' + userScore);
            $('#jsUserScore').text(userScore);
    
        winLose();
    });
    
    // *** Win & Loss logic *** //
    
    function winLose() {
    
        if (userScore === computerNum) {
            wins++;
            $('#jsWins').text('Wins: ' + wins);
            reset();
            
        } else if (userScore > computerNum){
            losses++;
            $('#jsLosses').text('Losses: ' + losses);
            reset();
        }
        
    }
    
    // *** Reset Function *** //
    
    function reset (){
        computerNum = Math.floor(Math.random() * 101 + 19);
        randNum1 = Math.floor(Math.random() * 11 + 1);
        randNum2 = Math.floor(Math.random() * 11 + 1);
        randNum3 = Math.floor(Math.random() * 11 + 1);
        randNum4 = Math.floor(Math.random() * 11 + 1);
    
        userScore = 0;
    
        console.log(randNum1);
        console.log(randNum3);
        console.log(randNum2);
        console.log(randNum4);
    
        $('#jsUserScore').text(userScore);
        $('#jsWins').text('Wins: ' + wins);
        $('#jsLosses').text('Losses: ' + losses);
        $('#jsRandom').text(computerNum);
    
    }
    
    });
    
    