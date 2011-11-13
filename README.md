```
 ___                               __  __     
/\_ \                             /\ \/\ \    
\//\ \      __     __  __     __  \ \ \/'/'   
  \ \ \   /'__`\  /\ \/\ \  /'__`\ \ \ , <    
   \_\ \_/\ \L\.\_\ \ \_/ |/\ \L\.\_\ \ \\`\  
   /\____\ \__/.\_\\ \___/ \ \__/.\_\\ \_\ \_\
   \/____/\/__/\/_/ \/__/   \/__/\/_/ \/_/\/_/
                                              
```
Hotkeys(hot as lava..) for javascript with a simple api.

## Api
The spec is simple and not set in stone.  

### lavaK.add(keycombo, fn)
---
Takes the keycombo(string) and a associated function to execute on triggering.  
Returns a hotkey object, look further down for reference

```javascript
var findHotkey = lavaK.add('ctrl+alt+f', find);

var computeHotkey = lavaK.add('shift+c', function(){
  //compute
  //compute
  //compute
})

```  

### lavaK.remove(keycombo)
---
Takes a keycombo(string) same as add, and removes all associated functions.

```javascript
var findHotkey = lavaK.add('ctrl+alt+f', find);
var findHotkey2 = lavaK.add('ctrl+alt+f', find2);

lavaK.remove('ctrl+alt+f')
```
Be carefull as this removes ALL associated functions. If you need to add several functions to the same keycombo and enable/disable them according to a specific state; you should use the hotkey.enable() and hotkey.disable().


## hotkey
Creating a new hotkey with lavaK.add() returns a lavaK object with functions for disabling the hotkey and reenabling it. You can assign more than one function to a given key combo, and disable/enable them individually.

### hotkey.enable()
Enables the given hotkey

```javascript
var findHotkey = lavaK.add('ctrl+alt+f', find);
findHotkey.enable();
```

### hotkey.disable()
Disables the given hotkey

```javascript
var findHotkey = lavaK.add('ctrl+alt+f', find);
findHotkey.disable();
```

## Integration
You can integrate lavaK into  your project in several ways.

```html
<script type="text/javascript" src="./path/to/lavaK.js"></script>
```  
lavaK is then bound directly to the context, in this instance window. And you can access it everywhere in your code.
This is the quick and dirty way.

You can require it with and AMD module loader, for example requirejs.

Or you can include it into your ender build by using:

```bash
ender build lavaK
or
ender add lavaK
```
The lavaK API is then available at the ender global $ or can be required with enders require function.

```javascript
var lavaK = require('lavaK') //require
//or
$.lavaK
```

