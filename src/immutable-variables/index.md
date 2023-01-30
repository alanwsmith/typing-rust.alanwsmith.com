# Immutable Variables

Variables in Rust are "immutable" by default.
That means once you bind a values it can't
be changed. For example, run this and you'll
get an error.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let alfa = 7;
  println!("alfa is {}", alfa);

  alfa = 9;
  println!("alfa is {}", alfa);

}
```

### CODE RUNNER

```rust, editable, CODE1

```
