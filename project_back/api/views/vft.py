import json
from api.models import Task
from api.serializers import TaskSerializer2, TaskSerializer1
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt



@csrf_exempt
def task_list(request):
    if request.method == 'GET':
        tasks = Task.objects.all()
        tasks = [p.to_json() for p in tasks]
        serializer = TaskSerializer1(tasks,many = True)
        return JsonResponse(serializer.data,safe = False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = TaskSerializer2(data = data)
        print(serializer.is_valid())
        if serializer.is_valid():
            print("khbfquiwkjhdoqlk")
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)


@csrf_exempt
def task_detail(request, task_id):
    try:
        task = Task.objects.get(id=task_id)
    except Task.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        serializer = TaskSerializer2(task)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = TaskSerializer2(instance=task, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == 'DELETE':
        print('asdas')
        task.delete()
        return JsonResponse({'deleted': True})