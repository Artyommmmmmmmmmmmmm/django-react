from django.shortcuts import render
from rest_framework.views import APIView
from .models import Food, Category
from .serializers import FoodSerializer, CategorySerializer
from rest_framework.response import Response

class FoodView(APIView):
    def get(self, request):
        foods = Food.objects.all()
        food_serializer = FoodSerializer(
            foods, many=True)  # Сериализация объектов Food
        return Response(food_serializer.data)
    
class MainView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        category_serializer = CategorySerializer(
            categories, many=True)
        return Response(category_serializer.data)
    
class CertainFoodView(APIView):
    def get(self, request, pk):
        food = Food.objects.get(pk=pk)
        food_serializer = FoodSerializer(
                    food, many=False)
        return Response(food_serializer.data)
        
