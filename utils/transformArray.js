function nodeListInArray(nodeList) {
  if (nodeList !== 'object') {
    return nodeList;
  }
  const node_arr = Array.from(nodeList);
  return node_arr;
}

export {
  nodeListInArray
}