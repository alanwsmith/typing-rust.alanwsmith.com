# Reviewing Variables

We covered a lot in this chapter:

- How to define variables
- How to print one or more of them
- Immutalbe variables
- Mutalbe variables
- What an error message looks like

This program reviews all those things
(except it doesn't throw an error)

```rust,noplayground, EXAMPLE1
fn main() {

  let alfa: i32 = 3;

  let mut bravo: i32 = 5;

  println!("Alfa: {} - Bravo: {}", alfa, bravo);

  bravo = 9;

  println!("Alfa: {} - Bravo: {}", alfa, bravo);

}
```

```rust, editable, CODE1

```
