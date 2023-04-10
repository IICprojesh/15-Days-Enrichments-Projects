from django.db import models

# Create your models here.
class Places(models.Model):
    images = models.ImageField(upload_to="images/")
    name = models.CharField(max_length=30)
    detail = models.TextField()
    price = models.IntegerField()
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = "Place"
        verbose_name_plural = "Places"