/*

TODO: bugs

* sometimes not styled

TODO: features

* support oembed api params https://dev.twitter.com/rest/reference/get/statuses/oembed
* support embedded tweet params https://dev.twitter.com/web/embedded-tweets/parameters
* option to place on page via selector

TODO: release

* package.json
* CDNify
* NPMify

*/

(function() {

  var tweetURL = document.currentScript.src.split('?tweet=')[1];
  var apiURL = 'https://publish.twitter.com/oembed?omit_script=1&url=';
  var script = document.currentScript;

  if (tweetURL) {
    embedTweet(tweetURL);
  }

  function injectScript(url) {
    var script = document.createElement('script');
    script.defer = true;
    script.src = url;
    document.body.appendChild(script);
  }

  function jsonp(url, cb) {
    var fnName = 'fn' + Date.now();
        prefixChar = (url.indexOf('?') != -1) ? '&' : '?';
    url += prefixChar + 'callback=' + fnName;
    injectScript(url);
    // racey?
    window[fnName] = function(result) { cb(result); };
  }

  function embedTweet(tweetURL) {
    var url = apiURL + tweetURL;
    jsonp(url, function(oembed) {
      var div = document.createElement('div');
      div.innerHTML = oembed.html;
      script.parentNode.insertBefore(div, script);
    });
    if (!window['twttr']) {
      injectScript('//platform.twitter.com/widgets.js');
    }
  }

})();
