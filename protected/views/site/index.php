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
        <h4>Questão <span id="n_questao">1</span>/<span id="t_questao">9</span></h4>
    </div>
</section>

<section id="prova" class="col-xs-12">
    <div class="jumbotron">
        <img id="enunciado" src="" class="img img-responsive" />
    </div>
    
    <div id="resposta">
    </div>
</section>

