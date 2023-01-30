# if Expressions

`if` expressions are used to determine
if a section of code should be run or not.
They are created with:

1. The `if` keyword
2. A condition to check
3. A block of code to run if the condition is true.

The condition in the example below checks to see if the
number `3` is less than the number `4` using the `<` math
symbol like this:

```rust,noplayground
3 < 4
```

Since the `3` **is** less than `4` the condition is
true so we'll see the output `the condition is true`.

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  if 3 < 4 {
    println!("the condition is true");
  }
}
```

### CODE RUNNER

```rust, editable, CODE1

```
