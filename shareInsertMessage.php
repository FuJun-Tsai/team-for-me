<?php
$ErrMsg='';
session_start();
$no = $_SESSION["MEMBER_NO"];
$word = $_REQUEST["word"];
$NO = $_REQUEST["no"];
try{
    require_once("./connectbook.php");

    $sql = "INSERT INTO `article_message` (
            ARTICLE_NO,
            MEMBER_NO,
            ART_MES_TIME,
            ART_MESSAGE_WORD
            )

            VALUES(
            :no,
            $no,
            now(),
            :word
            );";

    $data = $pdo->prepare($sql);
    $data-> bindValue(':no',$_REQUEST['no']);
    $data-> bindValue(':word',$_REQUEST['word']);
    $data-> execute();

    $sql = "SELECT 
                A.ARTICLE_NO as ano,
                A.MEMBER_NO as mno,
                A.ART_MES_TIME as time,
                A.ART_MESSAGE_WORD as word,
                mm.MEMBER_NAME as name,
                mm.MEMBER_IMAGE as img
            FROM
                article_message A
                JOIN member_management mm ON(A.MEMBER_NO = mm.MEMBER_NO)
            WHERE
                A.ART_MESSAGE_WORD=$word AND
                A.MEMBER_NO=$no AND
                A.ARTICLE_NO=$NO 
            ;";

    $data = $pdo->prepare($sql);
    $data-> execute();

    if($data->rowCount()==0){
        echo 'error';
    }else{
        $result = $data->fetch(PDO::FETCH_ASSOC);
        echo json_encode($result);
    }

}catch(PDOException $e){
    $ErrMsg.= '錯誤內容' . $e->getMessage() . '<br>';
    $ErrMsg.= '錯誤行數' . $e->getLine() . '<br>';
    echo $ErrMsg;
}

// header("location:share.html");

?>