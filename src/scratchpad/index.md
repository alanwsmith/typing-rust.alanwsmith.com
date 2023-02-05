# Scratchpad

### SOURCE CODE

```rust, noplayground, EXAMPLE1

```

### CODE RUNNER

```rust, editable, CODE1

```

## Step By Step

<script>
const rawSourceCode = `fn main() {
  let alfa = String::from("apple");
  show_value(&alfa);
  println!("alfa is {alfa}");
}

fn show_value(value: &String) { 
  println!("show_value got {value}");
}`.split('\n')


const lineSets = [
{ lines: [],
text: ""
},
{ lines: [`0_r`, `0_s`,`0_s`,`0_s`,`0_r`,`0_s`,`0_s`,`0_s`,`0_s`,],
text: "<p>here 1</p>"
},
{ lines: [`0_c`, `0_s`,`0_s`,`0_s`,`0_c`,`0_s`,`0_r`,`0_s`,`0_r`,],
text: "<p>here 1</p>"
},
{ lines: [`0_c`, `0_s`,`0_s`,`0_s`,`0_c`,`0_s`,`0_c`,`0_r`,`0_c`,],
text: "<p>here 1</p>"
},
{ lines: [`0_c`, `0_r`,`0_s`,`0_s`,`0_c`,`0_s`,`0_c`,`0_c`,`0_c`,],
text: "<p>here 1</p>"
},
{ lines: [`0_c`, `0_c`,`0_r`,`0_s`,`0_c`,`0_s`,`0_c`,`0_c`,`0_c`,],
text: "<p>here 1</p>"
},
{ lines: [`0_c`, `0_c`,`0_c`,`0_r`,`0_c`,`0_s`,`0_c`,`0_c`,`0_c`,],
text: "<p>here 1</p>"
},
{ lines: [`0_c`, `0_c`,`0_c`,`0_c`,`0_c`,`0_s`,`0_c`,`0_c`,`0_c`,],
text: "<p>here</p>"
}
]
</script>

## Step By Step Test

This is the first prototype of the viewer.
Next step is to highlight lines that changed.

<script>
let alfa_step = 0;

const renderCode = (code, lines) => {
  document.createElement("div");
  console.log('here');
  // const loc = document.getElementById('source-code');
  const loc = window['source-code'];
  console.log(loc);
}


const alfa_code = `
fn main() {
  let mut alfa = String::from("apple");
  widget(&mut alfa);
  println!("alfa is {alfa}");
}

fn widget(thing: &mut String) {
  thing.push_str("pie");
}

/// Temp stuff below

fn widget() {

`.split("\n");

const alfa_lines = [
  [1, 5, 6, 13, 9], 
  [1, 2, 5, 6, 13, 9], 
  [1, 2, 3, 5, 6, 13, 9], 
  [1, 2, 3, 5, 6, 7, 9], 
  [1, 2, 3, 5, 6, 7, 8, 9], 
  [1, 2, 3, 4, 5, 6, 7, 8, 9], 
]

const alfa_text = [
  `<p>Start with empty <code>main</code> and <code>widget</code>
  functions</p>`,
  `<p>Create a mutable <code>alfa</code> varaible bound to 
  our <code>String</code></p>`,
  `<p>Add a call to the <code>widget</code> function using
  with a mutable reference to <code>alfa</code> as an argument.
  </p>`,
  `<p>Update the <code>widget</code> function to accept the
  mutable refernce and bind it to a local variable named
  <code>thing</code></p>`,
  `<p>Make an update to the refernce</p>`,
  `<p>Output the value of <code>alfa</code> to show it's changed<p>`
]



const goToPrevious = () => {
  if (alfa_step > 0) {
    alfa_step -= 1
    updateStepByStep(alfa_step)
  }
}

const goToNext = () => {
  console.log(`goToNext incoming alfa_step: ${alfa_step}`)
  if (alfa_step < alfa_lines.length - 1) {
    alfa_step += 1
    updateStepByStep(alfa_step)
  }
}

const updateStepByStep = () => {
  const outputLines = [];
  for (let line_id in alfa_lines[alfa_step]) {
    outputLines.push(alfa_code[alfa_lines[alfa_step][line_id]])
  }
  window.stepByStepCode.value = outputLines.join("\n")

  window.stepByStepText.innerHTML = alfa_text[alfa_step]

  if (alfa_step > 0) {
    window.previousButton.innerHTML = "Previous"
  } else {
    window.previousButton.innerHTML = "&nbsp;&nbsp;----&nbsp;&nbsp;"
  }
  if (alfa_step < alfa_lines.length - 1) {
    window.nextButton.innerHTML = "Next"
  } else {
    window.nextButton.innerHTML = "&nbsp;--&nbsp;"
  }
}

