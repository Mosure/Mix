from django.db import models


class Component(models.Model):
    Unit = (
        ('mL', 'mL'),
        ('shot', 'shot')
    )

    liquid = models.ForeignKey('Liquid', on_delete=models.PROTECT)
    milliliters = models.IntegerField(default=0)
    recipe = models.ForeignKey('Recipe', on_delete=models.PROTECT)
    
    def __str__(self):
        return '(' + self.recipe.name + ') - ' + self.liquid.name
