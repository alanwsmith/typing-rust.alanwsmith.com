# Hello, World - The Parts

Let's take a look at the individual parts that make up our
"Hello, World" program.

```rust, noplayground, EXAMPLE1
fn main() {
  println!("Hello, World");
}
```

- `fn` is short for function which is what we're
  defining.

- `main` is the name we're assigning to the
  function. In Rust, the `main` function is
  used to kick things off.

  Every rust program must have a `main`
  function. It's the entry point that kicks things off.

- The `()` at the end of `main()` is where
  we define arguments that can be passed to the
  function. They're empty here which means `main()`
  doesn't accept any.

- The opening `{` and `}` curly bracket set the starting
  and ending points for the function's code block.

- `println!("Hello, World");` is what prints out the
  text.

We'll dig into more details about each of those elements
throughout the site.
