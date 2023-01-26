# Hello World

Here's our "Hello, World" code again. It's a
complete Rust program.

```rust, noplayground, EXAMPLE1
fn main() {

  println!("Hello, World");

}
```

The parts of the code break down like this:

- `fn` is short for function which is what's being
  defined.

- `main` is the name we're assigning to the
  function. Every rust program must have a `main`
  function. It's the entry point that kicks things off.

- The `()` in `main()` holds arguments that can be passed
  to the function. It's empty here which means no
  arguments can be passed to `main()`.

- The opening `{` curly bracket starts the block of code
  that will make up the function.

- `println!()` prints a line out to the terminal. (Watch
  out for the `!` character. I miss it all the time.)

- `"Hello, World"` is the content to be printed. The quotes
  themselves aren't printed. They're there to identify where
  the content starts and stops.

- The `;` at the end of the `println!()` line ends the statement.

- The closing `}` identifies the end of the function.

We'll dig into all those parts more throughout the site.
For now, let's add a variable.
