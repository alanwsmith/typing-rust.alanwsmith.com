# Constants

There's another type of variable besides
mutable and immutable. They're called "constants".

Constants are like immutable variables with a
few extra criteria. We've covered enough to
get the idea for the first three:

1. They are defined using the `const` keyword
   instead of `let`
2. The `mut` keyword can't be used when creating them
3. Names should always be in UPPER_SNAKE_CASE
   by convention.

These next three criteria require some knowledge we
haven't gotten to yet, We'll touch on them in the next
few pages.

1. Constants can be declared in global scope (which will
   see on the next page)
2. They must have a type annotation (e.g. the `i32`
   in the example below which is coming up).
3. They must be set to something determined at complile
   time (which we'll also get to shortly)

```rust, noplayground, EXAMPLE1
fn main() {
  const ALFA: i32 = 100;
  println!("Alfa {ALFA}");
}
```

#### CODE RUNNER

```rust, editable, CODE1

```

---

### TODO

- Examine moving constants to a poinst
  after you've talked about scope and types.
  Probably that makes the most sense.
