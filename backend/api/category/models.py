from django.db import models

# Create your models here.
category_choice = (
  ('Information Technology','Information Technology'),
  ('Healthcare','Healthcare'),
  ('Finance','Finance'),
  ('Human Resources','Human Resources'),
  ('Media', 'Media')
)

class Category(models.Model):
  name = models.CharField(max_length=50, choices=category_choice)
  
  def __str__(self):
    return self.name