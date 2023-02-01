# Function Argument References

References are required to send the
value of a variable to a function and
still be able to use the original variable
afterwards.

That looks like this:

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = String::from("apple");
  println!("call widget next");

  widget(&alfa);
  println!("alfa is {alfa}");
}

fn widget(value: &String) {
  println!("widget got {value}");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
