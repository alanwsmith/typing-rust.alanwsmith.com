# Functions

Every program we've run so far has consisted of
a single function called `main`. It's required
in Rust programs, but it doesn't have to hold
all the code. We can make other functions
to make the code easier to deal with.

Creating another basic function follows the same
pattern we used for main:

1. `fn` starts the definition
2. The name we want to use (which will be `alfa` in our example below)
3. A set of `()` parenthesis to indicate no arguments will be passed
4. The code block of the function surrounded by `{}` curly brackets.

For example:

```rust,noplayground
fn alfa() {
  println!("This is alfa");
}
```

The way to use our `alfa` function is to "call" it.
That's done by using it's name followed by an
empty set of `()` parenthesis and the `;` to end
the expression:

```rust,noplayground
alfa();
```

Here's a full exaple that defines our `alfa()`
function and then a `main()` function that calls
it when the program is run.

The output will be:

```txt
Call alfa next
This is alfa
```

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  println!("call alfa next");
  alfa();
}

fn alfa() {
  println!("this is alfa");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
