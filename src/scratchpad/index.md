# Scratchpad

## Step By Step Test

<script>
let alfa_step = 0;

const renderCode = (code, lines) => {
  document.createElement("div");
  console.log('here');
  // const loc = document.getElementById('source-code');
  const loc = window['source-code'];
  console.log(loc);
}

const alfa_text = [
  `<p>The first thing to put in palce is our <code>main()</code>
  function wrapper</p>`,
  `<p>Next we create our <code>alfa</code> varaible and bind
  the <code>String</code> value of &quot;apple&quot;</p>`,
  `<p>Finally, we print out the value of the variable with 
  <code>println!()</code>`
]

const alfa_code = `fn main() {
  let alfa = String::from("apple");
  println!("alfa is {alfa}");
}`.split("\n");

const alfa_lines = [
  [0, 3], [0, 1, 3], [0, 1, 2, 3]
]

const goToPrevious = () => {
  if (alfa_step > 0) {
    alfa_step -= 1
    updateStepByStep(alfa_step)
  }
}

const goToNext = () => {
  if (alfa_step < alfa_lines.length - 1) {
    alfa_step += 1
    updateStepByStep(alfa_step)
  }
}

const updateStepByStep = (lines_index) => {
  const outputLines = [];
  for (let line_id in alfa_lines[lines_index]) {
    outputLines.push(alfa_code[alfa_lines[lines_index][line_id]])
  }
  window.stepByStepCode.value = outputLines.join("\n")
  if (alfa_step > 0) {
    window.previousButton.innerHTML = "Previous"
  } else {
    window.previousButton.innerHTML = "--------"
  }
  if (alfa_step < alfa_lines.length - 1) {
    window.nextButton.innerHTML = "Next"
  } else {
    window.nextButton.innerHTML = "----"
  }
}


const setupStepByStep = () => {
  const d = document.createElement("textarea")
  d.id = `stepByStepCode`
  const stepByStepTextEl = document.createElement("div")

  const stepByStepButtonEls = document.createElement("div")
  stepByStepButtonEls.innerHTML = `<button id="previousButton">--------</button>
  <button id="nextButton">Next</button>`

  stepByStepTextEl.innerHTML = alfa_text[0]
  d.cols = 70
  const outputLines = [];
  for (let indx in alfa_lines[0]) {
    outputLines.push(alfa_code[alfa_lines[0][indx]])
  }
  d.value = outputLines.join("\n");
  window["stepByStepDiv"].append(d);
  window["stepByStepDiv"].append(stepByStepButtonEls);
  window["stepByStepDiv"].append(stepByStepTextEl);
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
