<?php
$ErrMsg='';
session_start();

try{
    require_once('./connectbook.php');
    $sql = 'select 
                R.RES_NO as no,
                concat("L" , R.RES_MESSAGE_NO) as id,
                mm.MEMBER_IMAGE as img,
                mm.MEMBER_NAME as name,
                R.RES_MESSAGE_WORD as word,
                R.RES_MES_TIME as time

            from restaurant_message R
                JOIN restaurant_management rm on (R.RES_NO = rm.RES_NO)
                JOIN member_management mm on (R.MEMBER_NO = mm.MEMBER_NO)

            where R.RES_NO=:RES_NO

            order by R.RES_NO;';

    $LMdata = $pdo->prepare($sql);
    $LMdata-> bindValue(':RES_NO',$_REQUEST['RES_NO']);
    $LMdata-> execute();

    $LMresult = $LMdata->fetchAll(PDO::FETCH_ASSOC);
    echo JSON_encode($LMresult);
    
}catch(PDOException $e){
    $ErrMsg.= $e->getMessage() . $e->getLine();
    echo $ErrMsg;
}


?>