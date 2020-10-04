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

        "Quelle méthode Javascript permet de filtrer les éléments d'un tableau",
        ["index()", "map()", "filter()", "reduce()"],
         "filter()"
    ),

    new Question(
        
        "Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau",
         ["isNaN()", "includes()", "findIndex()", "isOdd()"],
          "includes()"
          
    ),

    new Question(
        
        "Quelle méthode transforme du JSON en un objet Javascript ?", 
        ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS"]
        , "JSON.parse()"
    ),

    new Question(

        "Quel objet Javascript permet d'arrondir à l'entier le plus proche", 
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
    hadEnded() {
        return this.currentQuestionIndex >= this.questions.lenght;
    }
    
}


// regroup all function relative to the app display 
const display =  {

}


// game logic 

 quizApp = () => {

    if (quiz.hadEnded()) {
        // End

        display.endQuiz();
        

    } else {

        // Logic
        // question 
        // choice 

    }
}




// create quiz
let quiz = new Quiz(questions);

console.log(quiz);
