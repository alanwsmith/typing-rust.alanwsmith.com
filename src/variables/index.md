# Variables

Variables in Rust are created with the `let` keyword.
By default, they can't be changed once they
have been defined. (That is, the are "immutable"
by default.)

A basic example using a variable named `alfa`
looks like this:

```rust,noplayground,EXAMPLE1
fn main() {
  let alfa = 7;
  println!("The value is {alfa}");
}
```

Type that in and run it. The expected output is "The value is 7".

```rust,editable,CODE1

```

