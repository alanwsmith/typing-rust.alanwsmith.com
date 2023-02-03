# Mutable Variables

Rust variables are immutalbe by default.
The `mut` keyword makes them mutable
so they can be changed after they are
created.

Here's an example of a standard immutable variable:

```rust,noplayground
let alfa = String::from("apple");
```

Updating that line like this to include the
`mut` keyword before the variable names
makes it mutable.

```rust,noplayground
let mut alfa = String::from("apple");
```
