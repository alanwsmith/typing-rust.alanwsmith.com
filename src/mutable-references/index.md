# Mutable References

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let mut alfa = String::from("apple");
  let bravo = &mut alfa;

  bravo.push_str("-pie");

  println!("bravo is {bravo}");
  println!("alfa is {alfa}");

}
```

### CODE RUNNER

```rust, editable, CODE1

```
