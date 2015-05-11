(function() {
  document.addEventListener('DOMContentLoaded', function() {
    // settings
    var environments = [
      {
        url_include: 'test.',
        text: 'test',
        align: 'right', // left or right
        valign: 'top' // top or bottom
      },
      {
        url_include: 'stage.',
        text: 'stage',
        align: 'right', // left or right
        valign: 'top', // top or bottom
      }
    ];
    // exec
    for (var i = 0; i < environments.length; i++) {
      if (location.href.indexOf(environments[i].url_include) !== -1) {
        var e = document.createElement('div');
        e.innerHTML = '<div style="margin:0; padding:6px 12px; font-size:13px; font-family:sans-serif; display:inline-block; position:fixed; ' + environments[i].valign + ':0; ' + environments[i].align + ':0; background:#333; color:#FFF; font-weight:bold; text-align:center; line-height:1.1;">' + environments[i].text + '</div>';
        document.body.appendChild(e);
      }
    }
    
  });
})();
