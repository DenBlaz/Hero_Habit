from django.shortcuts import render
import json
from django.http import JsonResponse
from django.views import View
from django.utils.dateparse import parse_date, parse_time
from accounts.models import Account
from .models import DailyTask


def calend(request):
    return render(request, "calend/calend-for-all.html")

class DailyTaskView(View):
    def post(self, request):
        if not request.user.is_authenticated:
            return JsonResponse({"error": "Unauthorized"}, status=401)

        try:
            data = json.loads(request.body)

            entered_date = parse_date(data.get("entered_date"))  # dd.mm.yyyy
            start_time = parse_time(data.get("start_time"))  # tt:tt
            finish_time = parse_time(data.get("finish_time"))  # tt:tt

            dailytask, created = DailyTask.objects.get_or_create(
                user=request.user,
                title=data.get("title"),
                defaults={
                    "description": data.get("description"),
                    "entered_date": entered_date,
                    "start_time": start_time,
                    "finish_time": finish_time,
                }
            )

            if created:
                return JsonResponse({"message": "Daily task created", "dailytask_id": dailytask.id}, status=201)
            else:
                return JsonResponse({"message": "Task already exists"}, status=200)

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
