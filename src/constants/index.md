# Constants

Constants are like immutable variables with a
few extra features.

- You use `const` instead of `let to define them.
- They must have a type annotation.
- They can be declared in global scope (which
  regular variables can't be)
- They can't be set to something that's determined
  at run time. (it must be a constant expression. To do
  verify that that means it has to be set at compile
  time)
- Names should be UPPER_SNAKE_CASE

```rust, noplayground, EXAMPLE1
const ALFA: i32 = 100;

fn main() {
  println!("The value is {ALFA}")
}
```

#### CODE RUNNER

```rust, editable, CODE1

```

#### REFERENCES

- https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html

- https://doc.rust-lang.org/reference/const_eval.html
