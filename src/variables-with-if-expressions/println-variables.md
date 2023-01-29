# println! Variables

The varialbes are also avavilable in the
`println!()` expressions inside the `if`
and `else` blocks of code. We'll use them
here and this time we'll add two `{}`
placeholders and add both variables after
the format string.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let alfa = 5;
  let bravo = 4;

  if alfa < bravo {
    println!("{} is less than {}", alfa, bravo);
  } else {
    println!("{} is not less than {}", alfa, bravo);
  }

}
```

### CODE RUNNER

```rust, editable, CODE1

```
