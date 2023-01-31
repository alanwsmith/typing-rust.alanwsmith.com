# References

References offer another way to avoid moving
ownership of a value. Referenes are made by
putting the `&` symbol in from of the variable
that needs to be referenced.

In our earlier example we could no longer
access the value in `alfa` once we moved it
to `bravo` like this:

```rust, noplayground
let bravo = alfa;
```

By using a reference like this the value
stays in `alfa` with `bravo` hooked into
it via the reference.

```rust, noplayground
let bravo = &alfa;
```

That means we can now use both `alfa` and
`bravo` in `println!()` statements like we
do here to output:

```txt
alfa is widget
bravo is widget
```

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = String::from("widget");
  let bravo = &alfa;

  println!("alfa is {alfa}");
  println!("bravo is {bravo}");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
