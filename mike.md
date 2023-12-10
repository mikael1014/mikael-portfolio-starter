Pour changer la correspondance entre un dossier local et un projet sur GitHub, vous devrez mettre à jour l'URL du référentiel distant (remote) associé à votre dossier local. Voici les étapes générales pour effectuer cela:

Accédez au dossier local:
Ouvrez votre terminal (ou invite de commande) et naviguez jusqu'au dossier local de votre projet à l'aide de la commande cd (change directory).

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
Utilisez la commande git remote set-url pour mettre à jour l'URL du référentiel distant. Remplacez nom_distant par le nom de votre référentiel distant (par exemple, origin) et nouvelle_url par la nouvelle URL du référentiel GitHub.

bash
Copy code
git remote set-url origin https://github.com/mikael1014/mikael-portfolio-starter
Par exemple, si votre référentiel distant s'appelle "origin" et vous souhaitez changer l'URL pour un nouveau projet GitHub, la commande pourrait ressembler à ceci:

bash
Copy code
git remote set-url origin https://github.com/nouveau-utilisateur/nouveau-projet.git
Vérifiez que la modification a été effectuée:
Utilisez à nouveau la commande git remote -v pour vous assurer que l'URL du référentiel distant a été mise à jour correctement.

bash
Copy code
git remote -v