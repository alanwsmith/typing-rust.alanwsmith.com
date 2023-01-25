# Multiple Variables In println!

Here's an example with two varaibles. To
use them both in `println!()` they both
get their own `{}` wrapper.

```rust,noplayground,EXAMPLE1
fn main() {
  let alfa = 3;
  let bravo = 5;
  println!("Alfa {alfa} Bravo {bravo}");
}
```

#### Code Runner

```rust,editable,CODE1

```
