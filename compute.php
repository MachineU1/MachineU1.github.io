<?php
echo $_POST['age'];
?>
<!--
// define variables and set to empty values
$age = $gender = $cp = $trestbps = $chol = $fbs = $restecg = $thalach = $exang = $oldpeak = $slope = $ca = $thal = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $age = test_input($_POST["age"]);
  $gender = test_input($_POST["gender"]);
  $cp = test_input($_POST["cp"]);
  $trestbps = test_input($_POST["trestbps"]);
  $chol = test_input($_POST["chol"]);
  $fbs = test_input($_POST["fbs"]);
  $restecg = test_input($_POST["restecg"]);
  $thalach = test_input($_POST["thalach"]);
  $exang = test_input($_POST["exang"]);
  $oldpeak = test_input($_POST["oldpeak"]);
  $slope = test_input($_POST["slope"]);
  $ca = test_input($_POST["ca"]);
  $thal = test_input($_POST["thal"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

echo "<h2>Your Input:</h2>";
echo $age;
echo "<br>";
echo $gender;
echo "<br>";
echo $cp;
echo "<br>";
echo $trestbps;
echo "<br>";
echo $chol;
?>

</body>
</html>-->