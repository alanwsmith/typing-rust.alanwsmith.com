# Mutable References

Mutable references are created using `&mut` instead
of `&` to make the reference. The first variable
must be created with `mut` too. When we make
modifications to the reference the value
change shows up in the `alfa` variable too.

The steps for this example are:

- Create a mutable variable named `alfa`
  with a `String` bound to it
- Print `alfa` to display the value
- Create a variable named `bravo` that
  has a mutable reference to `alfa`
- Update the value in `bravo` with
  `.push_str()`
- Print out `bravo` to display its
  value
- Print out `alfa` again to show
  that the value updated there too

The output of this code is:

```txt
alfa has apple
bravo has applepie
alfa has applepie
```

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let mut alfa = String::from("apple");
  println!("alfa has {alfa}");

  let bravo = &mut alfa;
  bravo.push_str("pie");

  println!("bravo has {bravo}");
  println!("alfa has {alfa}");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
