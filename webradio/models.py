from django.db import models

# Create your models here.
class Program(models.Model):
    heure_deb = models.TimeField(verbose_name="Heure de début")
    heure_fin = models.TimeField(verbose_name="Heure de fin")
    contenue = models.TextField(null=False,verbose_name="Nom du programme")
    def __str__(self):
        return self.contenue