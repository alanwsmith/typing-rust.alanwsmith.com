# Variables Are Immutable By Default

Variables are immutalbe by default. That is, once
they are bound to a value, they can't be changed.
That's one of the ways the rust compiler uses
optimize code to make it fast.

This example sets the varaible `alfa` to `7`
then tries to change it to `9`. (Since the variable
has already been created we don't use `let` or
the `i32` data type the second time.) This causes an
error that will show up when you run the code.
Scan it here and we'll look at it in more detail
on the next page.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let alfa: i32 = 7;

  alfa = 9;

}
```

#### CODE RUNNER

```rust, editable, CODE1

```
