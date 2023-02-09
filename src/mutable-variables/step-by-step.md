# Step By Step

<script>
const rawSourceCode = `fn main() {
  let mut alfa = String::from("apple"); //   let mut alfa = <code>String::from("apple")</code>; //   let <code>mut</code> alfa = //   let alfa =
  alfa.push_str("pie"); //   alfa.push_str(<code>"pie"</code>); //   alfa.push_str();
  println!("alfa is {alfa}"); //   println!(<code>"alfa is {alfa}"</code>); //   println!();
}

alfa is applepie`.split('\n')


const lineSets = [
{ 
  lines: [`0_r`, `0_r`,`0_r`,`0_r`, `0_r`, `0_e`, `0_o`],
  text: `<p>The output from the program is <code>alfa is applepie</code></p>`
},
{ 
  lines: [`0_r`, `0_s`,`0_s`, `0_s`, `0_r`, `0_e`, `0_w`],
  text: `<p>Start with a <code>main</code> function</p>`,
},
{ 
  lines: [`0_c`, `3_r`,`0_s`, `0_s`,`0_c`, `0_e`, `0_w`],
  text: `<p>Begin creating a variable named <code>alfa</code></p>`
},
{ 
  lines: [`0_c`, `2_u`,`0_s`, `0_s`,`0_c`, `0_e`, `0_w`],
  text: `<p>Add the <code>mut</code> keyword to make <code>alfa</code> mutalble</p>`
},
{ 
  lines: [`0_c`, `1_u`,`0_s`, `0_s`,`0_c`, `0_e`, `0_w`],
  text: `<p>Add in the <code>String</code> value to bind to <code>alfa</code></p>`
},
{ 
  lines: [`0_c`, `0_c`,`2_r`, `0_s`,`0_c`, `0_e`, `0_w`],
  text: `<p>Next, start making an expression using the <code>.push_str()</code> method on <code>alfa</code></p>`
},
{ 
  lines: [`0_c`, `0_c`,`1_u`, `0_s`,`0_c`, `0_e`, `0_w`],
  text: `<p>Added in the text to append</p>`
},
{ 
  lines: [`0_c`, `0_c`,`0_c`, `2_r`,`0_c`, `0_e`, `0_w`],
  text: `<p>Start creating a <code>println!()</code> expression</p>`
},
{ 
  lines: [`0_c`, `0_c`,`0_c`, `1_u`,`0_c`, `0_e`, `0_w`],
  text: `<p>Define the output to print including the <code>alfa</code> variable inside <code>{}</code> curly brackets</p>`
},
]

</script>
