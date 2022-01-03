start();
 
// FONCTION PRINCIPALE DE L'APPLICATION
// Il faut la définir en “async” (asynchrone)
// car elle utilise fetch() (et “await” pour attendre une réponse)
async function start()
{
   const data = await getJson(); // Récupère le tableau json
   
   // Mélange le tableau json
   shuffleArray(data);
   
   // Affiche pour tester la première question dans la console
   console.log(data[0].question);
   
}
 
 
 
// Fonction de RÉCUPÉRATION DU FICHIER JSON contenant le quiz
// également en “async” car elle utilise fetch() et “await”
async function getJson()
{
   // Récupère les données avec la fonction fetch()
   // Ici le fichier s'appelle quiz.json et il est situé à la racine "/" du dossier projet
   const data = await fetch("http://localhost:5500/questions.json");
 
   return data.json(); // Retourne les données au format Json
}
 
 
 
// Fonction de MÉLANGE ALÉATOIRE d’un tableau
function shuffleArray(array) {
   return array.sort(() => 0.5 - Math.random());
}


// Fonction de réponses
function selectionnerReponse(messageAlerte) {
    var tabReponses = document.forms.listeReponses.reponses;
    var nombreReponses = tabReponses.length;
    if (nombreReponses > 0) {
        var i = 0;
        var score = 0;
        var reponsesSelection = false;
        while (i < nombreReponses) {
            if (tabReponses[i].checked) {
                alert("votre réponse est " + tabReponses[i].value);
                if (tabReponses[i].value == "reponse3") {
                    alert("bien joué");
                    score++;
                    alert("score : " + score);
                } else {
                    alert("essaie encore");
                    alert("ton score est de zéro");
                }
                reponsesSelection = true;
            }
            i += 1;
        }


    }
    if (!reponsesSelection) {
        alert(messageAlerte);
        return false;
    }
    else {
        return true;
    }

    
    
}









    