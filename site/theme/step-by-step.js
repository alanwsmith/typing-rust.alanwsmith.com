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
  currentLineSet: 0,
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
  if (s.currentLineSet < lineSets.length - 1) {
    s.currentLineSet += 1
  } else {
    s.currentLineSet = 0
  }
  updateLines()
  updateButtons()
  updatePointers()
}

const handlePreviousButtonClick = () => {
  if (s.currentLineSet > 1) {
    s.currentLineSet -= 1
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
  window.contentArea.innerHTML = lineSets[s.currentLineSet].text
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

      const newLineCustom = document.createElement('pre')
      newLineCustom.id = `codeLine_${batchIndex}_${lineIndex}_c`
      newLineCustom.innerHTML = `${sourceLine} `
      newLineCustom.classList.add('hideit')
      newLineCustom.classList.add('codeLineMarker')
      window[`codeLineWrapper${batchIndex}`].appendChild(newLineCustom)

      const newLineSpacer = document.createElement('pre')
      newLineSpacer.id = `codeLine_${batchIndex}_${lineIndex}_s`
      newLineSpacer.innerHTML = ` `
      newLineSpacer.classList.add('hideit')
      newLineSpacer.classList.add('codeLineMarker')
      window[`codeLineWrapper${batchIndex}`].appendChild(newLineSpacer)
    })
  })
}

const addButtons = () => {
  // const newButtonEl = document.createElement('button')
  // newButtonEl.innerHTML = `Complete`
  // newButtonEl.id = `stepButton_${lineSets.length - 1}`
  // window.buttonWrapper.appendChild(newButtonEl)
  // newButtonEl.addEventListener('click', handleNumberButtonClick)

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
    // log(lineSets[s.currentLineSet].lines[lineIndex])
    let lineCode = lineSets[s.currentLineSet].lines[lineIndex].split('_')[1]
    let numberString = lineIndex < 9 ? `0${lineIndex + 1}` : lineIndex + 1
    if (lineCode === 'r') {
      window[
        `pointer_${lineIndex}`
      ].innerHTML = `${numberString} <code class="bold">&gt;</code>`
    } else {
      window[`pointer_${lineIndex}`].innerHTML = `${numberString}  `
    }
    // log(lineCode)
    //   const newPointerEl = document.createElement('pre')
    //   newPointerEl.innerHTML = lineIndex + 1
    //   window.codeGutter.appendChild(newPointerEl)
  }
}

const buildElements = () => {
  const stepByStepAreaEl = document.createElement('div')
  stepByStepAreaEl.id = 'stepByStepArea'
  stepByStepAreaEl.innerHTML = `
  <div id="contentArea"></div>
  <div id="codeBucket">
    <div id="codeGutter"></div>
    <div id="codeBlock"></div>
  </div>
  <div id="spacer"></div>
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
    addCompleteButton()
    addPreviousButton()
    addButtons()
    addNextButton()
    updateButtons()
  }
}
