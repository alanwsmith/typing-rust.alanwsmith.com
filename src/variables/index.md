# Variables

Variables in Rust are created with the `let` keyword followed
by the name to use for the variable, then an `=` sign followed
by the value to bind to it. (Rust uses the term `bind` instead
of assign for varaibles (TODO: Verify this is always the case))

Variables are immutable by default (i.e. they can't be changed
once their set).

Here's a basic example (we'll talk about `{alfa}`
on the next page):

#### EXAMPLE

```rust,noplayground,EXAMPLE1
fn main() {
  let alfa = 7;
  println!("The value is {alfa}");
}
```

Give that a shot

#### CODE RUNNER

```rust,editable,CODE1

```
