# println! Variables

Binding values to variables let us use them
repeatedly. For example, we can improve the
output of our program by including the
numbers that match or don't match.

We'll do this by using the variables in
`println!()` the same way we have before.
The only difference this time is that
we're putting two variables in the format
string instead of one.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let alfa = 7;
  let bravo = 8;

  if alfa == bravo {
    println!("{alfa} matches {bravo}");
  } else {
    println!("{alfa} does not match {bravo}");
  }

}
```

### CODE RUNNER

```rust, editable, CODE1

```
