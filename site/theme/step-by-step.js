/*

  Basic format is:

`NUMBER_LETTER`

Like:

`0_r`

Where 0 is the index from the columns of source
code there colums are divided by comments. 

  this_is = "coulum 1" // this_is = "coulmn2"

The letters are:

- r = highlighted with line number
- s = blanked out but with line number
- e = blanked out, no line number
- c = no syntax highlighting, with line number
- u = update <code> blocks lighlighted and line numbers with pointers
- o = "out:"

*/

export const stepByStepInit = () => {
  document.addEventListener('DOMContentLoaded', stepByStepReadyUp)
}

const loadSourceCode = () => {
  s.sourceCode = []
  rawSourceCode.forEach((rawLine) => {
    const lineSplit = rawLine.split(' // ')
    s.sourceCode.push([...lineSplit])
  })
}

const s = {
  currentLineSet: 1,
  lineMarkers: [],
}

const log = (msg) => {
  console.log(msg)
}

const handleNumberButtonClick = (event) => {
  s.currentLineSet = parseInt(event.target.id.split('_')[1])
  updateLines()
  updateButtons()
  updatePointers()
}

const handleCompleteButtonClick = () => {
  s.currentLineSet = 0
  updateLines()
  updateButtons()
  updatePointers()
}

const handleNextButtonClick = () => {
  if (s.currentLineSet !== 0) {
    if (s.currentLineSet < lineSets.length - 1) {
      s.currentLineSet += 1
    } else {
      s.currentLineSet = 0
    }
  }

  updateLines()
  updateButtons()
  updatePointers()
}

const handlePreviousButtonClick = () => {
  if (s.currentLineSet === 0) {
    s.currentLineSet = lineSets.length - 1
  } else {
    if (s.currentLineSet > 1) {
      s.currentLineSet -= 1
    }
  }
  updateLines()
  updateButtons()
  updatePointers()
}

const updateLines = () => {
  const codeLineMarkerEls = document.getElementsByClassName('codeLineMarker')
  for (let x = 0; x < codeLineMarkerEls.length; x++) {
    codeLineMarkerEls[x].classList.add('hideit')
    codeLineMarkerEls[x].classList.remove('highlightCode')
  }

  for (let lineIndex = 0; lineIndex < s.sourceCode.length; lineIndex++) {
    const code = lineSets[s.currentLineSet].lines[lineIndex]
    window[`codeLine_${lineIndex}_${code}`].classList.remove('hideit')
    if (s.currentLineSet > 0) {
      const code_parts = code.split('_')
      if (code_parts[1] === 'r') {
        window[`codeLine_${lineIndex}_${code}`].classList.add('highlightCode')
      }
    }
  }
  window.contentAreaText.innerHTML = lineSets[s.currentLineSet].text
  if (s.currentLineSet === 0) {
    window.contentAreaNumber.innerHTML = `Output`
  } else {
    window.contentAreaNumber.innerHTML = `Step ${s.currentLineSet}`
  }
}

const updateButtons = () => {
  if (s.currentLineSet === 0) {
    window[`completeSet`].classList.add('activeButton')
  } else {
    window[`completeSet`].classList.remove('activeButton')
  }
  for (let lineSetIndex = 1; lineSetIndex < lineSets.length; lineSetIndex++) {
    if (s.currentLineSet === lineSetIndex) {
      window[`stepButton_${lineSetIndex}`].classList.add('activeButton')
    } else {
      window[`stepButton_${lineSetIndex}`].classList.remove('activeButton')
    }
  }
}

const makePreLines = () => {
  for (let lineIndex = 0; lineIndex < s.sourceCode.length; lineIndex++) {
    const codeLineEl = document.createElement('div')
    codeLineEl.classList.add('codeLineWrapper')
    codeLineEl.id = `codeLineWrapper${lineIndex}`
    window.codeBlock.appendChild(codeLineEl)
  }
}

