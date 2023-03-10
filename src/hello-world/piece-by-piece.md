# Hello, World (Piece By Piece)

#### EXAMPLE

```rust,noplayground
fn main() {
  println!("Hello, World");
}
```

### THE PARTS

- The first thing in the code is `fn` which
  is short for function which is what we're defining here.

- `main` is the name we're assigning to the
  function. Every rust program must have a `main()`
  function. It's the entry point that kicks things off.

- The `()` in `main()` is empty in this example. We'll
  see examples where it's populated when we cover functions.

- The `{` curly bracket starts the block of code for the
  function.

- `println!()` is for printing a line with the content inside
  the quotes inside the `()` parentheses. (Watch out for the `!`
  character. I miss it all the time when typing. We'll get
  more into what it means later.)

- `"Hello, World"` is the content to be printed. The quotes
  themselves aren't printed. They're there to identify where
  the content starts and stops.

- The `;` at the end of the `println!()` line end the statement.

- The `}` identifies the end of the function.

Next up, variables.
