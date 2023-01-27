# Binding Variables

NOTE: Since we're using the `if` with `let`
it must have a `;` after the last part
of the expression.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let alfa = true;

  let bravo = if alfa {
    0
  } else {
    1
  };

  println!("bravo is {}", bravo);
}
```

### CODE RUNNER

```rust, editable, CODE1

```
