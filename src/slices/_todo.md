# Slices TODO

---

TODO: I often get wires crossed. Mutability and
References are not dependent on each other. Specifically,
the idea of an immutable reference throws me. Potentially
write something up about that.

---

from: https://doc.rust-lang.org/book/ch04-03-slices.html

It's labeled as The Slice Type

Baisc example:

```rust
fn main() {

  let alfa = String::from("the quick fox");

  let bravo = &alfa[4..9];

  println!("alfa {}", alfa);
  println!("bravo {}", bravo);

}
```

---

If you're starting at zero, you don't need to put the
zero. These are equivalent.

```rust
fn main() {

  let alfa = String::from("the quick fox");

  let bravo   = &alfa[0..3];

  let charlie = &alfa[..3];

  println!("bravo {}", bravo);
  println!("charlie {}", charlie);

}
```

---

The same applies for the end.

```rust
fn main() {

  let alfa = String::from("the quick fox");

  let bravo   = &alfa[9..13];

  let charlie = &alfa[9..];

  println!("bravo {}", bravo);
  println!("charlie {}", charlie);

}
```

---

There's also a note about array slices here:
https://doc.rust-lang.org/book/ch04-03-slices.html

but maybe wait until vecs.
