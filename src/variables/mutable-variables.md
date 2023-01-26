# Mutable Variables

Variables are immutable by default, but it's
possible to create mutable versions (i.e.
ones that can have their values changed after
they have been created).

The way to make a mutable variable is to
use the `mut` keyword with `let`. This expands
our formula for creating variables to looks like this:

1. The `let` keyword
2. The optional `mut` keyword
3. A name for the variable (e.g. `alfa`)
4. A `:` that acts as a separator
5. A data type
6. The `=` sign
7. The value to bind to it (e.g. `7`)
8. A `;` the ends the definition

Here's what that looks like in practice.
We create a variable named `alfa` with
the value of `3` then change it to `7`
with a `println!()` statement before and
after the alteration so we can see the
change.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let mut alfa: i32 = 3;

  println!("Value {alfa}");

  alfa = 7;

  println!("Value {alfa}");

}
```

#### CODE RUNNER

```rust, editable, CODE1

```
