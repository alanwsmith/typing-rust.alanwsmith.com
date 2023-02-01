# Using In A Function

This is how to pass a reference to a function where
you don't loose ownership

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = String::from("apple");
  println!("alfa is {alfa}");

  show_value(&alfa);
  println!("alfa is {alfa}");
}

fn show_value(param: &String) {
  println!("show_value got {param}");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
