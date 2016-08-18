<?php
    /* @var $this SiteController */
    $this->pageTitle=Yii::app()->name;
    Yii::app()->clientScript->registerScriptFile(Yii::app()->baseUrl . '/js/loadExam.js', CClientScript::POS_END)
?>

<!-- passar as informações da prova aqui-->



<section id="headInfo" class="col-xs-12">
    <div class="col-xs-6 text-left">
        <h4>Avaliação I</h4>
        <h5>Álgebra Linear (CET00430)</h5>
    </div>
    
    <div class="col-xs-6 text-right">
        <h4><i>Questão <span id="n_questao"></span> / <span id="t_questao"></span></i></h4>
    </div>
</section>

<section id="prova" class="col-xs-12">
    <div class="panel">
        <div class="panel-header"><h4>Enunciado</h4></div>
        <img id="enunciado" src="" class="img img-responsive" />
    </div>
    

    <h4 id="tipoResposta" class="col-xs-10 col-xs-offset-1 text-center"></h4>
    
    <form id="resposta" class="col-xs-12">
    </form>

    <div class="col-xs-12">
        <button class="btn btn-default" type="button" id="avancar">Próxima</button>
    </div>
</section>

<form id="respostas">
</form>

