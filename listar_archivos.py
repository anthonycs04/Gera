import os

# Ruta de la carpeta que contiene las fotos y videos
carpeta = './fotos'

# Extensiones permitidas (puedes editar si quieres más)
extensiones = ('.jpg', '.jpeg', '.png', '.webp', '.mp4', '.mov', '.webm')

# Lista los archivos con las extensiones válidas
archivos = [
    f for f in os.listdir(carpeta)
    if f.lower().endswith(extensiones)
]

# Imprime la lista con formato para pegar en script.js
print("const archivos = [")
for archivo in archivos:
    print(f'  "{archivo}",')
print("];")
