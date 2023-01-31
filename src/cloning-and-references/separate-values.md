# Cloning For Separate Values

Cloning the value allows us to modify
`alfa` and `bravo` independently (assuming
we've made them mutable with the `mut`
keyword).

The out we'll get is:

```txt
alfa contains widget
bravo contains widget
alfa contains widget-alfa
bravo contains widget-bravo
```

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let mut alfa = String::from("widget");
  let mut bravo = alfa.clone();

  println!("alfa contains {alfa}");
  println!("bravo contains {bravo}");

  alfa.push_str("-alfa");
  bravo.push_str("-bravo");

  println!("alfa contains {alfa}");
  println!("bravo contains {bravo}");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
