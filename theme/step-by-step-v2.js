const s = {}

export const stepByStepInitV2 = () => {
  document.addEventListener('DOMContentLoaded', stepByStepReadyUpV2)
}

const addAltLines = () => {
  const altData = c.sets[s.currentSet].altLines
  if (altData) {
    for (let i = 0; i < altData.length; i++) {
      s.currentLines[altData[i].line - 1] = altData[i].text
    }
  }
}

const addCustomHighlights = () => {
  // This overwrites any new line highlights
  // so specific things can be pointed out
  // with alt lines in previous steps
  const highlightData = c.sets[s.currentSet].highlights
  if (highlightData) {
    for (let i = 0; i < highlightData.length; i++) {
      const parts = highlightData[i].split(',')
      const className = parts[0]
      const lineNum = parseInt(parts[1]) - 1
      const startChar = parseInt(parts[2]) - 1
      const stopChar = parseInt(parts[3])
      const sections = [
        s.rawLines[lineNum].substring(0, startChar),
        `<code class="${className}">`,
        s.rawLines[lineNum].substring(startChar, stopChar),
        `</code>`,
        s.rawLines[lineNum].substring(stopChar),
      ]
      s.currentLines[lineNum] = sections.join('')
      // Also update the pointer
      window[`stepByStepPointer_${lineNum}`].innerHTML = '&#8227;'
    }
  }
}

const buildFoundationStructure = () => {
  // This is done outside of `makeElement`
  // since it needs to be added after the
  // other element
  const stepByStepWrapperElement = document.createElement('div')
  stepByStepWrapperElement.id = 'stepByStepWrapper'
  window['step-by-step'].insertAdjacentElement(
    'afterend',
    stepByStepWrapperElement
  )

  makeElement('div', 'stepByStepLineNumbers', '', 'stepByStepWrapper')
  makeElement('div', 'stepByStepPointers', '', 'stepByStepWrapper')
  makeElement('div', 'stepByStepCodeLines', '', 'stepByStepWrapper')
  makeElement('div', 'stepByStepOutputNumbers', '', 'stepByStepWrapper')
  makeElement('div', 'stepByStepOutputPointers', '', 'stepByStepWrapper')
  makeElement('div', 'stepByStepOutputLines', '', 'stepByStepWrapper')
  makeElement('div', 'stepByStepNotesSpacer', '', 'stepByStepWrapper')
  makeElement('div', 'stepByStepNotes', '', 'stepByStepNotesSpacer')

  // TODO Move this under the StepByStepWrapper, probably
  const stepByStepButtonWrapperElement = document.createElement('div')
  stepByStepButtonWrapperElement.id = 'stepByStepButtonWrapper'
  window.stepByStepWrapper.insertAdjacentElement(
    'afterend',
    stepByStepButtonWrapperElement
  )
}

const handleNextButtonClick = () => {
  if (s.currentSet < c.sets.length - 1) {
    updateEverything(s.currentSet + 1)
  }
}

const handleNumberButtonClick = (event) => {
  const newIndex = parseInt(event.target.id.split('_')[1])
  updateEverything(newIndex)
}

const handlePreviousButtonClick = () => {
  if (s.currentSet > 0) {
    updateEverything(s.currentSet - 1)
  }
}

const highlightNewLines = () => {
  const lineCheck = c.sets[s.currentSet].addLines
  if (lineCheck) {
    for (let i = 0; i < lineCheck.length; i++) {
      const lineIndex = lineCheck[i]
      s.currentLines[
        lineIndex
      ] = `<code class="newLine">${s.rawLines[lineIndex]}</code>`
    }
  }
}

const loadInitialLines = () => {
  for (let setIndex = 0; setIndex <= s.currentSet; setIndex++) {
    const lineSet = c.sets[setIndex].addLines
    if (lineSet) {
      for (let addIndex = 0; addIndex < lineSet.length; addIndex++) {
        const lineIndex = c.sets[setIndex].addLines[addIndex]
        s.currentLines[lineIndex] = s.rawLines[lineIndex]
      }
    }
  }
}

const loadRawLines = () => {
  s.rawLines = c.source.split('\n')
}

