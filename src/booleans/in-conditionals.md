# In Conditionals

`if` statements check a condition to see
if it's true or false. We've been using
expressions like `3 < 4` for as those
conditions. We can also use `bool` type
variables.

For example, this binds the `bool` value
`false` to the `alfa` variable then uses
it as the condition in the `if` statement.

The output is:

```txt
alfa is false
```

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = false;

  if alfa {
    println!("alfa is true");
  } else {
    println!("alfa is false");
  }
}
```

### CODE RUNNER

```rust, editable, CODE1

```
