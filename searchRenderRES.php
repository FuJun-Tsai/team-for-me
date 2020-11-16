<?php
$ErrMsg='';
try{
    require_once('./connectbook.php');
    $sql = 'select 
                R.RES_NO as no,
                concat("R" , R.RES_NO) as id,
                R.RES_NAME as name,
                rk.KIND_NAME as kind,
                rs.STYLE_NAME as style,
                R.RES_IMAGE1 as img1,
                R.RES_SUMMARY as summary

            from restaurant_management R
                JOIN restaurant_style rs on (r.RES_STYLE = rs.style_no)
                JOIN restaurant_kind rk on (r.RES_KIND = rk.kind_no)

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