from django.shortcuts import render

def stats_view(request):
    creativity = 80
    strength = 10     
    intelligence = 50 

    context = {
        'creativity': creativity,
        'strength': strength,
        'intelligence': intelligence,
        'request': request,
    }
    return render(request, 'stats/stats.html', context)