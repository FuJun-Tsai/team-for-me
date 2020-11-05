<?
$ErrMsg='';
try{
    require_once('./connetbook.php');
    $sql = "select 
                R.RES_NO as no,
                R.RES_NAME as name,
                rk.KIND_NAME as kind,
                rs.STYLE_NAME as style,
                R.RES_IMAGE1 as img1,
                R.RES_IMAGE2 as img2,
                R.RES_IMAGE3 as img3,
                R.RES_IMAGE4 as img4,
                R.RES_INTRODUCTION as intro,
                R.RES_START as start,
                R.RES_CLOSE as close,
                R.RES_HOURS as trade,
                R.RES_TEL as tel,
                R.RES_ADDRESS as address

            from restaurant_management R
                JOIN restaurant_style rs on (r.RES_STYLE = rs.style_no)
                JOIN restaurant_kind rk on (r.RES_KIND = rk.kind_no)

            where R.RES_NO=:RES_NO

            order by RES_NO;";
  
    $RESdata = $pdo->prepare($sql);
    $RESdata-> bindValue(':RES_NO',$_REQUEST['RES_NO']);
    $RESdata-> execute();
    if($RESdata->rowCount()==0){
        echo '資料有誤';
    }else{
        $RESresult = $RESdata->fetch(PDO::FETCH_ASSOC);
        echo JSON_encode($RESresult);
    }

    
}catch(PDOException $e){
    $ErrMsg.= $e->getMessage() . $e->getLine();
    echo $ErrMsg;
}


?>