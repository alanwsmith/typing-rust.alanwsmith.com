# Accessing Tuple Data

Here's an example of creating a tuple
that holds three values: an `i32`,
a `f32`, and a `bool` and then prints
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
