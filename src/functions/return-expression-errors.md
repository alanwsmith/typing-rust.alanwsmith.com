# Return Expression Errors

Here's the error message from the prior page
where we intentionally put a semi-colon at
the end of an expression that caused an error.

```rust,noplaygound
   Compiling playground v0.0.1 (/playground)
error[E0308]: mismatched types
 --> src/main.rs:5:16
  |
5 | fn widget() -> i32 {
  |    ------      ^^^ expected `i32`, found `()`
  |    |
  |    implicitly returns `()` as its body has no tail or `return` expression
6 |   5 + 5;
  |        - help: remove this semicolon to return this value

For more information about this error, try `rustc --explain E0308`.
error: could not compile `playground` due to previous error
```

Let's to through it line by line.

1. ***

```txt
Compiling playground v0.0.1 (/playground)
```
