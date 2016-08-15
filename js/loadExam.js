/* 
 * Controls the exam loader:
 * on online exam screen: loads question images
 */

$(document).ready(function (){
    var examId = 1;
    var path = window.location;
    var exam;
    var currentQuestion;

    $.get(path + "/js/database.json", function(data, status){
        exam = data.exam;
        console.log(exam.question1.numero)
        currentQuestion = 1;
        $("#t_questao").html(exam.length);
        loadQuestion(exam.question1);
    });

    function loadQuestion (question) {        
        currentQuestion = question.numero;
        $("#n_questao").html(currentQuestion);
        $("#enunciado").attr("src", path + question.url + question.enunciado);
        var answer = $('<input>', {type: 'hidden', name: 'prova[' + question.numero + ']'});
        $("#respostas").append(answer);
        answer = $("#respostas > input")[question.numero-1];
        $("#resposta").empty();

        $.each(question.alternativas, function (key, value) {            
            var choice = $('<img>', {class: 'alternativa', src : (path + question.url + value), dataKey: key});
            $(choice).on("click", function(){
                $(answer).val(key);
            });
            $("#resposta").append(choice);
        });
    }

    function nextQuestion () {
        if(currentQuestion < exam.length) {
            document.write("Prova Finalizada.");
        }
        else {
            currentQuestion++;
            loadQuestion (exam["question" + currentQuestion]);
        }
    } 

    $("#avancar").on("click", nextQuestion);
    
});




