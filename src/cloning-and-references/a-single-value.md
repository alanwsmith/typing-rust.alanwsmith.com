# A Single Value

TKTKTKT

### SOURCE CODE

```rust, EXAMPLE1
fn main() {
  let mut alfa = String::from("widget");
  println!("alfa is {alfa}");

  {
    let bravo = &mut alfa;
    println!("bravo is {bravo}");
    bravo.push_str("-thing");
    println!("bravo is {bravo}");
  }

  println!("alfa is {alfa}");

}
```

### CODE RUNNER

```rust, editable, CODE1

```
