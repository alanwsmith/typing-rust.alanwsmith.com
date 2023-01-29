# Enums

NOTE: It's possibe that you don't want to
show code until you show the `if let` or the
match stuff for how to get something out.

---

Enums let you define something as one out of
a possible set of values.

Anything that's valid as a stuct is also
valid as an enum.

these are the base examples from the
book, which I don't really understand
becuase they don't really show how to
use them.

```rust
enum IpAddrKind {
  V6,
  V4
}

fn main() {
  let four = IpAddrKind::V4;
  println!("here");
}
```

That sets the type to `ipAddrKind` overall.
This lets us do:

```rust, noplayground
fn route(ip_kind, IpAddrKind) {}
```

The book goes on to show this

```rust
enum IpAddr {
  V4(String),
  V6(String)
}

fn main() {

  let home = IpAddr::V4(String::from("127.0.0.1"));
  let loopback = IpAddr::V4(String::from("::1"));

}
```

---

TODO: Add impl function being assocaited with
an enum. This is based off this:
https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html
Need to check and make sure this is a standard
way to do stuff (becuse there wasn't a full
example in the book.)

NOTE: This is not a good example.

```rust
enum Widget {
  Alfa,
  Bravo,
}

impl Widget {
  fn show_value(&self) {
    println!("Widget");
  }
}

fn main() {

  let thing1 = Widget::Alfa;
  let thing2 = Widget::Bravo;

  thing1.show_value();
  thing2.show_value();

}
```

---

This is an attempt to make an example that's
easier to understand what's going on.

```rust
#[derive(Debug)]
enum Widget {
  Alfa { value: i32 },
  Bravo { value: f32}
}

fn main() {
  let thing1 = Widget::Alfa {value: 7};
  let thing2 = Widget::Bravo {value: 3.4};

  println!("here {:?}", thing1.value);
}
```

---
