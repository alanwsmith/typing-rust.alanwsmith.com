# Arithmetic Operators

Rust lets you do math through `arithmetic operators`. They are:

| Operator | Description    |
| -------- | -------------- |
| +        | Addition       |
| -        | Subtraction    |
| \*       | Multiplication |
| /        | Division       |
| %        | Remainder      |

Addition, subtraction, and multiplication all work the
way you'd expect on `i32` numbers. For example, this
will give us values of `9`, `-1`, and `20` for the
three variables.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = 4 + 5;
  let bravo = 4 - 5;
  let charlie = 4 * 5;

  println!("alfa is {}", alfa);
  println!("bravo is {}", bravo);
  println!("charlie is {}", charlie);
}
```

### CODE RUNNER

```rust, editable, CODE1

```
