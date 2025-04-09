from django.shortcuts import render

def stats_view(request):
    # Example: Calculate the number of completed tasks for each attribute
    # This is a placeholder; replace with your actual logic
    creativity = 80  # Replace with actual calculation
    strength = 10     # Replace with actual calculation
    intelligence = 22 # Replace with actual calculation

    context = {
        'creativity': creativity,
        'strength': strength,
        'intelligence': intelligence,
        'request': request,  # Already included for user info
    }
    return render(request, 'stats.html', context)