# Generated by Django 5.0.6 on 2024-06-17 04:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_category_context_name_alter_food_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='context_name',
            field=models.CharField(max_length=255),
        ),
    ]