document.getElementById('autobot-form').addEventListener('submit', function(event) {
            event.preventDefault();
            // Récupérer les valeurs du formulaire
            const fbstate = document.getElementById('fbstate').value;
            const adminId = document.getElementById('admin-id').value;
            const prefix = document.getElementById('prefix').value;

            // Afficher les valeurs dans la console (ou vous pouvez les envoyer à un serveur)
            console.log('FBSTATE:', fbstate);
            console.log('Admin ID:', adminId);
            console.log('Prefix:', prefix);

            // Vous pouvez ajouter ici la logique pour traiter les données du formulaire
        });
