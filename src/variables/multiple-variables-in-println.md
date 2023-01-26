# Multiple Variables In println!

Format strings can also use different
variables at the same time. Here's an example
using three of them.

```rust,noplayground,EXAMPLE1
fn main() {

  let alfa: i32 = 3;

  let bravo: i32 = 5;

  let charlie: i32 = 7;

  println!("{} - {} - {}", alfa, bravo, charlie);

}
```

#### Code Runner

```rust,editable,CODE1

```
