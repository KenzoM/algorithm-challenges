function HashTable(){
  var table = [];
  var ValuePair = function(key, value){
    this.key = key;
    this.value = value;
    this.toString = function(){
      return `[ ${this.key} - ${this.value}]`
    }
  };
  var loseloseHashCode = function(key){
    var hash = 0;
    for (var i = 0 ; i < key.length ; i++){
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  }
  this.put =  function(key,value){
    var position = loseloseHashCode(key);
    if (table[position] == undefined){
      table[position] = new LinkedList();
    }
    table[position].append(new ValuePair(key,value))
  }
  this.remove = function(key){
    var position = loseloseHashCode(key);
    if (table[position] !== undefined){
      //iterate linked list to find key/value
      var current = table[position].getHead();
      while (current.next){
        if (current.element.key === key){
          table[position].remove(current.element);
          if (table[position].isEmpty()){
            table[position] = undefined;
          }
          return true
        }
        current = current.next;
      }
    }
    return undefined;
  }
  this.get =  function(key){
    var position = loseloseHashCode(key);
    if (table[position] !== undefined){
      //iterate linked list to find key/value;
      var current = table[position].getHead();
      while (current.next){
        if (current.element.key === key){
          return current.element.value
        }
        current = current.next
      }
      //check in case first or last element
      if (current.element.key === key){
        return current.element.value;
      }
    }
    return undefined;
  }
  this.print = function(){
    for (var i = 0; i < table.length ; i++){
      if (table[i] !== undefined){
        console.log(`${i} : ${table[i]}`);
      }
    }
  }
}
