# Functions That Take Arguments And Have Return Values

#### Step By Step

<script>
const rawSourceCode = `fn main() {
  let alfa = String::from("apple");
  let charlie = widget(alfa);
  println!("charlie is {charlie}");
}

fn widget(input: String) -> String {
  println!("widget got {input}");
  let bravo = String::from("berry");
  bravo
}`.split('\n')


const lineSets = [
{ 
  lines: [`0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`],
  text: `<p></p>`
},
{ 
  lines: [`0_r`, `0_s`, `0_s`, `0_s`, `0_r`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_s`, `0_s`, `0_c`, `0_s`, `0_r`, `0_s`, `0_s`, `0_s`, `0_r`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_s`, `0_s`, `0_c`, `0_s`, `0_c`, `0_r`, `0_s`, `0_s`, `0_c`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_s`, `0_s`, `0_c`, `0_s`, `0_c`, `0_c`, `0_r`, `0_s`, `0_c`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_s`, `0_s`, `0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_r`, `0_c`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_r`, `0_s`, `0_s`, `0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_c`, `0_c`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_c`, `0_r`, `0_s`, `0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_c`, `0_c`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_c`, `0_c`, `0_r`, `0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_c`, `0_c`],
  text: `<p></p>`
},
]
</script>
