# Printing Variables - Step By Step

Here's a program that creates a variable
the prints it out.

#### Step By Step

<script>
const rawSourceCode = `fn main() {
  let alfa = String::from("apple"); //   let alfa = <code>String::from("apple")</code>; //   let alfa =
  println!("alfa is {alfa}"); //   println!(<code>"alfa is {alfa}"</code>); //   println!()
}

alfa is apple`.split('\n')


const lineSets = [
{ 
  lines: [`0_r`, `0_r`,`0_r`,`0_r`, `0_e`, `0_o`],
  text: `<p>The output from the program is <code>alfa is apple</code></p>`
},
{ 
  lines: [`0_r`, `0_s`,`0_s`,`0_r`, `0_e`, `0_w`],
  text: `<p>Start out with an empty <code>main</code> function.</p>`
},
{ 
  lines: [`0_c`, `2_r`,`0_s`,`0_c`, `0_e`, `0_w`],
  text: `<p>Start creating a variable named <code>alfa</code.</p>`
},
{ 
  lines: [`0_c`, `1_u`,`0_s`,`0_c`, `0_e`, `0_w`],
  text: `<p>Bind a <code>String</code> with &quot;apple&quot; to <code>alfa</code></p>`
},
{ 
  lines: [`0_c`, `0_c`,`2_r`,`0_c`, `0_e`, `0_w`],
  text: `<p>Start a <code>println!()</code> expression</p>`
},
{ 
  lines: [`0_c`, `0_c`,`1_u`,`0_c`, `0_e`, `0_w`],
  text: `<p>Add the string to output including the <code>{alfa}</code> portion to output the variable</p>`
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
