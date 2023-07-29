from django.urls import path
from .views import CategoriesView, RecipesView, DetailRecipeView


urlpatterns = [
    path('', CategoriesView.as_view(), name='categories'),
    path('<slug:slug_category>', RecipesView.as_view(), name='recipes'),
    path('<slug:slug_category>/<slug:slug_recipe>', DetailRecipeView.as_view(), name='recipe')
]