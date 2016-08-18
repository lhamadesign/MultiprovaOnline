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
        
        currentQuestion = document.createElement("input");
        currentQuestion.setAttribute("type", "hidden");
        currentQuestion.value = 1;
        currentQuestion.id = "currentQuestion";
        currentQuestion = document.getElementById("resposta").appendChild(currentQuestion);
        currentQuestion.addEventListener("onchange", function() {
            if( currentQuestion.value > 1 ) {
                $("#voltar") 
                    .prop("disabled", false)
                    .on("click", prevQuestion);
            }
            else {
                $("#voltar").prop("disabled", "disabled");
            }
        }, false);

        $("#t_questao").html(Object.keys(exam).length);
        loadQuestion(exam.question1);
    });

    function loadQuestion (question) {        
        currentQuestion.value = question.numero;
        $("#n_questao").html(currentQuestion.value);
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
        if(currentQuestion.value >= Object.keys(exam).length) {
            document.write("Prova Finalizada.");
        }
        else {
            currentQuestion.value = parseInt(currentQuestion.value) + 1;            
            loadQuestion (exam["question" + currentQuestion.value]);
        }
    } 

    $("#avancar").on("click", nextQuestion); 
});