const makeBaseLines = () => {
  s.sourceCode.forEach((sourceLineBatch, batchIndex) => {
    sourceLineBatch.forEach((sourceLine, lineIndex) => {
      // The main line that shows line numbers and highlighting
      const newLineRust = document.createElement('pre')
      newLineRust.classList.add('language-rust')
      newLineRust.classList.add('codeLineMarker')
      newLineRust.id = `codeLine_${batchIndex}_${lineIndex}_r`
      newLineRust.innerHTML = `<code>${sourceLine}</code> `
      hljs.highlightBlock(newLineRust)
      newLineRust.classList.add('hideit')
      // pull hljs out so you can hide the line
      newLineRust.classList.remove('hljs')
      window[`codeLineWrapper${batchIndex}`].appendChild(newLineRust)

      // Shows the source code line directly with no highlights
      const newLineCustom = document.createElement('pre')
      newLineCustom.id = `codeLine_${batchIndex}_${lineIndex}_c`
      newLineCustom.innerHTML = `${sourceLine} `
      newLineCustom.classList.add('hideit')
      newLineCustom.classList.add('codeLineMarker')
      window[`codeLineWrapper${batchIndex}`].appendChild(newLineCustom)

      // const codeEls = newLineCustom.getElementsByTagName('code')
      // for (let codeIndex = 0; codeIndex < codeEls.length; codeIndex++) {
      //   console.log(codeEls[codeIndex])
      //   codeEls[codeIndex].classList.add('language-rust')
      //   codeEls[codeIndex].classList.add('hljs')
      //   hljs.highlightBlock(codeEls[codeIndex])
      //   codeEls[codeIndex].classList.remove('hljs')
      // }

      // Shows the source code line directly with no highlights
      const newLineUpdate = document.createElement('pre')
      newLineUpdate.id = `codeLine_${batchIndex}_${lineIndex}_u`
      newLineUpdate.innerHTML = `${sourceLine} `
      newLineUpdate.classList.add('hideit')
      newLineUpdate.classList.add('codeLineMarker')
      window[`codeLineWrapper${batchIndex}`].appendChild(newLineUpdate)
      const codeEls = newLineUpdate.getElementsByTagName('code')
      for (let codeIndex = 0; codeIndex < codeEls.length; codeIndex++) {
        console.log(codeEls[codeIndex])
        codeEls[codeIndex].classList.add('language-rust')
        codeEls[codeIndex].classList.add('hljs')
        hljs.highlightBlock(codeEls[codeIndex])
        codeEls[codeIndex].classList.remove('hljs')
      }

      // Shows `out:` along with the line
      const newLineOutput = document.createElement('pre')
      newLineOutput.id = `codeLine_${batchIndex}_${lineIndex}_o`
      newLineOutput.innerHTML = `${sourceLine} `
      newLineOutput.classList.add('hideit')
      newLineOutput.classList.add('codeLineMarker')
      window[`codeLineWrapper${batchIndex}`].appendChild(newLineOutput)

      // For spaces which is empty line but have a line number
      const newLineSpacer = document.createElement('pre')
      newLineSpacer.id = `codeLine_${batchIndex}_${lineIndex}_s`
      newLineSpacer.innerHTML = ` `
      newLineSpacer.classList.add('hideit')
      newLineSpacer.classList.add('codeLineMarker')
      window[`codeLineWrapper${batchIndex}`].appendChild(newLineSpacer)

      // For empty lines that are black and have no line number
      const newLineEmpty = document.createElement('pre')
      newLineEmpty.id = `codeLine_${batchIndex}_${lineIndex}_e`
      newLineEmpty.innerHTML = ` `
      newLineEmpty.classList.add('hideit')
      newLineEmpty.classList.add('codeLineMarker')
      window[`codeLineWrapper${batchIndex}`].appendChild(newLineEmpty)

      // For waiting which shows `out:` without the output
      const newLineWaiting = document.createElement('pre')
      newLineWaiting.id = `codeLine_${batchIndex}_${lineIndex}_w`
      newLineWaiting.innerHTML = ` `
      newLineWaiting.classList.add('hideit')
      newLineWaiting.classList.add('codeLineMarker')
      window[`codeLineWrapper${batchIndex}`].appendChild(newLineWaiting)
    })
  })
}

