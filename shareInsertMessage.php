<?php
$ErrMsg='';
echo $_REQUEST['no'];
echo '<br><br>';
echo $_REQUEST['word'];
echo '<br><br>';

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
            1,
            now(),
            :word
            );";

    $data = $pdo->prepare($sql);
    $data-> bindValue(':no',$_REQUEST['no']);
    $data-> bindValue(':word',$_REQUEST['word']);
    $data-> execute();

    if($data->rowCount()==0){
        echo 'PHP錯誤';
    }else{
        $result = $data->fetch(PDO::FETCH_ASSOC);
        echo JSON_encode($result);
    }
    echo $_REQUEST['no'] , $_REQUEST['word'];

}catch(PDOException $e){
    $ErrMsg.= '錯誤內容' . $e->getMessage() . '<br>';
    $ErrMsg.= '錯誤行數' . $e->getLine() . '<br>';
    echo $ErrMsg;
}

// header("location:share.html");

?>