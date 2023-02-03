# Mutable Variables

Rust variables are immutalbe by default. That means
you can't change them after they've been set. The
`mut` keyword makes them mutable allowing them
to be changed after they are created.

Here's an example of a standard immutable variable:

```rust,noplayground
let alfa = String::from("apple");
```

And here's the same binding but with the `mut`
keyword that make the variable mutable.

```rust,noplayground
let mut alfa = String::from("apple");
    ↑↑↑
```
