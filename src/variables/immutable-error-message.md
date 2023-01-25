# Immutalbe Error Message

This is the code from the prior page.

```rust, noplayground
fn main() {
  let alfa = 7;
  alfa = 9;
}
```

Running it results in an error like this:

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

There's a lot going on in there. We'll cover it all
as we move forward. We'll limit things
down a bit for the time being.

The first thing to point out is that there are three
sections included in the message. Scanning the far left
column they are identified by the two lines that start with
"warning:" and one further below that starts
with "error[E0384]:"

We're only concerned with the error[E0384] section
right now.
