# Lead Manager

> Full stack Django/React/Redux app that uses token based authentication with Knox.

## Quick Start

```bash
# Install dependencies
npm install

# Serve API on localhost:8000
python leadmanager/manage.py runserver

# Run webpack (from root)
npm run dev

# Build for production
npm run build
```


# Python
1. Crear entorno virtual

2. Revisar version de python
```bash
python —version
Python3 —version
```

# Installation de pipenv
```bash
pip install pipenv
```
## Dentro del proyecto ejecutar
```bash
pipenv shell
```

# Instalación de dependencias
https://pypi.org/
pipenv install colorama

# Saber las dependencias utilizadas
```bash
pipenv lock -r
```

# Desinstalar dependencias 
```bash
pipenv uninstall colorama
```

# Instalar dependencias de desarrollo
```bash
pipenv install colorama —dev
```


# Instalando a través del archivo requirements
```bash
pipenv install -r requirements.txt
```

# Crear proyecto con Django
```bash
django-admin startproject hello
```
## Dentro de la carpeta hello para ejecutar servidor Django
```bash
python manage.py runserver
```

# Ver arbor de dependencjas de django
```bash
pipenv graph
```

# Revisar dependencias y actualizaciones
```bash
pipenv check
```

# Para reinstalar paquetes
```bash
pipenv install
```

# Asegurar cambios
```bash
Pipenv lock 
```

# Al momento de desplegar ignora el pipfile y solo ve los cambios del pipfile.lock
```bash
pipenv install -ignore-pipfile
```

# pasos para salir y entrar al entorno virtual

1. Salgo del entorno virtual Comando: 
```bash
exit
```
2. Vuelvo a entrar al entorno virtual Comando:
```bash
pipenv shell 
```


3. Remover el entorno virtual
```bash
pipenv —rm
```

# Instalar Django Django Rest
```bash
pipenv install django djangorestframework django-rest-knox
```

# Crear project Django
```bash
Django-admin startproject leadmanager
```
1. Crear carpeta
```bash
python manage.py startapp leads
```

# Ejecución de migración inicial según modelo solo crea la migración
```bash
python manage.py makemigrations leads
```
1. Ejecución de la migración
```bash
python manage.py migrate
```
