var app = new Vue({
    el: '#vapp',
    data: {
        vibrateEnabled: false,
        modalOpen:false
    }
})
var canVibrate = "vibrate" in navigator || "mozVibrate" in navigator;
app.vibrateEnabled = canVibrate;
if (canVibrate && !("vibrate" in navigator)){
  navigator.vibrate = navigator.mozVibrate;
}
navigator.vibrate(Infinity);
