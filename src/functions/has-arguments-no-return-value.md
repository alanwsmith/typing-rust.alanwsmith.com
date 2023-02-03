# Functions That Take Arguments But Have No Return Value

#### Step By Step

<script>
const rawSourceCode = `fn main() {
  let alfa = String::from("apple");
  widget(alfa);
}

fn widget(thing: String) {
  println!("widget got {thing}");
}

widget got apple`.split('\n')


const lineSets = [
{ 
  lines: [`0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_e`, `0_o`],
  text: `<p></p>`
},
{ 
  lines: [`0_r`, `0_s`, `0_s`, `0_r`, `0_s`, `0_s`, `0_s`, `0_s`, `0_e`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_s`, `0_c`, `0_s`, `0_r`, `0_s`, `0_r`, `0_e`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_s`, `0_c`, `0_s`, `0_c`, `0_r`, `0_c`, `0_e`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_r`, `0_s`, `0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_e`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_c`, `0_r`, `0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_e`, `0_w`],
  text: `<p></p>`
},
]
</script>
