<?
$ErrMsg='';
try{
    require_once('./connetbook.php');
    $sql = '';

    $RPdata = $pdo->prepare($sql);
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