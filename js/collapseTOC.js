(function() {
  var toc = document.getElementById('toc');
  var tocul = toc.getElementsByTagName('ul')[0];
  tocul.setAttribute('id', 'tocul');
  tocul.setAttribute('class', 'collapse in');
  toc.innerHTML = '<div id="tocbtn"><a id="tocbtnlink" data-toggle="collapse" href="#tocul" role="button">[contents]</a></div>' + toc.innerHTML;
  tocul.setAttribute('aria-expanded', 'true');
})();
