<?php
    /* @var $this SiteController */
    $this->pageTitle=Yii::app()->name;
    Yii::app()->clientScript->registerScriptFile(Yii::app()->request->baseUrl . '/js/loadExam.js', CClientScript::POS_END)
?>

<!-- passar as informações da prova aqui-->



<section id="headInfo" class="col-xs-12">
    <div class="col-xs-6 text-left">
        <h4>Avaliação I</h4>
        <h5>Álgebra Linear (CET00430)</h5>
    </div>
    
    <div id="navigateQuest" class="col-xs-6 text-right">
        <nav id="questionNav">
            <h4><i>Questão <span id="n_questao"></span> / <span id="t_questao"></span></i></h4>
            <ul>
            </ul>
        </nav>
    </div>
</section>

<section id="prova" class="col-xs-12">
    <div class="panel">
        <div class="panel-header">Enunciado</div>
        <img id="enunciado" src="" class="img img-responsive" />
    </div>

    <div class="panel">
        <div id="tipoResposta" class="panel-header"><i class="text-muted">Resposta...</i></div>
        <div class="panel-body">
            <form id="resposta" class="col-xs-12">
                <?php echo("<input type='hidden' name='prova[id]' value=" . $id ." />"); ?>
            </form>
        </div>
    </div>
    
    <div class="text-center">
            <button class="btn btn-default pull-right" type="button" id="avancar">Próxima</button>        
    </div>

    <div style="display: none;" id="respostas" class="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3">
        
    </div>
</section>