#!/bin/bash

cordova build android

echo 'removing ios files'

rm -r platforms/android/assets/www/res/icon/ios
rm -r platforms/android/assets/www/res/screen/ios
rm -r platforms/android/bin/*

git checkout platforms/android/AndroidManifest.xml

echo 'updating icons'
cp www/res/icon/android/icon-36-ldpi.png platforms/android/res/drawable-ldpi/icon.png
cp www/res/icon/android/icon-48-mdpi.png platforms/android/res/drawable-mdpi/icon.png
cp www/res/icon/android/icon-72-hdpi.png platforms/android/res/drawable-hdpi/icon.png
cp www/res/icon/android/icon-96-xhdpi.png platforms/android/res/drawable-xhdpi/icon.png

cd ..

echo "Copying assets"
cp GAPlugin/www/GAPlugin.js myhood-phonegap/platforms/android/assets/www
cp FacebookConnect/www/* myhood-phonegap/platforms/android/assets/www
cp PushPlugin/www/PushNotification.js myhood-phonegap/platforms/android/assets/www/

echo "installing facebook plugin"
mkdir myhood-phonegap/platforms/android/src/org/apache/cordova/facebook/
cp FacebookConnect/src/android/ConnectPlugin.java myhood-phonegap/platforms/android/src/org/apache/cordova/facebook/
