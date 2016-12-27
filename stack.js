function Stack(){
  var items = []
  this.push = function(element){
    return items.push(element);
  }
  this.pop = function(){
    return items.pop();
  }
  this.peek = function(){
    return items[items.length -1];
  }
  this.isEmpty = function(){
    return items.length === 0;
  }
  this.size = function(){
    return items.length;
  }
  this.clear = function(){
    return [];
  }
  this.print = function(){
    console.log(items.toString());
  }
}

function divideBy2(decNumber){
  var remainerStack = new Stack()
  var remainer;
  var binaryString ='';
  while (decNumber > 0){
    remainer = Math.floor(decNumber % 2);
    remainerStack.push(remainer);
    decNumber = Math.floor(decNumber / 2)
  }
  while(!remainerStack.isEmpty()){
    binaryString += remainerStack.pop().toString()
  }
  return binaryString;
}

// function baseConverter(decNumber, base){
//   var remStack = new Stack(), rem, baseString = "", digits = "0123456789ABCDEF";
//   while(){
//
//   }
// }
