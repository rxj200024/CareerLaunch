from django.urls import path, include
# from . import views
from .views import home
urlpatterns = [
    path('', home, name='api.home'),
    path('jobpost/', include('api.jobpost.urls')),
    path('category/', include('api.category.urls')),
    path('job-applications/', include('api.application.urls')),
]