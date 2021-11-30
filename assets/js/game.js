var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10; 

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12; 

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

var fight = function(enemyName) {
  while(playerHealth > 0 && enemyHealth > 0) { 
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
      );

    // if player choses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      
      // if yes (true), leave fight 
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!")
        // subtract money from playerMoney
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }  
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );
    
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      playerMoney = playerMoney + 20;
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break; 
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};   

// fight each enemy-robot by looping over them and fighting them one at a time
for(var i = 0; i < enemyNames.length; i++) {
  // if player still alive keep fighting
  if (playerHealth > 0) {
    window.alert("Welcome to Robot Gladiators! " + (i + 1));
    var pickedEnemyName = enemyNames [i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}

  else {
    window.alert('You have lost your robot in battle! Game Over!');
  }
}

  
