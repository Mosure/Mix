import json

from rest_framework import viewsets
from rest_framework.decorators import api_view
from django.http import JsonResponse

from MixAPI.models import Pump, Component, Liquid, Recipe


@api_view(['GET'])
def get_pumps(request):
    to_return = []

    for pump in Pump.objects.all():
        to_add = {
            'id': pump.id,
            'liquid': {
                'name': pump.liquid.name,
                'type': pump.liquid.type,
                'co2': pump.liquid.co2,
                'alcohol_percentage': pump.liquid.alcohol_percentage
            },
            'volume': pump.volume,
            'level': pump.level,
            'hasCheckValve': pump.has_check_valve,
            'enabled': pump.enabled
        }

        to_return.append(to_add)

    return JsonResponse({'result': to_return}, status=200)

@api_view(['PUT'])
def update_pump(request):
    body = json.loads(request.body)

    pass

@api_view(['GET'])
def get_liquids(request):
    to_return = []

    for liquid in Liquid.objects.all():
        to_add = {
            'name': liquid.name,
            'type': liquid.type,
            'co2': liquid.co2,
            'alcohol_percentage': liquid.alcohol_percentage
        }

        to_return.append(to_add)

    return JsonResponse({'result': to_return}, status=200)

@api_view(['GET'])
def get_recipes(request):
    to_return = []

    for recipe in Recipe.objects.all():
        components = Component.objects.filter(recipe=recipe)

        to_return_components = []
        for component in components:
            to_return_components.append({
                'liquid': component.liquid.id,
                'amount': component.amount,
                'units': component.units,
                'recipe': recipe.id
            })

        to_add = {
            'id': recipe.id,
            'name': recipe.name,
            'components': to_return_components
        }

        to_return.append(to_add)

    return JsonResponse({'result': to_return}, status=200)
