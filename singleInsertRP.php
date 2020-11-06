<?
$ErrMsg='';
$nowdate = (string)date("Y-m-d");
$nowtime = (string)date("H:i:s");
$datetime = "$nowdate $nowtime";
try{
    require_once('./connetbook.php');
    $sql = "insert into `report_restaurant_message` 
            (MESSAGE_NO,
            RES_MES_REPORT_REASON,
            RES_MES_REPORT_TIME,
            RES_MES_REPORT_STATUS)

            VALUES
            (:MESSAGE_NO,
            :RES_MES_REPORT_REASON,
            '$datetime',
            0); 
            ";


    $RPdata = $pdo->prepare($sql);
    $RPdata-> bindValue(':MESSAGE_NO',$_REQUEST['test']);
    $RPdata-> bindValue(':RES_MES_REPORT_REASON',$_REQUEST['RES_MES_REPORT_REASON']);
    $RPdata-> execute();

    if($RPdata->rowCount()==0){
        echo '資料有誤';
    }else{
        // $RPresult = $RPdata->fetch();
        // echo JSON_encode($RPresult);
    }
    
}catch(PDOException $e){
    $ErrMsg.= $e->getMessage() . $e->getLine();
    echo $ErrMsg;
}


?>