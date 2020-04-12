# covid
Mobile app to get the update of the Covid-19 pandemic

# Pre-requisite
- Install Gradle 6.3 + set in the environment variables
- Install NodeJS v12.16.1 here: https://nodejs.org/en/
- Install Ionic v5.4.6: ```npm install -g @ionic/cli ```
- Install cordova  ``` npm install -g cordova ```

# How to use
- Clone this repository.
- Go inside this repository 'cd covid', then do 'npm install' to install all the dependencies.
- Run locally in localhost, Please do 'ionic serve', new tab will be thrown and access http://localhost:8100/
```
$ cd covid
$ npm install 
$ ionic serve
```

# Build the app in Android
``` ionic cordova build android ```
Please locate the apk file at ``` YOUR_PROJECT\platforms\android\app\build\outputs\apk\debug ``` directory
  
# To run the app in the android (if you have Android simulator connected)
```
$ ionic cordova run android
```

