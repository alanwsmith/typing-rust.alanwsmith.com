# Step By Step

<script>
const rawSourceCode = `use std::env;

fn main() {
  let key = "HOME"; //   let key = <code>"HOME"</code>; //   let key = 
  let returnValueAsResult = env::var(key); //   let returnValueAsResult = <code>env::var(key)</code>; //   let returnValueAsResult = 

  match returnValueAsResult {
    Ok(value) => { //     Ok(<code>value</code>) => { //     Ok() => {
      println!("{} is {}", key, value); //       println!("{} is {}", key, <code>value</code>); //       println!("{} is {}", <code>key</code>); //       println!(<code>"{} is {}"</code>); //       println!();
    }
    Err(error) => { //     Err(<code>error</code>) => { //     Err() => {
      println!("{} - {}", key, error); //       println!("{} - {}", key, <code>error</code>); //       println!("{} - {}"<code>, key</code>); //       println!(<code>"{} - {}"</code>); //       println!();
    }
  }
}

HOME is /playground`.split('\n')


const lineSets = [
{ 
  lines: [`0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_e`, `0_o`],
  text: `<p></p>`
},
{ 
  lines: [`0_r`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_e`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_r`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_r`, `0_e`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_c`, `2_r`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_c`, `0_e`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_c`, `1_u`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_c`, `0_e`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_c`, `0_c`, `2_r`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_c`, `0_e`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_c`, `0_c`, `1_u`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_c`, `0_e`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_s`, `0_r`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_r`, `0_c`, `0_e`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_s`, `0_c`, `2_r`, `0_s`, `0_r`, `0_s`, `0_s`, `0_s`, `0_c`, `0_c`, `0_e`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_s`, `0_c`, `1_r`, `0_s`, `0_c`, `0_s`, `0_s`, `0_s`, `0_c`, `0_c`, `0_e`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_s`, `0_c`, `0_c`, `4_r`, `0_c`, `0_s`, `0_s`, `0_s`, `0_c`, `0_c`, `0_e`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_s`, `0_c`, `0_c`, `3_u`, `0_c`, `0_s`, `0_s`, `0_s`, `0_c`, `0_c`, `0_e`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_s`, `0_c`, `0_c`, `2_u`, `0_c`, `0_s`, `0_s`, `0_s`, `0_c`, `0_c`, `0_e`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_s`, `0_c`, `0_c`, `1_u`, `0_c`, `0_s`, `0_s`, `0_s`, `0_c`, `0_c`, `0_e`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_c`, `2_r`, `0_s`, `0_r`, `0_c`, `0_c`, `0_e`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_c`, `1_u`, `0_s`, `0_c`, `0_c`, `0_c`, `0_e`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_c`, `0_c`, `4_r`, `0_c`, `0_c`, `0_c`, `0_e`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_c`, `0_c`, `3_u`, `0_c`, `0_c`, `0_c`, `0_e`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_c`, `0_c`, `2_u`, `0_c`, `0_c`, `0_c`, `0_e`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_s`, `0_c`, `0_c`, `0_c`, `0_c`, `0_c`, `1_u`, `0_c`, `0_c`, `0_c`, `0_e`, `0_w`],
  text: `<p></p>`
},
]
</script>
