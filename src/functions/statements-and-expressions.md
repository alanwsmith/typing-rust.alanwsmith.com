# Statements And Expressions

The `widget` function in the last example
looked like this:

```rust,noplayground
fn widget() -> i32 {
  5 + 5
}
```

I bring this up to point out that there is
no `;` after the `5 + 5`. This is different
than all the other lines we've seen
in functions so far. For example:

```rust,noplayground
println!("Hello, World");
```

The reason for this difference is because
Rust functions are made up of two types
of things: Statements and Expressions.

From The Rust Book:

- Statements are instructions that perform
  some action and do not return a value.
- Expressions evaluate to a resultant value.

Said another way, expressions give you something
back. Statements don't.
