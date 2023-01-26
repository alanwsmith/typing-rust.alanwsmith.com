# Implicit And Explicit

We've just said that every value in a Rust
program must have a type and showed how to
set them. But, if you remember back to the
first variable exapmle we didn't set anything.

Here's another look at it:

```rust,noplayground
fn main() {
  let alfa = 7;
  println!("The value is {alfa}");
}
```

This works because Rust can infer types in
many cases. That allows the types to be
defined impliclty as above instead of
explicitly like we did with `f32` on the
prior page.

If a number without a decimal place is
used for a variable without an explicit
type Rust will implicitly assign it
a type of `i32` which is a number without
a decimal place that can be either
negative or positive.

Here's the same program as above but with
and explict type set for the `alfa` variable.

#### SOURCE CODE

```rust,noplayground, EXAMPLE1
fn main() {
  let alfa: i32 = 7;
  println!("The value is {alfa}");
}
```

#### CODE RUNNER

```rust, editable, CODE1

```
