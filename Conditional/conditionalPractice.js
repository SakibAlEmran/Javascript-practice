//#1 change this function into a ternary and assign it to variable called experiencePoints

/* function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
} */

// ternary implementation
let experiencePoints = winBattle(true) ? 10 : 1;

//winbattle function
function winBattle(bool){
    return bool;
}

// grading system function for switch condition practice
function gradingSystem(marks){
    let grade;
    switch (true){
        case (marks>=50 && marks<60):
            grade = "1";
            break;
        case (marks>=60 && marks<70):
            grade = "2";
            break;
        case (marks>=70 && marks<80):
            grade = "3";
            break;
        case (marks>=80 && marks<90):
            grade = "4";
            break;
        case (marks>=90 && marks<=100):
            grade = "5";
            break;

        case (marks > 100):
            alert('please input between 1 to 100');
            break;
        default:
            grade = "0";
    }
    return grade;
}

gradingSystem(40);
