# Functions

Every program we've run so far has consisted of
the single `main` function. It's definition
starts with `fn` followed by the name of the
function with some parenthesis (i.e. `main()`),
then the opening and closing `{}` curly braces
that wrap the code that gets executed when
the function is called.

We can add more functions to our programs as
well using the same approach. For example,
here's the definition of a function named
"alfa" that prints out "I am alfa":

```rust,noplayground
fn alfa() {
  println!("I am alfa");
}
```

The function is used by "calling it". The
syntax for that is the name of the function
followed by parenthesis:

```rust,noplayground
alfa();
```

Here's a full program where we
print `I am main` inside the main function
then call the `alfa` function which
then prints `I am alfa`

#### SOURCE CODE

```rust,noplayground,EXAMPLE1
fn main() {
  println!("I am main");
  alfa()
}

fn alfa() {
  println!("I am alfa");
}
```

#### CODE RUNNER

```rust, editable, CODE1

```
