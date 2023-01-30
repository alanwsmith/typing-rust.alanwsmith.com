# Mutable Variables

If we want to set a variable to a new
value we use the `mut` keyword. So,
instead of

```rust, noplayground
let alfa = 7;
```

we use:

```rust, noplayground
let mut alfa = 7;
```

When we put that in place, our example
works.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let mut alfa = 7;
  println!("alfa is {}", alfa);

  alfa = 9;
  println!("alfa is {}", alfa);

}
```

### CODE RUNNER

```rust, editable, CODE1

```
