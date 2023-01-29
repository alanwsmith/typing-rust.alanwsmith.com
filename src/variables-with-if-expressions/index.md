# Variables With If Expressions

Let's combine some variables with an if/else
expression. We can do this by using the varaibles
in place of the numbers for the `if` expression's
condition check like we did on the prior page.
Here's the if condition from the prior example:

```rust, noplayground
if 5 < 4 {
  println!("alfa");
} else {
  println!("bravo");
}
```

And here's our version with variables.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let alfa = 5;
  let bravo = 4;

  if alfa < bravo {
    println!("alfa is less than bravo");
  } else {
    println!("alfa is not less than bravo");
  }

}
```

### CODE RUNNER

```rust, editable, CODE1

```
