# While Loops

The `i32` type can be used for counting too.
Here's an exmaple using one in a `while`
loop.

A `while` loop works off the following formula:

1. The `while` keyword
2. A condition to check
3. Code to run if the condition is `true`

Here's an example where we set `alfa` to `1`
and the run a `while` loop where we print
out the value and add one each time. The
condition we're using is `alfa < 5` to check
if the value is less than five or not. If it
is, the block of code runs.

(We'll talk about the `mut` keyword on the
next page)

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let mut alfa = 1;

  println!("Starting loop");

  while alfa < 5 {
    println!("alfa is {}", alfa);
    alfa += 1;
  }

  println!("Finished loop");

}
```

### CODE RUNNER

```rust, editable, CODE1

```
