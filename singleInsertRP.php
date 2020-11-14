<?
header('Content-Type: application/json; charset=UTF-8');
$ErrMsg='';
$test = explode('&',$_REQUEST['MESSAGE_NO']);
// echo($test[0]);
// echo($test[1]);
// echo '<br><br>';
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
            now(),
            0); 
            ";


    $RPdata = $pdo->prepare($sql);
    $RPdata-> bindValue(':MESSAGE_NO',$test[0]);
    $RPdata-> bindValue(':RES_MES_REPORT_REASON',$_REQUEST['RES_MES_REPORT_REASON']);
    $RPdata-> execute();

    if($RPdata->rowCount()==0){
        echo '資料有誤';
    }else{
        // $RPresult = $RPdata->fetch(PDO::FETCH_ASSOC);
        // echo JSON_encode($RPresult);
    }
    
}catch(PDOException $e){
    $ErrMsg.= $e->getMessage() . $e->getLine();
    echo $ErrMsg;
}
// header("location:singlerestaurant.html$test[1]");
// header("location:singlerestaurant.html?RES_NO=15");

?>