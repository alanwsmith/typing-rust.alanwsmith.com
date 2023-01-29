# Struct Methods

Struct methods are like functions, but that are attached
to structs. They are put inside an `impl` keyword code
block that has the same name as the struct they are
for. Here we are using an empty struct and adding
a method that prints out "the quick fox". (Notice
that the argument `&self` is being passed to the
`fn`. That is always the case for methods. (TODO:
talk more about that)

Note that methods are called with `()`.

```rust
struct Widget;

impl Widget {
  fn do_output(&self) {
    println!("the quick fox");
  }
}

fn main() {
  let thing = Widget;
  thing.do_output();
}
```

---

### Using fields

This is done by using `&self` which
is alwasy the first argument passed in

```rust
struct Widget {
  alfa: bool,
}

impl Widget {

  fn do_output(&self) {
    println!("alfa is {}", &self.alfa);
  }

}

fn main() {

  let thing = Widget {
    alfa: true
  };

  thing.do_output();

}
```

---

In the more advanced section, point out that
`&self` is shorthand for `self: &Self` that Rust
provides out of the box.

---

Talks about using methods instead of functions
as some orginaztion and keeping stuff together.

---

### Passing values to methods

```rust
struct Widget;

impl Widget {

  fn show_value(&self, value: i32) {
    println!("Value is {}", value);
  }

}

fn main() {

  let alfa = Widget;

  alfa.show_value(7);

}
```

### Associated Functions

these are like methods, but don't have '&self'

Maybe push this to later in the book.

`String::from()` is an associated function.

They are often used to make a new instance of the thing
(e.g. with `Widget::new`) by returning `Self`

The `new` is not special or a reserved keyword or
otherwise build into the language.

NOTE: Things are normally writtin in the order:
`struct`, `impl`, `main` but this works and is
easier for me to following when I'm making
learning.

The `Self` in the `fn` and return value are
aliases to what's named in `impl` in this
case `Widget`. You can replace `Self`
with `Widget` and it'll still work.

```rust
fn main () {
  let thing = Widget::new(7);

  println!("thing.alfa {}", thing.alfa);
  println!("thing.bravo {}", thing.bravo);
}

impl Widget {
  fn new(load_value: i32) -> Self {
    Self {
      alfa: load_value,
      bravo: load_value,
    }
  }
}

struct Widget  {
  alfa: i32,
  bravo: i32,
}
```

---

Associated function also provide for
name spcing. Here to stucts are given
an associated function with the name
`my_value`. Since both are called with
their struct names think get namespaced
and they don't conflict.

```rust
fn main() {
  Alfa::show_message();
  Bravo::show_message();
}

impl Alfa {
  fn show_message() {
    println!("alfa")
  }
}

impl Bravo {
  fn show_message() {
    println!("bravo")
  }
}

struct Alfa;
struct Bravo;
```

---

### Multiple impl blocks

You can make multilpe `impl` blocks. The book
says there's not a real reason to do that for the
most part. There will be a later case with
generics types and traits. But kick this out
until then.

```rust
struct Widget;

impl Widget {
  fn alfa(&self) {
    println!("alfa");
  }
}

impl Widget {
  fn bravo(&self) {
    println!("bravo");
  }
}

fn main() {

  let thing = Widget;

  thing.alfa();
  thing.bravo();
}
```
