"""Mix URL Configuration
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, include
from django.contrib import admin

from MixAPI import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/pumps/', views.get_pumps),
    path('api/liquids/', views.get_liquids),
    path('api/recipes/', views.get_recipes),
    path('api/hardware_online/', views.hardware_online)
]
