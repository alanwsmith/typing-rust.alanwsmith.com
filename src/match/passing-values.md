# Passing Values

The options in enums can hold data too. 

This is how to get at that. 

```rust
enum Widget {
  Alfa(String),
  Bravo
}

fn main() {
  let token = String::from("apple");
  let thing = Widget::Alfa(token);

  match thing {
    Widget::Alfa(value) => {
      println!("alfa with {value}");
    }
    Widget::Bravo => {
      println!("bravo by itself");
    }
  }
}
```
