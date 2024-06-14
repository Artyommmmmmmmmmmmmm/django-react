from django.db import models



class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Food(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(
        to=Category, 
        on_delete=models.CASCADE,
        related_name='category',
    )




