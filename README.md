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
The spec here is only suggestions.  
### hotkey.create vs new hotkey  
This method makes it hard to reference a specific hotkey at a later time 

```javascript
lavaK.create('ctrl+alt+f', find);
lavaK.create('shift+c', function(){
  //compute
  //compute
  //compute
})
```  

Object model:

```javascript
var hotkey = new LavaK('ctrl+alt+f', find);
```  
### deactivating hotkey  
```javascript
lavaK.deactivate('ctrl+alt+f')
```  
or:  

```javascript
hotkey.deactivate()
```

#### Parameters  
Parameter list as suggested

```javascript
lavaK.create(combo, fn)
//example
lavaK.create('ctrl+alt+f', function(){
  do stuff
});
```

or:

```javascript
lavaK.create(options)
//example
lavaK.create({
  combo: 'ctrl+alt+f',
  fn: function(){
    do stuff
  }
});
```


The api is up for discussion. You may want to be able to activate and deactivate hotkeys. I think managing states in 
which they are active or deactivated is beyond the scope of the plugin. Lets keep it lightweight.