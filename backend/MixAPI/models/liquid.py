from django.db import models


class Liquid(models.Model):
    LiquidType = (
        ('SHOTABLE', 'SHOTABLE'),
        ('MIXER', 'MIXER'),
        ('SYRUP', 'SYRUP')
    )

    name = models.CharField(max_length=256, primary_key=True, unique=True)
    co2 = models.BooleanField(default=False)
    alcohol_percentage = models.FloatField()
    type = models.CharField(max_length=32, choices=LiquidType)

    def __str__(self):
        return self.name
