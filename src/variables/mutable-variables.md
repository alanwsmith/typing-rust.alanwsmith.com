# Mutable Variables

Variables are immutable by default, but it's
possible to create mutable versions (i.e.
ones that can have their values changed after
they have been created).

The way to make a mutable variable is to
use the `mut` keyword with `let`. This expands
our formula for creating variables to looks like this:

1. The `let` keyword
2. An optional `mut` keyword
3. The name to use (e.g. `alfa`)
4. The `=` sign
5. The value to bind to it (e.g. `7`)

Here's what that looks like in practice.
We create a variable named `alfa` with
the value of `3` then change it to `7`
with a `println!()` statement before and
after the alteration so we can see the
change.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let mut alfa = 3;
  println!("Value {alfa}");

  alfa = 7;
  println!("Value {alfa}");
}
```

#### CODE RUNNER

```rust, editable, CODE1

```
