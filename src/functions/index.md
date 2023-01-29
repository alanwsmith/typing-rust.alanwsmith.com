# Functions

Every program we've run so far has consisted of
a single function called `main`.

We can add other functions as well. Here
we'll create a new function named `alfa`
that prints out `This is alfa`. We use it
(aka call it) from inside `main()` with it's
name followed by `()` parenthesis.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  println!("This is main");
  alfa();
}

fn alfa() {
  println!("This is alfa");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
