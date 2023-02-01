# Mutable Function Argument References

TKTKTKT

TODO: Explain this line by line

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let mut alfa = String::from("apple");
  widget(&mut alfa);
  println!("alfa is {alfa}");
}

fn widget(value: &mut String) {
  value.push_str("-pie");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
