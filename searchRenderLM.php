<?
$ErrMsg='';
try{
    require_once('./connetbook.php');
    $sql = 'select 
                concat("R" , R.RES_NO) as resno,
                concat("L" , R.RES_MESSAGE_NO) as id,
                R.RES_MES_TIME as time,
                R.RES_MESSAGE_WORD as content,
                mm.MEMBER_IMAGE as mmimg

            from restaurant_message R
                JOIN member_management mm on(R.MEMBER_NO = mm.MEMBER_NO)    

            

            order by RES_NO;';
  
    $RESdata = $pdo->prepare($sql);

    $RESdata-> execute();
    if($RESdata->rowCount()==0){
        echo '資料有誤';
    }else{
        $result = $RESdata->fetchAll(PDO::FETCH_ASSOC);
        echo JSON_encode($result);
    }
    
}catch(PDOException $e){
    $ErrMsg.= $e->getMessage() . $e->getLine();
    echo $ErrMsg;
}


?>