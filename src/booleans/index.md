# Booleans

We've used a bunch of `i32` type values. It's
time to introduce our next data type: `bool`

The `bool` data type stands for boolean.
A value that can be either `true` or
`false` and nothing else.

Boolean values are bound to variables like
this:

```rust,noplayground
let alfa = true;
let bravo = false;
```

The `if` statements we've been using
check to see if the condition is `true`
or not. We can use `bool` values

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let mut alfa = true;
  let mut counter = 1;

  while alfa == true {
    println!("counter is {}", counter);
    if counter == 5 {
      alfa = false;
    }
    counter = counter + 1;
  }
}
```

### CODE RUNNER

```rust, editable, CODE1

```
