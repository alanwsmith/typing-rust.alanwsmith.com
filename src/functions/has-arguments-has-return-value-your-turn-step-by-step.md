# Step By Step

<script>
const rawSourceCode = `fn main() {
  let alfa = String::from("apple"); //   let alfa = <code>String::from("apple")</code>; //   let alfa =
  let charlie = widget(alfa); //   let charlie = widget(<code>alfa</code>); //   let charlie = <code>widget()</code>; //   let charlie = 
  println!("charlie is {charlie}"); //   println!(<code>"charlie is {charlie}"</code>); //   println!();
}

fn widget(thing: String) -> String { // fn widget(thing: String) -> <code>String</code> { // fn widget(<code>thing: String</code>) { // fn widget() {
  println!("widget got {thing}"); //   println!(<code>"widget got {thing}"</code>); //   println!();
  let bravo = String::from("berry"); //   let bravo = <code>String::from("berry")</code>; //   let bravo = 
  bravo
}

widget got apple
charlie is berry`.split('\n')


const lineSets = [
{ 
  lines: [`0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_e`, `0_o`, `0_o`],
  text: `<p></p>`
},
{ 
  lines: [`0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `3_r`, `0_s`, `0_s`, `0_s`, `0_r`, `0_e`, `0_w`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `2_u`, `0_s`, `0_s`, `0_s`, `0_c`, `0_e`, `0_w`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `1_u`, `0_s`, `0_s`, `0_s`, `0_c`, `0_e`, `0_w`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_c`, `2_r`, `0_s`, `0_s`, `0_c`, `0_e`, `0_w`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_c`, `1_u`, `0_s`, `0_s`, `0_c`, `0_e`, `0_w`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_c`, `0_c`, `2_r`, `0_s`, `0_c`, `0_e`, `0_w`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_c`, `0_c`, `1_u`, `0_s`, `0_c`, `0_e`, `0_w`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_c`, `0_c`, `0_o`, `0_r`, `0_c`, `0_e`, `0_w`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_r`, `0_s`, `0_s`, `0_s`, `0_r`, `0_s`, `0_c`, `0_c`, `0_o`, `0_c`, `0_c`, `0_e`, `0_w`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `2_r`, `0_s`, `0_s`, `0_c`, `0_s`, `0_c`, `0_c`, `0_o`, `0_c`, `0_c`, `0_e`, `0_w`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `1_u`, `0_s`, `0_s`, `0_c`, `0_s`, `0_c`, `0_c`, `0_o`, `0_c`, `0_c`, `0_e`, `0_w`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_c`, `3_r`, `0_s`, `0_c`, `0_s`, `0_c`, `0_c`, `0_o`, `0_c`, `0_c`, `0_e`, `0_w`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_c`, `2_u`, `0_s`, `0_c`, `0_s`, `0_c`, `0_c`, `0_o`, `0_c`, `0_c`, `0_e`, `0_w`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_c`, `1_u`, `0_s`, `0_c`, `0_s`, `0_c`, `0_c`, `0_o`, `0_c`, `0_c`, `0_e`, `0_w`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_c`, `0_c`, `2_r`, `0_c`, `0_s`, `0_c`, `0_c`, `0_o`, `0_c`, `0_c`, `0_e`, `0_w`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_c`, `0_c`, `1_u`, `0_c`, `0_s`, `0_c`, `0_c`, `0_o`, `0_c`, `0_c`, `0_e`, `0_w`, `0_w`],
  text: `<p></p>`
},
]
</script>
