# Mutable Variables - Step By Step

One way to change a mutable string is to use
`.push_str()` to add more characters
to the end of it.

Here's an example that
create a mutable variable with a `String`
bound to it, adds more text
to it with `.push_str()`, and then
prints it out:

#### Step By Step

<script>
const rawSourceCode = `fn main() {
  let mut alfa = String::from("apple");
  alfa.push_str("pie");
  println!("alfa is {alfa}");
}`.split('\n')


const lineSets = [
{ 
  lines: [`0_r`, `0_r`,`0_r`,`0_r`, `0_r`],
  text: `<p>The output from the program is <code>alfa is applepie</code></p>`
},
{ 
  lines: [`0_r`, `0_s`,`0_s`, `0_s`, `0_r`],
  text: `<p>We start with the standard <code>mian</code> function</p>`,
},
{ 
  lines: [`0_c`, `0_r`,`0_s`, `0_s`,`0_c`],
  text: `<p>Use the <code>mut</code> keyword to create a mutable variable named <code>alfa</code> with a <code>String</code> of <code>apple</code> bound to it<p>`
},
{ 
  lines: [`0_c`, `0_c`,`0_r`, `0_s`,`0_c`],
  text: `<p>Next, add a <code>.push_str()</code> expression to push <code>pie</code> onto the end of the string</p>`
},
{ 
  lines: [`0_c`, `0_c`,`0_c`, `0_r`,`0_c`],
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
