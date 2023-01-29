# Hello, World - The Parts

Here's a look at the parts of our "Hello, World"
program:

```rust, noplayground, EXAMPLE1
fn main() {

  println!("Hello, World");

}
```

- `fn` is short for function which is what's being
  defined.

- `main` is the name we're assigning to the
  function. Every rust program must have a `main`
  function. It's the entry point that kicks things off.

- The `()` parenthesis at the end of `main()` is where
  we can define any arguments that can be passed to the
  function. The fact that they are empty here means `main()`
  doesn't accept any.

- The opening `{` curly bracket starts the block of code
  that will make up the function.

- `println!()` prints a line out to the terminal. (Watch
  out for the `!` character. I miss it all the time.)

- `"Hello, World"` is the content to be printed. The quotes
  themselves aren't printed. They're there to identify where
  the content starts and stops.

- The `;` at the end of the `println!()` line ends the expression.

- The closing `}` identifies the end of the function.

We'll dig into all those parts more throughout the site.
