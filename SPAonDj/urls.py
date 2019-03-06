#from django.contrib import admin
from django.conf.urls import url
from django.urls import path
from SPAonDj.apps.welcome.views import index

urlpatterns = [
    #path('admin/', admin.site.urls),
    url('^$', index)
]
