from django.contrib import admin

from MixAPI.models import Pump, Component, Liquid, Recipe


class PumpAdmin(admin.ModelAdmin):
    pass
admin.site.register(Pump, PumpAdmin)

class ComponentAdmin(admin.ModelAdmin):
    pass
admin.site.register(Component, ComponentAdmin)

class LiquidAdmin(admin.ModelAdmin):
    pass
admin.site.register(Liquid, LiquidAdmin)

class RecipeAdmin(admin.ModelAdmin):
    pass
admin.site.register(Recipe, RecipeAdmin)
