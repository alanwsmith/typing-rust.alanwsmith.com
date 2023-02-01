# Function Move Errors

However, if we try to use `alfa`
again by adding this line it'll
break with the same type of error
as before.

```rust,noplayground
println!("alfa has {alfa}");
```

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = String::from("apple");
  widget(alfa);

  println!("alfa has {alfa}");
}

fn widget(value: String) {
  println!("widget got {value}");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
