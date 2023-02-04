# Enums

Purpose of an email is to be one of a specific
type and nothing else. (TODO: Show `structs`
as enum types.)

TODO: Show how you have to cover all the
options. And how you can do that with
the catch all.

Show how the turn values from match
must be the same if you are assinging
it to a value.

Show a version where the stuff inside
the emum value is a struct of some
other type. 

Your example:

```rust
enum Color {
  Red,
  Green,
  Blue
}

fn main() {
  let alfa = Color::Blue;

  match alfa {
    Color::Red => {
      println!("Red like fire");
    }
    Color::Green => {
      println!("Green like grass");
    }
    Color::Blue => {
      println!("Blue like the sky");
    }
  }
}
```

---

```rust
enum Color {
  Red(String),
  Green(String),
  Blue(String)
}

fn main() {
  let alfa = Color::Blue(String::from("navy"));

  match alfa {
    Color::Red(name) => {
      println!("{name} is red like fire");
    }
    Color::Green(name) => {
      println!("{name} is green like grass");
    }
    Color::Blue(name) => {
      println!("{name} is blue like the sky");
    }
  }
}
```

```rust
enum Color {
  Red(String),
  Green(String),
  Blue(String)
}

fn main() {
  let alfa = Color::Blue(String::from("navy"));

  let bravo = match alfa {
    Color::Red(name) => name,
    Color::Green(name) => name,
    Color::Blue(name) => format!("thing {name}")
  };
  println!("bravo is {bravo}");
}
```

---

```rust
enum Color {
  Red(String),
  Green(String),
}

fn main() {
  let alfa = Color::Red(String::from("apple"));

  match alfa {
    Color::Red(name) => runRed(&name),
    Color::Green(name) => runGreen(&name),
  };
}

fn runRed(value: &String) {
  println!("got {value}")
}

fn runGreen(value: &String) {
  println!("got {value}")
}
```

```rust
enum Color {
  Red(String),
  Green(String),
}

fn main() {
  let alfa = Color::Red(String::from("apple"));

  let bravo = match alfa {
    Color::Red(name) => runRed(&name),
    Color::Green(name) => runGreen(&name),
  };

  println!("bravo is {bravo}")
}

fn runRed(value: &String) -> String {
  format!("a {}", value)
}

fn runGreen(value: &String) -> String {
  format!("a {}", value)
}
```

---

### Original Notes

---

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
