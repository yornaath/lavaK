```
 ___                               __  __     
/\_ \                             /\ \/\ \    
\//\ \      __     __  __     __  \ \ \/'/'   
  \ \ \   /'__`\  /\ \/\ \  /'__`\ \ \ , <    
   \_\ \_/\ \L\.\_\ \ \_/ |/\ \L\.\_\ \ \\`\  
   /\____\ \__/.\_\\ \___/ \ \__/.\_\\ \_\ \_\
   \/____/\/__/\/_/ \/__/   \/__/\/_/ \/_/\/_/
                                              
```
Hotkeys for for javascript with a simple api.

## Api
The spec is simple and not set in stone.  

### lavaK.add
Takes the keycombo(string) and a associated function to execute on triggering.  

```javascript
var findHotkey = lavaK.add('ctrl+alt+f', find);

var computeHotkey = lavaK.add('shift+c', function(){
  //compute
  //compute
  //compute
})

```  
Creating a new hotkey returns a lavaK object with functions for disabling the hotkey and reenabling it.  
You can assign more than one function to a given key combo, and disable/enable them individually.

```javascript
var findHotkey = lavaK.add('ctrl+alt+f', find);

findHotkey.disable();

findHotkey.enable();
```