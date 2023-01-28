# Variables In println!

The code from the prior page includes this line:

```rust, noplayground
println!("The value is {}", alfa);
```

which produced this output:

```rust, noplayground
The value is 7
```

The characters quoted inside `println!()` are
called a "format string". Format strings can
output basic text like we saw with the
original `println!("Hello, World")` example. They can
also output the current value of a variables
like we're doing here.

The process works by putting the a `{}`
placeholder in the first quoted text inside the
`println!()` parenthesis. The name of the value
that we want to use to replace the placeholder
comes next.

Here's another example where we set the variable
`bravo` to 12 then print it out.

```rust,noplayground,EXAMPLE1
fn main() {

  let bravo: i32 = 12;

  println!("The value is {}", bravo);

}
```

```rust,editable,CODE1

```
