function printObject(obj) {
  if(!obj)
    return
    
  output = JSON.stringify(obj, null, " ")
  
  if(!output)
    return
  
  output.split("\n").forEach(function(line) {
    npc.say(line)
  })
}
