<?php
$ErrMsg='';
$NO = explode('&',$_REQUEST['val']);
$word = $_REQUEST['word'];
echo($NO[0]);
echo($NO[1]);

try{
    require_once('connectbook.php');

    if($NO[1]==""){
        
        $sql = "INSERT INTO `article_report` 
            (ARTICLE_NO ,
            ART_REPORT_REASON,
            ART_REPORT_TIME,
            ART_REPORT_STATUS)

            VALUES
            ($NO[0],
            $word,
            now(),
            0); 
            ";

        $data = $pdo->prepare($sql);
        $data-> execute();

    }else{

        $sql = "INSERT INTO `report_article_message` 
            (ARTICLE_NO ,
            ARTICLE_MES_NO,
            ART_MES_REPORT_REASON,
            ART_MES_REPORT_TIME,
            ART_MES_REPORT_STATUS)

            VALUES
            ($NO[0],
            $NO[1],
            $word,
            now(),
            0); 
            ";

        $data = $pdo->prepare($sql);
        $data-> execute();

    }
   
}catch(PDOException $e){
    $ErrMsg.= $e->getMessage() . $e->getLine();
    echo $ErrMsg;
}
?>