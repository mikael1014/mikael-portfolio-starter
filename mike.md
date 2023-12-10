Pour changer la correspondance entre un dossier local et un projet sur GitHub, vous devrez mettre à jour l'URL du
référentiel distant (remote) associé à votre dossier local. Voici les étapes générales pour effectuer cela:

Accédez au dossier local:
Ouvrez votre terminal (ou invite de commande) et naviguez jusqu'au dossier local de votre projet à l'aide de la commande
cd (change directory).

bash
Copy code
cd E:\programation\webstrom\mikael-portfolio-starter
Vérifiez les référentiels distants actuels:
Utilisez la commande suivante pour afficher les référentiels distants associés à votre dossier local.

bash
Copy code
git remote -v
Cette commande affiche les URL des référentiels distant enregistrés pour votre projet.

Changez l'URL du référentiel distant:
Utilisez la commande git remote set-url pour mettre à jour l'URL du référentiel distant. Remplacez nom_distant par le
nom de votre référentiel distant (par exemple, origin) et nouvelle_url par la nouvelle URL du référentiel GitHub.

bash
Copy code
git remote set-url origin https://github.com/mikael1014/mikael-portfolio-starter
Par exemple, si votre référentiel distant s'appelle "origin" et vous souhaitez changer l'URL pour un nouveau projet
GitHub, la commande pourrait ressembler à ceci:

bash
Copy code
git remote set-url origin https://github.com/nouveau-utilisateur/nouveau-projet.git
Vérifiez que la modification a été effectuée:
Utilisez à nouveau la commande git remote -v pour vous assurer que l'URL du référentiel distant a été mise à jour
correctement.

bash
Copy code
git remote -v

Si vous souhaitez remettre à zéro tous les changements Git localement, y compris annuler tous les commits et
modifications non engagées, vous pouvez utiliser la commande git reset. Voici comment vous pouvez procéder:

Pour annuler tous les changements non engagés (non suivis par Git):
bash
Copy code
git clean -df
Cette commande supprimera tous les fichiers et dossiers non suivis par Git. Assurez-vous de ne pas avoir des fichiers
importants non suivis, car ils seront définitivement supprimés.

Pour annuler tous les commits locaux et revenir à l'état initial (avant le premier commit):
bash
Copy code
git reset --hard HEAD
Cette commande annule tous les commits locaux et réinitialise votre répertoire de travail à l'état actuel du référentiel
distant. Attention, cela supprimera toutes les modifications non engagées, alors assurez-vous de sauvegarder vos
changements importants.

Pour pousser ces modifications vers le référentiel distant (si nécessaire):
bash
Copy code
git push origin --force
Notez que l'utilisation de --force est nécessaire ici car vous modifiez l'historique du référentiel. Assurez-vous que
personne d'autre ne travaille sur ce référentiel ou ne tire des modifications pendant ce processus, car cela pourrait
entraîner des conflits.

Assurez-vous de comprendre les implications de ces commandes, car elles peuvent avoir des conséquences graves sur
l'historique du projet. Si vous travaillez avec d'autres personnes sur le même référentiel, assurez-vous de communiquer
avec elles avant d'effectuer ces opérations, car cela peut perturber la collaboration.

L’optimisation des images est gérée par le composant Next.js Image. Avant de déployer une application en production qui
utilise le composant Next.js Image, il est fortement recommandé d’installer sharp. Vous pouvez le faire en naviguant
vers votre terminal, en vous assurant que vous êtes dans le répertoire de votre projet, et en lançant la commande
suivante :

npm i sharp
Vous pouvez maintenant déployer votre application, et les images fonctionneront correctement avec l’optimisation
complète que Next.js fournit.



