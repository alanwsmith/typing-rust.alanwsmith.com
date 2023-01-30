# Comparison Operators With Variables

We can also use variables for the values
to compare.

```txt
is the value less?
no
```

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = 7;
  let bravo = 3;
  let charlie = 9;

  println!("is {alfa} + {bravo} less than {charlie}?");

  if alfa + bravo < charlie {
    println!("yes");
  } else {
    println!("no");
  }
}
```

### CODE RUNNER

```rust, editable, CODE1

```
