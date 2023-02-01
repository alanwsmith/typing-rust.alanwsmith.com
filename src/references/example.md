# Example

Here's an example using a reference that
outputs: 

```txt
alfa is apple
bravo is apple
```

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = String::from("apple");
  let bravo = &alfa;

  println!("alfa is {alfa}");
  println!("bravo is {bravo}");
}
```

### CODE RUNNER

```rust, editable, CODE1

```
