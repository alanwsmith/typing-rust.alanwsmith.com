# println! Variables

Putting values in variables allows us
to use them repeatedly. For example, we
can improve the output of our program by
including the numbers that match or don't
match.

We'll do this by using the variables in
`println!()` like we have before. Since we
want two varaibles this time we'll add
another `{}` placeholder in the format
string and

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
