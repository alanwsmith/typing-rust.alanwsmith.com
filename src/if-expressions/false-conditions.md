# false Conditions In if Expressions

The condition that was checked in the prior
example (i.e. `3 < 4`) was true. Because
of that, Rust ran the code inside the
code block and printed our "3 is less than 4"
output. The block of code won't run if we end
up with an `if` condition that's false instead of
true.

In this example we'll do another check. This time
will do one that's false. We'll also add a couple
`println!()` expressions to help see what's
going on. Specifically, we'll see the output
from the two `println!()` expressions that are
outside the `if`. But, we won't see the one
inside the `if`. It'll looks like this:

```txt
alfa
charlie
```

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  println!("alfa");

  if 3 > 4 {
    println!("bravo");
  }

  println!("charlie");

}
```

#### CODE RUNNER

```rust, editable, CODE1

```
