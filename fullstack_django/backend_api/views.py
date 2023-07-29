from rest_framework import viewsets
from rest_framework.views import APIView
from .models import Category, Recipe
from .Serializer import CategorySerializer, RecipeSerializer
from rest_framework.response import Response


class CategoriesView(APIView):
    def get(self, request):
        output = [
            {
                'category': output.name,
                'slug': output.slug
            } for output in Category.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    lookup_field = 'slug'

class RecipesView(APIView):
    def get(self, request, slug_category):
        output = [
            {
                'dish': output.dish,
                # 'category': output.category,
                'recipe': output.recipe,
                'slug': output.slug
            } for output in Recipe.objects.filter(category__slug=slug_category)
        ]
        return Response(output)

    def post(self, request):
        serializer = RecipeSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class DetailRecipeView(APIView):
    def get(self, request, slug_category, slug_recipe):
        recipe = Recipe.objects.get(slug=slug_recipe)
        output = {
            'dish': recipe.dish,
            'recipe': recipe.recipe,
        }
        return Response(output)





