# Binding Values Must Be The Same

This will break via: https://doc.rust-lang.org/book/ch03-05-control-flow.html
becuase the values from the two arms of the `if` aren't the
same type. This will throw an error that we'll look at
on the next page.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let alfa = if 3 <= 4 {
    0
  } else {
    false
  };

  println!("alfa is {}", alfa);

}
```

### CODE RUNNER

```rust, editable, CODE1

```
