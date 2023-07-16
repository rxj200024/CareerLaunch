from django.shortcuts import render
from django.http.response import Http404
# Create your views here.
from rest_framework import viewsets
from .models import JobPost
from .serializers import JobPostSerializer
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets


class JobPostView(APIView):
    queryset = JobPost.objects.all().order_by('id')
    serializer_class = JobPostSerializer
    def get_object(self, pk):
      try:
          return JobPost.objects.get(pk=pk)
      except JobPost.DoesNotExist:
          raise Http404

    @csrf_exempt
    def get(self, request, pk=None, format=None):
        if pk:
            data = self.get_object(pk)
            serializer = JobPostSerializer(instance=[data], many=True)
        else:
            data = JobPost.objects.all()
            serializer = JobPostSerializer(data, many=True)

        return Response(serializer.data)
      
    @csrf_exempt
    def post(self, request, format=None):
      data = request.data 
      serializer = JobPostSerializer(data=data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      response = Response()
      response.data = {
        'message': 'Job Post Created Successfully',
        'data': serializer.data
      }
      
      return response
    
    @csrf_exempt
    def put(self, request, pk=None, format=None):
      jobpost_to_update = JobPost.objects.get(pk=pk)
      data = request.data
      serializer = JobPostSerializer(instance=jobpost_to_update, data=data, partial=True)
      
      serializer.is_valid(raise_exception=True)
      serializer.save()
      
      response = Response()
      
      response.data = {
        'message': 'Job Post Updated Successfully',
        'data': serializer.data
      }
      
      return response
    
    @csrf_exempt
    def delete(self, request, pk, format=None):
      jobpost_to_delete = JobPost.objects.get(pk=pk)
      jobpost_to_delete.delete()
      
      return Response({
        'message': 'Job Post Deleted Successfully'
      })