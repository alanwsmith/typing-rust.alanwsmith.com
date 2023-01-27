# Scope

Scope example that works, this we'll
see it break on the next page.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let alfa = 1;

  {
    let bravo = 2;
    println!("bravo {}", bravo);
  }

  println!("alfa {}", alfa);

}
```

### CODE RUNNER

```rust, editable, CODE1

```
