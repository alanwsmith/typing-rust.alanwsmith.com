# With Variables

We can also create a reference in a new
variable the send it to the function.
Since we'll define the new varaible
as a refernce like this:

```rust,noplayground
let bravo = &alfa
```

We don't need to send it to use `&` to
make it a reference again when we send
it to the `widget()` function. That is,
instead of this:

```rust,noplayground
widget(&bravo);
```

We do this:

```rust,noplayground
widget(bravo);
```

Here'e the code:

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = String::from("apple");
  let bravo = &alfa;

  widget(bravo);

  println!("alfa is {alfa}");
  println!("bravo is {bravo}");
}

fn widget(thing: &String) {
  println!("widget got {thing}");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
