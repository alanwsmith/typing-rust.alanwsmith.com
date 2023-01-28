# TODO

Things to add to the functions and references.

From:
https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html

---

You can make multiple immutable references
to a mutable value.

```rust
fn main() {
  let mut alfa = String::from("widget");

  let bravo = &alfa;

  let charlie = &alfa;

  println!("bravo {}", bravo);
  println!("charlie {}", charlie);

}
```

---

You can't have a mutable reference to a mutable variable
at the same time as you already have an immutable one.

```rust
fn main() {

  let mut alfa = String::from("widget");

  let bravo = &alfa;

  let charlie = &alfa;

  let delta = &mut alfa;

  println!("alfa {}", alfa);
  println!("bravo {}", bravo);
  println!("charlie {}", charlie);
  println!("delta {}", delta);

}
```

---

This was referred earlier I think, but this is
confirmation that if rust sees that the values
isn't going to be used anymore it releases the
reference (TODO: Figure out the actual term for
that) and you can use it:

```rust
fn main() {

  let mut alfa = String::from("widget");
  println!("alfa {}", alfa);

  let bravo = &alfa;
  println!("bravo {}", bravo);

  let charlie = &alfa;
  println!("charlie {}", charlie);

  let delta = &mut alfa;
  println!("delta {}", delta);

}
```

---

You can't make a new variable in a function and then
return it. When the function is done, the original
value disappears. Rust, prevents this type of thing
from happening. If you try to run this code, you'll
see the error (TKTKTKT review the error).

```rust
fn main() {

  let alfa = widget();

  println!("alfa {}", alfa);
}

fn widget() -> &String {

  let bravo = String::from("hello");

  &bravo

}
```

---

This works though.

```rust
fn main() {

  let alfa = widget();

  println!("alfa {}", alfa);

}

fn widget() -> String {

  let bravo = String::from("hello");

  bravo

}

```

---

Rules of references:

- At any given time, you can have either one
  mutable reference or any number of immutable
  references.
- References must always be valid.

---

This shows an early return in a function

```rust
fn main() {

  let alfa = limit_to_five(3);

  let bravo = limit_to_five(10);

  println!("alfa {} bravo {}", alfa, bravo);

}

fn limit_to_five(value: i32) -> i32 {

  if value > 5 {
    return 5
  }

  value

}
```
