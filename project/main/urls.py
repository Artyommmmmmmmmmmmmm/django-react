from django.urls import path
from .views import FoodView, MainView, CertainFoodView

urlpatterns = [
    path('', MainView.as_view(), name='mainview'),
    path('category/', FoodView.as_view(), name='foodview'),
    path('food/<int:pk>', CertainFoodView.as_view(), name='certainfoodview'),
]