const makeCodeLines = () => {
  for (let i = 0; i < totalLines(); i++) {
    makeElement(
      'pre',
      `stepByStepCodeLine_${i}`,
      ` `,
      'stepByStepCodeLines',
      null,
      null
    )
  }
}
const makeElement = (
  _type,
  _id,
  _html,
  _childOf,
  _event,
  _function,
  _classes
) => {
  const newElement = document.createElement(_type)
  newElement.id = _id
  newElement.innerHTML = _html
  window[_childOf].appendChild(newElement)
  if (_event !== null) {
    newElement.addEventListener(_event, _function)
  }
  if (_classes) {
    newElement.classList.add(_classes)
  }
}

const makeAddLineNumbersZeroBased = () => {
  // Moves config numbers from human readable to
  // zero based index
  for (let setsIndex = 0; setsIndex < c.sets.length; setsIndex++) {
    const addData = c.sets[setsIndex].addLines
    if (addData) {
      for (let addIndex = 0; addIndex < addData.length; addIndex++) {
        addData[addIndex] -= 1
      }
    }
  }
}

const makeLineNumberRows = () => {
  for (let i = 0; i < totalLines(); i++) {
    const numberString = i < 9 ? ` 0${i + 1}` : ` ${i + 1}`
    makeElement(
      'pre',
      `stepByStepLineNumber_${i}`,
      numberString,
      'stepByStepLineNumbers',
      null,
      null
    )
  }
}

const makeNextButton = () => {
  makeElement(
    'button',
    'stepByStepNextButton',
    '-&gt;',
    'stepByStepButtonWrapper',
    'click',
    handleNextButtonClick,
    'stepByStepButton'
  )
}

const makeNumberButtons = () => {
  for (let i = 0; i < c.sets.length; i++) {
    let buttonText = i

    if (i === 0) {
      buttonText = 'Start'
    } else if (i === c.sets.length - 1) {
      buttonText = 'Complete'
    }

    makeElement(
      'button',
      `stepByStepNumberButton_${i}`,
      buttonText,
      'stepByStepButtonWrapper',
      'click',
      handleNumberButtonClick,
      'stepByStepButton'
    )
  }
}

const makeOutputLineNumbers = () => {
  for (let i = 0; i < c.output.length; i++) {
    const theText = i === 0 ? 'out' : ' '
    makeElement(
      'pre',
      `stepByStepOutputLineNumber_${i}`,
      theText,
      'stepByStepOutputNumbers',
      null,
      null
    )
  }
}

const makeOutputLines = () => {
  for (let i = 0; i < c.output.length; i++) {
    makeElement(
      'pre',
      `stepByStepOutputLine_${i}`,
      ' ',
      'stepByStepOutputLines',
      null,
      null
    )
  }
}

const makeOutputLinePointers = () => {
  for (let i = 0; i < c.output.length; i++) {
    const theText = i === 0 ? ' ' : ' '
    makeElement(
      'pre',
      `stepByStepOutputPointer_${i}`,
      theText,
      'stepByStepOutputPointers',
      null,
      null
    )
  }
}

const makePointerRows = () => {
  for (let i = 0; i < totalLines(); i++) {
    makeElement(
      'pre',
      `stepByStepPointer_${i}`,
      ` `,
      'stepByStepPointers',
      null,
      null
    )
  }
}

const makePreviousButton = () => {
  makeElement(
    'button',
    'stepByStepPreviousButton',
    '&lt;-',
    'stepByStepButtonWrapper',
    'click',
    handlePreviousButtonClick,
    'stepByStepButton'
  )
}

const prepCurrentLines = () => {
  s.currentLines = []
  for (let i = 0; i < s.rawLines.length; i++) {
    s.currentLines.push(' ')
  }
}

const totalLines = () => {
  return s.rawLines.length
}

const updateButtonHighlights = () => {
  for (let i = 0; i < c.sets.length; i++) {
    if (i === s.currentSet) {
      window[`stepByStepNumberButton_${i}`].classList.add('activeButton')
    } else {
      window[`stepByStepNumberButton_${i}`].classList.remove('activeButton')
    }
  }
}

