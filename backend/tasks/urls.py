from django.urls import path
from .views import ImageAnnotationView, StatsView


urlpatterns = [
    path('image_annotation/', ImageAnnotationView.as_view(), name='image_annotation'),
    path('stats/', StatsView.as_view(), name='stats'),
]
