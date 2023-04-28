from django.urls import path

from api import views


urlpatterns = [
    path('student', views.student_list),
    path('student/<int:student_id>', views.student_detail)
]