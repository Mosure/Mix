from django.db import models


class Component(models.Model):
    Unit = (
        ('Milliliters', 'mL'),
        ('Shot', 'shot')
    )

    liquid = models.ForeignKey('Liquid', on_delete=models.PROTECT)
    amount = models.IntegerField(default=0)
    units = models.CharField(max_length=32, choices=Unit)
    recipe = models.ForeignKey('Recipe', on_delete=models.PROTECT)
    