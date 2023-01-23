# Shadowing Variables

## Immutable Variables Can't Be Changed

Trying to update the value of an immutable
variable results in an error. This code sets
an initial immutalbe value with `let alfa = 3`
and then tries to update it with `alfa = 5` which
causes an error.

Click Run to see an example of what that looks like.

```rust
# #[allow(unused_variables)]
# #[allow(unused_assignments)]
fn main() {
  let alfa = 3;
  alfa = 5;
}
```

## Shadowing Variables Works

While you can't update an immutable variable,
you can define a new one with the same name.
This is called shadowing.

Enter and run this code for an example

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = 3;
  println!("The value is {alfa}");

  let alfa = 5;
  println!("The value is {alfa}");
}
```

#### CODE EDITOR

```rust, editable, CODE1

```

#### TODO

- Come up with examples of when you might want
  to shadow a variable (changing type might be
  one, but I don't know yet why you would do
  that instead of making a new variable)
