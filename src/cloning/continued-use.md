# Continued Use

By using reference we can continue to use
the value in `alfa`.

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = String::from("widget");
  let bravo = &alfa;

  println!("alfa is {alfa}");
  println!("bravo is {bravo}");

}
```

### CODE RUNNER

```rust, editable, CODE1

```
