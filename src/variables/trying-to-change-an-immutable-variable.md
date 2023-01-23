# Trying To Change An Immutable Variable

Trying to change an immutable variable causes an
error. This code demonstrates that. (There's no
need to type it in yourself, just run it to
see the error message.)

```rust
fn main() {
  let alfa = 4;
  println!("The value is now {alfa}");

  alfa = 9;
  println!("The value is now {alfa}");
}
```
