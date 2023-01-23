# Variables Are Immutable By Default

Variables are immutalbe by default. That is, once
they are bound to a value, they can't be changed.
That fact is one of the things that let's the
rust compiler optimize code to make it fast.

This code tries to update a default variable. Because
it's immutable, the compiler will throw an
error. Run the code to checkout the message.
Once you've scanned it, we'll cover it
in more detail on the next page.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = 7;
  alfa = 9;
}
```

#### CODE RUNNER

```rust, editable, CODE1

```
