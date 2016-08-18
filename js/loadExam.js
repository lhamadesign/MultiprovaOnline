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
        $("#t_questao").html(Object.keys(exam).length);
        loadQuestion(exam.question1);
    });

    function loadQuestion (question) {        
        currentQuestion = question.numero;
        $("#n_questao").html(currentQuestion);
        $("#enunciado").attr("src", path + question.url + question.enunciado);
        $("#resposta .questaoAtual").fadeOut().removeClass("questaoAtual");
        var answer = $('<div>', { id: 'questao' + question.numero, class: 'form-group questaoAtual'});
        $("#resposta").append(answer);

        if(question.objetiva == true) {
            // RESPOSTA ALTERNATIVA
            $("#tipoResposta").html('<strong>Objetiva</strong> (Escolha apenas 1 alternativa)');
            $.each(question.alternativas, function (key, value) {
                var label = $('<label>', {class: 'col-xs-4 col-lg-4'});
                var input = $('<input>', {type: 'radio', name: 'prova[' + question.numero + ']', value: key});
                $(label).append(input);
                var image = $('<img>', {class: 'alternativa', src : (path + question.url + value), dataKey: key});
                $(label).append(image);
                $("#questao" + question.numero).append(label);
            });
        } else {
            // RESPOSTA ESCRITA (PESSOAL)
            $("#tipoResposta").html('<strong>Discursiva</strong> (Elabore sua resposta pessoal)');
            var answerField = $('<textarea>', {class: 'form-control col-xs-12', name: 'prova[' + question.numero + ']'});
            $("#questao" + question.numero).append(answerField);
        }
    }

    function nextQuestion () {
        if(currentQuestion >= Object.keys(exam).length) {
            document.write("Prova Finalizada.");
        }
        else {
            currentQuestion++;
            loadQuestion (exam["question" + currentQuestion]);
        }
    } 

    function markChoice (choice) {
        
    }

    $("#avancar").on("click", nextQuestion);
    
});




