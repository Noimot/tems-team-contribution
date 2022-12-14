!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("Amplitude", [], t)
    : "object" == typeof exports
    ? (exports.Amplitude = t())
    : (e.Amplitude = t());
})(this, function () {
  return (function (e) {
    function t(l) {
      if (a[l]) return a[l].exports;
      var u = (a[l] = { i: l, l: !1, exports: {} });
      return e[l].call(u.exports, u, u.exports, t), (u.l = !0), u.exports;
    }
    var a = {};
    return (
      (t.m = e),
      (t.c = a),
      (t.i = function (e) {
        return e;
      }),
      (t.d = function (e, a, l) {
        t.o(e, a) ||
          Object.defineProperty(e, a, {
            configurable: !1,
            enumerable: !0,
            get: l,
          });
      }),
      (t.n = function (e) {
        var a =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(a, "a", a), a;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ""),
      t((t.s = 8))
    );
  })([
    function (e, t, a) {
      "use strict";
      e.exports = {
        version: "3.3.1",
        active_song: new Audio(),
        active_metadata: {},
        active_album: "",
        active_index: 0,
        active_playlist: "",
        autoplay: !1,
        playback_speed: 1,
        callbacks: {},
        songs: [],
        playlists: {},
        start_song: "",
        shuffled_playlists: {},
        starting_playlist: "",
        starting_playlist_song: "",
        shuffled_statuses: {},
        shuffled_active_indexes: {},
        repeat_statuses: {},
        repeat: !1,
        repeat_song: !1,
        shuffle_list: {},
        shuffle_on: !1,
        shuffle_active_index: 0,
        default_album_art: "",
        debug: !1,
        volume: 0.5,
        pre_mute_volume: 0.5,
        volume_increment: 5,
        volume_decrement: 5,
        soundcloud_client: "",
        soundcloud_use_art: !1,
        soundcloud_song_count: 0,
        soundcloud_songs_ready: 0,
        is_touch_moving: !1,
        buffered: 0,
        bindings: {},
        continue_next: !0,
        delay: 0,
      };
    },
    function (e, t, a) {
      "use strict";
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u = a(0),
        i = l(u),
        n = a(3),
        s = l(n),
        d = a(2),
        o = l(d),
        f = (function () {
          function e() {
            (i.default.active_song = new Audio()),
              (i.default.active_metadata = {}),
              (i.default.active_album = ""),
              (i.default.active_index = 0),
              (i.default.active_playlist = ""),
              (i.default.active_playlist = ""),
              (i.default.autoplay = !1),
              (i.default.playback_speed = 1),
              (i.default.callbacks = {}),
              (i.default.songs = []),
              (i.default.playlists = {}),
              (i.default.start_song = ""),
              (i.default.shuffled_playlists = {}),
              (i.default.starting_playlist = ""),
              (i.default.starting_playlist_song = ""),
              (i.default.shuffled_statuses = {}),
              (i.default.repeat = !1),
              (i.default.shuffle_list = {}),
              (i.default.shuffle_on = !1),
              (i.default.shuffle_active_index = 0),
              (i.default.default_album_art = ""),
              (i.default.debug = !1),
              (i.default.handle_song_elements = !0),
              (i.default.volume = 0.5),
              (i.default.pre_mute_volume = 0.5),
              (i.default.volume_increment = 5),
              (i.default.volume_decrement = 5),
              (i.default.soundcloud_client = ""),
              (i.default.soundcloud_use_art = !1),
              (i.default.soundcloud_song_count = 0),
              (i.default.soundcloud_songs_ready = 0),
              (i.default.continue_next = !0);
          }
          function t(e) {
            i.default.debug && console.log(e);
          }
          function a(e) {
            if (i.default.callbacks[e]) {
              var a = i.default.callbacks[e];
              t("Running Callback: " + e);
              try {
                a();
              } catch (e) {
                if ("CANCEL EVENT" == e.message) throw e;
                t("Callback error: " + e.message);
              }
            }
          }
          function l(e) {
            var t = i.default.songs[e];
            s.default.stop(),
              o.default.setPlayPauseButtonsToPause(),
              o.default.resetSongSliders(),
              o.default.resetSongPlayedProgressBars(),
              o.default.resetTimes(),
              n(t) && a("album_change"),
              f(t, e),
              o.default.displaySongMetadata(),
              o.default.setActiveContainer(),
              o.default.syncSongDuration(),
              a("song_change");
          }
          function u(e) {
            return e != i.default.active_index;
          }
          function n(e) {
            return i.default.active_album != e;
          }
          function d(e) {
            return i.default.active_playlist != e;
          }
          function f(e, t) {
            (i.default.active_song.src = e.url),
              (i.default.active_metadata = e),
              (i.default.active_album = e.album),
              (i.default.active_index = t);
          }
          function r() {
            for (
              var e = new Array(i.default.songs.length), t = 0;
              t < i.default.songs.length;
              t++
            )
              (e[t] = i.default.songs[t]), (e[t].original_index = t);
            for (var a = i.default.songs.length - 1; a > 0; a--) {
              p(
                e,
                a,
                Math.floor(Math.random() * i.default.songs.length + 1) - 1
              );
            }
            i.default.shuffle_list = e;
          }
          function c(e) {
            for (
              var t = new Array(i.default.playlists[e].length), a = 0;
              a < i.default.playlists[e].length;
              a++
            )
              (t[a] = i.default.songs[i.default.playlists[e][a]]),
                (t[a].original_index = i.default.playlists[e][a]);
            for (var l = i.default.playlists[e].length - 1; l > 0; l--) {
              p(
                t,
                l,
                Math.floor(Math.random() * i.default.playlists[e].length + 1) -
                  1
              );
            }
            i.default.shuffled_playlists[e] = t;
          }
          function p(e, t, a) {
            var l = e[t];
            (e[t] = e[a]), (e[a] = l);
          }
          function y(e) {
            i.default.active_playlist != e && a("playlist_changed"),
              (i.default.active_playlist = e);
          }
          function v(e) {
            return /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(
              e
            );
          }
          function g(e) {
            return (
              !isNaN(e) && parseInt(Number(e)) == e && !isNaN(parseInt(e, 10))
            );
          }
          return {
            resetConfig: e,
            writeDebugMessage: t,
            runCallback: a,
            changeSong: l,
            checkNewSong: u,
            checkNewAlbum: n,
            checkNewPlaylist: d,
            shuffleSongs: r,
            shufflePlaylistSongs: c,
            setActivePlaylist: y,
            isURL: v,
            isInt: g,
          };
        })();
      (t.default = f), (e.exports = t.default);
    },
    function (e, t, a) {
      "use strict";
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u = a(0),
        i = l(u),
        n = a(10),
        s = l(n),
        d = (function () {
          function e(e, t) {
            s.default.syncCurrentHours(e.hours),
              s.default.syncCurrentMinutes(e.minutes),
              s.default.syncCurrentSeconds(e.seconds),
              s.default.syncCurrentTime(e),
              x(t),
              A(i.default.active_playlist, t),
              L(i.default.active_playlist, i.default.active_index, t),
              s.default.syncSongPlayedProgressBar(t);
          }
          function t() {
            s.default.resetCurrentHours(),
              s.default.resetCurrentMinutes(),
              s.default.resetCurrentSeconds(),
              s.default.resetCurrentTime();
          }
          function a() {
            for (
              var e = document.getElementsByClassName("amplitude-song-slider"),
                t = 0;
              t < e.length;
              t++
            )
              e[t].value = 0;
          }
          function l() {
            for (
              var e = document.getElementsByClassName(
                  "amplitude-buffered-progress"
                ),
                t = 0;
              t < e.length;
              t++
            )
              e[t].value = 0;
          }
          function u() {
            for (
              var e = document.getElementsByClassName(
                  "amplitude-song-played-progress"
                ),
                t = 0;
              t < e.length;
              t++
            )
              e[t].value = 0;
          }
          function n() {
            for (
              var e = document.getElementsByClassName(
                  "amplitude-song-container"
                ),
                t = 0;
              t < e.length;
              t++
            )
              e[t].classList.remove("amplitude-active-song-container");
            if (
              "" == i.default.active_playlist ||
              null == i.default.active_playlist
            ) {
              if (
                document.querySelectorAll(
                  '.amplitude-song-container[amplitude-song-index="' +
                    i.default.active_index +
                    '"]'
                )
              )
                for (
                  var a = document.querySelectorAll(
                      '.amplitude-song-container[amplitude-song-index="' +
                        i.default.active_index +
                        '"]'
                    ),
                    l = 0;
                  l < a.length;
                  l++
                )
                  a[l].hasAttribute("amplitude-playlist") ||
                    a[l].classList.add("amplitude-active-song-container");
            } else if (
              document.querySelectorAll(
                '.amplitude-song-container[amplitude-song-index="' +
                  i.default.active_index +
                  '"][amplitude-playlist="' +
                  i.default.active_playlist +
                  '"]'
              )
            )
              for (
                var u = document.querySelectorAll(
                    '.amplitude-song-container[amplitude-song-index="' +
                      i.default.active_index +
                      '"][amplitude-playlist="' +
                      i.default.active_playlist +
                      '"]'
                  ),
                  n = 0;
                n < u.length;
                n++
              )
                u[n].classList.add("amplitude-active-song-container");
          }
          function d() {
            for (
              var e = [
                  "cover_art_url",
                  "station_art_url",
                  "podcast_episode_cover_art_url",
                ],
                t = document.querySelectorAll("[amplitude-song-info]"),
                a = 0;
              a < t.length;
              a++
            ) {
              var l = t[a].getAttribute("amplitude-song-info"),
                u = t[a].getAttribute("amplitude-playlist"),
                n = t[a].getAttribute("amplitude-main-song-info");
              (i.default.active_playlist != u && "true" != n) ||
                (void 0 != i.default.active_metadata[l]
                  ? e.indexOf(l) >= 0
                    ? t[a].setAttribute("src", i.default.active_metadata[l])
                    : (t[a].innerHTML = i.default.active_metadata[l])
                  : e.indexOf(l) >= 0
                  ? "" != i.default.default_album_art
                    ? t[a].setAttribute("src", i.default.default_album_art)
                    : t[a].setAttribute("src", "")
                  : (t[a].innerHTML = ""));
            }
          }
          function o(e, t) {
            for (
              var a = [
                  "cover_art_url",
                  "station_art_url",
                  "podcast_episode_cover_art_url",
                ],
                l = document.querySelectorAll(
                  '[amplitude-song-info][amplitude-playlist="' + t + '"]'
                ),
                u = 0;
              u < l.length;
              u++
            ) {
              var i = l[u].getAttribute("amplitude-song-info");
              l[u].getAttribute("amplitude-playlist") == t &&
                (void 0 != e[i]
                  ? a.indexOf(i) >= 0
                    ? l[u].setAttribute("src", e[i])
                    : (l[u].innerHTML = e[i])
                  : a.indexOf(i) >= 0
                  ? "" != e.default_album_art
                    ? l[u].setAttribute("src", e.default_album_art)
                    : l[u].setAttribute("src", "")
                  : (l[u].innerHTML = ""));
            }
          }
          function f() {
            for (
              var e = document.getElementsByClassName(
                  "amplitude-playback-speed"
                ),
                t = 0;
              t < e.length;
              t++
            )
              switch (
                (e[t].classList.remove("amplitude-playback-speed-10"),
                e[t].classList.remove("amplitude-playback-speed-15"),
                e[t].classList.remove("amplitude-playback-speed-20"),
                i.default.playback_speed)
              ) {
                case 1:
                  e[t].classList.add("amplitude-playback-speed-10");
                  break;
                case 1.5:
                  e[t].classList.add("amplitude-playback-speed-15");
                  break;
                case 2:
                  e[t].classList.add("amplitude-playback-speed-20");
              }
          }
          function r() {
            for (
              var e = document.getElementsByClassName(
                  "amplitude-buffered-progress"
                ),
                t = 0;
              t < e.length;
              t++
            )
              e[t].value = parseFloat(parseFloat(i.default.buffered) / 100);
          }
          function c() {
            for (
              var e = document.getElementsByClassName(
                  "amplitude-volume-slider"
                ),
                t = 0;
              t < e.length;
              t++
            )
              e[t].value = 100 * i.default.active_song.volume;
          }
          function p() {
            for (
              var e = document.querySelectorAll(".amplitude-play-pause"), t = 0;
              t < e.length;
              t++
            )
              s.default.setElementPause(e[t]);
          }
          function y(e) {
            "string" != typeof e &&
              (e = i.default.active_song.paused ? "paused" : "playing");
            for (
              var t = document.querySelectorAll(
                  '.amplitude-play-pause[amplitude-main-play-pause="true"]'
                ),
                a = 0;
              a < t.length;
              a++
            )
              switch (e) {
                case "playing":
                  s.default.setElementPlay(t[a]);
                  break;
                case "paused":
                  s.default.setElementPause(t[a]);
              }
          }
          function v(e, t) {
            "string" != typeof t &&
              (t = i.default.active_song.paused ? "paused" : "playing");
            for (
              var a = document.querySelectorAll(
                  '.amplitude-play-pause[amplitude-playlist-main-play-pause="true"]'
                ),
                l = 0;
              l < a.length;
              l++
            )
              a[l].getAttribute("amplitude-playlist") == e && "playing" == t
                ? s.default.setElementPlay(a[l])
                : s.default.setElementPause(a[l]);
          }
          function g(e, t, a) {
            if (
              ("string" != typeof a &&
                (a = i.default.active_song.paused ? "paused" : "playing"),
              null == e || "" == e)
            )
              for (
                var l = document.querySelectorAll(
                    ".amplitude-play-pause[amplitude-song-index]"
                  ),
                  u = 0;
                u < l.length;
                u++
              )
                l[u].hasAttribute("amplitude-playlist")
                  ? s.default.setElementPause(l[u])
                  : "playing" == a &&
                    l[u].getAttribute("amplitude-song-index") == t
                  ? s.default.setElementPlay(l[u])
                  : s.default.setElementPause(l[u]);
            else
              for (
                var n = document.querySelectorAll(
                    ".amplitude-play-pause[amplitude-song-index]"
                  ),
                  d = 0;
                d < n.length;
                d++
              )
                n[d].hasAttribute("amplitude-playlist") &&
                n[d].getAttribute("amplitude-song-index") == t &&
                n[d].getAttribute("amplitude-playlist") == e &&
                "playing" == a
                  ? s.default.setElementPlay(n[d])
                  : s.default.setElementPause(n[d]);
          }
          function m() {
            for (
              var e = document.getElementsByClassName("amplitude-repeat"),
                t = 0;
              t < e.length;
              t++
            )
              i.default.repeat
                ? (e[t].classList.add("amplitude-repeat-on"),
                  e[t].classList.remove("amplitude-repeat-off"))
                : (e[t].classList.remove("amplitude-repeat-on"),
                  e[t].classList.add("amplitude-repeat-off"));
          }
          function _(e) {
            for (
              var t = document.getElementsByClassName("amplitude-repeat"),
                a = 0;
              a < t.length;
              a++
            )
              t[a].getAttribute("amplitude-playlist") == e &&
                (i.default.repeat_statuses[e]
                  ? (t[a].classList.add("amplitude-repeat-on"),
                    t[a].classList.remove("amplitude-repeat-off"))
                  : (t[a].classList.add("amplitude-repeat-off"),
                    t[a].classList.remove("amplitude-repeat-on")));
          }
          function h() {
            for (
              var e = document.getElementsByClassName("amplitude-repeat-song"),
                t = 0;
              t < e.length;
              t++
            )
              i.default.repeat_song
                ? (e[t].classList.add("amplitude-repeat-song-on"),
                  e[t].classList.remove("amplitude-repeat-song-off"))
                : (e[t].classList.remove("amplitude-repeat-song-on"),
                  e[t].classList.add("amplitude-repeat-song-off"));
          }
          function P(e) {
            for (
              var t = document.getElementsByClassName("amplitude-mute"), a = 0;
              a < t.length;
              a++
            )
              e
                ? (t[a].classList.remove("amplitude-not-muted"),
                  t[a].classList.add("amplitude-muted"))
                : (t[a].classList.add("amplitude-not-muted"),
                  t[a].classList.remove("amplitude-muted"));
          }
          function b(e) {
            for (
              var t = document.getElementsByClassName("amplitude-shuffle"),
                a = 0;
              a < t.length;
              a++
            )
              null == t[a].getAttribute("amplitude-playlist") &&
                (e
                  ? (t[a].classList.add("amplitude-shuffle-on"),
                    t[a].classList.remove("amplitude-shuffle-off"))
                  : (t[a].classList.add("amplitude-shuffle-off"),
                    t[a].classList.remove("amplitude-shuffle-on")));
          }
          function S(e, t) {
            for (
              var a = document.getElementsByClassName("amplitude-shuffle"),
                l = 0;
              l < a.length;
              l++
            )
              a[l].getAttribute("amplitude-playlist") == t &&
                (e
                  ? (a[l].classList.add("amplitude-shuffle-on"),
                    a[l].classList.remove("amplitude-shuffle-off"))
                  : (a[l].classList.add("amplitude-shuffle-off"),
                    a[l].classList.remove("amplitude-shuffle-on")));
          }
          function x(e) {
            e = isNaN(e) ? 0 : e;
            for (
              var t = document.querySelectorAll(
                  '.amplitude-song-slider[amplitude-main-song-slider="true"]'
                ),
                a = 0;
              a < t.length;
              a++
            )
              t[a].value = e;
          }
          function A(e, t) {
            t = isNaN(t) ? 0 : t;
            for (
              var a = document.querySelectorAll(
                  '.amplitude-song-slider[amplitude-playlist-song-slider="true"][amplitude-playlist="' +
                    e +
                    '"]'
                ),
                l = 0;
              l < a.length;
              l++
            )
              a[l].value = t;
          }
          function L(e, t, a) {
            if (((a = isNaN(a) ? 0 : a), "" != e && null != e))
              for (
                var l = document.querySelectorAll(
                    '.amplitude-song-slider[amplitude-playlist="' +
                      e +
                      '"][amplitude-song-index="' +
                      t +
                      '"]'
                  ),
                  u = 0;
                u < l.length;
                u++
              )
                l[u].value = a;
            else
              for (
                var i = document.querySelectorAll(
                    '.amplitude-song-slider[amplitude-song-index="' + t + '"]'
                  ),
                  n = 0;
                n < i.length;
                n++
              )
                i[n].hasAttribute("amplitude-playlist") ||
                  (0 != a && (i[n].value = a));
          }
          function M(e) {
            for (
              var t = document.querySelectorAll(".amplitude-volume-slider"),
                a = 0;
              a < t.length;
              a++
            )
              t[a].value = e;
          }
          function k(e, t) {
            s.default.syncDurationHours(
              void 0 == t || isNaN(t.hours) ? "00" : t.hours
            ),
              s.default.syncDurationMinutes(
                void 0 == t || isNaN(t.minutes) ? "00" : t.minutes
              ),
              s.default.syncDurationSeconds(
                void 0 == t || isNaN(t.seconds) ? "00" : t.seconds
              ),
              s.default.syncDurationTime(void 0 != t ? t : {}),
              s.default.syncCountDownTime(e, t);
          }
          function E() {
            for (
              var e = [
                  "cover_art_url",
                  "station_art_url",
                  "podcast_episode_cover_art_url",
                ],
                t = document.querySelectorAll("[amplitude-song-info]"),
                a = 0;
              a < t.length;
              a++
            )
              if (
                null == t[a].getAttribute("amplitude-playlist") &&
                null == t[a].getAttribute("amplitude-main-song-info") &&
                null != t[a].getAttribute("amplitude-song-index")
              ) {
                var l = t[a].getAttribute("amplitude-song-info"),
                  u = t[a].getAttribute("amplitude-song-index");
                void 0 != i.default.songs[u][l] &&
                  (e.indexOf(l) >= 0
                    ? t[a].setAttribute("src", i.default.songs[u][l])
                    : (t[a].innerHTML = i.default.songs[u][l]));
              }
          }
          return {
            syncCurrentTime: e,
            resetTimes: t,
            resetSongSliders: a,
            resetSongPlayedProgressBars: u,
            resetSongBufferedProgressBars: l,
            setActiveContainer: n,
            displaySongMetadata: d,
            syncPlaybackSpeed: f,
            syncBufferedProgressBars: r,
            syncVolumeSliders: c,
            setPlayPauseButtonsToPause: p,
            setFirstSongInPlaylist: o,
            syncMainPlayPause: y,
            syncPlaylistPlayPause: v,
            syncSongPlayPause: g,
            syncRepeat: m,
            syncRepeatSong: h,
            syncRepeatPlaylist: _,
            syncMute: P,
            syncShuffle: b,
            syncPlaylistShuffle: S,
            syncMainSliderLocation: x,
            syncPlaylistSliderLocation: A,
            syncSongSliderLocation: L,
            syncVolumeSliderLocation: M,
            syncSongDuration: k,
            syncSongsMetaData: E,
          };
        })();
      (t.default = d), (e.exports = t.default);
    },
    function (e, t, a) {
      "use strict";
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u = a(0),
        i = l(u),
        n = a(1),
        s = l(n),
        d = a(2),
        o = l(d),
        f = (function () {
          function e() {
            s.default.runCallback("before_play"),
              i.default.active_metadata.live && f(),
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              ) &&
                !i.default.paused &&
                f(),
              i.default.active_song.play(),
              (i.default.active_song.playbackRate = i.default.playback_speed),
              s.default.runCallback("after_play");
          }
          function t() {
            s.default.runCallback("before_pause"),
              i.default.active_song.pause(),
              (i.default.paused = !0),
              i.default.active_metadata.live && d(),
              s.default.runCallback("after_pause");
          }
          function a() {
            s.default.runCallback("before_stop"),
              0 != i.default.active_song.currentTime &&
                (i.default.active_song.currentTime = 0),
              i.default.active_song.pause(),
              i.default.active_metadata.live && d(),
              s.default.runCallback("after_stop");
          }
          function l(e) {
            0 == e
              ? (o.default.syncMute(!0), (i.default.active_song.muted = !0))
              : (o.default.syncMute(!1), (i.default.active_song.muted = !1)),
              (i.default.volume = e),
              (i.default.active_song.volume = e / 100);
          }
          function u(e) {
            i.default.active_metadata.live ||
              (i.default.active_song.currentTime =
                i.default.active_song.duration * (song_percentage / 100));
          }
          function n(e) {
            i.default.active_song.addEventListener(
              "canplaythrough",
              function () {
                i.default.active_song.duration >= e && e > 0
                  ? (i.default.active_song.currentTime = e)
                  : s.default.writeDebugMessage(
                      "Amplitude can't skip to a location greater than the duration of the audio or less than 0"
                    );
              },
              { once: !0 }
            );
          }
          function d() {
            (i.default.active_song.src = ""), i.default.active_song.load();
          }
          function f() {
            (i.default.active_song.src = i.default.active_metadata.url),
              i.default.active_song.load();
          }
          function r(t) {
            t.url
              ? ((i.default.active_song.src = t.url),
                (i.default.active_metadata = t),
                (i.default.active_album = t.album))
              : s.default.writeDebugMessage("The song needs to have a URL!"),
              o.default.syncMainPlayPause("playing"),
              o.default.displaySongMetadata(),
              o.default.resetSongSliders(),
              o.default.resetSongPlayedProgressBars(),
              o.default.resetTimes(),
              e();
          }
          function c(t) {
            a(),
              s.default.checkNewPlaylist(null) &&
                (s.default.setActivePlaylist(null), s.default.changeSong(t)),
              s.default.checkNewSong(t) && s.default.changeSong(t),
              o.default.syncMainPlayPause("playing"),
              o.default.syncPlaylistPlayPause(
                i.default.active_playlist,
                "playing"
              ),
              o.default.syncSongPlayPause(
                i.default.active_playlist,
                i.default.active_index,
                "playing"
              ),
              e();
          }
          function p(t, l) {
            a();
            var u = i.default.playlists[l][t];
            s.default.checkNewPlaylist(l) &&
              (s.default.setActivePlaylist(l), s.default.changeSong(u)),
              s.default.checkNewSong(u) && s.default.changeSong(u),
              o.default.syncMainPlayPause("playing"),
              o.default.syncPlaylistPlayPause(
                i.default.active_playlist,
                "playing"
              ),
              o.default.syncSongPlayPause(
                i.default.active_playlist,
                i.default.active_index,
                "playing"
              ),
              e();
          }
          function y(e) {
            (i.default.playback_speed = e),
              (i.default.active_song.playbackRate = i.default.playback_speed);
          }
          return {
            play: e,
            pause: t,
            stop: a,
            setVolume: l,
            setSongLocation: u,
            skipToLocation: n,
            disconnectStream: d,
            reconnectStream: f,
            playNow: r,
            playSongAtIndex: c,
            playPlaylistSongAtIndex: p,
            setPlaybackSpeed: y,
          };
        })();
      (t.default = f), (e.exports = t.default);
    },
    function (e, t, a) {
      "use strict";
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u = a(0),
        i = l(u),
        n = a(1),
        s = l(n),
        d = a(7),
        o = l(d),
        f = (function () {
          function e() {
            s.default.writeDebugMessage(
              "Beginning initialization of event handlers.."
            ),
              document.addEventListener("touchmove", function () {
                i.default.is_touch_moving = !0;
              }),
              document.addEventListener("touchend", function () {
                i.default.is_touch_moving && (i.default.is_touch_moving = !1);
              }),
              t(),
              a(),
              l(),
              u(),
              n(),
              d(),
              f(),
              r(),
              c(),
              p(),
              y(),
              v(),
              g(),
              m(),
              _(),
              h(),
              P(),
              b(),
              S();
          }
          function t() {
            i.default.active_song.removeEventListener(
              "timeupdate",
              o.default.updateTime
            ),
              i.default.active_song.addEventListener(
                "timeupdate",
                o.default.updateTime
              ),
              i.default.active_song.removeEventListener(
                "durationchange",
                o.default.updateTime
              ),
              i.default.active_song.addEventListener(
                "durationchange",
                o.default.updateTime
              );
          }
          function a() {
            document.removeEventListener("keydown", s.default.keydown),
              document.addEventListener("keydown", o.default.keydown);
          }
          function l() {
            i.default.active_song.removeEventListener(
              "ended",
              o.default.songEnded
            ),
              i.default.active_song.addEventListener(
                "ended",
                o.default.songEnded
              );
          }
          function u() {
            i.default.active_song.removeEventListener(
              "progress",
              o.default.progess
            ),
              i.default.active_song.addEventListener(
                "progress",
                o.default.progress
              );
          }
          function n() {
            for (
              var e = document.getElementsByClassName("amplitude-play"), t = 0;
              t < e.length;
              t++
            )
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              )
                ? (e[t].removeEventListener("touchend", o.default.play),
                  e[t].addEventListener("touchend", o.default.play))
                : (e[t].removeEventListener("click", o.default.play),
                  e[t].addEventListener("click", o.default.play));
          }
          function d() {
            for (
              var e = document.getElementsByClassName("amplitude-pause"), t = 0;
              t < e.length;
              t++
            )
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              )
                ? (e[t].removeEventListener("touchend", o.default.pause),
                  e[t].addEventListener("touchend", o.default.pause))
                : (e[t].removeEventListener("click", o.default.pause),
                  e[t].addEventListener("click", o.default.pause));
          }
          function f() {
            for (
              var e = document.getElementsByClassName("amplitude-play-pause"),
                t = 0;
              t < e.length;
              t++
            )
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              )
                ? (e[t].removeEventListener("touchend", o.default.playPause),
                  e[t].addEventListener("touchend", o.default.playPause))
                : (e[t].removeEventListener("click", o.default.playPause),
                  e[t].addEventListener("click", o.default.playPause));
          }
          function r() {
            for (
              var e = document.getElementsByClassName("amplitude-stop"), t = 0;
              t < e.length;
              t++
            )
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              )
                ? (e[t].removeEventListener("touchend", o.default.stop),
                  e[t].addEventListener("touchend", o.default.stop))
                : (e[t].removeEventListener("click", o.default.stop),
                  e[t].addEventListener("click", o.default.stop));
          }
          function c() {
            for (
              var e = document.getElementsByClassName("amplitude-mute"), t = 0;
              t < e.length;
              t++
            )
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              )
                ? /iPhone|iPad|iPod/i.test(navigator.userAgent)
                  ? s.default.writeDebugMessage(
                      "iOS does NOT allow volume to be set through javascript: https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html#//apple_ref/doc/uid/TP40009523-CH5-SW4"
                    )
                  : (e[t].removeEventListener("touchend", o.default.mute),
                    e[t].addEventListener("touchend", o.default.mute))
                : (e[t].removeEventListener("click", o.default.mute),
                  e[t].addEventListener("click", o.default.mute));
          }
          function p() {
            for (
              var e = document.getElementsByClassName("amplitude-volume-up"),
                t = 0;
              t < e.length;
              t++
            )
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              )
                ? /iPhone|iPad|iPod/i.test(navigator.userAgent)
                  ? s.default.writeDebugMessage(
                      "iOS does NOT allow volume to be set through javascript: https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html#//apple_ref/doc/uid/TP40009523-CH5-SW4"
                    )
                  : (e[t].removeEventListener("touchend", o.default.volumeUp),
                    e[t].addEventListener("touchend", o.default.volumeUp))
                : (e[t].removeEventListener("click", o.default.volumeUp),
                  e[t].addEventListener("click", o.default.volumeUp));
          }
          function y() {
            for (
              var e = document.getElementsByClassName("amplitude-volume-down"),
                t = 0;
              t < e.length;
              t++
            )
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              )
                ? /iPhone|iPad|iPod/i.test(navigator.userAgent)
                  ? s.default.writeDebugMessage(
                      "iOS does NOT allow volume to be set through javascript: https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html#//apple_ref/doc/uid/TP40009523-CH5-SW4"
                    )
                  : (e[t].removeEventListener("touchend", o.default.volumeDown),
                    e[t].addEventListener("touchend", o.default.volumeDown))
                : (e[t].removeEventListener("click", o.default.volumeDown),
                  e[t].addEventListener("click", o.default.volumeDown));
          }
          function v() {
            for (
              var e = window.navigator.userAgent,
                t = e.indexOf("MSIE "),
                a = document.getElementsByClassName("amplitude-song-slider"),
                l = 0;
              l < a.length;
              l++
            )
              t > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)
                ? (a[l].removeEventListener("change", o.default.songSlider),
                  a[l].addEventListener("change", o.default.songSlider))
                : (a[l].removeEventListener("input", o.default.songSlider),
                  a[l].addEventListener("input", o.default.songSlider));
          }
          function g() {
            for (
              var e = window.navigator.userAgent,
                t = e.indexOf("MSIE "),
                a = document.getElementsByClassName("amplitude-volume-slider"),
                l = 0;
              l < a.length;
              l++
            )
              /iPhone|iPad|iPod/i.test(navigator.userAgent)
                ? s.default.writeDebugMessage(
                    "iOS does NOT allow volume to be set through javascript: https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html#//apple_ref/doc/uid/TP40009523-CH5-SW4"
                  )
                : t > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)
                ? (a[l].removeEventListener("change", o.default.volumeSlider),
                  a[l].addEventListener("change", o.default.volumeSlider))
                : (a[l].removeEventListener("input", o.default.volumeSlider),
                  a[l].addEventListener("input", o.default.volumeSlider));
          }
          function m() {
            for (
              var e = document.getElementsByClassName("amplitude-next"), t = 0;
              t < e.length;
              t++
            )
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              )
                ? (e[t].removeEventListener("touchend", o.default.next),
                  e[t].addEventListener("touchend", o.default.next))
                : (e[t].removeEventListener("click", o.default.next),
                  e[t].addEventListener("click", o.default.next));
          }
          function _() {
            for (
              var e = document.getElementsByClassName("amplitude-prev"), t = 0;
              t < e.length;
              t++
            )
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              )
                ? (e[t].removeEventListener("touchend", o.default.prev),
                  e[t].addEventListener("touchend", o.default.prev))
                : (e[t].removeEventListener("click", o.default.prev),
                  e[t].addEventListener("click", o.default.prev));
          }
          function h() {
            for (
              var e = document.getElementsByClassName("amplitude-shuffle"),
                t = 0;
              t < e.length;
              t++
            )
              e[t].classList.remove("amplitude-shuffle-on"),
                e[t].classList.add("amplitude-shuffle-off"),
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent
                )
                  ? (e[t].removeEventListener("touchend", o.default.shuffle),
                    e[t].addEventListener("touchend", o.default.shuffle))
                  : (e[t].removeEventListener("click", o.default.shuffle),
                    e[t].addEventListener("click", o.default.shuffle));
          }
          function P() {
            for (
              var e = document.getElementsByClassName("amplitude-repeat"),
                t = 0;
              t < e.length;
              t++
            )
              e[t].classList.remove("amplitude-repeat-on"),
                e[t].classList.add("amplitude-repeat-off"),
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent
                )
                  ? (e[t].removeEventListener("touchend", o.default.repeat),
                    e[t].addEventListener("touchend", o.default.repeat))
                  : (e[t].removeEventListener("click", o.default.repeat),
                    e[t].addEventListener("click", o.default.repeat));
          }
          function b() {
            for (
              var e = document.getElementsByClassName(
                  "amplitude-playback-speed"
                ),
                t = 0;
              t < e.length;
              t++
            )
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              )
                ? (e[t].removeEventListener(
                    "touchend",
                    o.default.playbackSpeed
                  ),
                  e[t].addEventListener("touchend", o.default.playbackSpeed))
                : (e[t].removeEventListener("click", o.default.playbackSpeed),
                  e[t].addEventListener("click", o.default.playbackSpeed));
          }
          function S() {
            for (
              var e = document.getElementsByClassName("amplitude-skip-to"),
                t = 0;
              t < e.length;
              t++
            )
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              )
                ? (e[t].removeEventListener("touchend", o.default.skipTo),
                  e[t].addEventListener("touchend", o.default.skipTo))
                : (e[t].removeEventListener("click", o.default.skipTo),
                  e[t].addEventListener("click", o.default.skipTo));
          }
          return { initializeEvents: e };
        })();
      (t.default = f), (e.exports = t.default);
    },
    function (e, t, a) {
      "use strict";
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u = a(0),
        i = l(u),
        n = a(2),
        s = l(n),
        d = a(3),
        o = l(d),
        f = a(1),
        r = l(f),
        c = (function () {
          function e() {
            var e = {},
              t =
                (Math.floor(i.default.active_song.currentTime % 60) < 10
                  ? "0"
                  : "") + Math.floor(i.default.active_song.currentTime % 60),
              a = Math.floor(i.default.active_song.currentTime / 60),
              l = "00";
            return (
              a < 10 && (a = "0" + a),
              a >= 60 &&
                ((l = Math.floor(a / 60)), (a %= 60) < 10 && (a = "0" + a)),
              (e.seconds = t),
              (e.minutes = a),
              (e.hours = l),
              e
            );
          }
          function t() {
            var e = {},
              t =
                (Math.floor(i.default.active_song.duration % 60) < 10
                  ? "0"
                  : "") + Math.floor(i.default.active_song.duration % 60),
              a = Math.floor(i.default.active_song.duration / 60),
              l = "0";
            return (
              a < 10 && (a = "0" + a),
              a >= 60 &&
                ((l = Math.floor(a / 60)), (a %= 60) < 10 && (a = "0" + a)),
              (e.seconds = t),
              (e.minutes = a),
              (e.hours = l),
              e
            );
          }
          function a() {
            return (
              (i.default.active_song.currentTime /
                i.default.active_song.duration) *
              100
            );
          }
          function l(e) {
            o.default.setPlaybackSpeed(e);
          }
          function u(e, t) {
            null == t
              ? ((i.default.repeat = e), s.default.syncRepeat())
              : ((i.default.repeat_statuses[t] = e),
                s.default.syncRepeatPlaylist(t));
          }
          function n(e) {
            i.default.repeat_song = e;
          }
          function d() {
            i.default.active_song.paused
              ? (s.default.syncMainPlayPause("playing"),
                s.default.syncPlaylistPlayPause(
                  i.default.active_playlist,
                  "playing"
                ),
                s.default.syncSongPlayPause(
                  i.default.active_playlist,
                  i.default.active_index,
                  "playing"
                ),
                o.default.play())
              : (s.default.syncMainPlayPause("paused"),
                s.default.syncPlaylistPlayPause(
                  i.default.active_playlist,
                  "paused"
                ),
                s.default.syncSongPlayPause(
                  i.default.active_playlist,
                  i.default.active_index,
                  "paused"
                ),
                o.default.pause());
          }
          function f(e) {
            r.default.checkNewPlaylist(e) &&
              (r.default.setActivePlaylist(e),
              i.default.shuffled_statuses[e]
                ? r.default.changeSong(
                    i.default.shuffled_playlists[e][0].original_index
                  )
                : r.default.changeSong(i.default.playlists[e][0])),
              i.default.active_song.paused
                ? (s.default.syncMainPlayPause("playing"),
                  s.default.syncPlaylistPlayPause(
                    i.default.active_playlist,
                    "playing"
                  ),
                  s.default.syncSongPlayPause(
                    i.default.active_playlist,
                    i.default.active_index,
                    "playing"
                  ),
                  o.default.play())
                : (s.default.syncMainPlayPause("paused"),
                  s.default.syncPlaylistPlayPause(
                    i.default.active_playlist,
                    "paused"
                  ),
                  s.default.syncSongPlayPause(
                    i.default.active_playlist,
                    i.default.active_index,
                    "paused"
                  ),
                  o.default.pause());
          }
          function p(e, t) {
            r.default.checkNewPlaylist(e) &&
              (r.default.setActivePlaylist(e), r.default.changeSong(t)),
              r.default.checkNewSong(t) && r.default.changeSong(t),
              i.default.active_song.paused
                ? (s.default.syncMainPlayPause("playing"),
                  s.default.syncPlaylistPlayPause(
                    i.default.active_playlist,
                    "playing"
                  ),
                  s.default.syncSongPlayPause(
                    i.default.active_playlist,
                    i.default.active_index,
                    "playing"
                  ),
                  o.default.play())
                : (s.default.syncMainPlayPause("paused"),
                  s.default.syncPlaylistPlayPause(
                    i.default.active_playlist,
                    "paused"
                  ),
                  s.default.syncSongPlayPause(
                    i.default.active_playlist,
                    i.default.active_index,
                    "paused"
                  ),
                  o.default.pause());
          }
          function y(e) {
            null == e
              ? (i.default.shuffle_on
                  ? ((i.default.shuffle_on = !1), (i.default.shuffle_list = {}))
                  : ((i.default.shuffle_on = !0), r.default.shuffleSongs()),
                s.default.syncShuffle(i.default.shuffle_on))
              : (i.default.shuffled_statuses[e]
                  ? ((i.default.shuffled_statuses[e] = !1),
                    (i.default.shuffled_playlists[e] = []))
                  : ((i.default.shuffled_statuses[e] = !0),
                    r.default.shufflePlaylistSongs(e)),
                s.default.syncPlaylistShuffle(
                  i.default.shuffled_statuses[e],
                  e
                ));
          }
          function v() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = 0,
              a = !1;
            i.default.repeat_song
              ? (t = i.default.shuffle_on
                  ? i.default.shuffle_active_index
                  : i.default.active_index)
              : i.default.shuffle_on
              ? parseInt(i.default.shuffle_active_index) + 1 <
                i.default.shuffle_list.length
                ? ((i.default.shuffle_active_index =
                    parseInt(i.default.shuffle_active_index) + 1),
                  (t =
                    i.default.shuffle_list[
                      parseInt(i.default.shuffle_active_index)
                    ].original_index))
                : ((i.default.shuffle_active_index = 0), (t = 0), (a = !0))
              : (parseInt(i.default.active_index) + 1 < i.default.songs.length
                  ? (i.default.active_index =
                      parseInt(i.default.active_index) + 1)
                  : ((i.default.active_index = 0), (a = !0)),
                (t = i.default.active_index)),
              o.default.stop(),
              r.default.changeSong(t),
              (a && !i.default.repeat) ||
                (e && !i.default.repeat && a) ||
                o.default.play(),
              s.default.syncMainPlayPause(),
              s.default.syncSongPlayPause(null, t),
              r.default.runCallback("after_next"),
              i.default.repeat_song && r.default.runCallback("song_repeated");
          }
          function g(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              a = 0,
              l = !1;
            if (i.default.repeat_song)
              a = i.default.shuffled_statuses[e]
                ? i.default.shuffled_playlists[e][
                    i.default.shuffled_active_indexes[e]
                  ].original_index
                : i.default.active_index;
            else if (i.default.shuffled_statuses[e]) {
              var u = parseInt(i.default.shuffled_active_indexes[e]);
              u + 1 < i.default.shuffled_playlists[e].length
                ? ((i.default.shuffled_active_indexes[e] = u + 1),
                  (a =
                    i.default.shuffled_playlists[e][
                      i.default.shuffled_active_indexes[e]
                    ].original_index))
                : ((i.default.shuffled_active_indexes[e] = 0),
                  (a = i.default.shuffled_playlists[e][0].original_index),
                  (l = !0));
            } else {
              var n = i.default.playlists[e].indexOf(
                parseInt(i.default.active_index)
              );
              n + 1 < i.default.playlists[e].length
                ? (i.default.active_index = parseInt(
                    i.default.playlists[e][n + 1]
                  ))
                : ((i.default.active_index = parseInt(
                    i.default.playlists[e][0]
                  )),
                  (l = !0)),
                (a = i.default.active_index);
            }
            o.default.stop(),
              r.default.changeSong(a),
              (l && !i.default.repeat_statuses[e]) ||
                (t && !i.default.repeat_statuses[e] && l) ||
                o.default.play(),
              r.default.setActivePlaylist(e),
              s.default.syncMainPlayPause(),
              s.default.syncPlaylistPlayPause(e),
              s.default.syncSongPlayPause(e, a),
              r.default.runCallback("after_next"),
              i.default.repeat_song && r.default.runCallback("song_repeated");
          }
          function m() {
            var e = 0;
            i.default.shuffle_on
              ? parseInt(i.default.shuffle_active_index) - 1 >= 0
                ? ((i.default.shuffle_active_index =
                    parseInt(i.default.shuffle_active_index) - 1),
                  (e =
                    i.default.shuffle_list[
                      parseInt(i.default.shuffle_active_index)
                    ].original_index))
                : ((i.default.shuffle_active_index =
                    i.default.shuffle_list.length - 1),
                  (e =
                    i.default.shuffle_list[
                      parseInt(i.default.shuffle_list.length) - 1
                    ].original_index))
              : (parseInt(i.default.active_index) - 1 >= 0
                  ? (i.default.active_index =
                      parseInt(i.default.active_index) - 1)
                  : (i.default.active_index = i.default.songs.length - 1),
                (e = i.default.active_index)),
              o.default.stop(),
              r.default.changeSong(e),
              o.default.play(),
              s.default.syncMainPlayPause("playing"),
              s.default.syncSongPlayPause(null, e, "playing"),
              r.default.runCallback("after_prev");
          }
          function _(e) {
            var t = 0;
            if (i.default.shuffled_statuses[e]) {
              var a = parseInt(i.default.shuffled_active_indexes[e]);
              a - 1 >= 0
                ? ((i.default.shuffled_active_indexes[e] = a - 1),
                  (t =
                    i.default.shuffled_playlists[e][
                      i.default.shuffled_active_indexes[e]
                    ].original_index))
                : ((i.default.shuffled_active_indexes[e] =
                    i.default.shuffled_playlists[e].length - 1),
                  (t =
                    i.default.shuffled_playlists[e][
                      i.default.shuffled_playlists[e].length - 1
                    ].original_index));
            } else {
              var l = i.default.playlists[e].indexOf(
                parseInt(i.default.active_index)
              );
              (i.default.active_index =
                l - 1 >= 0
                  ? parseInt(i.default.playlists[e][l - 1])
                  : parseInt(
                      i.default.playlists[e][i.default.playlists[e].length - 1]
                    )),
                (t = i.default.active_index);
            }
            o.default.stop(),
              r.default.changeSong(t),
              r.default.setActivePlaylist(e),
              o.default.play(),
              s.default.syncMainPlayPause("playing"),
              s.default.syncPlaylistPlayPause(e, "playing"),
              s.default.syncSongPlayPause(e, t, "playing"),
              r.default.runCallback("after_prev");
          }
          function h(e) {
            if (void 0 != i.default.bindings[e])
              switch (i.default.bindings[e]) {
                case "play_pause":
                  p(i.default.active_playlist, i.default.active_index);
                  break;
                case "next":
                  "" == i.default.active_playlist ||
                  null == i.default.active_playlist
                    ? v()
                    : g(i.default.active_playlist);
                  break;
                case "prev":
                  "" == i.default.active_playlist ||
                  null == i.default.active_playlist
                    ? c.setPrev()
                    : c.setPrevPlaylist(i.default.active_playlist);
                  break;
                case "stop":
                  s.default.setPlayPauseButtonsToPause(), o.default.stop();
                  break;
                case "shuffle":
                  "" == i.default.active_playlist ||
                  null == i.default.active_playlist
                    ? AmplitudesEventHelpers.setShuffle(null)
                    : AmplitudeEvenstHelpers.setShuffle(
                        i.default.active_playlist
                      );
                  break;
                case "repeat":
                  c.setRepeat(!i.default.repeat), s.default.syncRepeat();
              }
          }
          return {
            computeCurrentTimes: e,
            computeSongDuration: t,
            computeSongCompletionPercentage: a,
            setPlaybackSpeed: l,
            setRepeat: u,
            setRepeatSong: n,
            setMainPlayPause: d,
            setPlaylistPlayPause: f,
            setSongPlayPause: p,
            setShuffle: y,
            setNext: v,
            setNextPlaylist: g,
            setPrev: m,
            setPrevPlaylist: _,
            runKeyEvent: h,
          };
        })();
      (t.default = c), (e.exports = t.default);
    },
    function (e, t, a) {
      "use strict";
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        i = a(0),
        n = l(i),
        s = a(3),
        d = l(s),
        o = a(1),
        f = l(o),
        r = a(4),
        c = l(r),
        p = a(9),
        y = l(p),
        v = a(2),
        g = l(v),
        m = (function () {
          function e(e) {
            var t = !1;
            if (
              (f.default.resetConfig(),
              c.default.initializeEvents(),
              (n.default.debug = void 0 != e.debug && e.debug),
              e.songs
                ? 0 != e.songs.length
                  ? ((n.default.songs = e.songs), (t = !0))
                  : f.default.writeDebugMessage(
                      "Please add some songs, to your songs object!"
                    )
                : f.default.writeDebugMessage(
                    "Please provide a songs object for AmplitudeJS to run!"
                  ),
              e.playlists &&
                l(e.playlists) > 0 &&
                ((n.default.playlists = e.playlists),
                m(),
                i(),
                s(),
                o(),
                r(),
                p(),
                v()),
              t)
            ) {
              (n.default.soundcloud_client =
                void 0 != e.soundcloud_client ? e.soundcloud_client : ""),
                (n.default.soundcloud_use_art =
                  void 0 != e.soundcloud_use_art ? e.soundcloud_use_art : "");
              var u = {};
              "" != n.default.soundcloud_client
                ? ((u = e), y.default.loadSoundCloud(u))
                : a(e);
            }
            f.default.writeDebugMessage("Initialized With: "),
              f.default.writeDebugMessage(n.default);
          }
          function t() {
            c.default.initializeEvents(), g.default.displaySongMetadata();
          }
          function a(e) {
            void 0 != e.start_song
              ? f.default.isInt(e.start_song)
                ? f.default.changeSong(e.start_song)
                : f.default.writeDebugMessage(
                    "You must enter an integer index for the start song."
                  )
              : f.default.changeSong(0),
              void 0 != e.shuffle_on &&
                e.shuffle_on &&
                ((n.default.shuffle_on = !0),
                f.default.shuffleSongs(),
                g.default.syncShuffle(n.default.shuffle_on),
                f.default.changeSong(n.default.shuffle_list[0].original_index)),
              (n.default.continue_next =
                void 0 == e.continue_next || e.continue_next),
              (n.default.playback_speed =
                void 0 != e.playback_speed ? e.playback_speed : 1),
              d.default.setPlaybackSpeed(n.default.playback_speed),
              (n.default.active_song.preload =
                void 0 != e.preload ? e.preload : "auto"),
              (n.default.callbacks = void 0 != e.callbacks ? e.callbacks : {}),
              (n.default.bindings = void 0 != e.bindings ? e.bindings : {}),
              (n.default.volume = void 0 != e.volume ? e.volume : 50),
              (n.default.delay = void 0 != e.delay ? e.delay : 0),
              (n.default.volume_increment =
                void 0 != e.volume_increment ? e.volume_increment : 5),
              (n.default.volume_decrement =
                void 0 != e.volume_decrement ? e.volume_decrement : 5),
              d.default.setVolume(n.default.volume),
              g.default.syncVolumeSliders(),
              void 0 != e.default_album_art
                ? (n.default.default_album_art = e.default_album_art)
                : (n.default.default_album_art = ""),
              g.default.resetTimes(),
              g.default.setPlayPauseButtonsToPause(),
              g.default.syncSongsMetaData(),
              e.autoplay &&
                ("" == e.starting_playlist
                  ? (n.default.active_playlist = null)
                  : (n.default.active_playlist = e.starting_playlist),
                g.default.syncMainPlayPause("playing"),
                g.default.syncSongPlayPause(
                  n.default.active_playlist,
                  0,
                  "playing"
                ),
                d.default.play()),
              void 0 != e.starting_playlist &&
                "" != e.starting_playlist &&
                ((n.default.active_playlist = e.starting_playlist),
                void 0 != e.starting_playlist_song &&
                "" != e.starting_playlist_song
                  ? void 0 !=
                    u(
                      e.playlists[e.starting_playlist][
                        parseInt(e.starting_playlist_song)
                      ]
                    )
                    ? f.default.changeSong(
                        e.playlists[e.starting_playlist][
                          parseInt(e.starting_playlist_song)
                        ]
                      )
                    : (f.default.changeSong(
                        e.playlists[e.starting_playlist][0]
                      ),
                      f.default.writeDebugMessage(
                        "The index of " +
                          e.starting_playlist_song +
                          " does not exist in the playlist " +
                          e.starting_playlist
                      ))
                  : f.default.changeSong(e.playlists[e.starting_playlist][0]),
                g.default.syncMainPlayPause("paused"),
                g.default.syncSongPlayPause(
                  n.default.active_playlist,
                  0,
                  "paused"
                )),
              f.default.runCallback("after_init");
          }
          function l(e) {
            var t = 0,
              a = void 0;
            for (a in e) e.hasOwnProperty(a) && t++;
            return (
              f.default.writeDebugMessage(
                "You have " + t + " playlist(s) in your config"
              ),
              t
            );
          }
          function i() {
            for (var e in n.default.playlists)
              if (
                n.default.playlists.hasOwnProperty(e) &&
                n.default.playlists[e].songs
              )
                for (var t = 0; t < n.default.playlists[e].songs.length; t++)
                  n.default.songs[n.default.playlists[e].songs[t]] ||
                    f.default.writeDebugMessage(
                      "The song index: " +
                        n.default.playlists[e].songs[t] +
                        " in playlist with key: " +
                        e +
                        " is not defined in your songs array!"
                    );
          }
          function s() {
            for (var e in n.default.playlists)
              n.default.shuffled_statuses[e] = !1;
          }
          function o() {
            for (var e in n.default.playlists)
              n.default.repeat_statuses[e] = !1;
          }
          function r() {
            for (var e in n.default.playlists)
              n.default.shuffled_playlists[e] = [];
          }
          function p() {
            for (var e in n.default.playlists)
              n.default.shuffled_active_indexes[e] = 0;
          }
          function v() {
            for (var e in n.default.playlists)
              g.default.setFirstSongInPlaylist(
                n.default.songs[n.default.playlists[e][0]],
                e
              );
          }
          function m() {
            for (var e = 0; e < n.default.songs.length; e++)
              void 0 == n.default.songs[e].live &&
                (n.default.songs[e].live = !1);
          }
          return { initialize: e, setConfig: a, rebindDisplay: t };
        })();
      (t.default = m), (e.exports = t.default);
    },
    function (e, t, a) {
      "use strict";
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u = a(0),
        i = l(u),
        n = a(5),
        s = l(n),
        d = a(2),
        o = l(d),
        f = a(3),
        r = l(f),
        c = a(1),
        p = l(c);
      (t.default = {
        updateTime: function () {
          if (i.default.active_song.buffered.length - 1 >= 0) {
            var e = i.default.active_song.buffered.end(
                i.default.active_song.buffered.length - 1
              ),
              t = i.default.active_song.duration;
            i.default.buffered = (e / t) * 100;
          }
          if (
            (o.default.syncBufferedProgressBars(),
            !i.default.active_metadata.live)
          ) {
            var a = s.default.computeCurrentTimes(),
              l = s.default.computeSongCompletionPercentage(),
              u = s.default.computeSongDuration();
            o.default.syncCurrentTime(a, l),
              o.default.syncSongDuration(a, u),
              p.default.runCallback("time_update");
          }
        },
        keydown: function (e) {
          s.default.runKeyEvent(e.which);
        },
        songEnded: function () {
          setTimeout(function () {
            i.default.continue_next
              ? "" == i.default.active_playlist ||
                null == i.default.active_playlist
                ? s.default.setNext(!0)
                : s.default.setNextPlaylist(i.default.active_playlist, !0)
              : i.default.is_touch_moving ||
                (o.default.setPlayPauseButtonsToPause(), r.default.stop());
          }, i.default.delay);
        },
        progress: function () {
          if (i.default.active_song.buffered.length - 1 >= 0) {
            var e = i.default.active_song.buffered.end(
                i.default.active_song.buffered.length - 1
              ),
              t = i.default.active_song.duration;
            i.default.buffered = (e / t) * 100;
          }
          o.default.syncBufferedProgressBars();
        },
        play: function () {
          if (!i.default.is_touch_moving) {
            var e = this.getAttribute("amplitude-song-index"),
              t = this.getAttribute("amplitude-playlist");
            null == t &&
              null == e &&
              s.default.setSongPlayPause(
                i.default.active_playlist,
                i.default.active_index
              ),
              null != t &&
                "" != t &&
                (p.default.checkNewPlaylist(t)
                  ? (p.default.setActivePlaylist(t),
                    null != e
                      ? (p.default.changeSong(e),
                        s.default.setPlaylistPlayPause(t))
                      : (p.default.changeSong(i.default.playlists[t][0]),
                        s.default.setPlaylistPlayPause(t)))
                  : null != e
                  ? (p.default.changeSong(e), s.default.setPlaylistPlayPause(t))
                  : (p.default.changeSong(i.default.active_index),
                    s.default.setPlaylistPlayPause(t))),
              (null != t && "" != t) ||
                null == e ||
                "" == e ||
                ((p.default.checkNewSong(e) ||
                  i.default.active_playlist != t) &&
                  p.default.changeSong(e),
                s.default.setSongPlayPause(t, e));
          }
        },
        pause: function () {
          if (!i.default.is_touch_moving) {
            var e = this.getAttribute("amplitude-song-index"),
              t = this.getAttribute("amplitude-playlist");
            null == e &&
              null == t &&
              (s.default.setSongPlayPause(
                i.default.active_playlist,
                i.default.active_index
              ),
              r.default.pause()),
              (null != t || ("" != t && i.default.active_playlist == t)) &&
                (o.default.syncMainPlayPause("paused"),
                o.default.syncPlaylistPlayPause(
                  i.default.active_playlist,
                  "paused"
                ),
                o.default.syncSongPlayPause(
                  i.default.active_playlist,
                  i.default.active_index,
                  "paused"
                ),
                r.default.pause()),
              (null != t && "" != t) ||
                e != i.default.active_index ||
                (o.default.syncMainPlayPause("paused"),
                o.default.syncPlaylistPlayPause(
                  i.default.active_playlist,
                  "paused"
                ),
                o.default.syncSongPlayPause(
                  i.default.active_playlist,
                  i.default.active_index,
                  "paused"
                ),
                r.default.pause());
          }
        },
        playPause: function () {
          if (!i.default.is_touch_moving)
            if (null != this.getAttribute("amplitude-main-play-pause"))
              s.default.setMainPlayPause();
            else if (
              null != this.getAttribute("amplitude-playlist-main-play-pause")
            ) {
              var e = this.getAttribute("amplitude-playlist");
              s.default.setPlaylistPlayPause(e);
            } else {
              var t = this.getAttribute("amplitude-playlist"),
                a = this.getAttribute("amplitude-song-index");
              s.default.setSongPlayPause(t, a);
            }
        },
        stop: function () {
          i.default.is_touch_moving ||
            (o.default.setPlayPauseButtonsToPause(), r.default.stop());
        },
        mute: function () {
          i.default.is_touch_moving ||
            (0 == i.default.volume
              ? ((i.default.active_song.muted = !1),
                (i.default.volume = i.default.pre_mute_volume),
                o.default.syncMute(!1))
              : ((i.default.active_song.muted = !0),
                (i.default.pre_mute_volume = i.default.volume),
                (i.default.volume = 0),
                o.default.syncMute(!0)),
            r.default.setVolume(i.default.volume),
            o.default.syncVolumeSliders(i.default.volume));
        },
        volumeUp: function () {
          i.default.is_touch_moving ||
            (i.default.volume + i.default.volume_increment <= 100
              ? (i.default.volume =
                  i.default.volume + i.default.volume_increment)
              : (i.default.volume = 100),
            r.default.setVolume(i.default.volume),
            o.default.syncVolumeSliders(i.default.volume));
        },
        volumeDown: function () {
          i.default.is_touch_moving ||
            (i.default.volume - i.default.volume_increment > 0
              ? (i.default.volume =
                  i.default.volume - i.default.volume_increment)
              : (i.default.volume = 0),
            r.default.setVolume(i.default.volume),
            o.default.syncVolumeSliders(i.default.volume));
        },
        songSlider: function () {
          var e = this.value;
          if (null != this.getAttribute("amplitude-main-song-slider")) {
            if (!i.default.active_metadata.live) {
              var t = i.default.active_song.duration * (e / 100);
              isFinite(t) && (i.default.active_song.currentTime = t);
            }
            o.default.syncMainSliderLocation(e),
              "" != i.default.active_playlist &&
                null != i.default.active_playlist &&
                o.default.syncPlaylistSliderLocation(
                  i.default.active_playlist,
                  e
                );
          }
          if (null != this.getAttribute("amplitude-playlist-song-slider")) {
            var a = this.getAttribute("amplitude-playlist");
            i.default.active_playlist == a &&
              (i.default.active_metadata.live ||
                (i.default.active_song.currentTime =
                  i.default.active_song.duration * (e / 100)),
              o.default.syncMainSliderLocation(e),
              o.default.syncPlaylistSliderLocation(a, e));
          }
          if (
            null == this.getAttribute("amplitude-playlist-song-slider") &&
            null == this.getAttribute("amplitude-main-song-slider")
          ) {
            var l = this.getAttribute("amplitude-playlist"),
              u = this.getAttribute("amplitude-song-index");
            i.default.active_index == u &&
              (i.default.active_metadata.live ||
                (i.default.active_song.currentTime =
                  i.default.active_song.duration * (e / 100)),
              o.default.syncMainSliderLocation(),
              "" != i.default.active_playlist &&
                null != i.default.active_playlist &&
                i.default.active_playlist == l &&
                o.default.syncPlaylistSliderLocation(l, location),
              o.default.syncSongSliderLocation(l, u, location));
          }
        },
        volumeSlider: function () {
          r.default.setVolume(this.value),
            o.default.syncVolumeSliderLocation(this.value);
        },
        next: function () {
          if (!i.default.is_touch_moving)
            if (
              "" == this.getAttribute("amplitude-playlist") ||
              null == this.getAttribute("amplitude-playlist")
            )
              "" == i.default.active_playlist ||
              null == i.default.active_playlist
                ? s.default.setNext()
                : s.default.setNextPlaylist(i.default.active_playlist);
            else {
              var e = this.getAttribute("amplitude-playlist");
              s.default.setNextPlaylist(e);
            }
        },
        prev: function () {
          if (!i.default.is_touch_moving)
            if (
              "" == this.getAttribute("amplitude-playlist") ||
              null == this.getAttribute("amplitude-playlist")
            )
              "" == i.default.active_playlist ||
              null == i.default.active_playlist
                ? s.default.setPrev()
                : s.default.setPrevPlaylist(i.default.active_playlist);
            else {
              var e = this.getAttribute("amplitude-playlist");
              s.default.setPrevPlaylist(e);
            }
        },
        shuffle: function () {
          if (!i.default.is_touch_moving)
            if (
              "" == this.getAttribute("amplitude-playlist") ||
              null == this.getAttribute("amplitude-playlist")
            )
              s.default.setShuffle(null);
            else {
              var e = this.getAttribute("amplitude-playlist");
              s.default.setShuffle(e);
            }
        },
        repeat: function () {
          if (!i.default.is_touch_moving)
            if (
              "" == this.getAttribute("amplitude-playlist") ||
              null == this.getAttribute("amplitude-playlist")
            )
              s.default.setRepeat(!i.default.repeat, null);
            else {
              var e = this.getAttribute("amplitude-playlist");
              s.default.setRepeat(!i.default.repeat_statuses[e], e);
            }
        },
        repeatSong: function () {
          i.default.is_touch_moving ||
            (s.default.setRepeatSong(!i.default.repeat_song),
            o.default.syncRepeatSong());
        },
        playbackSpeed: function () {
          if (!i.default.is_touch_moving) {
            switch (i.default.playback_speed) {
              case 1:
                s.default.setPlaybackSpeed(1.5);
                break;
              case 1.5:
                s.default.setPlaybackSpeed(2);
                break;
              case 2:
                s.default.setPlaybackSpeed(1);
            }
            o.default.syncPlaybackSpeed();
          }
        },
        skipTo: function () {
          if (!i.default.is_touch_moving)
            if (this.hasAttribute("amplitude-playlist")) {
              var e = this.getAttribute("amplitude-playlist");
              p.default.checkNewPlaylist(e) && p.default.setActivePlaylist(e);
              var t = parseInt(this.getAttribute("amplitude-location")),
                a = parseInt(this.getAttribute("amplitude-song-index"));
              p.default.changeSong(a),
                r.default.play(),
                o.default.syncMainPlayPause("playing"),
                o.default.syncPlaylistPlayPause(e, "playing"),
                o.default.syncSongPlayPause(e, a, "playing"),
                r.default.skipToLocation(t);
            } else {
              var l = parseInt(this.getAttribute("amplitude-location")),
                u = parseInt(this.getAttribute("amplitude-song-index"));
              p.default.changeSong(u),
                r.default.play(),
                o.default.syncMainPlayPause("playing"),
                o.default.syncSongPlayPause(null, u, "playing"),
                r.default.skipToLocation(l);
            }
        },
      }),
        (e.exports = t.default);
    },
    function (e, t, a) {
      "use strict";
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u = a(6),
        i = l(u),
        n = a(3),
        s = l(n),
        d = a(1),
        o = l(d),
        f = a(4),
        r = (l(f), a(5)),
        c = l(r),
        p = a(2),
        y = l(p),
        v = a(0),
        g = l(v),
        m = (function () {
          function e(e) {
            i.default.initialize(e);
          }
          function t() {
            i.default.rebindDisplay();
          }
          function a() {
            return g.default.active_playlist;
          }
          function l() {
            return g.default.playback_speed;
          }
          function u() {
            return g.default.repeat;
          }
          function n(e) {
            return g.default.repeat_statuses[e];
          }
          function d() {
            return g.default.shuffle_on;
          }
          function f(e) {
            return g.default.shuffled_statuses[e];
          }
          function r() {
            c.default.setShuffle(null);
          }
          function p(e) {
            c.default.setShuffle(e);
          }
          function v() {
            g.default.is_touch_moving ||
              (c.default.setRepeat(!g.default.repeat), y.default.syncRepeat());
          }
          function m(e) {
            g.default.is_touch_moving ||
              c.default.setRepeat(!g.default.repeat_statuses[e], e);
          }
          function _() {
            g.default.is_touch_moving ||
              (c.default.setRepeatSong(!g.default.repeat_song),
              y.default.syncRepeatSong());
          }
          function h() {
            return g.default.default_album_art;
          }
          function P(e) {
            g.default.default_album_art = e;
          }
          function b() {
            return (
              (g.default.active_song.currentTime /
                g.default.active_song.duration) *
              100
            );
          }
          function S() {
            return g.default.active_song.currentTime;
          }
          function x() {
            return g.default.active_song.duration;
          }
          function A(e) {
            "number" == typeof e &&
              e > 0 &&
              e < 100 &&
              (g.default.active_song.currentTime =
                g.default.active_song.duration * (e / 100));
          }
          function L(e) {
            g.default.debug = e;
          }
          function M() {
            return g.default.active_metadata;
          }
          function k(e) {
            return g.default.songs[e];
          }
          function E(e, t) {
            var a = g.default.playlists[e][t];
            return g.default.songs[a];
          }
          function T(e) {
            return (
              void 0 == g.default.songs && (g.default.songs = []),
              g.default.songs.push(e),
              c.default.setNext(),
              g.default.songs.length - 1
            );
          }
          function C(e, t) {
            void 0 == g.default.songs && (g.default.songs = []),
              g.default.songs.push(e);
            var a = g.default.songs.length - 1;
            return void 0 != g.default.playlists[t]
              ? (g.default.playlists[t].push(a),
                c.default.setNextPlaylist(t),
                g.default.playlists[t].length - 1)
              : null;
          }
          function N(e) {
            return (
              void 0 != g.default.songs[e] && (g.default.songs.splice(e, 1), !0)
            );
          }
          function w(e, t) {
            if (void 0 == g.default.playlists[t]) return !1;
            g.default.playlists[t].splice(e, 1);
          }
          function B(e) {
            s.default.playNow(e);
          }
          function I(e) {
            s.default.playSongAtIndex(e);
          }
          function O(e, t) {
            s.default.playPlaylistSongAtIndex(e, t);
          }
          function C(e, t) {}
          function D() {
            s.default.play();
          }
          function H() {
            s.default.pause();
          }
          function q() {
            return g.default.active_song;
          }
          function j() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null;
            "" == e || null == e
              ? null == g.default.active_playlist ||
                "" == g.default.active_playlist
                ? c.default.setNext()
                : c.default.setNextPlaylist(g.default.active_playlist)
              : c.default.setNextPlaylist(e);
          }
          function R() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null;
            "" == e || null == e
              ? null == g.default.active_playlist ||
                "" == g.default.active_playlist
                ? c.default.setPrev()
                : c.default.setPrevPlaylist(g.default.active_playlist)
              : c.default.setPrevPlaylist(e);
          }
          function V() {
            return g.default.songs;
          }
          function U(e) {
            for (var t = [], a = 0; a < g.default.playlists[e].length; a++) {
              var l = g.default.playlists[e][a];
              t.push(g.default.songs[l]);
            }
            return t;
          }
          function z() {
            return g.default.shuffle_on
              ? g.default.shuffle_list
              : g.default.songs;
          }
          function F(e) {
            var t = [];
            if (g.default.shuffled_status[e])
              for (var a = 0; a < g.default.shuffled_playlists[e].length; a++)
                t.push(g.default.songs[a]);
            else
              for (var l = 0; l < g.default.playlists[e].length; l++)
                t.push(g.default.songs[l]);
            return t;
          }
          function W() {
            return parseInt(g.default.active_index);
          }
          function K() {
            return g.default.shuffle_on
              ? parseInt(g.default.shuffle_active_index)
              : parseInt(g.default.active_index);
          }
          function Y() {
            return g.default.version;
          }
          function J() {
            return g.default.buffered;
          }
          function $(e, t) {
            var a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            null != a &&
              o.default.checkNewPlaylist(a) &&
              o.default.setActivePlaylist(a),
              (e = parseInt(e)),
              o.default.changeSong(t),
              s.default.play(),
              y.default.syncMainPlayPause("playing"),
              null != a && y.default.syncPlaylistPlayPause(a, "playing"),
              y.default.syncSongPlayPause(a, t, "playing"),
              s.default.skipToLocation(e);
          }
          function G(e, t) {
            for (var a in t)
              t.hasOwnProperty(a) &&
                "url" != a &&
                "URL" != a &&
                (g.default.songs[e][a] = t[a]);
            y.default.displaySongMetadata();
          }
          function Q(e) {
            g.default.delay = e;
          }
          return {
            init: e,
            bindNewElements: t,
            getActivePlaylist: a,
            getPlaybackSpeed: l,
            getRepeat: u,
            getRepeatPlaylist: n,
            getShuffle: d,
            getShufflePlaylist: f,
            setShuffle: r,
            setShufflePlaylist: p,
            setRepeat: v,
            setRepeatSong: _,
            setRepeatPlaylist: m,
            getDefaultAlbumArt: h,
            setDefaultAlbumArt: P,
            getSongPlayedPercentage: b,
            setSongPlayedPercentage: A,
            getSongPlayedSeconds: S,
            getSongDuration: x,
            setDebug: L,
            getActiveSongMetadata: M,
            getSongByIndex: k,
            getSongAtPlaylistIndex: E,
            addSong: T,
            addSongToPlaylist: C,
            removeSong: N,
            removeSongFromPlaylist: w,
            playNow: B,
            playSongAtIndex: I,
            playPlaylistSongAtIndex: O,
            play: D,
            pause: H,
            audio: q,
            next: j,
            prev: R,
            getSongs: V,
            getSongsInPlaylist: U,
            getSongsState: z,
            getSongsStatePlaylist: F,
            getActiveIndex: W,
            getActiveIndexState: K,
            getVersion: Y,
            getBuffered: J,
            skipTo: $,
            setMetaData: G,
            setDelay: Q,
          };
        })();
      (t.default = m), (e.exports = t.default);
    },
    function (e, t, a) {
      "use strict";
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u = a(0),
        i = l(u),
        n = a(1),
        s = l(n),
        d = a(6),
        o = l(d),
        f = (function () {
          function e(e) {
            u = e;
            var a = document.getElementsByTagName("head")[0],
              l = document.createElement("script");
            (l.type = "text/javascript"),
              (l.src = "https://connect.soundcloud.com/sdk.js"),
              (l.onreadystatechange = t),
              (l.onload = t),
              a.appendChild(l);
          }
          function t() {
            SC.initialize({ client_id: i.default.soundcloud_client }), a();
          }
          function a() {
            for (
              var e = /^https?:\/\/(soundcloud.com|snd.sc)\/(.*)$/, t = 0;
              t < i.default.songs.length;
              t++
            )
              i.default.songs[t].url.match(e) &&
                (i.default.soundcloud_song_count++,
                l(i.default.songs[t].url, t));
          }
          function l(e, t) {
            SC.get("/resolve/?url=" + e, function (e) {
              e.streamable
                ? ((i.default.songs[t].url =
                    e.stream_url + "?client_id=" + i.default.soundcloud_client),
                  i.default.soundcloud_use_art &&
                    (i.default.songs[t].cover_art_url = e.artwork_url),
                  (i.default.songs[t].soundcloud_data = e))
                : s.default.writeDebugMessage(
                    i.default.songs[t].name +
                      " by " +
                      i.default.songs[t].artist +
                      " is not streamable by the Soundcloud API"
                  ),
                ++i.default.soundcloud_songs_ready ==
                  i.default.soundcloud_song_count && o.default.setConfig(u);
            });
          }
          var u = {};
          return { loadSoundCloud: e };
        })();
      (t.default = f), (e.exports = t.default);
    },
    function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = a(0),
        u = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(l),
        i = (function () {
          function e(e) {
            var t = [];
            if (
              ((t =
                null != u.default.active_playlist &&
                "" != u.default.active_playlist
                  ? [
                      '.amplitude-current-hours[amplitude-main-current-hours="true"]',
                      '.amplitude-current-hours[amplitude-playlist-current-hours="true"][amplitude-playlist="' +
                        u.default.active_playlist +
                        '"]',
                      '.amplitude-current-hours[amplitude-song-index="' +
                        u.default.active_index +
                        '"]',
                    ]
                  : [
                      '.amplitude-current-hours[amplitude-main-current-hours="true"]',
                      '.amplitude-current-hours[amplitude-song-index="' +
                        u.default.active_index +
                        '"]',
                    ]),
              document.querySelectorAll(t.join()).length > 0)
            )
              for (
                var a = document.querySelectorAll(t.join()), l = 0;
                l < a.length;
                l++
              )
                "true" == a[l].getAttribute("amplitude-main-current-hours")
                  ? (a[l].innerHTML = e)
                  : "" != u.default.active_playlist &&
                    null != u.default.active_playlist &&
                    a[l].getAttribute("amplitude-playlist") ==
                      u.default.active_playlist
                  ? (a[l].innerHTML = e)
                  : "" == u.default.active_playlist ||
                    (null == u.default.active_playlist &&
                      !a[l].hasAttribute("amplitude-playlist"))
                  ? (a[l].innerHTML = e)
                  : (a[l].innerHTML = "0");
          }
          function t() {
            for (
              var e = document.querySelectorAll(".amplitude-current-hours"),
                t = 0;
              t < e.length;
              t++
            )
              e[t].innerHTML = "0";
          }
          function a(e) {
            var t = [];
            t =
              null != u.default.active_playlist &&
              "" != u.default.active_playlist
                ? [
                    '.amplitude-current-minutes[amplitude-main-current-minutes="true"]',
                    '.amplitude-current-minutes[amplitude-playlist-current-minutes="true"][amplitude-playlist="' +
                      u.default.active_playlist +
                      '"]',
                    '.amplitude-current-minutes[amplitude-song-index="' +
                      u.default.active_index +
                      '"]',
                  ]
                : [
                    '.amplitude-current-minutes[amplitude-main-current-minutes="true"]',
                    '.amplitude-current-minutes[amplitude-song-index="' +
                      u.default.active_index +
                      '"]',
                  ];
            for (
              var a = document.querySelectorAll(t.join()), l = 0, i = a.length;
              l < i;
              l++
            )
              "true" == a[l].getAttribute("amplitude-main-current-minutes")
                ? (a[l].innerHTML = e)
                : "" != u.default.active_playlist &&
                  null != u.default.active_playlist &&
                  a[l].getAttribute("amplitude-playlist") ==
                    u.default.active_playlist
                ? (a[l].innerHTML = e)
                : "" == u.default.active_playlist ||
                  (null == u.default.active_playlist &&
                    !a[l].hasAttribute("amplitude-playlist"))
                ? (a[l].innerHTML = e)
                : (a[l].innerHTML = "00");
          }
          function l() {
            for (
              var e = document.querySelectorAll(".amplitude-current-minutes"),
                t = 0;
              t < e.length;
              t++
            )
              e[t].innerHTML = "00";
          }
          function i(e) {
            var t = [];
            t =
              null != u.default.active_playlist &&
              "" != u.default.active_playlist
                ? [
                    '.amplitude-current-seconds[amplitude-main-current-seconds="true"]',
                    '.amplitude-current-seconds[amplitude-playlist-current-seconds="true"][amplitude-playlist="' +
                      u.default.active_playlist +
                      '"]',
                    '.amplitude-current-seconds[amplitude-song-index="' +
                      u.default.active_index +
                      '"]',
                  ]
                : [
                    '.amplitude-current-seconds[amplitude-main-current-seconds="true"]',
                    '.amplitude-current-seconds[amplitude-song-index="' +
                      u.default.active_index +
                      '"]',
                  ];
            for (
              var a = document.querySelectorAll(t.join()), l = 0, i = a.length;
              l < i;
              l++
            )
              "true" == a[l].getAttribute("amplitude-main-current-seconds")
                ? (a[l].innerHTML = e)
                : "" != u.default.active_playlist &&
                  null != u.default.active_playlist &&
                  a[l].getAttribute("amplitude-playlist") ==
                    u.default.active_playlist
                ? (a[l].innerHTML = e)
                : "" == u.default.active_playlist ||
                  (null == u.default.active_playlist &&
                    !a[l].hasAttribute("amplitude-playlist"))
                ? (a[l].innerHTML = e)
                : (a[l].innerHTML = "00");
          }
          function n() {
            for (
              var e = document.querySelectorAll(".amplitude-current-seconds"),
                t = 0;
              t < e.length;
              t++
            )
              e[t].innerHTML = "00";
          }
          function s(e) {
            var t = [
                '.amplitude-current-time[amplitude-main-current-time="true"]',
                '.amplitude-current-time[amplitude-playlist-main-current-time="' +
                  u.default.active_playlist +
                  '"]',
                '.amplitude-current-time[amplitude-song-index="' +
                  u.default.active_index +
                  '"]',
              ],
              a = document.querySelectorAll(t.join()),
              l = e.minutes + ":" + e.seconds;
            e.hours > 0 && (l = e.hours + ":" + l);
            for (var i = 0, n = a.length; i < n; i++) a[i].innerHTML = l;
          }
          function d() {
            for (
              var e = document.querySelectorAll(".amplitude-current-time"),
                t = 0;
              t < e.length;
              t++
            )
              e[t].innerHTML = "00:00";
          }
          function o(e) {
            f(e), r(e), c(e);
          }
          function f(e) {
            if (!isNaN(e))
              for (
                var t = document.querySelectorAll(
                    '.amplitude-song-played-progress[amplitude-main-song-played-progress="true"]'
                  ),
                  a = 0;
                a < t.length;
                a++
              ) {
                var l = t[a].max;
                t[a].value = (e / 100) * l;
              }
          }
          function r(e) {
            if (!isNaN(e))
              for (
                var t = document.querySelectorAll(
                    '.amplitude-song-played-progress[amplitude-playlist-song-played-progress="true"][amplitude-playlist="' +
                      u.default.active_playlist +
                      '"]'
                  ),
                  a = 0;
                a < t.length;
                a++
              ) {
                var l = t[a].max;
                t[a].value = (e / 100) * l;
              }
          }
          function c(e) {
            if (!isNaN(e))
              if (
                "" != u.default.active_playlist &&
                null != u.default.active_playlist
              )
                for (
                  var t = document.querySelectorAll(
                      '.amplitude-song-played-progress[amplitude-playlist="' +
                        u.default.active_playlist +
                        '"][amplitude-song-index="' +
                        u.default.active_index +
                        '"]'
                    ),
                    a = 0;
                  a < t.length;
                  a++
                ) {
                  var l = t[a].max;
                  t[a].value = (e / 100) * l;
                }
              else
                for (
                  var i = document.querySelectorAll(
                      '.amplitude-song-played-progress[amplitude-song-index="' +
                        u.default.active_index +
                        '"]'
                    ),
                    n = 0;
                  n < i.length;
                  n++
                ) {
                  var s = i[n].max;
                  i[n].value = (e / 100) * s;
                }
          }
          function p(e) {
            e.classList.add("amplitude-playing"),
              e.classList.remove("amplitude-paused");
          }
          function y(e) {
            e.classList.remove("amplitude-playing"),
              e.classList.add("amplitude-paused");
          }
          function v(e) {
            var t = [];
            if (
              ((t =
                null != u.default.active_playlist &&
                "" != u.default.active_playlist
                  ? [
                      '.amplitude-duration-hours[amplitude-main-duration-hours="true"]',
                      '.amplitude-duration-hours[amplitude-playlist-duration-hours="true"][amplitude-playlist="' +
                        u.default.active_playlist +
                        '"]',
                      '.amplitude-duration-hours[amplitude-song-index="' +
                        u.default.active_index +
                        '"]',
                    ]
                  : [
                      '.amplitude-duration-hours[amplitude-main-duration-hours="true"]',
                      '.amplitude-duration-hours[amplitude-song-index="' +
                        u.default.active_index +
                        '"]',
                    ]),
              document.querySelectorAll(t.join()).length > 0)
            )
              for (
                var a = document.querySelectorAll(t.join()), l = 0;
                l < a.length;
                l++
              )
                "true" == a[l].getAttribute("amplitude-main-duration-hours")
                  ? (a[l].innerHTML = e)
                  : "" != u.default.active_playlist &&
                    null != u.default.active_playlist &&
                    a[l].getAttribute("amplitude-playlist") ==
                      u.default.active_playlist
                  ? (a[l].innerHTML = e)
                  : "" == u.default.active_playlist ||
                    (null == u.default.active_playlist &&
                      !a[l].hasAttribute("amplitude-playlist"))
                  ? (a[l].innerHTML = e)
                  : (a[l].innerHTML = "0");
          }
          function g(e) {
            var t = [];
            t =
              null != u.default.active_playlist &&
              "" != u.default.active_playlist
                ? [
                    '.amplitude-duration-minutes[amplitude-main-duration-minutes="true"]',
                    '.amplitude-duration-minutes[amplitude-playlist-duration-minutes="true"][amplitude-playlist="' +
                      u.default.active_playlist +
                      '"]',
                    '.amplitude-duration-minutes[amplitude-song-index="' +
                      u.default.active_index +
                      '"]',
                  ]
                : [
                    '.amplitude-duration-minutes[amplitude-main-duration-minutes="true"]',
                    '.amplitude-duration-minutes[amplitude-song-index="' +
                      u.default.active_index +
                      '"]',
                  ];
            for (
              var a = document.querySelectorAll(t.join()), l = 0;
              l < a.length;
              l++
            )
              "true" == a[l].getAttribute("amplitude-main-duration-minutes")
                ? (a[l].innerHTML = e)
                : "" != u.default.active_playlist &&
                  null != u.default.active_playlist &&
                  a[l].getAttribute("amplitude-playlist") ==
                    u.default.active_playlist
                ? (a[l].innerHTML = e)
                : "" == u.default.active_playlist ||
                  (null == u.default.active_playlist &&
                    !a[l].hasAttribute("amplitude-playlist"))
                ? (a[l].innerHTML = e)
                : (a[l].innerHTML = "00");
          }
          function m(e) {
            var t = [];
            t =
              null != u.default.active_playlist &&
              "" != u.default.active_playlist
                ? [
                    '.amplitude-duration-seconds[amplitude-main-duration-seconds="true"]',
                    '.amplitude-duration-seconds[amplitude-playlist-duration-seconds="true"][amplitude-playlist="' +
                      u.default.active_playlist +
                      '"]',
                    '.amplitude-duration-seconds[amplitude-song-index="' +
                      u.default.active_index +
                      '"]',
                  ]
                : [
                    '.amplitude-duration-seconds[amplitude-main-duration-seconds="true"]',
                    '.amplitude-duration-seconds[amplitude-song-index="' +
                      u.default.active_index +
                      '"]',
                  ];
            for (
              var a = document.querySelectorAll(t.join()), l = 0;
              l < a.length;
              l++
            )
              "true" == a[l].getAttribute("amplitude-main-duration-seconds")
                ? (a[l].innerHTML = e)
                : "" != u.default.active_playlist &&
                  null != u.default.active_playlist &&
                  a[l].getAttribute("amplitude-playlist") ==
                    u.default.active_playlist
                ? (a[l].innerHTML = e)
                : "" == u.default.active_playlist ||
                  (null == u.default.active_playlist &&
                    !a[l].hasAttribute("amplitude-playlist"))
                ? (a[l].innerHTML = e)
                : (a[l].innerHTML = "00");
          }
          function _(e) {
            var t = [
                '.amplitude-duration-time[amplitude-main-duration-time="true"]',
                '.amplitude-duration-time[amplitude-playlist-main-duration-time="' +
                  u.default.active_playlist +
                  '"]',
                '.amplitude-duration-time[amplitude-song-index="' +
                  u.default.active_index +
                  '"]',
              ],
              a = document.querySelectorAll(t.join()),
              l = "00:00";
            isNaN(e.minutes) ||
              isNaN(e.seconds) ||
              ((l = e.minutes + ":" + e.seconds),
              !isNaN(e.hours) && e.hours > 0 && (l = e.hours + ":" + l));
            for (var i = 0; i < a.length; i++) a[i].innerHTML = l;
          }
          function h(e, t) {
            var a = "00:00";
            if (void 0 != e && void 0 != t) {
              var l =
                  parseInt(e.seconds) +
                  60 * parseInt(e.minutes) +
                  60 * parseInt(e.hours) * 60,
                i =
                  parseInt(t.seconds) +
                  60 * parseInt(t.minutes) +
                  60 * parseInt(t.hours) * 60;
              if (!isNaN(l) && !isNaN(i)) {
                var n = i - l,
                  s = Math.floor(n / 3600),
                  d = Math.floor((n - 3600 * s) / 60),
                  o = n - 3600 * s - 60 * d;
                (a = (d < 10 ? "0" + d : d) + ":" + (o < 10 ? "0" + o : o)),
                  s > 0 && (a = s + ":" + a);
              }
            }
            for (
              var f = [
                  '.amplitude-time-remaining[amplitude-main-time-remaining="true"]',
                  '.amplitude-time-remaining[amplitude-playlist-main-time-remaining="' +
                    u.default.active_playlist +
                    '"]',
                  '.amplitude-time-remaining[amplitude-song-index="' +
                    u.default.active_index +
                    '"]',
                ],
                r = document.querySelectorAll(f.join()),
                c = 0;
              c < r.length;
              c++
            )
              r[c].innerHTML = a;
          }
          return {
            syncCurrentHours: e,
            syncCurrentMinutes: a,
            syncCurrentSeconds: i,
            syncCurrentTime: s,
            resetCurrentHours: t,
            resetCurrentMinutes: l,
            resetCurrentSeconds: n,
            resetCurrentTime: d,
            syncSongPlayedProgressBar: o,
            setElementPlay: p,
            setElementPause: y,
            syncDurationHours: v,
            syncDurationMinutes: g,
            syncDurationSeconds: m,
            syncDurationTime: _,
            syncCountDownTime: h,
          };
        })();
      (t.default = i), (e.exports = t.default);
    },
  ]);
});


let slideIndex = 0;


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

window.onload = (event) => {
  showSlides();
};

setInterval(showSlides, 3000); // Change image every 2 seconds



