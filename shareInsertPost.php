<?php
$ErrMsg='';
echo $_FILES['img']['type'];
// JOIN member_management mm on(A.MEMBER_NO = mm.MEMBER_NO) 
try{
    require_once("./connetbook.php");
    $sql = "INSERT INTO `article_sharing` (
            MEMBER_NO,
            ARTICLE_TITLE,
            ARTICLE_WORD,
            ARTICLE_DATE,
            ARTICLE_KIND,
            ARTICLE_IMAGE1
            )

            VALUES(
            '1',
            :title,
            :word,
            now(),
            :kind,
            Art_6
            );";

    $data = $pdo->prepare($sql);
    $data-> bindValue(':title',$_REQUEST['title']);
    $data-> bindValue(':word',$_REQUEST['word']);
    $data-> bindValue(':kind',$_REQUEST['kind']);
    // $data-> bindValue(':img',$_FILES['img']['name']);
    $data-> execute();

    if($data->rowCount()==0){
        echo 'PHP錯誤';
    }else{
        $result = $data->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
    }

    // $from = $_FILES["img"]["tmp_name"]; //暫存區中的路徑和檔名
    // $fileName = $_FILES["img"]["name"];;//原始檔案名稱
    // $to = "image/article_sharing/{$fileName}";
    // if(copy($from, $to)){
    //     echo "上傳成功<br>";
    // }else{
    //     echo "上傳失敗<br>";
    // }

}catch(PDOException $e){
    $ErrMsg.= '錯誤內容' . $e->getMessage() . '<br>';
    $ErrMsg.= '錯誤行數' . $e->getLine() . '<br>';
    echo $ErrMsg;
}


?>