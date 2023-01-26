# Immutalbe Error Message Line

Here's the source code again from the prior page:

```rust, noplayground
fn main() {

  let alfa: i32 = 7;

  alfa = 9;

}
```

Issolating the error section from the rest of messages
we get this:

```rust, noplayground
error[E0384]: cannot assign twice to immutable variable `alfa`
 --> src/main.rs:5:3
  |
3 |   let alfa: i32 = 7;
  |       ----
  |       |
  |       first assignment to `alfa`
  |       help: consider making this binding mutable: `mut alfa`
4 |
5 |   alfa = 9;
  |   ^^^^^^^^ cannot assign twice to immutable variable
```

Rust's error messages are generally great. This
one is no exception. We'll deconstruct the full
error later. For now, take a look at the `help:`
portion that says:

```txt
consider making this binding mutable: `mut alfa`
```

That's how we can make a variable whose value
can be changed.
