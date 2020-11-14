<?php
$Errmsg = '';
session_start();
try{
    if(isset($_SESSION["MEMBER_ID"])===true){
        $user = array(
            "NO"=>$_SESSION["MEMBER_NO"],
            "NAME"=>$_SESSION["MEMBER_NAME"],
            "IMG"=>$_SESSION["MEMBER_IMAGE"],
        );
        echo json_encode($user);
    }else{
        $user = array(
            "NO"=>'0',
            "NAME"=>'訪客',
            "IMG"=>'icon.svg',
        );
        echo json_encode($user);
    }


}catch(PDOException $e){
    $Errmsg.= $e->getLine() . '<br>' . $e->getMessage();
    echo $Errmsg;
}


?>