from django.shortcuts import render
from datetime import datetime
from webradio.models import Program

# Create your views here.
def home(request):
    pro = Program.objects.all()
    return render(request,'webradio/webradio.html',{'program':pro})
    
def emission(request,id):
    res="Vous voulez voir l'émission à reférence: #{0}".format(id)
    if(int(id) <= 0 and int(id) >= 1000):
        raise Http404
    return HttpResponse(res);
