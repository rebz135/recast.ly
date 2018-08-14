var searchYouTube = (options, callback) => {
  options = options || {
    'key': YOUTUBE_API_KEY,
    'max': 3,
    'q': 'kittens'
  }
  let params = {
    'videoEmbeddable': true,
    'type': 'video',
    'key': options.key,
    'maxResults': options.max,
    'part': 'snippet',
    'q': options.query,
  }
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: params,
    timeout: 2000,
    success: function(data) {
      console.log(data);
      callback(data.items);
    },
    error: function(data) {
      console.log(data);
    }
  })
};

window.searchYouTube = searchYouTube;