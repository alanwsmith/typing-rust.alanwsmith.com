# Functions With No Arguments And No Return Value

The formula for functions that take no
arguments and return no values is:

1. The `fn` keyword
2. A name
3. An empty set of `()` parenthesis
4. `{}` curly brackets surrounding the function's code block

For example:

```rust,noplayground
fn widget() {
  println!("this is widget");
}
```

Calling functions without arguments is done using its
name followed by empty `()`, like:

```rust, noplayground
widget();
```

#### Step By Step

<script>
const rawSourceCode = `fn main() {
  widget();
}

fn widget() {
  println!("this is widget");
}`.split('\n')


const lineSets = [
{ 
  lines: [`0_r`, `0_r`,`0_r`,`0_r`, `0_r`, `0_r`, `0_r`],
  text: `<p></p>`
},
{ 
  lines: [`0_r`, `0_s`,`0_r`,`0_s`, `0_s`, `0_s`, `0_s`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`,`0_c`,`0_s`, `0_r`, `0_s`, `0_r`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_s`,`0_c`,`0_s`, `0_c`, `0_r`, `0_c`],
  text: `<p></p>`
},
{ 
  lines: [`0_c`, `0_r`,`0_c`,`0_s`, `0_c`, `0_c`, `0_c`],
  text: `<p></p>`
},

]

</script>

<!--

Here's a full example that print:

```txt
call widget next
this is widget
```

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  println!("call widget next");
  widget();
}

fn widget() {
  println!("this is widget");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
-->
