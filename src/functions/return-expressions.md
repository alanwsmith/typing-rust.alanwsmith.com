# Return Expressions

The `widget` function in the last example
looked like this:

```rust,noplayground
fn widget() -> i32 {
  5 + 5
}
```

I bring that up to point out that there isn't
a `;` after the `5 + 5`. This is different
from all the other lines we've seen
in functions so far.

There are three reasons for this:

1. Rust functions return the last
   expression at the end of their code block
2. The `;` ends expressions.
3. Rust has a default return type that we'll
   discuss on the next page.

What all that means is if we did this:

```rust,noplayground
5 + 5;
```

instead of:

```rust,noplayground
5 + 5
```

we'd be end the expression that did
the addition. That expression is
what provides the `i32` value that the
function is setup to return based off
its definition. So, we'd end up with an
error.

Run the code again with the `;` in place
to see what the error looks like and we'll
talk about it on the next page.

#### SOURCE CODE

```rust,noplayground,EXAMPLE1
fn main() {
  println!("widget is {}", widget());
}

fn widget() -> i32 {
  5 + 5;
}
```

#### CODE RUNNER

```rust, editable, CODE1

```
