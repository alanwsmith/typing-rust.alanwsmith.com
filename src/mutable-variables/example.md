# Mutable Variables - Step By Step

One way to change a mutable `String` is to use
`.push_str()` to add characters
to the end of it. Here's what that looks like:

#### Step By Step

<script>
const rawSourceCode = `fn main() {
  let mut alfa = String::from("apple"); //   let mut alfa = <code>String::from("apple")</code>; //   let <code>mut</code> alfa = //   let alfa =
  alfa.push_str("pie");
  println!("alfa is {alfa}");
}

alfa is applepie`.split('\n')


const lineSets = [
{ 
  lines: [`0_r`, `0_r`,`0_r`,`0_r`, `0_r`, `0_e`, `0_o`],
  text: `<p>The output from the program is <code>alfa is applepie</code></p>`
},
{ 
  lines: [`0_r`, `0_s`,`0_s`, `0_s`, `0_r`, `0_e`, `0_w`],
  text: `<p>Start with a <code>mian</code> function</p>`,
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
  text: `<p>Add in <code>String</code> value to bind to <code>alfa</code></p>`
},

{ 
  lines: [`0_c`, `0_c`,`0_r`, `0_s`,`0_c`, `0_e`, `0_w`],
  text: `<p>Next, add a <code>.push_str()</code> expression to push <code>pie</code> onto the end of the string</p>`
},
{ 
  lines: [`0_c`, `0_c`,`0_c`, `0_r`,`0_c`, `0_e`, `0_w`],
  text: `<p>The last step is to print output which shows use the value of the variable</p>`
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

<!--

```txt
alfa is apple
alfa is apple-pie
```

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let mut alfa = String::from("apple");
  println!("alfa is {alfa}");

  alfa.push_str("-pie");
  println!("alfa is {alfa}");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
-->
