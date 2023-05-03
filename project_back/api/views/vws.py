import json
from api.models import Student
from api.serializers import StudentSerializer
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def student_list(request):
    if request.method == 'GET':
        students = Student.objects.all()
        students = [p.to_json() for p in students]
        serializer = StudentSerializer(students,many = True)
        return JsonResponse(serializer.data,safe = False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = StudentSerializer(data = data)
        print(serializer)
        if serializer.is_valid():
            # print("asiudbaisjldkaldasduianlskdnkjas bdaksjnd oaslkjdnoasilj daod")
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)


@csrf_exempt
def student_detail(request, student_id):
    try:
        student = Student.objects.get(id=student_id)
    except Student.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        serializer = StudentSerializer(student)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = StudentSerializer(instance=student, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == 'DELETE':
        student.delete()
        return JsonResponse({'deleted': True})