import json
from django.shortcuts import render
from api.models import Student
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from rest_framework_jwt.views import obtain_jwt_token



@csrf_exempt
def student_list(request):
    if request.method == 'GET':
        students_json = [p.to_json() for p in Student.objects.all()]
        return JsonResponse(students_json, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        print(data)
        student_name = data.get('first_name', '')
        last_name = data.get('last_name', '')
        email = data.get('email', '')
        password = data.get('password', '')
        student = Student.objects.create(first_name=student_name, last_name = last_name, email = email, password = password)
        return JsonResponse(student.to_json())

@csrf_exempt
def login(request):
    if request.method == 'POST':
        response = obtain_jwt_token(request)
        return response
    else:
        return JsonResponse({'message': 'Invalid request method.'})


@csrf_exempt
def student_detail(request, student_id):
    try:
        student = Student.objects.get(id=student_id)
    except Student.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(student.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        new_student_name = data.get('first_name', student.first_name)
        student.first_name = new_student_name
        student.save()
        return JsonResponse(student.to_json())
    elif request.method == 'DELETE':
        student.delete()
        return JsonResponse({'deleted': True})

@csrf_exempt 
def register(request):
    if request.method == "POST":
        data = json.loads(request.body)

        userName = data.get('user_name')

        password = data.get('password')

        email = data.get('email')

        user = User.objects.create_user(username=userName,password=password,email=email)

        user.save()
        return JsonResponse({'message': 'User created successfully.'})
    else:
        return JsonResponse({'message': 'Invalid request method.'})
