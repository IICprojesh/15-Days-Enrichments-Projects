from django.shortcuts import render
from .models import *
# Create your views here.
def home(request):
    places = Places.objects.all()
    return render(request, "travelapp/home.html", {'place':places})
def detail(request, id):
    indvPlace = Places.objects.get(id=id)
    return render(request, 'travelapp/detail.html', {'indvPlace':indvPlace})

def aboutjs(request):
    return render(request, 'travelapp/js.html',{})


