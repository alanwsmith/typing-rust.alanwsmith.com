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
  widget(&alfa);
  println!("alfa is {alfa}");
}

fn widget(thing: &String) {
  println!("widget got {thing}");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
