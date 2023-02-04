# Passing Mutable Structs To Functions

### SOURCE CODE

```rust, noplayground, EXAMPLE1
struct Widget {
  color: String
}

fn main() {
  let mut alfa = Widget {
    color: String::from("red")
  };
  update(&mut alfa);
  println!("Color {}", alfa.color)
}

fn update(thing: &mut Widget) {
  thing.color = String::from("green")
}
```

### CODE RUNNER

```rust, editable, CODE1

```
