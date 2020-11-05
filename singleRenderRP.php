<?
$ErrMsg='';
try{
    require_once('./connetbook.php');
    $sql = 'insert into `restaurant_message` 
            (RES_NO,
            MEMBER_NO,
            RES_MES_TIME,
            RES_MESSAGE_WORD)

            VALUES
            (:RES_NO,
            :MEMBER_NO,
            :RES_MES_TIME,
            ":RES_MESSAGE_WORD"); 
            ';

    // echo date("Y-m-d H:i:s");

    $RPdata = $pdo->prepare($sql);
    $RPdata-> bindValue(':RES_NO',$_REQUEST['RES_NO']);
    $RPdata-> bindValue(':MEMBER_NO',$_REQUEST['MEMBER_NO']);
    $RPdata-> bindValue(':RES_MES_TIME',date("Y-m-d H:i:s"));
    $RPdata-> bindValue(':RES_MESSAGE_WORD',$_REQUEST['RES_MESSAGE_WORD']);
    $RPdata-> execute();

    if($RPdata->rowCount()==0){
        echo '資料有誤';
    }else{
        $RPresult = $RPdata->fetchAll(PDO::FETCH_ASSOC);
        echo JSON_encode($RPresult);
    }
    
}catch(PDOException $e){
    $ErrMsg.= $e->getMessage() . $e->getLine();
    echo $ErrMsg;
}


?>