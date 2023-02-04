# Mutalbe Struct Instances - Step By Step

#### Step By Step

<script>
const rawSourceCode = `struct Widget {
  alfa: String, //   alfa: <code>String</code>, //   alfa:
}

fn main() {
  let mut thing = Widget { //   let mut thing = <code>Widget</code> { //   let <code>mut</code> thing //   let thing
    alfa: String::from("apple") //     alfa: <code>String::from("apple")</code> //     alfa: 
  };
  println!("{}", thing.alfa);
}

apple`.split('\n')


const lineSets = [
{ 
  lines: [`0_r`, `0_r`,`0_r`,`0_s`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_r`, `0_e`, `0_o`],
  text: `<p>The output from the program is <code>alfa is apple</code></p>`
},
{ 
  lines: [`0_r`, `0_s`,`0_r`,`0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_e`, `0_w`],
  text: `<p>Start defining a <code>struct</code> named <code>Widget</code></p>`
},
{ 
  lines: [`0_c`, `2_r`,`0_c`,`0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_e`, `0_w`],
  text: `<p>Add a <code>field</code> named <code>alfa</code></p>`
},
{ 
  lines: [`0_c`, `1_r`,`0_c`,`0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_s`, `0_e`, `0_w`],
  text: `<p>Finish the definition by setting <code>alfa</code> to hold a <code>String</code>`
},
{ 
  lines: [`0_c`, `0_c`,`0_c`,`0_s`, `0_r`, `0_s`, `0_s`, `0_s`, `0_s`, `0_r`, `0_e`, `0_w`],
  text: `<p>Start making the <code>main</code> function</p>`
},
{ 
  lines: [`0_c`, `0_c`,`0_c`,`0_s`, `0_c`, `3_r`, `0_s`, `0_s`, `0_s`, `0_c`, `0_e`, `0_w`],
  text: `<p>Start creating a new variable that will be an <code>instance</code> of <code>Widget</code></p>`
},
{ 
  lines: [`0_c`, `0_c`,`0_c`,`0_s`, `0_c`, `2_r`, `0_s`, `0_s`, `0_s`, `0_c`, `0_e`, `0_w`],
  text: `<p>Start creating a new variable that will be an <code>instance</code> of <code>Widget</code></p>`
},
{ 
  lines: [`0_c`, `0_c`,`0_c`,`0_s`, `0_c`, `1_r`, `0_s`, `0_r`, `0_s`, `0_c`, `0_e`, `0_w`],
  text: `<p>Start creating a new variable that will be an <code>instance</code> of <code>Widget</code></p>`
},
{ 
  lines: [`0_c`, `0_c`,`0_c`,`0_s`, `0_c`, `0_c`, `2_r`, `0_c`, `0_s`, `0_c`, `0_e`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_c`,`0_c`,`0_s`, `0_c`, `0_c`, `1_r`, `0_c`, `0_s`, `0_c`, `0_e`, `0_w`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_c`,`0_c`,`0_s`, `0_c`, `0_c`, `0_c`, `0_c`, `0_r`, `0_c`, `0_e`, `0_w`],
  text: `<p></p>`
},

]

</script>

<!--

---

Here's a full program to demonstrate that. It
outputs:

```txt
alfa is apple
```

Give it a shot in the Code Runner:

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = String::from("apple");
  println!("alfa is {alfa}");
}
```

### CODE RUNNER

```rust, editable, CODE1

```

-->
