from django.apps import AppConfig


class MixapiConfig(AppConfig):
    name = 'MixAPI'

    def ready(self):
        from MixAPI.pumps import init
        init()
