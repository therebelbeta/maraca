var app = new Vue({
    el: '#vapp',
    data: {
        vibrateEnabled: false,
        modalOpen:false
    }
})
var canVibrate = "vibrate" in navigator || "mozVibrate" in navigator;
app.vibrateEnabled = canVibrate;

var patterns = {
  'continuous': 10000,
};

var pattern, v;

navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

var setupVibe = function() {
  if (v) {
    clearInterval(v);
    v = null;
  }

  pattern = 'continuous';
  navigator.vibrate(patterns[pattern]);
  if (pattern == 'continuous') {
    v = setInterval(vibe, patterns[pattern]);
  } else {
    d = patterns[pattern].reduce(function(a,b){return a+b});
    v = setInterval(vibe, d);
  }
};

var vibe = function() {
  navigator.vibrate(patterns[pattern]);
};
setupVibe();