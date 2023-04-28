from django.db import models

class Student(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.TextField(max_length=20)
    email = models.CharField(max_length=100, default='')
    password = models.TextField(max_length=24)
    secret_word = models.TextField(max_length=20, default="")

    class Meta:
        verbose_name = 'Student'

    def to_json(self):
        return {
            'id' : self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email' : self.email,
            'password' : self.password,
            'secret_word' : self.secret_word
        }