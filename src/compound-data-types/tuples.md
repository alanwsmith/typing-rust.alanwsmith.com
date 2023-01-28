# Tuples

Tuples are containers that hold other values
of different types.

Creating a tuple variable looks different than
making one for a scalar data type.
Instead of using a specific keyword after the variable's
name (like `i32` in `let alfa: i32 = 58`), tuple definitions
use a pair of parenthesis with the types it's
going to contain between them.

To the right side of the equal sign the values
to assign are placed in a corresponding set of
parenthesis.

For example, defining a tuple with three
integers looks like this:

```rust, noplayground
let alfa: (i32, i32, i32) = (5, 7, 9);
```

Making one with a float and a boolean looks
like this:

```rust, noplayground
let bravo: (f32, bool) = (37.9, false);
```
