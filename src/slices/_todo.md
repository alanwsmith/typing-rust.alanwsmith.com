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

It looks like this:

```rust
fn main() {

  let alfa = [3, 5, 7, 9];

  let bravo = &alfa[1..3];

  assert_eq!(bravo, &[5, 7]);

}
```

but maybe wait until vecs.

Also, we haven't seen assertions yet, and I don't
totally get the refernce to the stand alone array.
or, more to the point, why it's a reference.

This is from the "Other Slices" secition. Need
to revisit once there's a better understanding
of the parts.

Also, we haven't seen assertions yet, and I don't
totally get the refernce to the stand alone array.
or, more to the point, why it's a reference.

This is from the "Other Slices" secition. Need
to revisit once there's a better understanding
of the parts.

---

Look at:
https://doc.rust-lang.org/book/ch04-03-slices.html

For the stuff about literals too and how
you can pass them into functions wiht

```rust
fn widget(value: &str) -> &str {}
```

That lets you pass in both `&String` and
`&str` values.

This is an example where you can pass literal
references, and String references, and String
slices (which are references by definition)

```rust
fn main() {

  let alfa = String::from("the quick fox");
  let bravo = "the lazy dog";

  widget(&alfa);
  widget(&alfa[4..9]);

  widget(&bravo);
  widget(&bravo[4..8]);

}

fn widget(value: &str) {

  println!("Value is {}", value);

}
```

Question: does this mean that you should pretty
much always use `&str` instead of `&String` for
function parameters?
