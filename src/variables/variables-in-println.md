# Variables In println!

The code from the prior page includes this line:

```rust, noplayground
println!("The value is {alfa}");
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

The process works by putting the name of the
variable inside `{` and `}` curly brackets. In
this case, that looks like this:

```rust, noplayground
{alfa}
```

Here's another example where we set a varaible
named `bravo` to 12 then print it out.

```rust,noplayground,EXAMPLE1
fn main() {
  let bravo = 12;
  println!("Bravo is {bravo}");
}
```

```rust,editable,CODE1

```