const updateCodeLines = () => {
  if (c.sets[s.currentSet].fullCode === true) {
    for (let i = 0; i < totalLines(); i++) {
      window[`stepByStepCodeLine_${i}`].innerHTML = s.rawLines[i]
    }
  } else {
    for (let i = 0; i < totalLines(); i++) {
      window[`stepByStepCodeLine_${i}`].innerHTML = s.currentLines[i]
    }
  }
}

const updateEverything = (setIndex) => {
  console.log(setIndex)
  s.currentSet = setIndex
  prepCurrentLines()
  loadInitialLines()
  highlightNewLines()
  addAltLines()
  updatePointers()
  addCustomHighlights()
  updateCodeLines()
  updateOutputLines()
  updateButtonHighlights()
  updateFullHighlights()
  updatePositions()
  updateNotes()
}

const updateFullHighlights = () => {
  for (let i = 0; i < totalLines(); i++) {
    if (s.currentSet === c.sets.length - 1 || s.currentSet === 0) {
      window[`stepByStepCodeLine_${i}`].classList.add('hljs')
      window[`stepByStepCodeLine_${i}`].classList.add('language-rust')
      hljs.highlightElement(window[`stepByStepCodeLine_${i}`])
    } else {
      window[`stepByStepCodeLine_${i}`].classList.remove('hljs')
      window[`stepByStepCodeLine_${i}`].classList.remove('language-rust')
    }
  }
}

const updateHeader = () => {
  let headerString = `Step ${s.currentSet}`
  if (s.currentSet === 0) {
    headerString = `Full Code Sample`
  } else if (s.currentSet === s.sets.length - 1) {
    headerString = `Final Code Sample`
  }

  window.stepByStepHeader.innerHTML = headerString
}

const updateNotes = () => {
  window.stepByStepNotes.innerHTML = c.sets[s.currentSet].notes
}

const updateOutputLines = () => {
  for (let i = 0; i < c.output.length; i++) {
    if (s.currentSet === c.sets.length - 1) {
      window[`stepByStepOutputLine_${i}`].innerHTML = c.output[i]
    } else {
      // clear output for moving to previous line sets
      window[`stepByStepOutputLine_${i}`].innerHTML = ' '
    }
  }
}

const updatePointers = () => {
  // clear the lines then add in the ones that need it
  for (let i = 0; i < totalLines(); i++) {
    window[`stepByStepPointer_${i}`].innerHTML = ' '
  }

  const addData = c.sets[s.currentSet].addLines

  if (addData) {
    for (let i = 0; i < addData.length; i++) {
      window[`stepByStepPointer_${addData[i]}`].innerHTML = '&#8227;'
    }
  }
}

const updatePositions = () => {
  const coords = c.sets[s.currentSet].coords
  const theLeft = coords[1] + 9
  // this is a bit gross, but it pulls the line
  // height in pixels then remove the `px` and
  // converts the value into an it that gets used
  // as the multiplier for the value coming in
  // from the config
  const heightMultiplier = parseInt(
    window
      .getComputedStyle(window.stepByStepCodeLines)
      .lineHeight.split('px')[0]
  )
  const theTop = (coords[0] - 1) * heightMultiplier
  window.stepByStepNotesSpacer.style.top = `${theTop}px`
  window.stepByStepNotesSpacer.style.left = `${theLeft}ch`
  window.stepByStepNotesSpacer.style.width = `${coords[2]}ch`

  // set the height if one was passed
  if (coords[3]) {
    const theHeight = coords[3] * heightMultiplier
    window.stepByStepNotesSpacer.style.height = `${theHeight}px`
  } else {
    window.stepByStepNotesSpacer.style.height = null
  }
}

const stepByStepReadyUpV2 = () => {
  console.log('i am here')
  buildFoundationStructure()

  s.currentSet = 0
  makeAddLineNumbersZeroBased()
  loadRawLines()
  makePreviousButton()
  makeNumberButtons()
  makeNextButton()
  makeLineNumberRows()
  makeCodeLines()
  makePointerRows()
  makeOutputLines()
  makeOutputLineNumbers()
  makeOutputLinePointers()
  updateEverything(0)
}
