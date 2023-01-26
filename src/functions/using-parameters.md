# Using Function Parameters

Our widget function defined a parameter
called `alfa` of type `i32`. In order
to use it, we have to pass it in when
we call the function. This is done
by putting the value we want to use
inside the parenthesis when we call
the function. For example:

```rust,noplayground
widget(7);
```

Once we do that we can use the value
vai the `alfa` variable we set inside
the function definition.

For example:

```rust,noplayground,EXAMPLE1
fn main() {
  println!("This is main");
  widget(7);
}


fn widget(alfa: i32) {
  println!("This is widget with {}", alfa);
}
```

```rust, editable, CODE1

```
