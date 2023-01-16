from django.shortcuts import render
from django.http import HttpResponse
# Create your views here. HttpResponse('<h1>Hola Mundo es mi primer aplicacion en django</h1>')

def inicio(request):
    return render(request,'paginas/index.html')

def Acerca_De(request):
    return render(request,'paginas/Acerca.html')

def Contacto(request):
    return render(request,'paginas/contacto.html')