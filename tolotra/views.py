from django.shortcuts import render

# Create your views here.
def home(request):
    tolotra = [
        {"tolotra":"Annonce","vidiny":"3500","sokajy":"radio"},
        {"tolotra":"Annonce 5x", "vidiny":"5000","sokajy":"TV"},
        {"tolotra":"spot publicitaire", "vidiny":"5000","sokajy":"radio"},
        {"tolotra":"spot publicitaire", "vidiny":"7500","sokajy":"TV"},
        {"tolotra":"Matraquage clip", "vidiny":"100000","sokajy":"radio"},
        {"tolotra":"Matraquage clip", "vidiny":"120000","sokajy":"TV"},
        {"tolotra":"Barre de défilement", "vidiny":"10000","sokajy":"TV"},
        {"tolotra":"Intervention Akory lahaly", "vidiny":"45000","sokajy":"radio"},        
        {"tolotra":"Couverture médiatique", "vidiny":"200000","sokajy":"radio"},        
        {"tolotra":"Montage vidéo", "vidiny":"60000","sokajy":"TV"},        
        {"tolotra":"Montage audio", "vidiny":"45000","sokajy":"radio"},        
    ]
    return render(request,'tolotra/tolotra.html',{'tolotra':tolotra})

def filter(request,num):
    filter=""
    if num == 0:
        filter="All"
    elif num == 1:
        filter = "Radio"
    else:
        filter = "TV"
    return HttpResponse(filter)