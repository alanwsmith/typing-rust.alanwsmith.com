# Moving Strings Error

Moving a value means it's no longer in the place
it was before. (That is, it's really a `move` and
not a `copy`)

So, when the value of `alfa` gets moved into
`bravo` it's no longer available in `alfa`. Trying
to use it throws an error like this example:

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = String::from("widget");
  println!("alfa contains {alfa}");

  let bravo = alfa;
  println!("bravo contains {bravo}");

  println!("alfa contains {alfa}");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
