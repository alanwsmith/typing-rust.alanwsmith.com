# Binding Values From if

`if` statements are expressions. That means they return
a value. So, using one on the right side of an `=` sign
is completely valid.

For example:

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = true;
  let bravo = if alfa { 1 } else { 0 };

  println!("bravo is {bravo}")
}
```

### CODE RUNNER

```rust, editable, CODE1

```
