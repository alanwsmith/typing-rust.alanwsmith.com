# The Error Message

Here's the error message

```rust, noplayground
   Compiling playground v0.0.1 (/playground)
error[E0384]: cannot assign twice to immutable variable `alfa`
 --> src/main.rs:4:3
  |
3 |   let alfa = 7;
  |       ----
  |       |
  |       first assignment to `alfa`
  |       help: consider making this binding mutable: `mut alfa`
4 |   alfa = 9;
  |   ^^^^^^^^ cannot assign twice to immutable variable

For more information about this error, try `rustc --explain E0384`.
error: could not compile `playground` due to previous error
```

For now, the two lines we need to look at are:

```rust,noplayground
error[E0384]: cannot assign twice to immutable variable `alfa`
```

and

```rust,noplayground
|       help: consider making this binding mutable: `mut alfa`
```
