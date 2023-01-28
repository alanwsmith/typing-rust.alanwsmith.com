# Mutable Function References

It is possible to change values in
a function if you make the variable
mutable and pass a mutable reference

#### SOURCE CODE

```rust, EXAMPLE1
fn main() {

  let mut alfa = String::from("widget");

  println!("alfa {}", alfa);

  update_value(&mut alfa);

  println!("alfa {}", alfa);

}

fn update_value(value: &mut String) {
  value.push_str(" updated");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
