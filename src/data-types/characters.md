# Characters

NOTE: This was originally right after booleans in
the early Data Types chapter. I'm moving it
out for now because I rarely see `char` used
independently. We'll address in a later section.

---

The `char` type in Rust holds a single character. Variables
of the `char` type are defined with single quotes. They can
be set implicitly like this:

```rust, noplayground
let alfa = 'a';
```

Or explicitly like this:

```rust, noplayground
let bravo: char = 'b';
```

Here's the explicit version in a
full program:

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main () {
  let charlie: char = 'c';
  println!("Value {charlie}");
}
```

#### CODE RUNNER

```rust, editable, CODE1

```
