export function decode(encodedText) {
  let decodedText = ''
  for (let i = 0; i < encodedText.length; i++) {
    let cc = encodedText.charCodeAt(i) - 9 // reverse the encoding
    decodedText += String.fromCharCode(cc)
  }
  return decodedText
}
