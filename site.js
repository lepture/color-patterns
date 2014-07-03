(function() {
  var wrapper = document.getElementById('colors');

  for (var i = 0; i < data.length; i++) {
    paint(data[i]);
  }

  function paint(item) {
    var dom = document.createElement('div');
    dom.className = 'color';
    var html = '<h3>' + item.title + '</h3><div class="patterns">';

    var colors = item.colors;
    var width = 1 / colors.length * 100 + '%';
    for (var j = 0; j < colors.length; j++) {
      html += '<span style="width:' + width + ';background-color:' + colors[j] + '">' + colors[j] + '</span>';
    }

    html += '</div>';
    dom.innerHTML = html;
    wrapper.appendChild(dom);
  }
})();
