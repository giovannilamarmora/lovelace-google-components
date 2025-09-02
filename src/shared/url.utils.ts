export function getGoogleHomeURL(): string {
  const ua = navigator.userAgent || "";

  if (/Android/i.test(ua)) {
    // Su Android prova ad aprire l'app nativa
    return "intent://#Intent;package=com.google.android.apps.chromecast.app;end";
  } else if (/iPhone|iPad|iPod/i.test(ua)) {
    // Su iOS usa lo schema URL dell'app
    return "googlehome://";
  } else {
    // Browser desktop o altri dispositivi
    return "https://home.google.com/";
  }
}

export function getYouTubeURL(): string {
  const ua = navigator.userAgent || "";

  if (/Android/i.test(ua)) {
    // Su Android prova ad aprire l'app nativa
    return "intent://#Intent;package=com.google.android.youtube;end";
  } else if (/iPhone|iPad|iPod/i.test(ua)) {
    // Su iOS usa lo schema URL dell'app
    return "youtube://";
  } else {
    // Browser desktop o altri dispositivi
    return "https://www.youtube.com/";
  }
}

export function getSpotifyURL(): string {
  const ua = navigator.userAgent || "";

  if (/Android/i.test(ua)) {
    // Intent per aprire Spotify app su Android
    return "intent://#Intent;package=com.spotify.music;end";
  } else if (/iPhone|iPad|iPod/i.test(ua)) {
    // URL schema per Spotify su iOS
    return "spotify://";
  } else {
    // Fallback per desktop / browser
    return "https://open.spotify.com/";
  }
}
