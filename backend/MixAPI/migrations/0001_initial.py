# Generated by Django 2.1.3 on 2018-11-27 01:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Component',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.IntegerField(default=0)),
                ('units', models.CharField(choices=[('Milliliters', 'mL'), ('Shot', 'shot')], max_length=32)),
            ],
        ),
        migrations.CreateModel(
            name='Liquid',
            fields=[
                ('name', models.CharField(max_length=256, primary_key=True, serialize=False, unique=True)),
                ('co2', models.BooleanField(default=False)),
                ('alcohol_percentage', models.FloatField()),
                ('type', models.CharField(choices=[('Shotable', 'SHOTABLE'), ('Mixer', 'MIXER'), ('Syrup', 'SYRUP')], max_length=32)),
            ],
        ),
        migrations.CreateModel(
            name='Pump',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('volume', models.IntegerField(default=0)),
                ('level', models.IntegerField(default=0)),
                ('has_check_valve', models.BooleanField(default=False)),
                ('enabled', models.BooleanField(default=False)),
                ('liquid', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='MixAPI.Liquid')),
            ],
        ),
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256, unique=True)),
            ],
        ),
        migrations.AddField(
            model_name='component',
            name='liquid',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='MixAPI.Liquid'),
        ),
        migrations.AddField(
            model_name='component',
            name='recipe',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='MixAPI.Recipe'),
        ),
    ]
