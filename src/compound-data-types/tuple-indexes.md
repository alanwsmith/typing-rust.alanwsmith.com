# Tuple Indexes

Getting values out of a tuple is done using
the varaible's name followed by a dot and
the "index" number for the position we're
after.

For example:

```rust, noplayground
alfa.2
```

The index position represents a counter
that starts at the beginning of the tuple
and goes up one for each position. But, the
first number is zero instead of one. So,
the first position is `0`, the second position
is `1`, etc...

Here's an example creating a tuple that holds an
`i32`, a `f32`, and a `bool` and then prints
them out.

#### SOURCE CODE

```rust,noplayground,EXAMPLE1
fn main() {

  let alfa: (i32, f32, bool) = (99, 234.5, false);

  println!("1st {}", alfa.0);
  println!("2nd {}", alfa.1);
  println!("3rd {}", alfa.2);

}
```

#### CODE RUNNER

```rust,editable,CODE1

```
