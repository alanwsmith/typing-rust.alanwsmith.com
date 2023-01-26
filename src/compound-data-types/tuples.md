# Tuples

The Tuple type is a container that holds
other values. Those values can be any of
the other types we've covered so far (e.g. `i32`,
`char`, etc...). Tuples can also contain other
types we'll learn about.

Creating a tuple looks a little different than
creating a variable for one of the scalar data types.
Instead of using a specific keyword after the varaible's
name (like `i32` in `let alfa: i32 = 58`), tuple definitions
use a pair of parenthesis with the types it's
going to contain between them.

For example, defining a tuple with three
integers looks like this:

```rust, noplayground
let bravo: (i32, i32, i32) = (5, 7, 9);
```

Creating one with a float and a boolean looks
like this:

```rust, noplayground
let charlie: (f32, bool) = (37.9, false);
```
