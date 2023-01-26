# Functions Review

This chapter covered:

- Functions with no parameters
- Functions with parameters
- Using parameters
- Functions with return values
- Binding return values

Here's a review the combines everything. It
outputs

```txt
sum is 12
```

#### SOURCE CODE

```rust,noplayground,EXAMPLE1
fn main() {
  let sum = do_addition(5, 7);
  println!("sum is {}", sum);
}

fn do_addition(alfa: i32, bravo: i32) -> i32 {
  let response = alfa + bravo;
  response
}
```

#### CODE RUNNER

```rust, editable, CODE1

```
