cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-qrscanner.QRScanner",
        "file": "plugins/cordova-plugin-qrscanner/www/www.min.js",
        "pluginId": "cordova-plugin-qrscanner",
        "clobbers": [
            "QRScanner"
        ]
    },
    {
        "id": "cordova-plugin-qrscanner.qrScannerProxy",
        "file": "plugins/cordova-plugin-qrscanner/src/windows/lib/qrScannerProxy.js",
        "pluginId": "cordova-plugin-qrscanner",
        "runs": true
    },
    {
        "id": "cordova-plugin-qrscanner.qrScanner",
        "file": "plugins/cordova-plugin-qrscanner/src/windows/lib/qrScanner.js",
        "pluginId": "cordova-plugin-qrscanner",
        "runs": true
    },
    {
        "id": "cordova-plugin-qrscanner.videoCapture",
        "file": "plugins/cordova-plugin-qrscanner/src/windows/lib/videoCapture.js",
        "pluginId": "cordova-plugin-qrscanner",
        "runs": true
    },
    {
        "id": "cordova-plugin-qrscanner.preview",
        "file": "plugins/cordova-plugin-qrscanner/src/windows/lib/preview.js",
        "pluginId": "cordova-plugin-qrscanner",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-qrscanner": "2.4.0"
};
// BOTTOM OF METADATA
});