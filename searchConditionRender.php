<?
$ErrMsg = '';
$condition = explode("&",$_REQUEST['condition']);
try{
    require_once('./connetbook.php');
    $sql = 'select  
                R.RES_NO as no,
                concat("R" , R.RES_NO) as id,
                R.RES_NAME as name,
                rk.KIND_NAME as kind,
                rs.STYLE_NAME as style,
                R.RES_IMAGE1 as img1,
                R.RES_SUMMARY as summary

            from `restaurant_management` R
                JOIN restaurant_style rs on (R.RES_STYLE = rs.STYLE_NO)
                JOIN restaurant_kind rk on (R.RES_KIND = rk.KIND_NO)
            ';

    if(strlen($_REQUEST['condition'])>1){
        $sql.= ' where ';
        if($condition[0]){
            $sql.= ' rk.KIND_NO = :kind ';
        };
        if($condition[0] and $condition[1]){
            $sql.= ' and ';
        };
        if($condition[1]){
            $sql.= ' rs.STYLE_NO in(:style) '; 
        };
    };

    $sql.= ' order by no ASC;';

    // echo '<br><br>' , $sql , '<br><br>' ;

    $data = $pdo->prepare($sql);
    if($condition[0]){
        $data-> bindValue(':kind',$condition[0]);
    };
    if($condition[1]){
        $data-> bindValue(':style',$condition[1]);
    };
    $data-> execute();

    if($data->rowCount()==0){
        echo 'error';
    }else{
        $result = $data->fetchAll(PDO::FETCH_ASSOC);
        echo JSON_encode($result);
    };

}catch(PDOException $e){
    $ErrMsg.= $e->getMessage() . $e->getLine();
    echo $ErrMsg;
}

?>