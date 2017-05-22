const baseUrls = {
  1: '//www.youtube.com/embed/',
  2: '//player.vimeo.com/video/',
  3: '//w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F',
  4: '//embed.spotify.com/?uri=spotify%3Atrack%3A',
  5: '//fast.wistia.net/embed/iframe/',
  6: '//player.youku.com/embed/',
};


const isValidURL = str => {
  const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return pattern.test(str);
}

const getUrlFromProvider = provider => {
  if (!provider || typeof provider === 'string') {
    return provider;
  }
  if (provider.provider) {
    if (provider.provider === 8) {
      return null;
    } else if (provider.provider === 7 ) {
      return provider.id;
    } else {
      return window.document.location.protocol + baseUrls[provider.provider] + provider.id;
    }
  } else {
    return null;
  }
};



const parseYouTubeUrl = url => {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var match = url.match(regExp);
  if (match && match[7].length == 11) {
    return match[7];
  } else {
    return null;
  }
};

const parseVimeoUrl = url => {
  var regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
  var match = url.match(regExp);
  if (match) {
    return match[5];
  } else {
    return null;
  }
};

const parseWistiaUrl = url => {
  var regExp = /^.*(wistia.com|home.wistia.com|wistia.net)\/(medias\/)?([A-z0-9]+)/;
  var match = url.match(regExp);
  if (match) {
    return match[3];
  } else {
    return null;
  }
};

const parseSpotifyUrl = url => {
  var regExp = /^.*(((spotify:)(track:)?)|(open.spotify.com)\/(track\/)?)([A-z0-9]+)/;
  var match = url.match(regExp);
  if (match) {
    return match[7];
  } else {
    return null;
  }
};

const parseSoundCloudUrl = url => {
  var regExp = /^.*(((spotify:)(track:)?)|(open.spotify.com)\/(track\/)?)([A-z0-9]+)/;
  var match = url.match(regExp);
  if (match) {
    return match[7];
  } else {
    return null;
  }
};

const parseYoukuUrl = url => {
  var regExp = /^.*(v.youku.com)\/(v_show\/id_)?([A-z0-9]+)==.html(.*)/
  var match = url.match(regExp);
  if (match) {
    return match[3];
  } else {
    return null;
  }
};

const isYouTubeUrl = url => (/(youtube|youtu\.be)/).test(url);
const isYoukuUrl = url => (/(youku)/).test(url);
const isVimeoUrl = url => (/(vimeo)/).test(url);
const isWistiaUrl = url => (/(wistia)/).test(url);
const isSpotifyUrl = url => (/(spotify\:|open\.spotify\.com)/).test(url);
const isSoundCloudUrl = url => (/(soundcloud)/).test(url);

const getEmbedUrl = url => {
  const provider = getProviderFromUrl(url);
  if (provider) {
    return getUrlFromProvider(provider);
  }
};

const getProviderFromUrl = url => {
  if (isValidURL(url)) {
    if (isYouTubeUrl(url)) {
      return {
        provider: 1,
        id: parseYouTubeUrl(url)
      };
    } else if (isYoukuUrl(url)) {
      return {
        provider: 6,
        id: parseYoukuUrl(url)
      };
    } else if (isVimeoUrl(url)) {
      return {
        provider: 2,
        id: parseVimeoUrl(url)
      };
    } else if (isWistiaUrl(url)) {
      return {
        provider: 5,
        id: parseWistiaUrl(url)
      };
    } else if (isSpotifyUrl(url)) {
      return {
        provider: 4,
        id: parseSpotifyUrl(url)
      };
    } else if (isSoundCloudUrl(url)) {
      return {
        provider: 3
      };
    } else {
      return {
        provider: 7,
        id: url
      }
    }
  } else {
    return {
      provider: 8,
      id: url,
    }
  }
}

export const parseVideoUrl = videoUrl => {
  try {
    const provider = JSON.parse(videoUrl);
    provider.id = provider.src;
    const parsedUrl = getUrlFromProvider(provider);
    return parsedUrl;
  } catch (e) {
    try {
      const parsedUrl = getEmbedUrl(videoUrl);
      return parsedUrl;
    } catch (e1) {
      return videoUrl;
    }
  }
  return videoUrl;
};
