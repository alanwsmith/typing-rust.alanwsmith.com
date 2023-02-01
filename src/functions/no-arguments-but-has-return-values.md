# Takes No Arguments But Has A Return Value

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  println!("call widget next");
  let charlie = widget();

  println!("charlie got {charlie}");
}

fn widget() -> String {
  let bravo = String::from("berry");
  bravo
}
```

### CODE RUNNER

```rust, editable, CODE1

```
