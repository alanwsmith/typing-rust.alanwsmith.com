# Step By Step

<script>
const rawSourceCode = `fn main() {
  widget();
}

fn widget() {
  println!("this is widget"); //   println!(<code>"this is widget"</code>); //   println!();
}

this is widget`.split('\n')


const lineSets = [
{ 
  lines: [`0_r`, `0_r`,`0_r`,`0_r`, `0_r`, `0_r`, `0_r`, `0_e`, `0_o`],
  text: `<p></p>`
},
{ 
  lines: [`0_s`, `0_s`,`0_s`,`0_s`, `0_r`, `0_s`, `0_r`, `0_e`, `0_w`],
  text: `<p>Create an empty <code>widget</code> function</p>`
},
{ 
  lines: [`0_s`, `0_s`,`0_s`,`0_s`, `0_c`, `2_r`, `0_c`, `0_e`, `0_w`],
  text: `<p>Start creating a <code>println!()</code> expression</p>`
},
{ 
  lines: [`0_s`, `0_s`,`0_s`,`0_s`, `0_c`, `1_u`, `0_c`, `0_e`, `0_w`],
  text: `<p>Add the content to output</p>`
},
{ 
  lines: [`0_r`, `0_s`,`0_r`,`0_s`, `0_c`, `0_c`, `0_c`, `0_e`, `0_w`],
  text: `<p>Create the <code>main</main> function</p>`
},
{ 
  lines: [`0_c`, `0_r`,`0_c`,`0_s`, `0_c`, `0_c`, `0_c`, `0_e`, `0_w`],
  text: `<p>Call the <code>widget()</code> function from main</p>`
},

]

</script>
