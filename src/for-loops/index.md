# For Loops

Rust has `for` loops which allow us to run the same
block of code multiple times.

The formula for a `for` loop that runs through a range
of numbers is:

1. The `for` keyword
2. A variable name to hold the value of the number on each loop
3. The `in` keyword
4. The range of numbers
5. The code block to run each time though the loop

The `range` has the format of:

1. The starting number
2. Two dots followed by an equal sign (i.e. `..=`)
3. The ending number

For example:

```rust, noplayground
1..=5
```

And here's a full example that outputs:

```txt
alfa is 1
alfa is 2
alfa is 3
alfa is 4
alfa is 5
```

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  for alfa in 1..=5 {
    println!("alfa is {alfa}");
  }
}
```

### CODE RUNNER

```rust, editable, CODE1

```
