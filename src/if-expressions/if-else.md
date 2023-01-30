# If/Else

We can provide an alternate block of code to run for
situations where the condition in the `if` expression
is not `true`. This is done with an `else` expression.

The below example checks to see if `8` is less than `7` with:

```rust,noplayground
8 < 7
```

That's not a true statement so `if` sees the condition
as `false`. Since `if` only runs its code block if
the condition is `true` it gets passed over. The
code in the `else` block is run instead and we see
the output:

```txt
the condition is false
```

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  if 8 < 7 {
    println!("the condition is true");
  } else {
    println!("the condition is false");
  }

}
```

### CODE RUNNER

```rust, editable, CODE1

```
