# Ownership

TODO: Verify the langues used here.

(A quick heads: we're getting into sections
of the book that deal with the more conceptually
complicated parts of Rust. Going through them
multiple times before things click happenes
more often than not.)

NOTE: My handwriting is chicken scratch.
These drawings are drafts. I'll replace
them with more legible versions once I get
things finalized.

---

We've talked a lot about binding values to
variables. Let's take a deeper look at what
that means.

A fundamental feature of Rust is that
every value has an "owner". When we bind
(aka assign) a value to a variable like this:

```rust,noplayground
let alfa = String::from("apple");
```

`alfa` becomes the owner of that particual
`String` instance that contains the word "apple".
You can think of an "owner" like a wrapper around
the value.
