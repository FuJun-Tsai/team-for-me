<?php 
session_start();
if(isset($_SESSION["MEMBER_ID"]) === true){

	$result = array(
		"MEMBER_ID"=>$_SESSION["MEMBER_ID"], 
		"MEMBER_PSW"=>$_SESSION["MEMBER_PSW"], 
		"MEMBER_IMAGE"=>$_SESSION["MEMBER_IMAGE"],
		"MEMBER_NO"=>$_SESSION["MEMBER_NO"],

	);
	echo json_encode($result);
}else{
	echo "{}";
}
?>