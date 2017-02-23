# twitter-inline-oembed

Easily inline Twitter embeds in your web pages.

# Usage

* Add oembed.js to your project

* Use the following format anywhere you want a Tweet embedded

```
<script src="oembed.js?tweet=https://twitter.com/dietrich/status/834597640411152384"></script>
```

The Tweet will be embedded exactly where you put the `<script>` tag.

# Known Issues

* Sometimes the Tweets are not styled. I don't know why yet.

* The Twitter widget.js file gets requested even though I've added omit_script=1, resulting in multiple redundant requests if you have multiple Tweets on a page.
