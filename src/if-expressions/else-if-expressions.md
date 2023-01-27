# else if Expressions

TODO: Make an earlier example showing using
a variable for the condition so you don't
have to explain it here.

---

Rust also provides an `else if` expression. It goes
in between `if` and `else` expressions and gets
a condition to check like the initial `if` statement
does.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let value = 5;

  if value < 3 {
    println!("alfa");
  } else if value < 7 {
    println!("bravo");
  } else {
    println!("charlie");
  }

}
```

#### CODE RUNNER

```rust, editable, CODE1

```
