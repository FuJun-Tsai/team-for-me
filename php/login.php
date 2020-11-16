<?php
try{
  session_start();
  require_once("../connectbook.php");
  $sql = " SELECT MEMBER_ID ,MEMBER_PSW ,MEMBER_IMAGE ,MEMBER_NO ,MEMBER_NAME
  FROM `member_management` 
  WHERE MEMBER_ID=:MEMBER_ID
  AND MEMBER_PSW=:MEMBER_PSW";
  $member = $pdo->prepare($sql);
  $member->bindValue(":MEMBER_ID", $_POST["MEMBER_ID"]);
  $member->bindValue(":MEMBER_PSW", $_POST["MEMBER_PSW"]);
  $member->execute();
  if( $member->rowCount()==0){ //查無此人
	  echo "{}";
  }else{ //登入成功
    //自資料庫中取回資料
  	$memRow = $member->fetch(PDO::FETCH_ASSOC);
    // //--------------將登入者的資料寫入session
    $_SESSION["MEMBER_ID"] = $memRow["MEMBER_ID"];
    $_SESSION["MEMBER_PSW"] = $memRow["MEMBER_PSW"];
    $_SESSION["MEMBER_IMAGE"] = $memRow["MEMBER_IMAGE"];
    $_SESSION["MEMBER_NO"] = $memRow["MEMBER_NO"];
    $_SESSION["MEMBER_NAME"] = $memRow["MEMBER_NAME"];

    //送出登入者的相關資料
    echo json_encode($memRow) ;
  }
}catch(PDOException $e){
	$error = array("errorMsg"=>$e->getMessage());
  echo json_encode($error);//{"errorMsg":"......."}
}
?>

