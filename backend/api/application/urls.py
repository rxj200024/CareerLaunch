from django.urls import path, include
from .views import ApplicationView

urlpatterns = [
  path('', ApplicationView.as_view(), name='job-application-list'),
  path('<str:pk>/', ApplicationView.as_view(), name="job-application-detail")
]