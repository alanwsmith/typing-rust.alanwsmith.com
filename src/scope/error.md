# Scope Error

Intentional error. Look at the
message on the next page.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let alfa = 1;

  {
    let bravo = 2;
    println!("bravo {}", bravo);
  }

  println!("alfa {} - bravo {}", alfa, bravo);

}
```

### CODE RUNNER

```rust, editable, CODE1

```
