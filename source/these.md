---
layout: default
title: Test
nav_name: these
---

# Gestion de la mobilité dans les réseaux de capteurs sans fil

  * **Directeur de thèse :** [Thomas NOEL](http://www-r2.u-strasbg.fr/~noel/)
  * **Co-directeur :** [Julien MONTAVONT](http://clarinet.u-strasbg.fr/~montavont/)
  * **Date de soutenance :** 23 novembre 2012

**Résumé**

La surveillance médicale à distance, l'observation de l'environnement et de la vie animale sont quelques exemples d'applications offertes par les réseaux de capteurs sans fil. Ces réseaux sont composés de petits équipements embarqués et autonomes qui coopèrent pour surveiller leur environnement de manière non-intrusive. Les données collectées par chaque capteur (tels que la température, des mouvements, des sons, etc.) sont remontées de proche en proche vers un puits de collecte en utilisant des technologies de communication sans fil. De par leur petite taille, ces équipements sont extrêmement contraints et suscitent de nouveaux défis en terme d'économie d'énergie, de capacité de calcul et de contrainte mémoire. De nombreux protocoles ont ainsi été proposés à différents niveaux de la pile de communication du modèle OSI.

De plus en plus d'applications requièrent le placement des capteurs sur des éléments mobiles. L'intérêt de la mobilité dans les réseaux de capteurs sans fil est multiple dans la mesure où les capteurs mobiles peuvent permettre d'étendre la couverture d'un réseau et d'obtenir des résultats plus précis. Avec l'arrivée d'IPv6 dans les réseaux de capteurs sans fil, il est fort probable qu'un nœud mobile puisse, dans un proche avenir, se déplacer à travers de multiples réseaux. Cette mobilité, semblable à celle des équipements provenant des réseaux IP, pose de nouvelles contraintes à plusieurs niveaux de la pile de communication. Au niveau du contrôle d'accès au médium (Medium Access Control, MAC), un nœud mobile doit pouvoir déterminer vers lequel de ses voisins il doit transmettre ses données. Au niveau réseau, il sera nécessaire d'utiliser des protocoles de support de la mobilité pour maintenir la communication entre un nœud mobile et ses correspondants lorsqu'il changera d'adresse IPv6.

Les travaux de cette thèse s'intéressent donc à la problématique de la mobilité lorsqu'un nœud mobile se déplace hors du réseau dans lequel il a été initialement déployé. Notre première contribution, le protocole Mobinet, utilise la sur-écoute pour fournir différents services à un nœud mobile. Au niveau MAC, il permet de découvrir les nœuds présents dans le voisinage d'un nœud mobile de manière passive et de déterminer vers lequel transmettre ses données. Au niveau réseau, Mobinet est utilisé comme mécanisme de détection de mouvement pour Mobile IPv6. L'intégration de nombreux nœuds mobiles dans les réseaux visités va augmenter le nombre de paquets transitant au sein de ces réseaux. Afin de réduire les congestions qui peuvent survenir, nous avons proposé le protocole multi-couche CLOMAC. CLOMAC utilise la sur-écoute afin de créer dynamiquement des chemins alternatifs vers le puits et permet ainsi d'éviter les liens congestionnés.

----
  * [Télécharger le manuscrit](http://tel.archives-ouvertes.fr/tel-00793315)
  * [Télécharger la présentation]({{site.url}}/docs/pres.pdf)
