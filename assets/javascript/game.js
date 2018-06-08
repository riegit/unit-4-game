$( document ).ready(function(){
    // Run a random number between 19-120 at the start of the game
    
    var randomaTargetNum=Math.floor(Math.random()*101+19)
    
    // Append the random number to the targetNum id in the html 
    $('#targetNum').text(randomaTargetNum);
    
    // Set the random numbers, between 1-12, for each crystal.
    var crysNum1= Math.floor(Math.random()*11+1)
    var crysNum2= Math.floor(Math.random()*11+1)
    var crysNum3= Math.floor(Math.random()*11+1)
    var crysNum4= Math.floor(Math.random()*11+1)
    
    // Variables
    var userTotal= 0; 
    var wins= 0;
    var losses = 0; 
  
  //reset the game
  function reset(){
        randomaTargetNum=Math.floor(Math.random()*101+19);
        console.log(randomaTargetNum)
        $("#targetNum").text(randomaTargetNum);
        crysNum1= Math.floor(Math.random()*11+1)
        crysNum2= Math.floor(Math.random()*11+1)
        crysNum3= Math.floor(Math.random()*11+1)
        crysNum4= Math.floor(Math.random()*11+1)
        userTotal= 0;
        $("#totalScore").text(userTotal);
        } 

  // ====FUNCTIONS===============================================
  //add the wins to the userTotal
  function goodJob(){
  alert("Good job, you win!");
    wins++; 
    $("#idWin").html("Wins: " + wins);
    setTimeout(reset, 1500);
  }
  //add the losses to the userTotal
  function tryAgain(){
  alert ("You lose, Try again!");
    losses++;
    $("#idLose").html("Losses: " + losses);
    setTimeout(reset, 1500);
  }
  //set the click functions for crystals
    $(".crys-one").on ("click", function(){
      userTotal = userTotal + crysNum1;
      console.log("New userTotal= " + userTotal);
      $("#totalScore").text(userTotal); 
            //set the win/lose conditions
          if (userTotal == randomaTargetNum){
            goodJob();
          }
          else if ( userTotal > randomaTargetNum){
            tryAgain();
          }   
    })  
    $(".crys-two").on ("click", function(){
      userTotal = userTotal + crysNum2;
      console.log("New userTotal= " + userTotal);
      $("#totalScore").text(userTotal); 
          if (userTotal == randomaTargetNum){
            goodJob();
          }
          else if ( userTotal > randomaTargetNum){
            tryAgain();
          } 
    })  
    $(".crys-three").on ("click", function(){
      userTotal = userTotal + crysNum3;
      console.log("New userTotal= " + userTotal);
      $("#totalScore").text(userTotal);
            if (userTotal == randomaTargetNum){
                goodJob();
          }
          else if ( userTotal > randomaTargetNum){
            tryAgain();
          } 
    })  
    $(".crys-four").on ("click", function(){
      userTotal = userTotal + crysNum4;
      console.log("New userTotal= " + userTotal);
      $("#totalScore").text(userTotal); 
        
            if (userTotal == randomaTargetNum){
                goodJob();
          }
          else if ( userTotal > randomaTargetNum){
            tryAgain();
          }
    });   
  }); 