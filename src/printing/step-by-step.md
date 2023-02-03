# Printing Variables - Step By Step

Here's a program that creates a variable
the prints it out.

#### Step By Step

<script>
const rawSourceCode = `fn main() {
  let alfa = String::from("apple");
  println!("alfa is {alfa}");
}

alfa is apple`.split('\n')


const lineSets = [
{ 
  lines: [`0_r`, `0_r`,`0_r`,`0_r`, `0_c`, `0_o`],
  text: `<p>The output from the program is <code>alfa is apple</code></p>`
},
{ 
  lines: [`0_r`, `0_s`,`0_s`,`0_r`, `0_s`, `0_s`],
  text: `<p>We start out with an empty <code>main</code> function.</p>`
},
{ 
  lines: [`0_c`, `0_r`,`0_s`,`0_c`, `0_s`, `0_s`],
  text: `<p>The first step is to create a variable named <code>alfa</code> with a <code>String</code> containing &quot;apple&quot; bound to it</p>`
},
{ 
  lines: [`0_c`, `0_c`,`0_r`,`0_c`, `0_s`, `0_s`],
  text: `<p>Then we add the <code>println!()</code> statement that outputs the text of the <code>String</code> when the program is run</p>`
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
