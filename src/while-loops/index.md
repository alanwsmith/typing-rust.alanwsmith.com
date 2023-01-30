# While Loops

Rust provides `while` loops in addition
to `for` loops. Mutable variables work
well with them by acting as counters.

In this case we'll set a mutable
variable named `counter` for a while
loop that checks to see if it's less
than or equal to `5`.

Everytime through `1`
add `1` to the counter with `+= 1`
which takes the current value and
adds one to it.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let mut counter = 1;

  while counter <= 5 {
    println!("counter is {}", counter);
    counter = counter + 1;
  }

}
```

### CODE RUNNER

```rust, editable, CODE1

```
