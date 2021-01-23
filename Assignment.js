// kilometerToMeter
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
// budgetCalculator

function budgetCalculator(){

}

// hotelcost

function hotelCost(day){
    var cost = 0;
    if (day <= 10 ) {
        cost = day * 100;
    }
    else if(day <= 20) {
        var first10days = 10 * 100;
        var leftdays = day - 10;
        var second10days = leftdays * 80;
        cost = first10days + second10days;
    }
    else {
        var first10days = 10 * 100;
        var second10days = 10 * 80;
        var leftdays = day - 20;
        var after20days = leftdays * 50;
        cost = first10days + second10days + after20days;

    }
    return cost;
}


// megaFriend
  
var word = megaFriend(['tumpa', 'sakia', 'ayesha', 'hasan', 'hossain', 'tayefa', 'wasay', 'junaid', 'humairaaaaaa']);

function megaFriend(friend) {
    var longestWord = "";
  
    friend.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
