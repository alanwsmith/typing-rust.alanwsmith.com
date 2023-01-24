const init = () => {
  // Add the typo status line
  const code1Element = document.getElementsByClassName('CODE1')[0]
  if (code1Element) {
    const editorWrapper = code1Element.parentNode.parentNode
    const typoStatusNode = document.createElement('div')
    typoStatusNode.id = 'typoStatusNode'
    typoStatusNode.style.fontFamily = 'monospace'

    typoStatusNode.innerHTML = `<span style="color: #555555;">Status:</span> <span style="color: #009900">OK</span>`
    editorWrapper.insertAdjacentElement('afterend', typoStatusNode)

    // Could probably pull this from the `CODE1`, but this is fine for now.
    const codeBlock = document.getElementsByClassName('ace_text-input')[0]
    codeBlock.addEventListener('keyup', checkForTyposV3)
  }
}

const checkForTyposV3 = () => {
  const codeEditorEl = document.getElementsByClassName('CODE1')[0]
  const statusNode = document.createElement('div')

  let walkerNode

  // Get the target source code
  const exampleEl = document.getElementsByClassName('EXAMPLE1')[0]
  let baseString = ''

  const targetWalker = document.createTreeWalker(
    exampleEl,
    NodeFilter.SHOW_TEXT,
    null,
    false
  )

  while ((walkerNode = targetWalker.nextNode())) {
    baseString += walkerNode.nodeValue
  }

  const baseLines = []
  const baseSplit = baseString.split('\n')

  for (let indx = 0; indx < baseSplit.length; indx++) {
    if (baseSplit[indx] !== '') {
      baseLines.push(baseSplit[indx].trim())
    }
  }

  // The the user entered lines
  const editorLineEls = document.getElementsByClassName('ace_line')

  const editorLines = []

  for (let editorLine of editorLineEls) {
    let lineString = ''
    const walker = document.createTreeWalker(
      editorLine,
      NodeFilter.SHOW_TEXT,
      null,
      false
    )

    while ((walkerNode = walker.nextNode())) {
      lineString += walkerNode.nodeValue
    }

    if (lineString.trim() !== '') {
      editorLines.push(lineString.trim())
    }
  }

  const typoStatusNode = document.getElementById('typoStatusNode')

  if (editorLines.length > 0) {
  }

  toploop: for (let baseIndex = 0; baseIndex < baseLines.length; baseIndex++) {
    let bummerString = ''

    if (editorLines[baseIndex] === undefined) {
      break toploop
    }

    if (baseIndex === editorLines.length - 1) {
      lowerloop1: for (
        let letterIndex = 0;
        letterIndex < editorLines[baseIndex].length;
        letterIndex++
      ) {
        if (
          editorLines[baseIndex].charAt(letterIndex) !==
          baseLines[baseIndex].charAt(letterIndex)
        ) {
          bummerString += `<span style="color: red;">${baseLines[
            baseIndex
          ].charAt(letterIndex)}</span>`
          typoStatusNode.innerHTML = `<span style="color: #555555;">Status:</span> <span style="color: #880000">TYPO</span> <span style="color: #555555;">|</span> ${bummerString}`
          break toploop
          break lowerloop1
        } else {
          bummerString += `<span style="color: #888888">${baseLines[
            baseIndex
          ].charAt(letterIndex)}</span>`
          typoStatusNode.innerHTML = `<span style="color: #555555;">Status:</span> <span style="color: #008800">OK</span>&nbsp;&nbsp;&nbsp;<span style="color: #555555;">|</span>`
        }
      }
    } else {
      lowerloop2: for (
        let letterIndex = 0;
        letterIndex < baseLines[baseIndex].length;
        letterIndex++
      ) {
        if (
          editorLines[baseIndex].charAt(letterIndex) !==
          baseLines[baseIndex].charAt(letterIndex)
        ) {
          bummerString += `<span style="color: red;">${baseLines[
            baseIndex
          ].substring(letterIndex)}</span>`
          typoStatusNode.innerHTML = `<span style="color: #555555;">Status:</span> <span style="color: #880000">Typo</span> - ${bummerString}`
          break toploop
          break lowerloop2
        } else {
          bummerString += baseLines[baseIndex].charAt(letterIndex)
          typoStatusNode.innerHTML = `<span style="color: #555555;">Status:</span> <span style="color: #008800">OK</span>`
        }
      }
    }
  }

  editorLoop: for (
    let baseLineIndex = 0;
    baseLineIndex < baseLines.length;
    baseLineIndex++
  ) {
    let bummerString = ''
    lineLoop: for (
      let lineIndex = 0;
      lineIndex < baseLines[baseLineIndex].length;
      lineIndex++
    ) {

    }
  }

}

document.addEventListener('DOMContentLoaded', init)
