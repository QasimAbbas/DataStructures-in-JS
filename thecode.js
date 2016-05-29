var node1 = {
  data: null,
  next: null
};

var node2 = {
  data: null,
  next: null
};

node2.data  = "data2";
node1.next = node2;

var peshy;
console.log(node1.next.data);
