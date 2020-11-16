<?php
$ErrMsg='';
// JOIN member_management mm on(A.MEMBER_NO = mm.MEMBER_NO) 
try{
    require_once("./connectbook.php");
    $sql = 'SELECT 
                A.ARTICLE_NO AS no,
                mm.MEMBER_NAME AS name,
                mm.MEMBER_IMAGE AS headimg,
                A.ART_MES_TIME AS time,
                A.ART_MESSAGE_WORD AS word
                
            FROM `article_message` A
                JOIN member_management mm ON(A.MEMBER_NO = mm.MEMBER_NO)

            WHERE A.ARTICLE_NO = :no
           ;';
    $data = $pdo->prepare($sql);
    $data-> bindValue(':no',$_REQUEST['no']);
    $data-> execute();
    // if($data->rowCount()==0){
        // echo 'PHP錯誤';
    // }else{

        $result = $data->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
    // }

}catch(PDOException $e){
    $ErrMsg.= '錯誤內容' . $e->getMessage() . '<br>';
    $ErrMsg.= '錯誤行數' . $e->getLine() . '<br>';
    echo $ErrMsg;
}


?>