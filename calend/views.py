from django.shortcuts import render
import json
from django.http import JsonResponse
from django.views import View
from django.utils.dateparse import parse_date, parse_time
from myapp.models import Account
from .models import Daily_Task


def calend(request):
    return render(request, "calend/calend-for-all.html")


class Daily_TaskView(View):
    def post(self, request):
        if not request.user.is_authenticated:
            return JsonResponse({"error": "Unauthorized"}, status=401)

        try:
            data = json.loads(request.body)

            entered_date = parse_date(data.get("entered_date"))  # dd.mm.yyyy
            start_time = parse_time(data.get("start_time"))  # tt:tt
            finish_time = parse_time(data.get("finish_time"))  # tt:tt

            daily_task = Daily_Task.objects.create(
                user=request.user,
                title=data.get("title"),
                description=data.get("description"),
                entered_date=entered_date,
                start_time=start_time,
                finish_time=finish_time
            )
            return JsonResponse({"message": "Daily task created", "daily_task_id": daily_task.id}, status=201)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
