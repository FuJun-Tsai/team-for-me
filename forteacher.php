<?
$ErrMsg='';

try{
    require_once('./connetbook.php');
    $sql = 'select * from restaurant_management';
    $data = $pdo->prepare($sql);
    $data->execute();
    if($data->rowCount()==0){
        echo JSON_encode('資料有誤');;
    }else{
        $result = $data->fetchAll(PDO::FETCH_ASSOC);
        echo JSON_encode($result);
    }
    
}catch(PDOException $e){
    $ErrMsg.= $e->getMessage() . $e->getLine();
    echo $ErrMsg;
}


?>