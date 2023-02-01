# Cloning And Referencing

Trying to access a value after we moved it to a new
variable resulted in an error message that contined
this line:

```rust,noplayground
help: consider cloning the value if the performance cost is acceptable
```

Cloning is done using the `.clone()` method. Doing so
changes this:

```rust, noplayground
let bravo = alfa;
```

into this:

```rust, noplayground
let bravo = alfa.clone();
```

When we clone, it makes a new copy of
the `String` that's bound to `alfa` and then
binds that new copy to `bravo`. Since the value
wasn't moved out of `alfa` we can still use it
like this sample which outputs:

```txt
alfa is widget
bravo is widget
alfa is widget
```

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = String::from("widget");
  println!("alfa contains {alfa}");

  let bravo = alfa.clone();
  println!("bravo contains {bravo}");

  println!("alfa contains {alfa}");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
