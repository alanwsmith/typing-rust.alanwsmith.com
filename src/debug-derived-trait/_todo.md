# Debug Derived Trait

This is from lower on this page:

https://doc.rust-lang.org/book/ch05-02-example-structs.html

TODO: Make sure you've already talked about
the debug print format `{:?}` and `!dbg`
and how `!dbg` takes ownership and then returns
it and prints to `stderr`

You can't print a struct directly.

```rust
struct Widget { alfa: bool }

fn main() {

  let thing = Widget { alfa: true };

  println!("thing is {}", thing);

}
```

TODO: Show that error

---

The `{:?}` debug syntax won't work
either.

```rust
struct Widget { alfa: bool }

fn main() {

  let thing = Widget { alfa: true };

  println!("thing is {:?}", thing);

}
```

TODO: Show the "error[E0277]: `Widget` doesn't implement
`Debug`" error.

---

If you add the `outter attribute` for debugging with:
`#[derive(Debug)]` it'll allow for `{:?}` or `{:#?}`
to output a basic representation of the struct.
(The `{:#?}`is the same thing as`{:?}` with a little
nicer formatting and is that's shown here)

```rust
#[derive(Debug)]
struct Widget { alfa: bool }

fn main() {

  let thing = Widget { alfa: true };

  println!("thing is {:#?}", thing);

}
```

---

### Using `!dbg`

Probably you should just show this for the
debuggin stuff instead of `{:?}` in
`println!()` for the default way to do
debugging. TODO: look into the differences
to see about that, but almost certianly
move the `{:?}` to a later section.

NOTE: this isn't showing up on the playground
possibly because only `stdout` and not `stderr`
is returned? Need to look into that.

```rust
#[derive(Debug)]
struct Widget { alfa: bool }

fn main() {

  let thing = Widget { alfa: true };

  dbg!(thing);

}
```

---

### Use dbg! Around Expressions

You can use around expressions. This means
you can do things like this (TODO: figure
out if `dbg!` can output on the rust playground.)

```rust
fn main() {

  let alfa = 3;
  let bravo = 5;

  let charlie = dbg!(alfa * bravo);

  println!("charlie is {}", charlie);

}
```

