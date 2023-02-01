# Error Example

Here's the same thing, but without `&` which
shows the error.

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = String::from("apple");
  println!("call widget next");

  widget(alfa);
  println!("alfa is {alfa}");
}

fn widget(value: String) {
  println!("widget got {value}");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
