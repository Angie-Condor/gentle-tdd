// flickr-fetcher.js
var FlickrFetcher;

FlickrFetcher = {
    photoObjToURL: function(photoObj) {
      [ 'https://farm',
          photoObj.farm, '.staticflickr.com/',
          photoObj.server, '/',
          photoObj.id, '_',
          photoObj.secret, '_b.jpg'
      ].join('');
    }
    transformPhotoObj: function(photoObj) {
        return {
            title: photoObj.hasOwnProperty("title") && photoObj.title,
            url:   this.photoObjToURL(photoObj);
        };
    }
};

module.exports = FlickrFetcher;
