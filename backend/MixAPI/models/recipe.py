from django.db import models


class Recipe(models.Model):
    name = models.CharField(max_length=256, unique=True)

    def __str__(self):
        return self.name