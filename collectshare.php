<?php
$Errmsg = '';
session_start();
$share = $_REQUEST['share'];
$member = $_SESSION['MEMBER_NO'];
echo $_REQUEST['do'];
try{
    require_once('connectbook.php');
    if($_REQUEST['do']=='false'){
        $sql = "INSERT article_collection(MEMBER_NO,ARTICLE_NO)
                VALUES($member,$share)";
    }else{
        $sql = "DELETE FROM article_collection
                WHERE
                MEMBER_NO = $member AND 
                ARTICLE_NO = $share ;";
    }
    $data = $pdo->prepare($sql);
    $data-> execute();

}catch(PDOException $e){
    $Errmsg.= $e->getLine() . '<br>' . $e->getMessage();
    echo $Errmsg;
}

?>