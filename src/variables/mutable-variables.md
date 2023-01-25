# Mutable Variables

Variables are immutable by default, but it's
possible to make them mutable (i.e. set
them up so their values can be changed after
they are created).

The way to make a mutable variable is to
use `mut` with the `let` keyword like this
example where `alfa` is set to an initial
value of `3` and then changed to `7`.

```rust, noplayground, EXAMPLE1
fn main() {
  let mut alfa = 3;
  println!("Alfa {alfa}");

  alfa = 7;
  println!("Alfa {alfa}");
}
```

#### Code Runner

```rust, editable, CODE1

```
