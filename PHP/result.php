<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/hospital_style.css" />
    <title>Facility Detail</title>
    <script src="../JScript/jquery-3.6.0.min.js"></script>
</head>
<body>
    <?php
    require_once 'Database.php';
    require_once 'Hospital.php';
    require_once './PHPMailer/credential.php';

    function createResultPage(){
        $hos = $_REQUEST['hos'];
        $fac = $_REQUEST['fac'];
        $database = new Database('localhost', USER, DB_PASS, DB);
        //$database = new Database('sql206.epizy.com','epiz_29765198','iAiobEg7xrR','epiz_29765198_hospitalManagement');
        $hospital = $database->getHospital($hos);
        $hospital->display($fac);
    }

    createResultPage();
        
    //echo json_encode($_REQUEST);
    
    // print_r($_REQUEST);
    // echo "Success";
    echo "<script src=\"../JScript/resultScript.js\"></script>";
    ?>

</body>
</html>