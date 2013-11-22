#!/bin/bash

cordova build ios
rm -r platforms/ios/www/res/icon/android
rm -r platforms/ios/www/res/screen/android

rm platforms/ios/Myhood/Images.xcassets/AppIcon.appiconset/icon-72.png
rm platforms/ios/Myhood/Images.xcassets/AppIcon.appiconset/icon-72@2x.png

cp www/res/icon/ios/* platforms/ios/Myhood/Images.xcassets/AppIcon.appiconset/

cd ..
cp GAPlugin/www/GAPlugin.js myhood-phonegap/platforms/ios/www
cp FacebookConnect/www/* myhood-phonegap/platforms/ios/www
cp PushPlugin/www/PushNotification.js myhood-phonegap/platforms/ios/www/
