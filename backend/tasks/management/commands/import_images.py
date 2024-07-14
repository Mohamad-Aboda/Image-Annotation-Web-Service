import os
from django.core.management.base import BaseCommand
from django.conf import settings
from tasks.models import Image

class Command(BaseCommand):
    help = 'Import images from media/images folder into the database'

    def handle(self, *args, **kwargs):
        image_folder = os.path.join(settings.MEDIA_ROOT, 'images')
        for filename in os.listdir(image_folder):
            if filename.endswith(('.jpg', '.jpeg', '.png', '.gif')):  # Add any other image extensions if necessary
                image_path = os.path.join('images', filename)
                if not Image.objects.filter(file=image_path).exists():
                    Image.objects.create(file=image_path)
                    self.stdout.write(self.style.SUCCESS(f'Successfully imported {filename}'))
                else:
                    self.stdout.write(self.style.WARNING(f'{filename} already exists in the database'))
