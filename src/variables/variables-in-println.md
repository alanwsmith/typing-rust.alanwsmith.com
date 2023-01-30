# Variables In println!

The code from the prior page includes this line:

```rust, noplayground
println!("alfa is {alfa}");
```

which produced this output:

```rust, noplayground
alfa is 7
```

The characters first piece of text quoted inside
`println!()` is called a "format string". Format
strings can output basic text like we saw with the
original `println!("Hello, World")` example. They can
also output the value of variables like we're
doing with `alfa` above.

The process works by adding `{}` curly brackets
with the name of the variable inside it. In our
case this is:

```rust, noplayground
{alfa}
```

Here's another example where we set the variable
`bravo` to 12 then print it out.

```rust,noplayground,EXAMPLE1
fn main() {
  let bravo = 12;
  println!("bravo is {bravo}");
}
```

```rust,editable,CODE1

```
