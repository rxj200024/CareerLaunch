from django.db import models

# Create your models here.
class Application(models.Model):
  name = models.CharField(max_length=50)
  email = models.EmailField()
  resume = models.FileField(blank=True, null=True)
  cover_letter = models.TextField(blank=True, null=True)
  application_status = models.BooleanField(default=False)
  
  def __str__(self):
    return self.name
  