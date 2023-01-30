# Conditional Functions

Now we've got enough to start making more
complicated programs.

We're also passing two arguments into
our `check_numbers()` function. The
format is the same `name`, `:`, type
with a comma separating each value.

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
    println!("{} is less than {}", value1, value2);
  } else {
    println!("{} is not less than {}", value1, value2);
  }

}

```

### CODE RUNNER

```rust, editable, CODE1

```
