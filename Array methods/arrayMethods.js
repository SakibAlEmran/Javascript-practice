// declaration an array
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Creating an array using forEach that has all the usernames with a "!" to each of the usernames
const nameArrayEx = [];
array.forEach(item => {
  nameArrayEx.push(item.username + "!");
});
console.log("forEach array",nameArrayEx);

//Creating an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map( item => item.username + "?");
console.log('map array', mapArray);


//Filtering the array to only include users who are on team: red
const filterArray = array.filter(item => item.team === "red");
console.log("filter array", filterArray);

//total score of all users using reduce methods
const reduceArray = array.reduce((accumulator, item) => {
  return accumulator + item.score;
}, 0);
console.log("reduce array", reduceArray);

// using map method with index number -- double arguments 
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})
