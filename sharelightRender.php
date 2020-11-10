<?php
$ErrMsg='';
// JOIN member_management mm on(A.MEMBER_NO = mm.MEMBER_NO) 
try{
    require_once("./connetbook.php");
    $sql = 'select 
                A.ARTICLE_NO as no,
                mm.MEMBER_NAME as name,
                mm.MEMBER_IMAGE as headimg,
                A.ART_MES_TIME as time,
                A.ART_MESSAGE_WORD as word
                
            from `article_message` A
                JOIN member_management mm on(A.MEMBER_NO = mm.MEMBER_NO)

            where A.ARTICLE_NO = :no
           ;';
    $data = $pdo->prepare($sql);
    $data-> bindValue(':no',$_REQUEST['no']);
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