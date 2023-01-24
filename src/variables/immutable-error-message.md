# Immutalbe Error Message

This is the code from the prior page.

We're doing to use it to take a first look
at error messages.

```rust, noplayground
fn main() {
  let alfa = 7;
  alfa = 9;
}
```

Running it results in an error like the one below.
There's a lot to get into. For right now, the thing
to notice is that scanning down the left hand
column reveals the word "warning" twice and the
word "error" once.

```rust, noplayground
   Compiling playground v0.0.1 (/playground)
warning: variable `alfa` is assigned to, but never used
 --> src/main.rs:2:7
  |
2 |   let alfa = 7;
  |       ^^^^
  |
  = note: consider using `_alfa` instead
  = note: `#[warn(unused_variables)]` on by default

warning: value assigned to `alfa` is never read
 --> src/main.rs:3:3
  |
3 |   alfa = 9;
  |   ^^^^
  |
  = help: maybe it is overwritten before being read?
  = note: `#[warn(unused_assignments)]` on by default

error[E0384]: cannot assign twice to immutable variable `alfa`
 --> src/main.rs:3:3
  |
2 |   let alfa = 7;
  |       ----
  |       |
  |       first assignment to `alfa`
  |       help: consider making this binding mutable: `mut alfa`
3 |   alfa = 9;
  |   ^^^^^^^^ cannot assign twice to immutable variable

For more information about this error, try `rustc --explain E0384`.
warning: `playground` (bin "playground") generated 2 warnings
error: could not compile `playground` due to previous error; 2 warnings emitted
```

Let's make the error easier to see by removing
the warnings.

#### TODO

- Figure out if this is the right place to hit errors
  to start with.
