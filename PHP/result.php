<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Facility Detail</title>
</head>
<body>
    <?php
    $hospital = $_REQUEST['hos'];
    $facility = $_REQUEST['fac'];
    $district = $_REQUEST['dis'];

    $db = new mysqli('localhost', 'root', 'Kv@25031999', 'hospitalManagement');

    if(mysqli_connect_errno()) {
        echo "<h1>ERROR</h2>";
        exit;
    }
    print_r($_REQUEST);
    echo "Success";
    ?>
</body>
</html>