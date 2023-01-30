# Functions

Every program we've run so far has consisted of
a single function called `main`.

We can add other functions as well. Here's
an example of a function named `alfa` that
prints out `This is alfa` when we use it.

```rust,noplayground
fn alfa() {
  println!("This is alfa");
}
```

The way we use a function is to "call" it.
That's done using the function's name along
with any data we need to send inside of
parenthesis. We don't need to send anything
to our new function so the call looks like
this:

```rust,noplayground
alfa();
```

When we put that in our `main()` function, we
get this:

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  println!("Call alfa next");
  alfa();
}

fn alfa() {
  println!("This is alfa");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
