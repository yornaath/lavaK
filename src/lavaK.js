/*
 ___                               __  __
/\_ \                             /\ \/\ \
\//\ \      __     __  __     __  \ \ \/'/'
  \ \ \   /'__`\  /\ \/\ \  /'__`\ \ \ , <
   \_\ \_/\ \L\.\_\ \ \_/ |/\ \L\.\_\ \ \\`\
   /\____\ \__/.\_\\ \___/ \ \__/.\_\\ \_\ \_\
   \/____/\/__/\/_/ \/__/   \/__/\/_/ \/_/\/_/

@author: @@AUTHOR@@
@description: @@DESCRIPTION@@
@version: @@VERSION@@,
@homepage: @@HOMEPAGE@@
@license: @@LICENSE@@
*/
!function (name, definition) {
  if (typeof module !== 'undefined') module.exports = definition();
  else if (typeof define == 'function' && typeof define.amd  == 'object') define(definition);
  else this[name] = definition();
}('lavaK', function(){

  var attachEvent, detachEvent, doc, keydownEvent, keyupEvent, w, keyindex, codeindex, hotkeys, keysdown, lid;

  w = window;
  doc = document || {};
  attachEvent = w['addEventListener'] ? 'addEventListener' : 'attachEvent';
  detachEvent = w['removeEventListener'] ? 'removeEventListener' : 'detachEvent';
  keydownEvent = w['addEventListener'] ? 'keydown' : 'onkeydown';
  keyupEvent = w['addEventListener'] ? 'keyup' : 'onkeyup';

  codeindex = { }


  keyindex = {
    'BACKSPACE': 8, 'TAB': 9, 'ENTER': 13, 'SHIFT': 16, 'CTRL': 17, 'ALT': 18,
    'PAUSE': 19, 'CAPSLOCK': 20, 'ESC': 27, 'PAGEUP': 33, 'PAGEDOWN': 34, 'END': 35,
    'HOME': 36, 'LEFTARROW': 37, 'UPARROW': 38, 'RIGHTARROW': 39, 'DOWNARROW': 40, 'INSERT': 45,
    'DELETE': 46, '0': 48, '1': 49, '2': 50, '3': 51, '4': 52, '5': 53, '6': 54,
    '7': 55, '8': 56, '9': 57, 'A': 65, 'B': 66, 'C': 67, 'D': 68, 'E': 69, 'F': 70,
    'G': 71, 'H': 72, 'I': 73, 'J': 74, 'K': 75, 'L': 76, 'M': 77, 'N': 78, 'O': 79,
    'P': 80, 'Q': 81, 'R': 82, 'S': 83, 'T': 84, 'U': 85, 'V': 86, 'W': 87, 'X': 88,
    'Y': 89, 'Z': 90, '0NUMPAD': 96, '1NUMPAD': 97, '2NUMPAD': 98, '3NUMPAD': 99,
    '4NUMPAD': 100, '5NUMPAD': 101, '6NUMPAD': 102, '7NUMPAD': 103, '8NUMPAD': 104, '9NUMPAD': 105,
    'MULTIPLY': 106, 'PLUS': 107, 'MINUT': 109, 'DOT': 110, 'SLASH1': 111, 'F1': 112,
    'F2': 113, 'F3': 114, 'F4': 115, 'F5': 116, 'F6': 117, 'F7': 118,'F8': 119, 'F9': 120,
    'F10': 121, 'F11': 122, 'F12': 123, 'EQUAL': 187, 'COMA': 188, 'SLASH': 191, 'BACKSLASH': 220
  };

  for(var key in keyindex) {
    codeindex[keyindex[key]] = key;
  }


  function arrayContentsMatch(ai, aj) {
    var match = true, _i, _j;
    if(ai.length != aj.length) return false;
    outer:
    for(_i = ai.length-1; _i >= 0; _i--) {
      for(_j = aj.length-1; _j >= 0; _j--) {
        if(ai[_i] == aj[_j]) continue outer;
      }
      match = false;
    }
    return match;
  }

  lid = 0;
  hotkeys = { }

  keysdown = { }


  w[attachEvent](keydownEvent, function(event) {
    var _keysdownpattern = [], _i, _keycode, _lavakey, _lid;
    keysdown[event.keyCode] = true
    for(_keycode in keysdown) {
      _keysdownpattern.push(_keycode)
    }
    for(_lavakey in hotkeys) {
      if(arrayContentsMatch(hotkeys[_lavakey].codepattern, _keysdownpattern)) {
        for(_lid in hotkeys[_lavakey].fns) {
          if(hotkeys[_lavakey].fns[_lid].active)hotkeys[_lavakey].fns[_lid].fn.call(this, event)
        };
      }
    }
  })


  w[attachEvent](keyupEvent, function(event) {
    delete keysdown[event.keyCode]
  })


  return {
    add: function(combopattern, fn) {
      var combopattern = combopattern.toUpperCase(),patternarray = combopattern.split('+'),
          keycodepattern = [],_key,_lid = lid++;
      for(var _i = 0, _len = patternarray.length; _i < _len; _i++) {
        _key = patternarray[_i]
        keycodepattern.push(keyindex[_key])
      }
      !hotkeys[combopattern] ? hotkeys[combopattern] = {
        fns:{ }, codepattern: keycodepattern
      } : null;
      hotkeys[combopattern].fns[_lid] = {
        fn: fn,
        active: true
      };
      return {
        disable: function() {
          hotkeys[combopattern].fns[_lid].active = false;
        },
        enable: function() {
          hotkeys[combopattern].fns[_lid].active = true;
        }
      }
    },
    remove: function(combopattern) {
      var combopattern = combopattern.toUpperCase();
      if(hotkeys[combopattern]) delete hotkeys[combopattern];
    }
  }

});
