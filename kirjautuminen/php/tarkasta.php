<?php
// Otetaan muuttujat lomakkeelta
$kayttajanimi = $_POST["kayttaja"];
$kayttajasala = $_POST["salasana"];
// Luodaan muuttujat yhteyden aikaansaamiseksi
$palvelin = "localhost";
$kayttaja = "root";
$salasana = "root";
$tietokanta = "kayttajat";
// Otetaan yhteys tietokantaan
$linkki = mysqli_connect($palvelin, $kayttaja, $salasana, $tietokanta);
// Tarkastetaan, saatiinko yhteys
if(mysqli_connect_error()){
  die("Tietokantaan eit saatu yhteyttä %s\n");
}
// Luodaan kysely
$kysely = "Select * FROM tunnukset WHERE user = " + $kayttajanimi + ";";
// Suoritetaan $kysely
$vastaus = mysqli_query($linkki, $kysely);
// Haetaan tietokannasta salasana
while($rivit = $vastaus->fetch_assoc())
{
  $haettavasala = $rivit["password"];
}
// Keskeytetään PHP ja siirrytään html-kieleen

if($kayttajasala == md5($haettavasala)){
  print("Salasanat ovat samat");
}
else{
  print("Salasanat eivät ole samat");
}
?>
