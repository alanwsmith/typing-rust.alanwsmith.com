# println! Variables

Having our values in variables allows us
to use them multiple times easily. For example,
instead of just saying "They don't match", we can
use the variables again to print out the
actual numbers.

Because we need to print two numbers we'll
be using two sets of the `{}` curly bracket
placeholders in the format string.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let alfa = 7;
  let bravo = 8;

  if alfa == bravo {
    println!("{} matches {}", alfa, bravo);
  } else {
    println!("{} does not match {}", alfa, bravo);
  }

}
```

### CODE RUNNER

```rust, editable, CODE1

```
