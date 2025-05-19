# README

Este README describe los pasos mínimos para clonar el repositorio, preparar el entorno híbrido (Ionic + Cordova/Capacitor) y generar los artefactos APK y IPA.

##  Prerrequisitos

Antes de comenzar, asegúrate de tener instalados:

* **Node.js** (versión >= 14)
* **npm** (incluido con Node.js)
* **Java Development Kit (JDK)** (versión >= 11)
* **Android SDK** y **Android Studio** configurados
* **Xcode** (solo en macOS, para compilar iOS)
* **Git** (opcional, para clonar el repositorio)


```

## 2. Instalar dependencias del proyecto

```bash
npm install
```

## 3. Instalar Ionic y Cordova/Capacitor (global)

```bash
npm install -g @ionic/cli      # Ionic CLI
global npm install -g cordova   # Cordova (opcional)
npm install @capacitor/core @capacitor/cli --save  # Capacitor (alternativa)
```

## 4. Añadir plataformas

### Con Cordova

```bash
ionic cordova platform add android   # Android
ionic cordova platform add ios       # iOS (solo en macOS)
```

### Con Capacitor

```bash
npx cap add android   # Android
npx cap add ios       # iOS (solo en macOS)
```

## 5. Construir la app web

```bash
ionic build
```

Genera la carpeta `www/` con la versión optimizada de tu aplicación.

## 6. Sincronizar web con plataformas nativas

### Con Cordova

```bash
ionic cordova prepare
```

### Con Capacitor

```bash
npx cap copy
```

## 7. Generar APK para Android

### Emulador Android

```bash
ionic cordova run android --emulator     # Cordova
npx cap open android                     # Capacitor (abrir en Android Studio)
```

### Producción (release)

```bash
ionic cordova build android --prod --release  # Cordova
# APK en platforms/android/app/build/outputs/apk/release/

npx cap build android --prod                   # Capacitor
y luego generar release desde Android Studio
```

## 8. Generar IPA para iOS (macOS + Xcode obligatorio)

### Emulador iOS

```bash
ionic cordova run ios --emulator   # Cordova
npx cap open ios                    # Capacitor (abrir en Xcode)
```

### Producción (release)

```bash
ionic cordova build ios --prod --release  # Cordova
# IPA en platforms/ios/build/

npx cap build ios --prod                # Capacitor
y luego Archive > Export IPA en Xcode
```


¡Con estos pasos podrás compilar y generar tanto el APK como el IPA de tu aplicación híbrida Ionic!
# frontAccenture
