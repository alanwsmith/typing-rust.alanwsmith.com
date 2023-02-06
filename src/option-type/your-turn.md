# Your Turn

```rust
struct Widget {
  thing: Option<String>
}

fn main() {
  let alfa = Widget { 
    thing: Some(
      String::from("apple")
    )
  };

  match alfa.thing {
    Some(value) => {
      println!("thing is {}", value);

    }
    None => {
      println!("no value");
    }
  }

}
```



```rust
struct Widget {
  thing: Option<String>
}

fn main() {
  let bravo = Widget { 
    thing: None
  };

  match bravo.thing {
    Some(value) => {
      println!("thing is {}", value);

    }
    None => {
      println!("no value");
    }
  }

}
```

