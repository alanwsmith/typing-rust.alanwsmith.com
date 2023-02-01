# Mismatched Type Error

TKTKTKT - Fill in the details on this error.

Here's the error from the prior page:

```rust, noplayground, EXAMPLE1
   Compiling playground v0.0.1 (/playground)
error[E0308]: `if` and `else` have incompatible types
 --> src/main.rs:3:36
  |
3 |   let bravo = if true { 1 } else { false };
  |                         -          ^^^^^ expected integer, found `bool`
  |                         |
  |                         expected because of this

For more information about this error, try `rustc --explain E0308`.
error: could not compile `playground` due to previous error
```
