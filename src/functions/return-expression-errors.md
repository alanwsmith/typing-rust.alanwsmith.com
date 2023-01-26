# Return Expression Errors

(TODO: Split this into multiple pages)

Here's the error message from the prior page
where we intentionally put a semi-colon at
the end of an expression that caused an error.

```rust,noplaygound
   Compiling playground v0.0.1 (/playground)
error[E0308]: mismatched types
 --> src/main.rs:6:16
  |
6 | fn widget() -> i32 {
  |    ------      ^^^ expected `i32`, found `()`
  |    |
  |    implicitly returns `()` as its body has no tail or `return` expression
7 |   3 + 6;
  |        - help: remove this semicolon to return this value

For more information about this error, try `rustc --explain E0308`.
error: could not compile `playground` due to previous error
```

The Rust error message are great but they can
be pretty overwhelming at first. Let's to through
it piece by piece to get a better idea of what
happened.

### \*\*\*\*\*

```rust, noplayground
Compiling playground v0.0.1 (/playground)
```

This is a note from the rust compiler letting us
know what it's working on. The site uses Rust Playground
to compile and run code. This is the name it uses
on its side.

### \*\*\*\*\*

```rust, noplayground
error[E0308]: mismatched types
 --> src/main.rs:6:16
```

TKTKTK

### \*\*\*\*\*

```rust, noplayground
6 | fn widget() -> i32 {
  |    ------      ^^^ expected `i32`, found `()`
```

TKTKTK

### \*\*\*\*\*

```rust, noplayground
6 | fn widget() -> i32 {
  |    ------      ^^^ expected `i32`, found `()`
  |    |
  |    implicitly returns `()` as its body has no tail or `return` expression
```

We've added two lines to the two in the prior description.

TKTKTK

### \*\*\*\*\*

```rust, noplayground
7 |   3 + 6;
  |        - help: remove this semicolon to return this value
```

TKTKTK

### \*\*\*\*\*

```rust, noplayground
For more information about this error, try `rustc --explain E0308`.
error: could not compile `playground` due to previous error
```

TKTKTK
