# Ownership

NOTE: This is my understanding of how things work
but I need to have it vetted by someon who knows
more about Rust for accuracy.

We've talked a lot about binding values to
variables. Let's take a deeper look at what
that means.

A fundamental feature of Rust is that
every value has an "owner". When we bind
(aka assign) a value to a variable like this:

```rust,noplayground
let alfa = String::from("apple");
```

that variable becomes the owner of the value.

In the case that means `alfa` now owns the
`String` of "apple"

You can think of an "owner" like a wrapper around
the value.
