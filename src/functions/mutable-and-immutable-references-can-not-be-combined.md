# Mutable And Immutable References Can't Be Combined

TODO: Make this a page:

You can have an immutable reference to a mutable variable.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let mut alfa = String::from("widget");

  let bravo = &alfa;

  println!("bravo {}", bravo)

}

```

### CODE RUNNER

```rust, editable, CODE1

```

---

Testing examples:

Mutable references to immutable variables throw
an error. Show this error.

```rust
fn main() {

  let alfa = String::from("widget");

  let bravo = &mut alfa;

  println!("bravo {}", bravo);

}
```
