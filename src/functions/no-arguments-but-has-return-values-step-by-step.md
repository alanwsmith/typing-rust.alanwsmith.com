# Functions That Take Arguments But Have No Return Value - Step By Step

#### Step By Step

<script>
const rawSourceCode = `fn main() {
  let alfa = widget();
  println!("alfa got {alfa}");
}

fn widget() -> String { // fn widget() { 
  let bravo = String::from("berry");
  bravo
}

alfa got alfa`.split('\n')

const lineSets = [
{ 
  lines: [`0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_e`, `0_o`],
  text: `<p></p>`
},
{ 
  lines: [`0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `1_r`, `0_s`, `0_s`, `0_r`, `0_e`, `0_w`],
  text: `<p>Create an empty widget function</p>`
},
{ 
  lines: [`0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_r`, `0_s`, `0_s`, `0_r`, `0_e`, `0_w`],
  text: `<p>Add the type of value <code>widget</code> will return</p>`
},
{ 
  lines: [`0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_c`, `0_r`, `0_s`, `0_c`, `0_e`, `0_w`],
  text: `<p>Create a <code>bravo</code> variable in <code>widget</code> with the <code>String</code> to return from the function</p>`
},
{ 
  lines: [`0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_c`, `0_c`, `0_r`, `0_c`, `0_e`, `0_w`],
  text: `<p>Return <code>bravo<code> by calling it as an expression by itself</p>`
},
{ 
  lines: [`0_r`, `0_s`, `0_s`, `0_r`, `0_s`, `0_c`, `0_c`, `0_c`, `0_c`, `0_e`, `0_w`],
  text: `<p>Create the main function</p>`
},
{ 
  lines: [`0_c`, `0_r`, `0_s`, `0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_c`, `0_e`, `0_w`],
  text: `<p>Make an <code>alfa</code> variable in <code>main</code> that calls <code>widget</code> to get its return value to bind as the value</p>`
},
{ 
  lines: [`0_c`, `0_c`, `0_r`, `0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_c`, `0_e`, `0_w`],
  text: `<p>Print <code>alfa</code> to verify the value came through properly</p>`
},
]
</script>
