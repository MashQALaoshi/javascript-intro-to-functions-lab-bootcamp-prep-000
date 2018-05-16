function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}
  logShout('hello')
  
function logWhisper(string)  {
  console.log(string.toLowerCase())
}
  logWhisper('hello')
  
function sayHiToGrandma(string) {
   if string.lowercase() {
    return "I can't hear you!"

} else {
  
}
} 

describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })