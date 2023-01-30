# Passing Values

Functions can receive values from other
parts of the program.

Here we'll send a number from the `main`
function into `alfa` and print it out there.
(We'll explain `value: i32` bit on the next
page).

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  println!("Call alfa next");
  alfa(7);
}

fn alfa(value: i32) {
  println!("alfa got {}", value);
}
```

### CODE RUNNER

```rust, editable, CODE1

```
