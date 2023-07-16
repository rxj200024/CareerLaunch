from django.db import models
from rest_framework import fields
from api.category.models import Category
category_choice = (
  ('Information Technology','Information Technology'),
  ('Healthcare','Healthcare'),
  ('Finance','Finance'),
  ('Human Resources','Human Resources'),
  ('Media', 'Media')
)



# Create your models here.
class JobPost(models.Model):
  company = models.CharField(max_length=50)
  title = models.CharField(max_length=50)
  description = models.TextField()
  location = models.CharField(max_length=50)
  salary = models.CharField(max_length=50)
  # category = models.CharField(max_length=50, choices=category_choice)
  category = models.ForeignKey(Category, on_delete=models.CASCADE, default=1, blank=True)
  experience_required = models.TextField()
  created_at = models.DateTimeField(auto_now_add=True, blank=True)
  saved = models.BooleanField(default=False, blank=True)
  
  def __str__(self):
    return self.company + ": " + self.title