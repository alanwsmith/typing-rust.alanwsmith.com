# Assigning Twice Error

When we created a variable with:

```rust, noplayground
let alfa = 7;
```

and then tried to change it's value with this:

```rust, noplayground
alfa = 9;
```

We got this error:

```rust, noplayground
   Compiling playground v0.0.1 (/playground)
error[E0384]: cannot assign twice to immutable variable `alfa`
 --> src/main.rs:6:3
  |
3 |   let alfa = 7;
  |       ----
  |       |
  |       first assignment to `alfa`
  |       help: consider making this binding mutable: `mut alfa`
...
6 |   alfa = 9;
  |   ^^^^^^^^ cannot assign twice to immutable variable

For more information about this error, try `rustc --explain E0384`.
error: could not compile `playground` due to previous error
```

Rust's error messages are verbose, but great. They give us
nice, direct statements about what's wrong. Take this line from
above which tells us what's wrong.

```rust, noplayground
error[E0384]: cannot assign twice to immutable variable `alfa`
```

They often include ways to fix the whatever caused the error.
For example, we see this line as well:

```rust, noplayground
help: consider making this binding mutable: `mut alfa`
```

And that's exactly what we need to do.
