from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Application
from .serializers import ApplicationSerializer

# Create your views here.
class ApplicationView(APIView):
  def get(self, request, format=None):
    applications = Application.objects.all()
    serializer = ApplicationSerializer(applications, many=True)
    return Response(serializer.data)
  
  def post(self, request, format=None):
    serializer = ApplicationSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
  def delete(self, request, pk, format=None):
    applications = self.get_object(pk)
    applications.delete()
    return Response("Deleted Successfully")
    
  def get_object(self, pk):
    try:
      return Application.objects.get(pk=pk)
    except:
      raise status.HTTP_404_NOT_FOUND