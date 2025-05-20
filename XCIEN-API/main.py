import requests
import json
import os
from datetime import datetime
from getpass import getpass

# Configuración básica
BASE_URL = "http://201.150.5.213/api/v0"

def fetch_and_save_model(model, username, password, output_folder="output"):
    url = f"{BASE_URL}/{model}"

    try:
        response = requests.get(url, auth=(username, password), timeout=10)
        response.raise_for_status() 
        data = response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error al obtener datos del modelo '{model}': {e}")
        return

    filename = f"Models/{model}.json"

    with open(filename, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"Datos del modelo '{model}' guardados en: {filename}")

if __name__ == "__main__":
    # Leer credenciales de forma segura
    user = "equipo5"
    pwd = "10Dan@sA"

    # Leer modelos a consultar (separados por coma)
    
    modelos = ["address", "alerts", "bills", "devices", "inventory", "mempools", "neighbours", "ports", "sensors", "status", "storage"]

    for modelo in modelos:
        fetch_and_save_model(modelo, user, pwd)
