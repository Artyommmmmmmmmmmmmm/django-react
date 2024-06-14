from django.shortcuts import render
from rest_framework.views import APIView
from .models import Food
from .serializers import FoodSerializer
from rest_framework.response import Response

class FoodView(APIView):
    def get(self, request):
        output = [
            {
            'name' : output.name,
            'category' : output.category
           } for output in Food.objects.all()
        ]
        return Response(output)
