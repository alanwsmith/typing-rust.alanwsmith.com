# Functions - No Args Or Return Value - Step By Step

Details

#### Step By Step

<script>
const rawSourceCode = `fn main() {
  widget();
}

fn widget() {
  println!("this is widget");
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
  lines: [`0_s`, `0_s`,`0_s`,`0_s`, `0_c`, `0_r`, `0_c`, `0_e`, `0_w`],
  text: `<p>Add a <code>println!()</code> statement to create some output</p>`
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
