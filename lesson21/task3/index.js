export function getItemList() {
  const elementList = document.querySelectorAll(".technology");
  console.dir(elementList);
  return elementList;
}

export function getItemsArray() {
  const list = document.querySelectorAll(".tool");
  const NodeList = Array.from(list);
  console.dir(NodeList);
  return NodeList;
}