const updateFromIndividualButton = (event) => {
  const indexToSwitchTo = parseInt(event.target.id.split("--")[1])
  console.log(indexToSwitchTo)
  alfa_step = indexToSwitchTo
  updateStepByStep()
}

const setupStepByStep = () => {

  const stepByStepButtonRowEl = document.createElement("div")

  const previousStepButtonEl = document.createElement('button')
  previousStepButtonEl.innerHTML = "&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;&nbsp;"
  previousStepButtonEl.id = "previousButton"
  stepByStepButtonRowEl.append(previousStepButtonEl)


  //stepByStepButtonEl.innerHTML = `<button id="previousButton">&nbsp;&nbsp;----&nbsp;&nbsp;</button>
  //<button id="nextButton">Next</button>`

  // const individualButtonRowEl = document.createElement("div")

  for (let i=0; i<alfa_lines.length; i ++) {
    const individualButtonEl = document.createElement("button")
    individualButtonEl.innerHTML = i + 1
    individualButtonEl.id = `individualStep--${i}`
    stepByStepButtonRowEl.append(individualButtonEl)
    individualButtonEl.addEventListener("click", updateFromIndividualButton)
  }

  const nextStepButtonEl = document.createElement('button')
  nextStepButtonEl.innerHTML = "Next"
  nextStepButtonEl.id = "nextButton"
  stepByStepButtonRowEl.append(nextStepButtonEl)

  const outputLines = [];
  for (let indx in alfa_lines[0]) {
    outputLines.push(alfa_code[alfa_lines[0][indx]])
  }

  const stepByStepCodeEl = document.createElement("textarea")
  stepByStepCodeEl.id = `stepByStepCode`
  stepByStepCodeEl.cols = 70
  stepByStepCodeEl.value = outputLines.join("\n");


  const stepByStepTextEl = document.createElement("div")
  stepByStepTextEl.id = "stepByStepText"
  stepByStepTextEl.innerHTML = alfa_text[0]

  window["stepByStepDiv"].append(stepByStepCodeEl);
  window["stepByStepDiv"].append(stepByStepTextEl);
  window["stepByStepDiv"].append(stepByStepButtonRowEl);
  // window["stepByStepDiv"].append(individualButtonRowEl);
   window["previousButton"].addEventListener("click", goToPrevious)
   window["nextButton"].addEventListener("click", goToNext)
   setStepByStepCodeRowCount()
}

const setStepByStepCodeRowCount = () => {
  window.stepByStepCode.rows = 1
  for (let lineIndex in alfa_lines) {
    if (window.stepByStepCode.rows < alfa_lines[lineIndex].length) {
      window.stepByStepCode.rows = alfa_lines[lineIndex].length
    }
  }
}

document.addEventListener("DOMContentLoaded", setupStepByStep);

</script>

<div id="stepByStepDiv"></div>

---

NOTE: These are in reverse order of how they were
created so I don't have to keep scrolling down

TODO: Come up with the list of things you can do
for references:

immutable - immutable
mutable - immutable
mutable - mutable

and that you can't do

immutable - mutable

## Immutable -> Immutable

```rust
fn main() {
  let alfa = String::from("apple");
  widget(&alfa);
  println!("alfa is {alfa}")
}

fn widget(value: &String) {
  println!("widget got {value}")
}
```

## Mutable -> Mutable

```rust
fn main() {
  let mut alfa = String::from("apple");
  widget(&mut alfa);
  println!("alfa is {alfa}");
}

fn widget(value: &mut String) {
  value.push_str("-pie")
}
```

## Mutable -> Immutable

```rust
fn main() {
  let mut alfa = String::from("apple");
  widget(&alfa);
  println!("alfa is {alfa}")
}

fn widget(value: &String) {
  println!("widget got {value}")
}
```

## Immutable -> Mutable (will crash)

```rust
fn main() {
  let alfa = String::from("apple");
  widget(&mut alfa);
}

fn widget(value: &mut String) {
  println!("widget got {value}")
}
```

---

## This crashes as expected because it's not a reference

```rust
fn main() {
  let alfa = String::from("apple");
  widget(alfa);
  println!("alfa is {alfa}")
}

fn widget(value: String) {
  println!("widget got {value}")
}
```

---

Other situaltions:

combinging mutalbe and immutable
references.
