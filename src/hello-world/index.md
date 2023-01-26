# Hello World

This is the same code that was on the first page. It's
a complete Rust program.

```rust, noplayground, EXAMPLE1
fn main() {
  println!("Hello, World");
}
```

For a first, high level look, the code breaks down
like this:

- `fn` is short for function which is what we're
  defining here.

- `main` is the name we're assigning to the
  function. Every rust program must have a `main`
  function. It's the entry point that kicks things off.

- The `()` in `main()` holds arguments that can be passed
  to the function. It's empty here which means no
  arguments can be passed in.

- The `{` curly bracket starts the block of code that
  makes up the function.

- `println!()` prints a line out to the terminal. (Watch
  out for the `!` character when typing. I miss it all
  the time.)

- `"Hello, World"` is the content to be printed. The quotes
  themselves aren't printed. They're there to identify where
  the content starts and stops.

- The `;` at the end of the `println!()` line ends the statement.

- The `}` identifies the end of the function.

We'll dig into all those parts more throughout the site.
For now, let's add a variable.
