# match











---

Example from the book (with some more
code so it actually does something)

```rust
enum Coin {
  Penny,
  Nickel,
  Dime,
  Quarter,
}

fn value_in_cents(coin: Coin) -> u8 {
  match coin {
    Coin::Penny => 1,
    Coin::Nickel => 5,
    Coin::Dime => 10,
    Coin::Quarter => 25,
  }
}

fn main() {

  let my_coin = Coin::Nickel;

  println!("I have {} cents", value_in_cents(my_coin));

}
```

---

Make a note that you can put `{}` for the code blocks,
but it's usually not done if it fits on one line.

---

This is a basic way to use match to do
something based off the type of enum
that got created.

```rust
enum Widget {
  Alfa,
  Bravo
}

fn display_variant(value: Widget) {
  match value {

    Widget::Alfa => {
      println!("kind is Widget::Alfa");
    },

    Widget::Bravo => {
      println!("kind is Widget::Bravo");
    }

  }
}


fn main() {

  let thing1 = Widget::Alfa;
  display_variant(thing1);

  let thing2 = Widget::Bravo;
  display_variant(thing2);

}
```

---

Here's anothe example where you pull values
out and bind them so you can use them. This
is one way to get data out of an enum. (I
think `if let` is another way. Not sure if there
are other ways.)

```rust
enum Widget {
  Alfa,
  Bravo(String),
  Charlie { value: i32 },
}

fn show_report(item: Widget) {
  match item {
    Widget::Alfa => {
      println!("It's Alfa");
    },
    Widget::Bravo(text) => {
      println!("It's Bravo with {}", text);
    },
    Widget::Charlie { value } => {
      println!("It's Charlie with {}", value);
    },
  }
}

fn main() {
  let item1 = Widget::Alfa;
  show_report(item1);

  let item2 = Widget::Bravo(String::from("hello"));
  show_report(item2);

  let item3 = Widget::Charlie { value: 7 };
  show_report(item3);

}
```
