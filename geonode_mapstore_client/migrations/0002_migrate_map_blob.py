# Generated by Django 3.2.13 on 2022-04-28 07:32
import ast
import base64
import json
from django.db import migrations, connections


drop_mapstore2_adapter_mapstoreattribute = (
    "DROP TABLE IF EXISTS mapstore2_adapter_mapstoreattribute CASCADE;"
)
drop_mapstore2_adapter_mapstoredata = (
    "DROP TABLE IF EXISTS mapstore2_adapter_mapstoredata CASCADE;"
)
drop_mapstore2_adapter_mapstoreresource = (
    "DROP TABLE IF EXISTS mapstore2_adapter_mapstoreresource CASCADE;"
)
drop_mapstore2_adapter_mapstoreresource_attributes = (
    "DROP TABLE IF EXISTS mapstore2_adapter_mapstoreresource_attributes CASCADE;"
)


def migrate_map_forward(apps, schema_editor):
    exists = False
    sql_exists = "SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'mapstore2_adapter_mapstoredata');"
    with connections["default"].cursor() as cursor:
        cursor.execute(sql_exists)
        result = cursor.fetchall()
        if result:
            exists = result[0][0]
    if exists:
        # We can't import the Map model directly as it may be a newer
        # version than this migration expects. We use the historical version.
        ResourceBase = apps.get_model("base", "ResourceBase")
        for _resource in ResourceBase.objects.filter(resource_type="map").iterator():
            to_update = {}
            # We can't use map.resourcebase_ptr, we need to explicitly retrieve the resourcebase
            # mapstore2_adapter does not exist anymore as an app. So we need raw sql to get the blob from the old table.
            sql_string = f"SELECT blob from mapstore2_adapter_mapstoredata where resource_id={_resource.id};"
            """
            Getting the Data Blob
            """
            with connections["default"].cursor() as cursor:
                cursor.execute(sql_string)
                result = cursor.fetchall()
                if result:
                    try:
                        to_update["blob"] = json.loads(result[0][0])
                    except Exception as e:
                        to_update["blob"] = result[0][0]

            sql_string = f"SELECT name, value from mapstore2_adapter_mapstoreattribute where resource_id={_resource.id};"
            """
            Getting the attributes
            """
            with connections["default"].cursor() as cursor:
                cursor.execute(sql_string)
                result = cursor.fetchall()
                if result:
                    for x in result:
                        try:
                            """
                            If is a byte we have to decode it
                            """
                            to_update[x[0]] = base64.b64decode(
                                ast.literal_eval(x[1])
                            ).decode()
                        except:
                            to_update[x[0]] = x[1]

                thumb = to_update.pop("thumbnail", None)
                if thumb and "data:image/" not in thumb:
                    to_update["thumbnail_url"] = thumb
            """
            Updating the resource
            """
            if to_update:
                ResourceBase.objects.filter(id=_resource.id).update(**to_update)


def migrate_map_reverse(apps, schema_editor):
    # We can't import the Map model directly as it may be a newer
    # version than this migration expects. We use the historical version.

    Map = apps.get_model("maps", "Map")
    ResourceBase = apps.get_model("base", "ResourceBase")
    for _map in Map.objects.iterator():
        # We can't use map.resourcebase_ptr, we need to explicitly retrieve the resourcebase
        resourcebase = ResourceBase.objects.get(id=_map.resourcebase_ptr_id)
        resourcebase.blob = dict()
        resourcebase.save()


class Migration(migrations.Migration):
    dependencies = [
        ("geonode_mapstore_client", "0001_clean_prev_version_geoapps"),
        ("maps", "0042_remove_maplayer_styles"),
    ]

    operations = [
        migrations.RunPython(migrate_map_forward, migrate_map_reverse),
        migrations.RunSQL(drop_mapstore2_adapter_mapstoreattribute),
        migrations.RunSQL(drop_mapstore2_adapter_mapstoredata),
        migrations.RunSQL(drop_mapstore2_adapter_mapstoreresource),
        migrations.RunSQL(drop_mapstore2_adapter_mapstoreresource_attributes),
    ]
