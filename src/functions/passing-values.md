# Passing Values

Functions can recrive values from other
parts of the program when they are called.
(TODO: Define arguments, parameters)

Here we'll send a number from `main`
into `alfa` to print it out. (We'll
explain `value: i32` on the next page).

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  alfa(7);

}

fn alfa(value: i32) {

  println!("alfa got {}", value);

}
```

### CODE RUNNER

```rust, editable, CODE1

```
