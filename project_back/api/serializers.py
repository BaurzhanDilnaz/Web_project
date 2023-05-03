from rest_framework import serializers
from api.models import Task, Student

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


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'title', 'description', 'date', 'subject', 'user_id')