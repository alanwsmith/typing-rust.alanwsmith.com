# Binding Return Values

The values return from functions can
be bound to variables. For example,
if we create a variable named `alfa`
of type `i32` we can set it to
the return value of a `widget`
function that has the same time.

Here's a program which outputs:

```txt
alfa is 9
```

#### SOURCE CODE

```rust,noplayground,EXAMPLE1
fn main() {
  let alfa = widget();
  println!("alfa is {}", alfa);
}

fn widget() -> i32 {
  return 9;
}
```

#### CODE RUNNER

```rust, editable, CODE1

```
