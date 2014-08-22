var events = [
  {
    title: 'DIST.4',
    subtitle: 'Life is Short',
    image: 'https://connpass-tokyo.s3.amazonaws.com/thumbs/b1/90/b190e518a7a4d1184bf96a2f1f8eb7c7.png',
    url: 'http://dist.connpass.com/event/7616/'
  },
  {
    title: 'DIST.3',
    subtitle: 'Photoshop and me',
    image: 'https://connpass-tokyo.s3.amazonaws.com/thumbs/da/33/da33eca9a78ba724f20107984014ef41.png',
    url: 'http://dist.connpass.com/event/6385/'
  },
  {
    title: 'DIST.2',
    subtitle: 'Sass Again',
    image: 'https://connpass-tokyo.s3.amazonaws.com/thumbs/b0/b7/b0b70396f6aa1fb185569caedebc88f9.png',
    url: 'http://dist.connpass.com/event/5630/'
  },
  {
    title: 'DIST.1',
    subtitle: 'Sass',
    image: 'https://connpass-tokyo.s3.amazonaws.com/thumbs/c6/2f/c62ff35761185cfbd8f53060194adf72.png',
    url: 'http://dist.connpass.com/event/4907/'
  }
];

var rows = _.map(events, function(args) {
  return Alloy.createController('row', args).getView();
});

$.table.setData(rows);

$.table.addEventListener('click', function(e) {
  Ti.API.info(events[e.index].url);
  var args = {url: events[e.index].url};
  var webview = Alloy.createController('webview', args).getView();
  $.tab1.open(webview);
});

$.index.open();
