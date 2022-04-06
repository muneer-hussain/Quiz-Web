let opt1 = document.querySelector("#question1")
let opt2 = document.querySelector("#question2")
let opt3 = document.querySelector("#question3")
let opt4 = document.querySelector("#question4")
let question = document.querySelector(".question")
let options = document.querySelectorAll(".options")
let submit = document.querySelector("#submit")
let queIndex = document.querySelector("#questionIndex");

let rightAns = 0;
let wrongAns = 0;

const questions = [{
        'ques': "Which of them is a markup language ?",
        'a': "CSS",
        'b': "Ruby",
        'c': "HTML",
        'd': "Java",
        'correct': "c",
    },
    {
        'ques': 'What is the full form of CSS ?',
        'a': 'Client Side Service',
        'b': 'Customer Service Suppourt',
        'c': 'Computer System Software',
        'd': 'Cascading Style Sheet',
        'correct': 'd'
    },
    {
        'ques': 'Who invent CSS ?',
        'a': "Brendan Eich",
        'b': "Dennis Ritchie ",
        'c': "Rasmus Lerdorf",
        'd': "Håkon Wium Lie",
        'correct': "d",
    },
    {
        'ques': "What is the extension of Javascript ?",
        'a': ".javascript",
        'b': ".Java",
        'c': ".JS",
        'd': ".JScript",
        'correct': "c",
    },
    {
        'ques': "In which year javascript invented ?",
        'a': "1995",
        'b': "1990",
        'c': "1999",
        'd': "1997",
        'correct': "a",
    },
    {
        'ques': "What is the full form of JSON ?",
        'a': 'JavaScript Object Number',
        'b': 'JavaScript Output Number',
        'c': 'JavaScript Object Notation',
        'd': 'Java Screen Output Numeric',
        'correct': 'c'
    },
    {
        // end 
    },
]

let totalQues = questions.length;


let index = 0;
const que = questions[index]

submit.addEventListener("click", () => {
    index = index + 1;
    questions[index];
    loadQuestions();
    clearRadioBtn();
    indexNum();
    openResultBox();
})

function loadQuestions() {
    const que = questions[index];
    question.textContent = index + 1 + ') ' + questions[index].ques;
    opt1.innerText = que.a;
    opt2.innerText = que.b;
    opt3.innerText = que.c;
    opt4.innerText = que.d;
}

loadQuestions();

function clearRadioBtn() {
    options.forEach(
        (input) => {
            return input.checked = false;
        }
    )
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getanswer();
    if (ans === data.correct) {
        rightAns++;
    } else {
        wrongAns++;
    }
}

const getanswer = () => {
    let answer;
    options.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value
            }
        }
    )
    return answer;
}

function indexNum() {
    const totalQuestions = questions.length - 1;
    let slash = "/";
    let indexNumber = index + 1;
    queIndex.innerText = indexNumber + slash + totalQuestions;
}
indexNum();

function openResultBox() {
    if (index == totalQues - 1) {
        return result();
    }
}

function percentage() {
    const totalQuestions = questions.length - 1;
    let percentage = rightAns / totalQuestions * 100;
    return percentage.toFixed(0);
}

let gradeShow;
let remarks;

function gradeRemark() {
    if (percentage() >= 80 && percentage() <= 100) {
        gradeShow = 'A1';
        remarks = 'Exceptional';
    } else if (percentage() >= 70 && percentage() <= 79) {
        gradeShow = 'A';
        remarks = "Excellent";
    } else if (percentage() >= 60 && percentage() <= 69) {
        gradeShow = 'B';
        remarks = "Very Good";
    } else if (percentage() >= 50 && percentage() <= 59) {
        gradeShow = 'C';
        remarks = "Good";
    } else if (percentage() >= 40 && percentage() <= 49) {
        gradeShow = 'D';
        remarks = "Very Fair";
    } else if (percentage() >= 33 && percentage() <= 39) {
        gradeShow = 'E';
        remarks = "Fair";
    } else if (percentage() >= 0 && percentage() <= 32) {
        gradeShow = 'F';
        remarks = "Fail";
    }
    let gradeRemarks = [gradeShow, remarks]
    return gradeRemarks
}

function result() {
    document.getElementById("quiz").innerHTML = `
    <p style ="font-weight:bold;">Thank You for Playing. Quiz Is Now End</p>
    <hr>
    <p style ="font-weight:bold;">Your Score Is :</p>
    <p style ="font-weight:bold;">Right Answers: ${rightAns}</p>
    <p style ="font-weight:bold;">Wrong Answers: ${wrongAns}</p>
    <p style ="font-weight:bold;">Percentage : ${percentage()}%</p>
    <p style ="font-weight:bold;">Grade : ${gradeRemark()[0]}</p>
    <p style ="font-weight:bold;">Remarks : ${gradeRemark()[1]}</p>
    `;
    percentage();
    grade()
}
