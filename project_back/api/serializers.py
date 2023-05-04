from rest_framework import serializers
from api.models import Task, Student
from django.contrib.auth.models import User

class StudentSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    first_name = serializers.CharField(max_length=50)
    last_name = serializers.CharField()
    email = serializers.CharField(max_length=50)
    password = serializers.CharField()
    secret_word = serializers.CharField()

    def create(self, validated_data):
        student = Student.objects.create(**validated_data)
        return student

    def update(self, instance, validated_data):
        instance.first_name = validated_data.get('first_name', instance.name)
        instance.last_name = validated_data.get('last_name', instance.name)
        instance.password = validated_data.get('password', instance.name)
        instance.email = validated_data.get('email', instance.name)
        instance.save()
        return instance


class TaskSerializer1(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'


class TaskSerializer2(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField()
    description = serializers.CharField()
    date = serializers.CharField()
    subject = serializers.CharField()
    user_id = serializers.CharField()

    def create(self, validated_data):
        # print('-----------------------------------------------')
        user = User.objects.get(id = validated_data.pop('user_id'))
        task = Task.objects.create(user_id = user,**validated_data)
        return task

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.name)
        instance.description = validated_data.get('description', instance.name)
        instance.subject = validated_data.get('subject', instance.name)
        instance.date = validated_data.get('date', instance.name)
        instance.save()
        return instance