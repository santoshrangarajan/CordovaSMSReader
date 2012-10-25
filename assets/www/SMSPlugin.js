
var SmsPlugin = {
        callNativeFunction : function (success, fail) {
        return cordova.exec(success,
	                        fail,
	                        "com.abstractlayers.example.SMSReader",
	                        "inbox", 
	                        []); 
    }
};