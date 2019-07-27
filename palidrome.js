function getGrade(score) {
    let grade;
    // Write your code here
    if (score > 25){
        return grade = "A";
    } else if(score > 20){
        return grade= "B";
    }else if (score > 15){
        return grade = "C";
    }else if (score > 10){
        return grade = "D";
    }else if (score > 5){
        return grade = "E";
    }else if (score > 0){
        return grade = "F";
    }
    return grade;
}
console.log(getGrade(22));