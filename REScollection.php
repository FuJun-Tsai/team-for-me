<?php
$Errmsg='';
session_start();
// $condition = isset($_SESSION['MEMBER_NO']) ? $_SESSION['MEMBER_NO'] : '0';
$condition = $_SESSION['MEMBER_NO'];

try{
    require_once('connectbook.php');
    $sql = "SELECT MEMBER_NO ,
                   concat('R' , RES_NO) as ID
            FROM `restaurant_collection` 
            where ";
    
    if(isset($_SESSION['MEMBER_ID'])===true){
        $sql.= " MEMBER_NO = '$condition' ";
    }else{
        $sql.= " MEMBER_NO = 0 ";
    }
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