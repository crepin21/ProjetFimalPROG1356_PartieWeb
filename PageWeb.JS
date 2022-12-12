  //Demande des informations au serveur 
function Envoie(){
  $.ajax({
    url: "http://127.0.0.1/data",
    type: "GET",
    dataType: "json",
    success: function(resultat)
        {
          $(resultat.data).each(function(index, val){
            var Prenom = val.data;                                                  
            document.getElementById("prenom").innerHTML  =  Prenom;                       //Affichage sur la page web
          document.getElementById("confirmation").innerHTML = "Informations Transmises";  //Si l'information est bien transmise
          });
        },
    error: function() {
          document.getElementById("echec").innerHTML = "Echecc"; 
          console.log(resultat);                          //Affichage en cas d'erreur d'envoie
      }
  });
  
  }
  