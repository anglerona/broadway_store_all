from django.db import models

class UnitSize(models.Model):
    SIZE_CHOICES = [
        ('S', 'Small'),
        ('M', 'Medium'),
        ('L', 'Large'),
        ('XL', 'Extra Large'),
    ]

    size = models.CharField(max_length=2, choices=SIZE_CHOICES, unique=True)
    description = models.TextField()
    dimensions = models.CharField(max_length=100)
    price_range = models.CharField(max_length=100)
    available_units = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.get_size_display()} - {self.available_units} units"
