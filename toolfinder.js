const toolFinder = (tools, startIndex, target) => {

    const currentTool = tools[startIndex]
    if(currentTool === target) {
      return startIndex
    } else {
      let firstHalf = tools.slice(0, startIndex)
      // console.log(firstHalf)
      let secondHalf = tools.slice(startIndex )
      // console.log(secondHalf)
      const right = secondHalf.find(tool => tool === target)
      const left = firstHalf.find(tool => tool === target)
      // console.log(left, right)
  
      if(left) {
        return startIndex - tools.indexOf(left)
      } else {
        return tools.indexOf(right) - startIndex
      } 
    }
}
  
  
  const tools = ['hammer', 'plyers', 'drill', 'hello', 'saw']
  console.log(toolFinder(tools, 2, 'hello'))