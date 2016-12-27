function Queue(){
  var items = [];
  this.enqueue = function(element){
    return items.push(element);
  }
  this.dequeue = function(){
    return items.shift();
  }
  this.front = function(){
    return items[0];
  }
  this.isEmpty = function(){
    return items.length === 0;
  }
  this.size = function(){
    return items.length;
  }
  this.print = function(){
    console.log(items.toString());
  }
}

function PriorityQueue() {
  let items = [];

  function QueueElement (element, priority){ // {1}
      this.element = element;
      this.priority = priority;
  }
  this.enqueue = function(element, priority){
      let queueElement = new QueueElement(element, priority);

      let added = false;
      for (let i=0; i<items.length; i++){
          if (queueElement.priority < items[i].priority){ // {2}
              items.splice(i,0,queueElement);             // {3}
              added = true;
              break; // {4}
          }
      }
      if (!added){
          items.push(queueElement); //{5}
      }
  };

  this.dequeue = function(){
      return items.shift();
  };

  this.front = function(){
      return items[0];
  };

  this.isEmpty = function(){
      return items.length == 0;
  };

  this.size = function(){
      return items.length;
  };

  this.print = function(){
      for (let i=0; i<items.length; i++){
          console.log(`${items[i].element}  - ${items[i].priority}`);
      }
  };
}

function hotPotato (nameList, num){

    let queue = new Queue();

    for (let i=0; i<nameList.length; i++){
        queue.enqueue(nameList[i]);
    }

    let eliminated = '';
    while (queue.size() > 1){
        for (let i=0; i<num; i++){
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + ' was eliminated from the Hot Potato game.');
    }

    return queue.dequeue();
}
let names = ['John','Jack','Camila','Ingrid','Carl'];
let winner = hotPotato(names, 1);
