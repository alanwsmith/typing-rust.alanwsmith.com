# Division

The `/=` operator for division works a little
differently than everyday math. Dividing `i32`
numbers that go into each other evently works
as expected. For example, `6` divided by `2`
will result in `3`.

However, dividing numbers that don't go into
each other evenly results in just the full
number of times it can (TODO: Look up the
math terms for that.)

Using `2` and `5` doesn't give us `2.5`, it
gives us just the part on the left side of
the decimal (i.e. `2`)

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let mut alfa = 5;
  alfa /= 2;

  println!("alfa is {}", alfa);

}
```

### CODE RUNNER

```rust, editable, CODE1

```
