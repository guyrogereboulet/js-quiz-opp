class Question {
    constructor (text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

let questions = [
    new Question(

        "Quale metodo JavaScript consente di filtrare gli elementi di un array ?",
        ["index()", "map()", "filter()", "reduce()"],
         "filter()"
    ),

    new Question(
        
        "Quale metodo JavaScript ti consente di verificare se un elemento è in un array ?",
         ["isNaN()", "includes()", "findIndex()", "isOdd()"],
          "includes()"
          
    ),

    new Question(
        
        "Quale metodo trasforma JSON in un oggetto JavaScript ?", 
        ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS"]
        , "JSON.parse()"
    ),

    new Question(

        "Quale oggetto JavaScript consente di arrotondare al numero intero più vicino ?", 
        ["Math.ceil()", "Math.floor()", "Math.round()", "Math.random()"]
        , "Math.round()"
    )
];

// console.log(questions);

class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.currentQuestionIndex = 0;
    }

    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    guess(answer) {
        if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.currentQuestionIndex++;
    }
    hasEnded() {
        return this.currentQuestionIndex >= this.questions.length;
    }
    
}


// regroup all function relative to the app display 
const display =  {
    elementShown: function (id,text) {
        let element = document.getElementById(id);
        element.innerHTML = text;
    },
    endQuiz: function () {
        let endQuizHTML = `
            <h1>Quiz terminato !</h1>
            <h3> Il vostro score è di : ${quiz.score} / ${quiz.questions.length}</h3>`;
        this.elementShown("quiz", endQuizHTML);
    },
    question: function() {
        this.elementShown("question", quiz.getCurrentQuestion().text)
    },

    choices: function() {
        let choices = quiz.getCurrentQuestion().choices;

        guessHandler = (id, guess) => {
            document.getElementById(id).onclick = function() {
                quiz.guess(guess);
                quizApp();
            }
        }
        for (let i = 0; i < choices.length; i++) {
            this.elementShown("choice" + i,choices[i]);
            guessHandler("guess" + i, choices[i]);
        } 

    },

    progress: function() {
        let currentQuestionNumber = quiz.currentQuestionIndex + 1;
        this.elementShown("progress", "Domanda " + currentQuestionNumber + " su " + quiz.questions.length);
    }


}



// Game logic
quizApp = () => {
    if (quiz.hasEnded()) {
        display.endQuiz();
    } else {
        display.question();
        display.choices();
        display.progress();
    }
}

// create quiz
let quiz = new Quiz(questions);
quizApp();

console.log(quiz);





