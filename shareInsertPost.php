<?php
$ErrMsg='';
// print_r($_FILES['moodPic']['type']);
// JOIN member_management mm on(A.MEMBER_NO = mm.MEMBER_NO) 
try{
    require_once("./connetbook.php");
    $sql = "SELECT MAX(ARTICLE_NO) 
            FROM article_sharing";
    $data = $pdo->prepare($sql);
    $data-> execute();
    $num = $data->fetch(PDO::FETCH_ASSOC);
    $num = $num['MAX(ARTICLE_NO)'];
    $num = (integer) $num;
    $num += 1;
    $type = explode('/',$_FILES['moodPic']['type'])[1];

    $imgname = 'Art_' . "{$num}" . ".$type"; 

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
            '$imgname'
            );";

    $sql.= " ORDER BY `ARTICLE_NO` ASC";

    $data = $pdo->prepare($sql);
    $data-> bindValue(':title',$_REQUEST['moodTitle']);
    $data-> bindValue(':word',$_REQUEST['moodContent']);
    $data-> bindValue(':kind',$_REQUEST['moodClass']);
    // $data-> bindValue(':img',$_FILES['moodPic']['name']);
    $data-> execute();

    if($data->rowCount()==0){
        echo 'PHP錯誤';
    }

    $from = $_FILES["moodPic"]["tmp_name"];
    $fileName = $_FILES["moodPic"]["name"];
    $to = "image/article_sharing/{$imgname}";
    if(copy($from, $to)){
        echo "上傳成功<br>";
    }else{
        echo "上傳失敗<br>";
    }

}catch(PDOException $e){
    $ErrMsg.= '錯誤內容' . $e->getMessage() . '<br>';
    $ErrMsg.= '錯誤行數' . $e->getLine() . '<br>';
    echo $ErrMsg;
}

header("location:share.html");

?>