var wins = 0;
var losses = 0;
var targetSum;
var totalNum = 0;

    function initializeGame () {
        totalNum = 0;
        $(".displayScore").text(totalNum);
        targetSum = Math.floor(Math.random() * 120) + 19; //generage random number from 19 to 120
        document.getElementsByClassName("numberToMatch")[0].innerHTML=targetSum;
    } 
    
    initializeGame ();

    
    $(".number").on("click", function() {
        var crystalNum = Math.floor(Math.random() * 12) + 1; //generage random number from 1 to 12
        totalNum = totalNum + crystalNum;
        $(".displayScore").text(totalNum);
        console.log(totalNum);
        decidingWinnerLosser ();
     })

     function decidingWinnerLosser () {
        if (totalNum<targetSum) {
            return;
        }
        if (totalNum===targetSum) {
            wins++;
            $(".wins").text(wins);
            initializeGame ();
        }
        if (totalNum>targetSum) {
            losses++;
            $(".losses").text(losses);
            initializeGame ();          
        }
     }
    


