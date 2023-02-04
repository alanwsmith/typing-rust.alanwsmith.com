# Passing Structs To Functions

### SOURCE CODE

```rust, noplayground, EXAMPLE1
struct Widget {
  color: String
}

fn main() {
  let alfa = Widget {
    color: String::from("red")
  };
  report_on(&alfa);
}

fn report_on(thing: &Widget) {
  println!("Color {}", thing.color);
}
```

### CODE RUNNER

```rust, editable, CODE1

```
