from django.db import models

# Create your models here.
class Program(models.Model):
    heure_deb = models.TimeField()
    heure_fin = models.TimeField()
    contenue = models.TextField(null=False)