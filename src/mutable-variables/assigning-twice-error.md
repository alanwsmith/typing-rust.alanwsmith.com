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
our error.

```rust, noplayground
error[E0384]: cannot assign twice to immutable variable `alfa`
```

We made a first assignment to `alfa` in this default way
which make it immutable:

```rust, noplayground
let alfa = 7;
```

Later, we tried to update the value in the variable by
assining `9` to it like this.

```rust, noplayground
alfa = 9;
```

Rust won't let us do that since `alfa` is immutalbe so we get
that error message which tells us what's happening.

Something that's great about Rust is that error messages often
contian recommendations on how to fix what went wrong. Take
this line for example:

```rust, noplayground
help: consider making this binding mutable: `mut alfa`
```

It suggestions not only that we make `alfa` mutable, but it
also shows up how.
