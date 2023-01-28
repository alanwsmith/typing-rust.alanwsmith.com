# Scope For Mutalbe References

NOTE: this can probably be moved to
a later part of the book.

This is the earlier example that doesn't
work. If we move the println for
bravo up it does work.

TODO: There is scope
stuff that comes in to play but there's
no explicit scope here so I'm guessing
rust sees that `bravo` isn't going to
be used anymore after charlie is set
so it uses that for scope?

```rust
fn main() {

  let mut alfa = String::from("widget");

  let bravo = &mut alfa;
  println!("bravo {}", bravo);

  let charlie = &mut alfa;
  println!("charlie {}", charlie);

}
```

Look more and the example on this page.

https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html
