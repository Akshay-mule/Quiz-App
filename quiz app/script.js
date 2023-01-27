// creating obj to store questions with options & correct ans
const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "Which of the following are CPU scheduling algorithms?",
    a: "Priority Scheduling",
    b: "Round Robin",
    c: "Short Job First",
    d: "All of the above",
    correct: "d",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
},
{
    question: "Which of the following keywords is used to define a variable in Javascript?",
    a: "var",
    b: "let",
    c: "both a and b",
    d: "none of the above",
    correct: "c",
},
{
    question: "Which of the following is not an operating system?",
    a: "Windows",
    b: "Linux",
    c: "Oracle",
    d: "DOS",
    correct: "c",
},
{
    question: "Which of the following methods can be used to display data in some form using Javascript?",
    a: "document.write()",
    b: "console.log()",
    c: "window.alert()",
    d: "All of the above",
    correct: "d",
},
{
    question: "How can a datatype be declared to be a constant type?",
    a: "let",
    b: "const",
    c: "var",
    d: "constant",
    correct: "b",
},
{
    question: "What is the maximum length of the filename in DOS?",
    a: "8",
    b: "5",
    c: "4",
    d: "12",
    correct: "a",
},
{
    question: "What keyword is used to check whether a given property is valid or not?",
    a: "in",
    b: "is in",
    c: "exits",
    d: "lies",
    correct: "a",
},
{
    question: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
    a: "Boolean",
    b: "Object",
    c: "Undefined",
    d: "Integer",
    correct: "b",
},
{
    question: "Which function is used to serialize an object into a JSON string in Javascript?",
    a: "Parse",
    b: "Convert()",
    c: "Stringify()",
    d: "None of the above",
    correct: "c",
},
{
    question: "Which of the following methods is used to access HTML elements using Javascript?",
    a: "getElementById",
    b: "getElementsByClassName",
    c: "Both a and b",
    d: "None of the above",
    correct: "c",
},
{
    question: "When was the first operating system developed?",
    a: "1948",
    b: "1950",
    c: "1949",
    d: "1951",
    correct: "b",
},
{
    question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
    a: "Throws an error",
    b: "Ignores the statements",
    c: "Gives warning",
    d: "None of the above",
    correct: "b",
},
{
    question: "The location of a resource on the internet is given by its?",
    a: "Protocol",
    b: "URL",
    c: "E-Mail Address",
    d: "ICQ",
    correct: "b",
},
{
    question: "How can we change the background color of an element?",
    a: "Background-color",
    b: "Color",
    c: "Colour",
    d: "Both b and c",
    correct: "a",
},
{
    question: "Which of the following is the extension of Notepad?",
    a: ".ppt",
    b: ".bmp",
    c: "xls",
    d: ".txt",
    correct: "d",
},
{
    question: "Which software prevents the external access to a system?",
    a: "Firewall",
    b: "Getway",
    c: "Router",
    d: "Vitus Checker",
    correct: "a",
},
{
    question: "Which of the following feature is also known as run-time binding or late binding?",
    a: "Dynamic Typing",
    b: "Dynamic Binding",
    c: "Dynamic Loading",
    d: "Data Hiding",
    correct: "b",
},
{
    question: "In how many ways can CSS be written in?",
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    correct: "c",
},
{
    question: "What is the full form of DBMS?",
    a: "Database Management",
    b: "DataBase Management System",
    c: "DataBase Management System",
    d: "DataBase Management Backup System",
    correct: "c",
},
{
    question: "How can we initialize an array in C language?",
    a: "int arr[2]=(10, 20)",
    b: "int arr(2)={10, 20}",
    c: "int arr[2] = {10, 20}",
    d: "int arr(2) = (10, 20)",
    correct: "c",
},
{
    question: "Which feature of OOPS derives the class from another class?",
    a: "Inheritance",
    b: "Data Hiding",
    c: "Encapsulation",
    d: "Plymorphism",
    correct: "a",
},
{
    question: "Who created the first DBMS?",
    a: "Edgar Frank Codd",
    b: "Charles Bachman",
    c: "Charles Babbage",
    d: "Sharon B. Codd",
    correct: "b",
},
{
    question: "What type of CSS is generally recommended for designing large web pages?",
    a: "Inline",
    b: "External",
    c: "Internal",
    d: "None of the above",
    correct: "c",
},
{
    question: "Which of the following highly uses the concept of an array?",
    a: "Binary Search tree",
    b: "Cashing",
    c: "Spatial locality",
    d: "Scheduling of Processes",
    correct: "c",
},
{
    question: "In which of the following formats data is stored in the database management system?",
    a: "Image",
    b: "Text",
    c: "Table",
    d: "Graph",
    correct: "c",
},
{
    question: "Which of the following transmission directions listed is not a legitimate channel?",
    a: "Simple",
    b: "Half Duplex",
    c: "Full Duplex",
    d: "Double Duplex",
    correct: "d",
},
];



let index = 0;     // question no.
let correct = 0,
    incorrect = 0,
    total = quizData.length; // total no. of questions
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    // if last question
    if (total === index) {
        return quizEnd()
    }
    reset()  // else load the next question
    const data = quizData[index]
    // adding questions 
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    // adding questions with options
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

// picking up user choosing value(i.e checked value) and comp with correct ans
document.querySelector("#submit").addEventListener(
    "click",
    function () {
        const data = quizData[index]
        const ans = getAnswer()
        // user choose ans match with correct option
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;         // move on to next question
        loadQuestion()
    }
)

// what option choose by user
const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

// sare inputs ko leke aao or unke check ko false kardo
// next question load karte time reset karna padega
const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

// if quiz end then declare result
const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);