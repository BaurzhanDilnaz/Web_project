import json
from api.models import Task
from api.serializers import TaskSerializer
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt



@csrf_exempt
def task_list(request):
    if request.method == 'GET':
        tasks = Task.objects.all()
        tasks = [p.to_json() for p in tasks]
        serializer = TaskSerializer(tasks,many = True)
        return JsonResponse(serializer.data,safe = False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        print("khbfquiwkjhdoqlk")
        serializer = TaskSerializer(data = data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)


@csrf_exempt
def student_detail(request, student_id):
    try:
        task = Task.objects.get(id=student_id)
    except Task.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        serializer = TaskSerializer(task)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = TaskSerializer(instance=task, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == 'DELETE':
        task.delete()
        return JsonResponse({'deleted': True})