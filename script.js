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
        ["index()", "map()", "filter()", "reduce()"], "filter()",
    ),

    new Question(
        
        "Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau", ["isNaN()", "includes()", "findIndex()", "isOdd()"], "includes()"),

    new Question(
        
        "Quelle méthode transforme du JSON en un objet Javascript ?", ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS"], "JSON.parse()"),

    new Question(

        "Quel objet Javascript permet d'arrondir à l'entier le plus proche", ["Math.ceil()", "Math.floor()", "Math.round()", "Math.random()"], "Math.round()")
];

console.log(questions);
