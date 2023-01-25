# Constants

Constants are like immutable variables with a
few extra criteria.

- Constants are defined with `const` instead of
  `let`
- The `mut` keyword can't be used with a constant
- Names should be UPPER_SNAKE_CASE

And these things which will cover in more detail
on the next few pages:

- Constants must have a type annotation (the `i32`
  in the example below).
- They can be declared in global scope (which will
  show in the next example)
- They must be set to something determined at complile
  time (which will also get to shortly)

```rust, noplayground, EXAMPLE1
fn main() {
  const ALFA: i32 = 100;
  println!("Alfa {ALFA}");
}
```

#### CODE RUNNER

```rust, editable, CODE1

```
