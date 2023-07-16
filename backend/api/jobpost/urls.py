from django.urls import path, include
from rest_framework import routers
from .views import JobPostView
from . import views
# router = routers.DefaultRouter()
# router.register(r'jobposts', JobPostView, basename='jobpost')

urlpatterns = [
    path('', JobPostView.as_view()),
    path('<str:pk>/', JobPostView.as_view()),
]

# router.register(r'jobpost', views.JobPostView, base_name='jobpost')
# urlpatterns = [    
#     path(r'', include(router.urls)),
# ]