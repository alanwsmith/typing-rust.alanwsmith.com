# Strings

We've seen two data types so far: `i32` and `bool`.
The first represents a number and the second is
a value that's either `true` or `false`. Now let's
start playing with text. To do that we'll use the
`String` data type.

We only need to put the value we want to use on
the right side of the `=` sign to create `i32`
and `bool` type values. The `String` type is
a little more complex. It uses this pattern:

```rust,noplayground
String::from("brown");
```

Creating a `String` and using it looks like
this:

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let color = String::from("brown");
  println!("The quick {color} fox");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
