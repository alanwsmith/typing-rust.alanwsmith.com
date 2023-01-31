# A Single Value

TODO: Show a single value being updated.

### SOURCE CODE

```rust, EXAMPLE1
fn main() {
  let mut alfa = String::from("widget");
  let bravo = &mut alfa;

  bravo.push_str("-thing");

  // println!("alfa is {alfa}");
  // println!("bravo is {bravo}");

  // alfa.push_str("-thing");

  println!("alfa is {alfa}");
  println!("bravo is {bravo}");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
