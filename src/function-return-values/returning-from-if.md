# Returning From if

A function that always returns
`true` isn't particually useful. A
more realistic example is a function
that returns `true` based on some
condition. This example uses
a function to determine if a value
is above 5.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let alfa = 7;
  let bravo = is_over_five(alfa);

  println!("{} is over five? {}", alfa, bravo);

}

fn is_over_five(value: i32) -> bool {

  if value > 5 {
    true
  } else {
    false
  }

}
```

### CODE RUNNER

```rust, editable, CODE1

```
