# Program: Conditional Functions V2

Here's a minor update to our function to use
mutalbe variables by changing this:

```rust,noplayground
let alfa = 4;
let bravo = 9;
check_numbers(alfa, bravo);

let charlie = 7;
let delta = 3;
check_numbers(charlie, delta);
```

To this:

```rust,noplayground
let mut alfa = 4;
let mut bravo = 9;
check_numbers(alfa, bravo);

alfa = 7;
bravo = 3;
check_numbers(alfa, bravo);
```

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let mut alfa = 4;
  let mut bravo = 9;
  check_numbers(alfa, bravo);

  alfa = 7;
  bravo = 3;
  check_numbers(alfa, bravo);
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
