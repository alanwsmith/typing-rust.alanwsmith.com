# Immutalbe Error Message Line

Here's the source code again from the prior page:

```rust, noplayground
fn main() {
  let alfa = 7;
  alfa = 9;
}
```

Issolating the error section from the rest of messages
we get this:

```rust, noplayground
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
```

The first line give us an error id `error[E0384]` followed by
the description of what happened.

```txt
cannot assign twice to immutable variable `alfa`
```

Rust's error messages are generally great. This
one is no exception. We'll deconstruct the full
error later. For now, take a look at the `help:`
portion that says:

```txt
consider making this binding mutable: `mut alfa`
```

That's how we can make a variable who's value
can be changed.
