# Option Type


```rust
fn main() {
  let mut alfa = vec![
    String::from("apple"),
  ];

  let bravo = alfa.pop();
  let item = alfa.pop();

  match item {
    Some(value) => {
      println!("got {value}");
    }
    None => {
      println!("got nothing");
    }
  }
}
```



```rust
fn main() {
  let mut alfa = vec![
    String::from("apple"),
  ];
  check_value(alfa.pop());
  check_value(alfa.pop());
}

fn check_value(value: Option<String>) {
  match value {
    Some(value) => {
      println!("got {}", value);
    }
    None => {
      println!("got nothing");
    }
  }
}


```



---


Example using a funciton


```rust
enum Widget {
  Alfa(String),
  Bravo
}

fn main() {
  let thing = Widget::Alfa(
    String::from("apple")
  );

  check_thing(thing);
}


fn check_thing(value: Widget) {
  match value {
    Widget::Alfa(x) => {
      println!("alfa has {}", x);
    }
    Widget::Bravo => {
      println!("bravo has nothing");
    }
  }
}

```




