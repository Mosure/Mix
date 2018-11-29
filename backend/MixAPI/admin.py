from django.contrib import admin

from MixAPI.models import Pump, Component, Liquid, Recipe


class PumpAdmin(admin.ModelAdmin):
    list_display = ('id', '__str__')
    ordering = ('id',)

admin.site.register(Pump, PumpAdmin)

class ComponentAdmin(admin.ModelAdmin):
    list_display = ('__str__',)
    ordering = ('recipe__name',)

admin.site.register(Component, ComponentAdmin)

class LiquidAdmin(admin.ModelAdmin):
    list_display = ('__str__',)
    ordering = ('name',)


admin.site.register(Liquid, LiquidAdmin)

class RecipeAdmin(admin.ModelAdmin):
    list_display = ('__str__',)
    ordering = ('name',)

admin.site.register(Recipe, RecipeAdmin)
