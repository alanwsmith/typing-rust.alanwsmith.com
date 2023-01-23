# Mutable Variables

A variable must be set as "mutable" in
order to allow it's value to be changed
after it's set. This is done by using
`mut` with the `let` keyword.

```rust, noplayground, EXAMPLE1
fn main() {
  let mut alfa = 3;
  println!("The value is now {alfa}");

  alfa = 7;
  println!("The value is now {alfa}");
}
```

#### Code Runner

```rust, editable, CODE1

```
