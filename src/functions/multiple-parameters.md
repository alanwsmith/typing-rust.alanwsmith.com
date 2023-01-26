# Multiple Function Parameters

Defining functions that take more than
one parameter is done by adding more
in the paranthesis that are separated
by commas like this:

```rust,noplayground
widget(alfa: i32, bravo: f32)
```

Here's a full program:

#### SOURCE CODE

```rust,noplayground,EXAMPLE1
fn main() {
  println!("This is main");
  widget(7, 3.4);
}

fn widget(alfa: i32, bravo: f32) {
  println!("This is widget");
  println!("Alfa {} - Bravo {}", alfa, bravo);
}
```

#### CODE RUNNER

```rust,editable,CODE1

```
