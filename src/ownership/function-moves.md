# Function Moves

Using a variable as an argument
to a function applies the same type
of ownership move. This works right
now because we don't try to access
`alfa` again after sending it
to the function.

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = String::from("apple");
  widget(alfa);
}

fn widget(value: String) {
  println!("widget got {value}");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
