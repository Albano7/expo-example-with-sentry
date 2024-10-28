# App Test with Sentry
## Aplicación React Native con Expo y Sentry

## Descripción
Este proyecto es una aplicación móvil desarrollada con React Native utilizando Expo como framework de desarrollo y Sentry para el monitoreo y seguimiento de errores en tiempo real.
Pueden ver el video de ejemplo con el siguiente enlace [SentryVideo](https://drive.google.com/file/d/1-48Pf5ZVacnhjQr6Z9Ciy6O-3O6H_Jgs/view?usp=sharing)

## Requisitos Previos
- Node.js (versión 16.0 o superior)
- npm (versión 8.0 o superior)
- Expo CLI
- Cuenta en Sentry (https://sentry.io)

## Instalación

### 1. Configuración del Entorno
Primero, asegúrate de tener instalado Node.js y npm. Luego, instala Expo CLI globalmente:

```bash
npm install -g expo-cli
```

### 2. Clonar el Repositorio
```bash
git clone git@github.com:Albano7/expo-example-with-sentry.git
cd expo-example-with-sentry
```

### 3. Instalar Dependencias
```bash
npm install
```

### 4. Configuración de Sentry

1. Crear un proyecto en Sentry:
   - Ve a [Sentry](https://sentry.io)
   - Crea una nueva organización o utiliza una existente
   - Crea un nuevo proyecto seleccionando "React-Native"

2. Configurar las credenciales de Sentry:
   - Crea un archivo `.env.local` en la raíz del proyecto
   - Agrega las siguientes variables:
     ```
     SENTRY_AUTH_TOKEN=tu-dsn-de-sentry
     ```

3. Inicializar Sentry en el proyecto:
```bash
npx sentry-wizard -i reactNative
```

## Ejecución del Proyecto

### Desarrollo
1. Iniciar el servidor de desarrollo:
```bash
npx expo start
```

2. Opciones de ejecución:
   - Presiona `i` para abrir en iOS Simulator
   - Presiona `a` para abrir en Android Emulator
   - Escanea el código QR con la app Expo Go en tu dispositivo físico

### Producción
1. Generar el bundle de la aplicación:
```bash
# Para Android
eas build -p android

# Para iOS
eas build -p ios
```


## Scripts Disponibles
- `npm start`: Inicia el servidor de desarrollo de Expo
- `npm run android`: Inicia la aplicación en el emulador de Android
- `npm run ios`: Inicia la aplicación en el simulador de iOS
- `npm run web`: Inicia la aplicación en el navegador web
- `npm run test`: Ejecuta las pruebas unitarias

## Monitoreo con Sentry

### Prueba de Integración
Para verificar que Sentry está funcionando:

```javascript
// En cualquier archivo .ts/.tsx
Sentry.captureException(new Error('Test Error'));
```


## Comandos de Despliegue

### Generar una Nueva Versión
```bash
# Incremento de versión patch
npm version patch

# Incremento de versión minor
npm version minor

# Incremento de versión major
npm version major
```

### Construir para Producción
```bash
# Android
eas build --platform android --profile production

# iOS
eas build --platform ios --profile production
```

