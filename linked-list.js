function LinkedList(){
  //helper function to create each node in the linked list
  var Node = function(element){
    this.element = element;
    this.next = null;
  }
  var length = 0; //private variables
  var head = null; //private variables

  this.append = function(element){ //appending elements to end of linked list
    var node = new Node(element);
    var current; //this variable will point to the current item of list
    if (head === null){ //if linkedlist is empty, it will be head
      head = node;
    } else{
      current = head; //start at head work your way down
      while (current.next){ //loop the list until last item
        current = current.next;
      }
      current.next = node; //get last item and assign next to node to make th elink
    }
    length++; //update the size of the linked-list
  }
  this.insert = function(position,element){
    if (position >= 0 && position < length){
      var node = new Node(element);
      var current = head, previous;
      var index = 0;

      if (position === 0){
        node.next = current;
        head = node;
      } else{
        while(index++ < position){
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      length++;
      return true

    } else{
      return false;
    }
  }
  this.getHead = function(){
    return head;
  }
  this.removeAt = function(position){
    if (position > -1 && position < length){
      var current = head, //current is at the head
      previous,
      index = 0;
      //removing first item
      if (position === 0){
        head = current.next;
      } else{
        while(index++ < position){
          previous = current;
          current = current.next;
        }
        //link previous with current's next: skip it to remove
        previous.next = current.next;
      }
      length --;
      return current.element;
    } else{
      return null;
    }
  }
  this.remove = function(element){ //needs #indexOf that we just built
    var index = this.indexOf(element);
    return this.removeAt(index);
  }
  this.indexOf = function(element){
    var current = head
    var index = -1;
    while (current){
      if(current.element === element){
        return index;
      }
      else{
        index++;
        current = current.next;
      }
    }
    return -1;
  }
  this.isEmpty = function(){
    return length === 0;
  }
  this.size = function(){
    return length;
  }
  this.toString = function(){
    var current = head, string = "";
    while (current){
      string += current.element + (current.next ? ', ' : '');
      current = current.next;
    }
    return string;
  }
  this.print = function(){

  }
}
