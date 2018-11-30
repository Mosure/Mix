import json

from rest_framework import viewsets
from rest_framework.decorators import api_view
from django.http import JsonResponse

from MixAPI.models import Pump, Component, Liquid, Recipe
import Mix.settings as settings
import MixAPI.pumps as Pumps


@api_view(['GET'])
def hardware_online(request):
    # Use this to check whether or not motor/valve control is enabled
    return JsonResponse({'result': settings.HARDWARE_ENABLED}, status=200)

@api_view(['GET'])
def get_pumps(request):
    to_return = []

    for pump in Pump.objects.all().order_by('id'):
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

    pump = Pump.objects.filter(id=body['id'])[0]
    pump.level = body['level']
    pump.enabled = body['enabled']
    pump.liquid = Liquid.objects.filter(name=body['liquid']['name'])[0]
    pump.save()

    return JsonResponse({}, status=200)

@api_view(['GET'])
def get_liquids(request):
    to_return = []

    for liquid in Liquid.objects.all().order_by('name'):
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

    for recipe in Recipe.objects.all().order_by('name'):
        components = Component.objects.filter(recipe=recipe)

        to_return_components = []
        for component in components:
            to_return_components.append({
                'liquid': {
                    'name': component.liquid.name,
                    'type': component.liquid.type,
                    'co2': component.liquid.co2,
                    'alcohol_percentage': component.liquid.alcohol_percentage
                },
                'milliliters': component.milliliters,
                'recipe': recipe.id
            })

        to_add = {
            'id': recipe.id,
            'name': recipe.name,
            'components': to_return_components
        }

        to_return.append(to_add)

    return JsonResponse({'result': to_return}, status=200)

@api_view(['POST'])
def dispense_liquid(request):
    Pumps.pump(milliliters=100)

    return JsonResponse({}, status=200)
