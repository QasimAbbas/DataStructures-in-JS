function Node(data){
  this.data = data;
  this.next = null;
}

function SinglyList(){
  this.length = 0;
  this.head = null;
}

SinglyList.prototype.add = function(value){
  var temp = new Node(value);
  temp.next = SinglyList.head;
  SinglyList.head = temp;
}
