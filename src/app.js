//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  var Manager = [managerName, managerAge, currentTeam, trophiesWon];
  return Manager;
  }

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation) {
  if (formation.length == 0) {
  return null;
  }
  var play = {
  defender: formation[0],
  midfield: formation[1],
  forward: formation[2]
  }
  return play;
  }

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  var data = players.filter(player => player.debut == year);
  return data;
  }

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  var data = players.filter(player => player.debut == position);
  return data;
  }

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let Array = [];
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (player[i].award[j].name === awardName) {
        Array.push(player[i]);
      }
    }
  }
  return Array;
  }

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  let arr = [];
  let count = 0;
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName) {
        count++
      }
    }
    if (count == noOfTimes) {
      arr.push(players[i]);
    }
      count = 0;
  }
  return arr;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  var awardsData = filterByAward(awardName);
  var data = awardsData.filter(players => players.country == country);
  return data;
  }

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var data = player.filter(player => (player.age < age && player.team == team && player.awards.length >= noOfAwards));
  return data;
  }
