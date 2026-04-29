from django.contrib import admin
from webradio.models import Program
# Register your models here.

class ProgramAdmin(admin.ModelAdmin):
    list_display = ('heure_deb', 'heure_fin', 'contenue')
    list_filter = ('contenue','heure_deb')
    search_fields = ('contenue',)

admin.site.register(Program,ProgramAdmin)
