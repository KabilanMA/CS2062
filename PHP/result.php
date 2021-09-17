<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/hospital_style.css" />
    <title>Facility Detail</title>
</head>
<body>
    <?php
    require_once('Database.php');
    require_once('Hospital.php');
    $hos = $_REQUEST['hos'];
    $fac = $_REQUEST['fac'];
    $dis = $_REQUEST['dis'];

    $database = new Database('localhost','root','Kv@25031999','hospitalManagement');
    $hospital = $database->getFacilityList($hos);
    $hospital->display($fac);
    // print_r($_REQUEST);
    // echo "Success";
    ?>
</body>
</html>