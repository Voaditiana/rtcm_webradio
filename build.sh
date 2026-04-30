#!/bin/bash
# build.sh

echo "Running migrations..."
python manage.py migrate

echo "Collecting static files..."
python manage.py collectstatic --noinput

echo "Build complete!"

python manage.py runserver 0.0.0.0:$PORT