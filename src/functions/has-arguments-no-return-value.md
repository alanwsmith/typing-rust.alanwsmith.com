# Functions That Take Arguments But Have No Return Value

#### Step By Step

<script>
const rawSourceCode = `fn main() {
  let alfa = String::from("apple");
  widget(alfa);
}

fn widget(thing: String) {
  println!("widget got {thing}");
}`.split('\n')


const lineSets = [
{ 
  lines: [`0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`],
  text: `<p></p>`
},
{ 
  lines: [`0_r`, `0_s`, `0_s`, `0_r`, `0_s`, `0_s`, `0_s`, `0_s`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_s`, `0_c`, `0_s`, `0_r`, `0_s`, `0_r`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_s`, `0_c`, `0_s`, `0_c`, `0_r`, `0_c`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_r`, `0_s`, `0_c`, `0_s`, `0_c`, `0_c`, `0_c`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_c`, `0_r`, `0_c`, `0_s`, `0_c`, `0_c`, `0_c`],
  text: `<p></p>`
},
]
</script>
