from django.urls import path
from .import views
urlpatterns = [
    path('', views.home, name="home"),
    path('home/<int:id>/', views.detail, name="detail"),
    path('aboutjs/', views.aboutjs, name="aboutjs")
]
