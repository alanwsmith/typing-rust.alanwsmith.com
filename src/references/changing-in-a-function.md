# Changing In A Function

### SOURCE CODE

```rust, EXAMPLE1
fn main() {
  let mut alfa = String::from("widget");
  println!("alfa is {alfa}");

  update_value(&mut alfa);
  println!("alfa is {alfa}");
}

fn update_value(value: &mut String) {
  value.push_str("-thing");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
