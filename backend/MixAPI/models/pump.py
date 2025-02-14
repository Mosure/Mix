from django.db import models


class Pump(models.Model):
    liquid = models.ForeignKey('Liquid', on_delete=models.PROTECT)
    volume = models.IntegerField(default=0)
    level = models.IntegerField(default=0)
    pin = models.IntegerField(default=0)
    has_check_valve = models.BooleanField(default=False)
    enabled = models.BooleanField(default=False)

    def __str__(self):
        return self.liquid.name + ' - Pump #' + str(self.id) + ' - ' + str(self.level) + '/' + str(self.volume)
