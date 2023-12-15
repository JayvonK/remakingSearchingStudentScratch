let studentName = document.getElementById("studentName");
let studentEmail = document.getElementById("studentEmail");
let studentAge = document.getElementById("studentAge");
let studentNumber = document.getElementById("studentNumber");
let errorMessage = document.getElementById("errorMessage");
let userInput = document.getElementById("userInput");
let searchBtn = document.getElementById("searchBtn");

let studentList;
let matchingStudent;

async function StudentListCall(){
    const promise = await fetch('../data/studentList.json');
    const data = promise.json();

    studentList = data.studentList;
}

searchBtn.addEventListener('click', function(e){
    FindStudent();
})

function FindStudent(){
    let input = userInput.value.toLowerCase();

    console.log(studentList.length)

    for(let i = 0; i < studentList.length; i++){
        let currentStudent = studentList[i];

        if(input === currentStudent.firstName.toLowerCase()){
            matchingStudent = currentStudent;
        }
    }

    if(matchingStudent){
        studentName.textContent = matchingStudent.firstName + " " + matchingStudent.lastName;
        studentEmail.textContent = matchingStudent.email;

    }else{
        errorMessage.textContent = "Student Not Found";
    }
}

StudentListCall();