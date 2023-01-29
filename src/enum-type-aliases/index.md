# Enum Type Aliases

NOTE: This is the first type aliases things
that showed up in Rust by example. Not sure
if it should be moved to a generic type
aliases page or not yet.

Aliase can be used if you've got a long name
and want to make it easier to use.

NOTE: This doesn't produce any output

```rust
enum ThisHasLotsOfLettersAndIsTooLong {
  Alfa,
  Bravo,
}

type Shorter = ThisHasLotsOfLettersAndIsTooLong;

fn main() {

  let thing = Shorter::Alfa;

  match thing {
    Shorter::Alfa => println!("Got Alfa"),
    Shorter::Bravo => println!("Got Bravo"),
  }

}
```

---

Shorter names can be done in `impl` blocks.
This happens automatically with `Self`
(which was mentioned before. TBD on if you
need this here too, but probably works to
make it explict if you reference the earlier
stuff with structs or whatever it was)

(Of course, this is only showing the change
inside the `impl`. Guess you'd want to do
`type` as well for the other one.)

```rust
enum ThisHasLotsOfLettersAndIsTooLong {
  Add,
  Subtract,
}

impl ThisHasLotsOfLettersAndIsTooLong {
  fn run(&self, x: i32, y: i32) -> i32 {
    match self {
      Self::Add => x + y,
      Self::Subtract => x - y,
    }
  }
}

fn main() {

  let alfa = ThisHasLotsOfLettersAndIsTooLong::Add;
  println!("Addition {}", alfa.run(3, 4));

  let bravo = ThisHasLotsOfLettersAndIsTooLong::Subtract;
  println!("Subtraction {}", bravo.run(4, 3));

}
```
