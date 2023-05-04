from django.urls import path

from api import views

urlpatterns = [
    path('student', views.register),
    path('login', views.login),
    # path('student', views.student_list)
    path('tasks', views.task_list)
]