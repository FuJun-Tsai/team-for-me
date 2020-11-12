<?php
$ErrMsg='';
// JOIN member_management mm on(A.MEMBER_NO = mm.MEMBER_NO) 
try{
    require_once("./connetbook.php");
    $sql = 'select 
                concat("R" , A.ARTICLE_NO) as id,
                A.ARTICLE_NO as no,
                mm.MEMBER_NAME as name,
                mm.MEMBER_IMAGE as headimg,
                A.ARTICLE_TITLE as title,
                ARTICLE_WORD as word,
                ARTICLE_DATE as date,
                ARTICLE_IMAGE1 as img,
                ARTICLE_KIND as kind

            from `article_sharing` A
                JOIN member_management mm on(A.MEMBER_NO = mm.MEMBER_NO) 
           ';
    $data = $pdo->prepare($sql);

    $data-> execute();
    if($data->rowCount()==0){
        echo 'PHP錯誤';
    }else{

        $result = $data->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
    }

}catch(PDOException $e){
    $ErrMsg.= '錯誤內容' . $e->getMessage() . '<br>';
    $ErrMsg.= '錯誤行數' . $e->getLine() . '<br>';
    echo $ErrMsg;
}

?>