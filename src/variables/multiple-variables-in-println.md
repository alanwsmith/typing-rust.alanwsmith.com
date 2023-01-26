# Multiple Variables In println!

Format strings also accept different
variables. Here's an example with three.
Each gets defined individually and then
receives its own `{}` wrapper in `println!()`

```rust,noplayground,EXAMPLE1
fn main() {
  let alfa = 3;
  let bravo = 5;
  let charlie = 7;

  println!("{alfa} - {bravo} - {charlie}");
}
```

#### Code Runner

```rust,editable,CODE1

```
