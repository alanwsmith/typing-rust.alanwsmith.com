# Functions That Take Arguments But Have No Return Value

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = String::from("apple");

  println!("call widget next");
  widget(alfa);
}

fn widget(input: String) {
  println!("widget got {input}");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
