# Step By Step

<script>
const rawSourceCode = `fn main() {
  let alfa = String::from("apple"); //   let alfa = <code>String::from("apple");</code> //   let alfa = 
  widget(alfa); //   widget(<code>alfa</code>); //   widget(); 
}

fn widget(thing: String) { // fn widget(<code>thing: String</code>) { // fn widget() {
  println!("widget got {thing}"); //   println!(<code>"widget got {thing}"</code>); //   println!();
}

widget got apple`.split('\n')


const lineSets = [
{ 
  lines: [`0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_e`, `0_o`],
  text: `<p>When the <code>widget</code> function receives the value in <code>alfa</code> from <code>main</code> it prints the output</p>`
},
{ 
  lines: [`0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `2_r`, `0_s`, `0_r`, `0_e`, `0_w`],
  text: `<p>Start by creating an empty <code>widget</code> function</p>`
},
{ 
  lines: [`0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `1_u`, `0_s`, `0_c`, `0_e`, `0_w`],
  text: `<p>Update it to accept a <code>String</code> and bind it to the internal function variable <code>thing</code></p>`
},
{ 
  lines: [`0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_c`, `2_r`, `0_c`, `0_e`, `0_w`],
  text: `<p>Start creating a <code>println!()</code> statement</p>`
},
{ 
  lines: [`0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_c`, `1_u`, `0_c`, `0_e`, `0_w`],
  text: `<p>Setup <code>widget</code> to print out the <code>String</code> it receives in the <code>thing</code> variable</p>`
},
{ 
  lines: [`0_r`, `0_s`, `0_s`, `0_r`, `0_s`, `0_c`, `0_c`, `0_c`, `0_e`, `0_w`],
  text: `<p>Create the <code>main</code> function that's what gets called first when the program runs</p>`
},
{ 
  lines: [`0_c`, `2_r`, `0_s`, `0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_e`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `1_u`, `0_s`, `0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_e`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_c`, `2_r`, `0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_e`, `0_w`],
  text: `<p>Call the <code>widget</code> function from <code>main</code> passing in the <code>alfa</code> variable as an argument</p>`
},
{ 
  lines: [`0_c`, `0_c`, `1_u`, `0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_e`, `0_w`],
  text: `<p>Call the <code>widget</code> function from <code>main</code> passing in the <code>alfa</code> variable as an argument</p>`
},
]
</script>
