<?php
$Errmsg='';
session_start();
$condition = $_SESSION['MEMBER_NO'];
try{
    require_once('connectbook.php');
    $sql = "SELECT MEMBER_NO ,
                   concat('R' , RES_NO) as ID
            FROM `restaurant_collection` 
            where ";
    
    $sql.= ' ; ';

    $data = $pdo->prepare($sql);
    $data-> execute();
    
    if($data->rowCount()==0){
        echo '資料有誤';
    }else{
        $result = $data->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
    }

}catch(PDOException $e){
    $Errmsg.= $e->getLine() . '<br>' . $e->getMessage();
    echo $Errmsg;
}

?>