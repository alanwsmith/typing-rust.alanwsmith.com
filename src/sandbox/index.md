# Sandbox

#### SOURCE CODE

```rust
fn main() {
  let alfa = String::from("quick");
  let bravo = alfa;

  println!("{alfa}");
}
```

```rust
fn main() {
  let alfa = String::from("quick");
  widget(alfa);
  println!("{alfa}");
}

fn widget(value: String) {
  println!("{value}");
}
```
