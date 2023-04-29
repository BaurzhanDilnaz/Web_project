from django.urls import path

from api import views


urlpatterns = [
    path('student', views.register),
    path('login', views.login)
    # path('student/<int:student_id>', views.student_detail)
]