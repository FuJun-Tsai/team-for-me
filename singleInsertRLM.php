<?
header('Content-Type: application/json; charset=UTF-8');
$ErrMsg='';
$test = explode(",",$_REQUEST['RES_MEM']);
try{
    require_once('./connetbook.php');
    $sql = "INSERT into `restaurant_message` 
            (RES_NO,
            MEMBER_NO,
            RES_MES_TIME,
            RES_MESSAGE_WORD)

            VALUES
            (:RES_NO,
            :MEMBER_NO,
            now(),
            :RES_MESSAGE_WORD);";

    $RPdata = $pdo->prepare($sql);
    $RPdata-> bindValue(':RES_NO',$test[0]);
    $RPdata-> bindValue(':MEMBER_NO',$test[1]);
    $RPdata-> bindValue(':RES_MESSAGE_WORD',$_REQUEST['RES_MESSAGE_WORD']);
    $RPdata-> execute();

    // echo $test[0] , $test[1] , '<br>' , $_REQUEST['RES_MESSAGE_WORD'];
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