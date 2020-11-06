<?
$ErrMsg='';
$nowdate = (string)date("Y-m-d");
$nowtime = (string)date("H:i:s");
$result = "$nowdate $nowtime";
$test = explode(",",$_REQUEST['test']);
try{
    require_once('./connetbook.php');
    $sql = "insert into `restaurant_message` 
            (RES_NO,
            MEMBER_NO,
            RES_MES_TIME,
            RES_MESSAGE_WORD)

            VALUES
            (:RES_NO,
            :MEMBER_NO,
            '$result',
            :RES_MESSAGE_WORD); 
            ";


    $RPdata = $pdo->prepare($sql);
    $RPdata-> bindValue(':RES_NO',$test[0]);
    $RPdata-> bindValue(':MEMBER_NO',$test[1]);
    $RPdata-> bindValue(':RES_MESSAGE_WORD',$_REQUEST['RES_MESSAGE_WORD']);
    $RPdata-> execute();

    if($RPdata->rowCount()==0){
        echo '資料有誤';
    }else{
        $RPresult = $RPdata->fetch(PDO::FETCH_ASSOC);
        echo JSON_encode($RPresult);
    }
    
}catch(PDOException $e){
    $ErrMsg.= $e->getMessage() . $e->getLine();
    echo $ErrMsg;
}


?>