const addButtons = () => {
  for (let lineIndex = 1; lineIndex < lineSets.length; lineIndex++) {
    const newButtonEl = document.createElement('button')
    newButtonEl.innerHTML = lineIndex
    newButtonEl.id = `stepButton_${lineIndex}`
    window.buttonWrapper.appendChild(newButtonEl)
    newButtonEl.addEventListener('click', handleNumberButtonClick)
  }
}

const addCompleteButton = () => {
  const completeButtonEl = document.createElement('button')
  completeButtonEl.id = 'completeSet'
  completeButtonEl.innerHTML = 'Complete'
  window.buttonWrapper.appendChild(completeButtonEl)
  window.completeSet.addEventListener('click', handleCompleteButtonClick)
}

const addPreviousButton = () => {
  const previousButtonEl = document.createElement('button')
  previousButtonEl.id = 'previousSet'
  previousButtonEl.innerHTML = 'Previous'
  window.buttonWrapper.appendChild(previousButtonEl)
  window.previousSet.addEventListener('click', handlePreviousButtonClick)
}

const addNextButton = () => {
  const nextButtonEl = document.createElement('button')
  nextButtonEl.id = 'nextSet'
  nextButtonEl.innerHTML = 'Next'
  window.buttonWrapper.appendChild(nextButtonEl)
  window.nextSet.addEventListener('click', handleNextButtonClick)
}

const addPointers = () => {
  for (let lineIndex = 0; lineIndex < s.sourceCode.length; lineIndex++) {
    const newPointerEl = document.createElement('pre')
    newPointerEl.id = `pointer_${lineIndex}`
    newPointerEl.classList.add('gutterItem')
    if (lineIndex < 9) {
      newPointerEl.innerHTML = `0${lineIndex + 1}`
    } else {
      newPointerEl.innerHTML = lineIndex + 1
    }
    window.codeGutter.appendChild(newPointerEl)
  }
}

const updatePointers = () => {
  for (let lineIndex = 0; lineIndex < s.sourceCode.length; lineIndex++) {
    let lineCode = lineSets[s.currentLineSet].lines[lineIndex].split('_')[1]
    let numberString = lineIndex < 9 ? `0${lineIndex + 1}` : lineIndex + 1
    // clear if yo're at complete
    if (s.currentLineSet === 0) {
      if (lineCode === 'o') {
        window[
          `pointer_${lineIndex}`
        ].innerHTML = `<code class="bold">out:</code>`
      } else if (lineCode === 'e') {
        window[`pointer_${lineIndex}`].innerHTML = ` `
      } else {
        window[`pointer_${lineIndex}`].innerHTML = `${numberString}  `
      }
    } else {
      if (lineCode === 'r') {
        window[
          `pointer_${lineIndex}`
        ].innerHTML = `${numberString}<code class="bold"> &gt;</code>`
      } else if (lineCode === 'u') {
        window[
          `pointer_${lineIndex}`
        ].innerHTML = `${numberString}<code class="bold"> &gt;</code>`
      } else if (lineCode === 'w') {
        window[`pointer_${lineIndex}`].innerHTML = `<code>out:</code>`
      } else if (lineCode === 'e') {
        window[`pointer_${lineIndex}`].innerHTML = `<code>  </code>`
      } else {
        window[`pointer_${lineIndex}`].innerHTML = `${numberString}  `
      }
    }
  }
}

const buildElements = () => {
  const stepByStepAreaEl = document.createElement('div')
  stepByStepAreaEl.id = 'stepByStepArea'
  stepByStepAreaEl.innerHTML = `
  <div id="contentArea">
    <h5 id="contentAreaNumber"></h5>
    <div id="contentAreaText"></div>
  </div>
  <div id="codeBucket">
    <div id="codeGutter"></div>
    <div id="codeBlock"></div>
  </div>
  <div id="contentAreaPlaceholder"></div>
  <div id="buttonWrapper"></div>
`
  window['step-by-step'].insertAdjacentElement('afterend', stepByStepAreaEl)
}

const stepByStepReadyUp = () => {
  if (window['step-by-step']) {
    buildElements()
    loadSourceCode()
    makePreLines()
    makeBaseLines()
    updateLines()
    addPointers()
    updatePointers()
    addPreviousButton()
    addButtons()
    addCompleteButton()
    addNextButton()
    updateButtons()
  }
}
