from django.db import models
from django.template.defaultfilters import slugify


class Category(models.Model):
    name = models.CharField(max_length=64)
    slug = models.SlugField(max_length=64, unique=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        return super().save(*args, **kwargs)


class Recipe(models.Model):
    dish = models.CharField(max_length=128)
    slug = models.SlugField(max_length=128, unique=True)
    recipe = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.dish

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.dish)
        return super().save(*args, **kwargs)
    

