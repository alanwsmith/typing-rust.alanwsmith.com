# Takes No Arguments But Has A Return Value

#### Step By Step

<script>
const rawSourceCode = `fn main() {
  let charlie = widget();
  println!("charlie got {charlie}");
}

fn widget() -> String {
  let bravo = String::from("berry");
  bravo
}`.split('\n')


const lineSets = [
{ 
  lines: [`0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`],
  text: `<p></p>`
},
{ 
  lines: [`0_r`, `0_s`, `0_s`, `0_r`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_s`, `0_c`, `0_s`, `0_r`, `0_s`, `0_s`, `0_r`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_s`, `0_c`, `0_s`, `0_c`, `0_r`, `0_s`, `0_c`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_s`, `0_c`, `0_s`, `0_c`, `0_c`, `0_r`, `0_c`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_r`, `0_s`, `0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_c`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_c`, `0_r`, `0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_c`],
  text: `<p></p>`
},
]
</script>
