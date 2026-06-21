#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define TMAX 100

int main()
{
    char nomFichier[TMAX];
    char mot[TMAX];
    int compteur = 0;

    printf("Quel fichier voulez-vous lire ? (ex: mots.txt ou word2.txt) : ");
    scanf("%100s", nomFichier);
    FILE *fp = fopen(nomFichier, "r");

    if (fp == NULL)
    {
        printf("Erreur : Impossible de trouver ou d'ouvrir '%s'.\n", nomFichier);
        return EXIT_FAILURE;
    }

    printf("\n--- Analyse de %s en cours ---\n", nomFichier);

    while (fgets(mot, TMAX, fp) != NULL)
    {
        // Nettoyage des caractères de fin de ligne (\n et \r)
        mot[strcspn(mot, "\r\n")] = '\0';
        compteur++;
    }

    fclose(fp);
    printf("Nombre total de mots lus : %d\n", compteur);

    return EXIT_SUCCESS;
}