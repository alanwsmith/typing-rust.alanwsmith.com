# Program: Conditional Functions

We've covered a lot of gound: variables,
if/else, comparison operators, functions, and
the `i32` data type. Each of the examples we
used was scoped down as much as possible to
focuse on just the concept at hand. Now,
let's write a larger program with everything
we've learned that does a little more.

Here's what we'll end up with:

- A `check_numbers` function that takes two
  `i32` values.
- An `if/else` expression that determines if the
  first value is less than the seond
- `println!()` outputs that use the values
- A set of `i32` variables in our `main` function
- Calls to the `check_numbers` function with
  the sets of variables.

Here's the source which outputs:

```txt
4 is less than 9
7 is not less than 3
```

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = 4;
  let bravo = 9;
  check_numbers(alfa, bravo);

  let charlie = 7;
  let delta = 3;
  check_numbers(charlie, delta);
}

fn check_numbers(value1: i32, value2: i32) {
  if value1 < value2 {
    println!("{value1} is less than {value2}");
  } else {
    println!("{value1} is not less than {value2}");
  }
}

```

### CODE RUNNER

```rust, editable, CODE1

```
