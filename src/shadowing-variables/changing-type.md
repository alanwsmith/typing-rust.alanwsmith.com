# Shadowing Variables To Change Type

Shadowning variables allows you to
change their type. That's something you can't
do with a regular mutable variable (i.e. one
defined with `let mut`). For exaple, this code
tries to change from a string to a number.
Run it and you'll see the error message.

```rust,EXAMPLE1
fn main() {
  let mut alfa = "example";
  alfa = 7;
}
```

Using shadowed variables to change the type
in a way that works looks like this:

```rust, noplayground
fn main() {
  let alfa = "example";
  let alfa = 7;
  println!("The value is {alfa}");
}
```

#### CODE EDITOR

```rust,editable,CODE1

```
