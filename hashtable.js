function HashTable(){
  var table = [];
  var ValuePair = function(key, value){
    this.key = key;
    this.value = value;
    this.toString = function(){
      return `[ ${this.key} - ${this.value}]`
    }
  };
  /* private method for HashTable */
  // Given a key parameter, we will generate a number
  //based on the sum of each char ASCII value that the composes key
  // This method is used for creating hash value in our HashTable

  var loseloseHashCode = function(key){
    var hash = 0;
    for (var i = 0 ; i < key.length ; i++){
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  }
  // adds new item to the hash table (or update)
  this.put =  function(key,value){
    var position = loseloseHashCode(key);
    if (table[position] == undefined){
      table[position] = new LinkedList();
    }
    table[position].append(new ValuePair(key,value))
  }
  // this removes the value from the hash table using the key
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
  // returns a specific value searched by the key
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
