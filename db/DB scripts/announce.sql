Use madrasatic;
CREATE TABLE `announce` (
    id_post      INT    NOT NULL AUTO_INCREMENT,
    datepost        date ,             /* date de postulation de l'announce */
    titre      VARCHAR(100) NOT NULL,
    organisateur VARCHAR (100) ,      /* organisteur de l'event ou l'announce */
    description TEXT         NULL,    /* il peut contenir des infos en plus qui peuvent etre des attributs */ 
    fichier       varchar(100)         NULL,  /*on fera le path du fichier plus tard*/
    img    varchar(100)        NULL,         /* // */
    lien VARCHAR (100) NULL ,         /* par lien de googleform (inscription) */
     /* au cas de suppression */
    archive BOOLEAN NULL DEFAULT FALSE,
    supp BOOLEAN NULL DEFAULT FALSE,
    
      PRIMARY KEY (id_post)
    
);