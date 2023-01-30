# Variables With If Expressions

Let's combine some variables with an if/else
expression. We can do this by using the varaibles
in place of the numbers for the `if` expression's
condition check like we did on the prior page.
Here's the if condition from the prior example:

```rust, noplayground
if 7 == 8 {
  println!("They match");
} else {
  println!("They don't match");
}
```

We'll bind the value `7` to `alfa` and
`8` to `bravo`. We'll get the
`They don't match` output from the
`else` section because the values aren't
the same.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let alfa = 7;
  let bravo = 8;

  if alfa == bravo {
    println!("They match");
  } else {
    println!("They don't match");
  }

}
```

### CODE RUNNER

```rust, editable, CODE1

```
