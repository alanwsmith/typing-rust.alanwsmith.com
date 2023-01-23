# Hello, World (Piece By Piece)

Here's the basics parts of the "Hello, World" example.
It's a high level overview to introduce
the concepts. We'll dig into the details more in
the following sections. It's perfectly fine if
you don't see how to line things up yet.

Here's the code again:

```rust,noplayground
fn main() {
  println!("Hello, World");
}
```

### The Parts

- The first thing in the code is `fn`. That's
  short for "function" which is a
  block of code that makes it easier
  to issolate different parts of the
  program to make them easier to write.

- `main()` is the name we're assigning to the
  function we're making. Other parts of the
  program can "call" the function by
  it's name to run the code inside it. Details
  on the empty `()` are coming soon.

- The `{` and `}` curly brackets are the starting
  and ending point for the code the function will
  run when it's called.

- The `println!("Hello, World");` line
  is a "statement". Statements are one of
  the main code building blocks that
  are how the programs do their thing.
  In this case, the statement prints
  out "Hello, World". We'll get into
  more details about statements soon.


### TODO

- Note the `!` and the `;` explicitly.

- Identify and link to chapters for things
  that are listed as coming up.
