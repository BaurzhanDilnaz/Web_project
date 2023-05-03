import json
from django.shortcuts import render
from api.models import Student
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework_jwt.views import obtain_jwt_token


@csrf_exempt
def login(request):
    if request.method == 'POST':
        response = obtain_jwt_token(request)
        return response
    else:
        return JsonResponse({'message': 'Invalid request method.'})
    
@csrf_exempt 
def register(request):
    if request.method == "POST":
        data = json.loads(request.body)

        StudentName = data.get('Student_name')

        password = data.get('password')

        email = data.get('email')

        first_name = data.get('Student_name')

        last_name = data.get('last_name')

        Student = Student.objects.create_Student(Studentname=StudentName,password=password,email=email, first_name = first_name, last_name = last_name)

        Student.save()
        return JsonResponse({'message': 'Student created successfully.'})
    else:
        return JsonResponse({'message': 'Invalid request method.'})

