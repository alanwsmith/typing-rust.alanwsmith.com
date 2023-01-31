# Step 5

Using `bravo` gives us the `String` value
output of "apple" the same way `alfa` did
before the move.

![Ownership 7](/images/ownership-7.png)

If we combine and run all the code we've
use so far everything works.

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = String::from("apple");
  println!("alfa has {alfa}");

  let bravo = alfa;
  println!("bravo has {bravo}");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
