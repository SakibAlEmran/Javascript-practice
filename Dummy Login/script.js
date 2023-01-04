var database = [
    {
        username: "rik",
        password: "323"
    },

    {
        username: "rit",
        password: "123"
    },

    {
        username: "oy",
        password: "456"
    }
]

var content = [
    {
        a: "1"
    },
    {
        b: "2"
    },
    {
        c: "3"
    }
]

//check valid user from the database
function isValidUser(user, pass){
    for (var i=0; i < database.length; i++){
        if(database[i].username === user && database[i].password === pass){
            return true
        }
    }
    return false
}

//if the user is valid then send the content to the user
function signIN(user, pass){
    if(isValidUser(user, pass)){
        console.log(content)
    }else{
        alert("Wrong user name or password");
    }
}

//input from the user
var userNamePromt = prompt("Enter your username");
var passwordPromt = prompt("Enter your password");

//calling the functions
signIN(userNamePromt, passwordPromt);
