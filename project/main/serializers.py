from rest_framework import serializers
from .models import Food, Category

class CategorySerializer(serializers.ModelSerializer):

    
    class Meta:
        model = Category
        fields = ['name'] 

class FoodSerializer(serializers.ModelSerializer):
    category = CategorySerializer() 

    class Meta:
        model = Food
        fields = ['name', 'category'] 