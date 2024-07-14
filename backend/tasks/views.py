from rest_framework import generics
from rest_framework.response import Response
from .models import Image, Annotation
from .serializers import ImageSerializer, AnnotationSerializer
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Image, Annotation
from .serializers import ImageSerializer, AnnotationSerializer
from rest_framework import status

class ImageAnnotationView(generics.GenericAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

    def get(self, request):
        image = self.get_queryset().order_by('?').first()
        if image:
            serializer = self.get_serializer(image)
            return Response(serializer.data)
        else:
            return Response({"error": "No images found"}, status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        serializer = AnnotationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class StatsView(generics.GenericAPIView):
    def get(self, request):
        # Check if category query parameter is provided
        category = request.query_params.get('category', None)
        if category:
            if category not in ['cat', 'dog', 'neither']:
                return Response({"error": "Invalid category"}, status=status.HTTP_400_BAD_REQUEST)

        queryset = Annotation.objects.all()

        if category:
            queryset = queryset.filter(category=category)

        counts = {}
        if category:
            counts[category] = queryset.count()
        else:
            counts['cat'] = queryset.filter(category='cat').count()
            counts['dog'] = queryset.filter(category='dog').count()
            counts['neither'] = queryset.filter(category='neither').count()

        return Response(counts)
