const s = {
  typoCheckerOn: true,
}

export const typoInit = () => {
  document.addEventListener('DOMContentLoaded', typoReadyUp)
}

const disableTypoChecker = () => {
  window.statusButton.removeEventListener('click', disableTypoChecker)
  window.statusButton.addEventListener('click', enableTypoChecker)
  s.typoCheckerOn = false
  s.statusLine.innerHTML = `<span style="color: #555555;">Typos: Checker Diabled</span>`
}

const enableTypoChecker = () => {
  window.statusButton.removeEventListener('click', enableTypoChecker)
  window.statusButton.addEventListener('click', disableTypoChecker)
  s.typoCheckerOn = true
  s.statusLine.innerHTML = `<span style="color: #555555;">Typos:</span> <span style="color: #009900">0</span>`
  checkForTyposV3()
}

const typoReadyUp = () => {
  s.code1 = document.getElementsByClassName('CODE1')[0]
  if (s.code1) {
    s.codeRunner = s.code1.parentNode.parentNode
    s.statusWrapper = document.createElement('div')
    s.statusLine = document.createElement('div')
    s.statusLine.innerHTML = `<span style="color: #555555;">Typos:</span> <span style="color: #009900">0</span>`
    s.statusLine.id = 'typoStatusNode'
    s.statusButtonDiv = document.createElement('div')
    s.statusButtonDiv.innerHTML = `<button id="statusButton">Disable Typo Checker</button>`
    s.statusWrapper.appendChild(s.statusLine)
    s.statusWrapper.appendChild(s.statusButtonDiv)
    s.codeRunner.insertAdjacentElement('beforebegin', s.statusWrapper)
    window.statusButton.addEventListener('click', disableTypoChecker)
    s.codeBlock = document.getElementsByClassName('ace_text-input')[0]
    s.codeBlock.addEventListener('keyup', checkForTyposV3)
  }

  /*
  // Add the typo status line
  const code1Element = document.getElementsByClassName('CODE1')[0]
  if (code1Element) {
    const editorWrapper = code1Element.parentNode.parentNode

    s.typoStatusNode = document.createElement('div')
    s.typoStatusNode.id = 'typoStatusNode'
    s.typoStatusNode.style.fontFamily = 'monospace'
    s.typoStatusNode.innerHTML = `<span style="color: #555555;">Status:</span> <span style="color: #009900">OK</span>`

    editorWrapper.insertAdjacentElement('beforebegin', s.typoStatusNode)

    const disableNode = document.createElement('div')
    const disableButton = document.createElement('button')
    disableButton.innerHTML = 'Disable typo checker'
    disableNode.appendChild(disableButton)
    disableButton.id = 'disableButton'
    s.typoStatusNode.insertAdjacentElement('beforeend', disableNode)

    disableButton.addEventListener('click', disableTypoChecker)

    // Could probably pull this from the `CODE1`, but this is fine for now.
    const codeBlock = document.getElementsByClassName('ace_text-input')[0]
    codeBlock.addEventListener('keyup', checkForTyposV3)

  }
  */
}

const checkForTyposV3 = () => {
  if (s.typoCheckerOn == true) {
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

    s.typoStatusNode = document.getElementById('typoStatusNode')

    if (editorLines.length > 0) {
    }

    toploop: for (
      let baseIndex = 0;
      baseIndex < baseLines.length;
      baseIndex++
    ) {
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
            s.typoStatusNode.innerHTML = `<span style="color: #555555;">Typos:</span> ${bummerString}`
            break toploop
            break lowerloop1
          } else {
            bummerString += `<span style="color: #888888">${baseLines[
              baseIndex
            ].charAt(letterIndex)}</span>`
            s.typoStatusNode.innerHTML = `<span style="color: #555555;">Typos:</span> <span style="color: #008800">0</span>`
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
            s.typoStatusNode.innerHTML = `<span style="color: #555555;">Status:</span> <span style="color: #880000">Typo</span> - ${bummerString}`
            break toploop
            break lowerloop2
          } else {
            bummerString += baseLines[baseIndex].charAt(letterIndex)
            s.typoStatusNode.innerHTML = `<span style="color: #555555;">Status:</span> <span style="color: #008800">OK</span>`
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
      ) {}
    }
  }
}
