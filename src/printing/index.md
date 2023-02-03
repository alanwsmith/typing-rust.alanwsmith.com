# Printing Variables

Most examples on the site print something.
We'll do that using `println!()`.

`println!()` uses what are called "format
strings" as templates for output. Putting
the name of a variable inside `{}` curly brackets
in a format string outputs its value. For example,
if we have a variable named `alfa` we can print
it like this:

```rust, noplayground
println!("alfa is {alfa}");
```

#### Step By Step

<script>
const rawSourceCode = `fn main() {
  let alfa = String::from("apple");
  println!("alfa is {alfa}");
}`.split('\n')


const lineSets = [
{ 
  lines: [`0_r`, `0_r`,`0_r`,`0_r`],
  text: `<p>The output from the program is <code>alfa is apple</code></p>`
},
{ 
  lines: [`0_r`, `0_s`,`0_s`,`0_r`],
  text: `<p>We start out with an empty <code>main</code> function.</p>`
},
{ 
  lines: [`0_c`, `0_r`,`0_s`,`0_c`],
  text: `<p>The first step is to create a variable named <code>alfa</code> with a <code>String</code> containing &quot;apple&quot; bound to it</p>`
},
{ 
  lines: [`0_c`, `0_c`,`0_r`,`0_c`],
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
