# Functions As Conditions

We can use the return values as conditions:

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = 7;

  if check_number(alfa) {
    println!("got true");
  } else {
    println!("got false");
  }
}

fn check_number(value: i32) -> bool {
  if value == 7 {
    true
  } else {
    false
  }
}
```

### CODE RUNNER

```rust, editable, CODE1

```
