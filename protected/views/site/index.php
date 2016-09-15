<?php
    /* @var $this SiteController */
    $this->pageTitle=Yii::app()->name;
    Yii::app()->clientScript->registerScriptFile(Yii::app()->request->baseUrl . '/js/loadExam.js', CClientScript::POS_END)
?>

<!-- passar as informações da prova aqui-->



<section id="headInfo" class="col-xs-12">
    <div class="col-xs-12 text-center">
        <h5>Avaliação I - Álgebra Linear (CET00430)</h5>
    </div>
    
    <div class="col-xs-12 text-center">
        <nav id="NavQuestao">
            <h4><i>Questão <span id="n_questao"></span> / <span id="t_questao"></span></i></h4>
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
        <button class="btn btn-default pull-right" disabled="disabled" type="button" id="avancar">Próxima</button>        
    </div>

    <div id="respostasModal" class="modalHidden col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3 panel">
        <h4 class="text-center">Respostas</h4>
        <ul id="respostas" class="list-group">
        </ul>        
    </div>    
</section>
