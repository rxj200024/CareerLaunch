# Generated by Django 4.1.4 on 2023-07-05 20:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("application", "0002_alter_application_resume"),
    ]

    operations = [
        migrations.AlterField(
            model_name="application",
            name="cover_letter",
            field=models.TextField(blank=True, null=True),
        ),
    ]
