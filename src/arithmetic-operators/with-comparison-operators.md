# Arithmetic Operators With Comparison Operators

The value returned by an arithmetic expressoin
can be used to set a value like we've already
seen:

```rust, noplayground
let alfa = 4 + 9;
```

They can also be used directly as one half
of an `if` expression with a conditional
operator.

For example, instead of:

```rust, noplaygound
if 7 < 10 {
  ...
}
```

We could do:

```rust, noplaygound
if 3 + 4 < 10 {
  ...
}
```

We could even use arithmetic operations on both
sides of the `=` sign like this example that
outputs:

```txt
is the value more?
no
```

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  println!("is the value more?");
  if 3 + 4 > 5 + 5 {
    println!("yes");
  } else {
    println!("no");
  }
}
```

### CODE RUNNER

```rust, editable, CODE1

```
