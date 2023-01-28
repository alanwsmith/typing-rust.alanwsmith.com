# Only One Mutable Reference

You can only make one mutable reference to
a variable.

This will fail:

#### SOURCE CODE

```rust
fn main() {

  let mut alfa = String::from("widget");

  let bravo = &mut alfa;

  let charlie = &mut alfa;

  println!("bravo {}", bravo);
  println!("charlie {}", charlie);

}
```

TODO: show the error message and explain it
on the next page.
