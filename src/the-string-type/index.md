# The String Type

TODO: Figure out if you want to do
string literals before this or not. I'm
thinking not so that we only have to
think about a single string type for
the early part of the book. Push
the literals to later.

Example showin how to add more text
to a mutable String

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let mut alfa = String::from("Hello");
  println!("alfa is {}", alfa);

  alfa.push_str(", World");
  println!("alfa is {}", alfa);

}
```

### CODE RUNNER

```rust, editable, CODE1

```
