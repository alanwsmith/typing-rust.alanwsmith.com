# Mutable Variables

Rust variables are immutalbe by default.
The `mut` keyword makes them mutable
so you can change them after they are
set.

For example, this makes an immutable variable:

```rust,noplayground
let alfa = String::from("apple");
```

And this version with `mut` makes a
mutable one we can change the value of:

```rust,noplayground
let mut alfa = String::from("apple");
```
