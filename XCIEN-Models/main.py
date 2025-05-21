import requests
import pandas as pd
import os
from datetime import datetime
from getpass import getpass

# Configuración básica
BASE_URL = "http://201.150.5.213/api/v0"

def fetch_and_save_model_csv(model, username, password, output_folder="Models"):
    url = f"{BASE_URL}/{model}"

    try:
        response = requests.get(url, auth=(username, password), timeout=10)
        response.raise_for_status()
        data = response.json()        
    except requests.exceptions.RequestException as e:
        print(f"❌ Error al obtener datos del modelo '{model}': {e}")
        return
    if not data:
        print(f"⚠️ No hay datos para el modelo '{model}'.")
        return

    if model == "address":
        model = "addresses"
        df = pd.json_normalize(data[model])

    elif model == "alerts":
        alerts = list(data[model].values())
        df = pd.DataFrame(alerts)
    elif model == "bills":
        model = "bill"
        df = pd.json_normalize(data[model])

    elif model == "inventory" or model == "mempools" or model == "neighbours":
        model = "entries"
        df = pd.json_normalize(data[model])

    elif model == "status":
        model = "statuses"
        df = pd.json_normalize(data[model])

    elif model == "storage":
        model = "storages"
        df = pd.json_normalize(data[model])

    # Convertir a DataFrame
    print(df)
    # Crear carpeta de salida
    os.makedirs(output_folder, exist_ok=True)

    # Nombre de archivo con timestamp
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"{output_folder}/{model}.csv"

    # Guardar CSV
    df.to_csv(filename, index=False, encoding='utf-8-sig')

    print(f"✅ Datos del modelo '{model}' guardados como CSV en: {filename}")
if __name__ == "__main__":
    # Leer credenciales de forma segura
    user = "equipo5"
    pwd = "10Dan@sA"

    # Leer modelos a consultar (separados por coma)
    
    modelos = ["address", "alerts", "bills", "devices", "inventory", "mempools", "neighbours", "ports", "sensors", "status", "storage"]

    for modelo in modelos:
        fetch_and_save_model_csv(modelo, user, pwd)
