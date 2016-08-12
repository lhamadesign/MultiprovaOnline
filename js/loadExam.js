/* 
 * Controls the exam loader:
 * on online exam screen: loads question images
 */

$(document).ready(function (){
    var examId = 1;
    var path = window.location;

    $.get(path + "/js/database.json", function(data, status){
        loadQuestion(data.exam.question1);
    });

    function loadQuestion (question) {
        $("#enunciado").attr("src", path + question.url + question.enunciado);
        $.each(question.alternativas, function (key, value) {
            // var answer = $("<img src=" + path + question.url + value + " />");            
            var answer = $('<img>', {src : (path + question.url + value) });
            $("#resposta").append(answer);
        });
    }
    
});




