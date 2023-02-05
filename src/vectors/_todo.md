# Vecs

`vec` stands for Vector. The basic details of a
`vec` are:

- They hold a collection of values (like an array)
- All the values they hold must the same type (e.g. `String`)
- It's possible to add and remove items from the `vec`

Creating a `vec` can be done with with `vec![]`. For example:

```rust, noplayground
let alfa = vec![
  String::from("apple"),
  String::from("berry"),
  String::from("cherry")
];
```

Reading values in a `vec` can be done with using the
zero based index/offest of the item to retrieve.

```rust, noplayground
let bravo = &alfa[2]
```

The `&` in `&alfa[2]` means that we get a reference
to the value so that ownership isn't transferred.

Full example:

```rust
fn main() {
  let alfa = vec![
    String::from("apple"),
    String::from("berry"),
    String::from("cherry")
  ];

  let bravo = &alfa[2];
  println!("bravo is {bravo}");
}
```

---

If the `vec` is mutable, adding more elements can be
done with `.push()` like this:

```rust, noplayground
alfa.push(String::from("date");
```

```rust
fn main() {
  let mut alfa = vec![
    String::from("apple"),
    String::from("berry"),
    String::from("cherry")
  ];

  alfa.push(String::from("date"));

  let bravo = &alfa[3];
  println!("bravo is {bravo}");
}
```

---

TODO: Cover `.get()` which returns an `Option<&T>` once
your figure out how those work.

This is the example from The Rust Book

```rust
let alfa = vec![
  String::from("apple"),
  String::from("berry"),
  String::from("cherry")
];

let bravo = alfa.get(2);

match bravo {
  Some(bravo) => {
    println!("bravo is {}", bravo);
  }
  None => {
    println!("No value at index 2");
  }
}
```

---

Here's the same thing but using `.get()`
to request index `3` which doesn't exist.
The program doesn't crash. It shows the
`None` arm of the match statement.

```rust
let alfa = vec![
  String::from("apple"),
  String::from("berry"),
  String::from("cherry")
];

let bravo = alfa.get(100);

match bravo {
  Some(bravo) => {
    println!("bravo is {}", bravo);
  }
  None => {
    println!("No value at index 100");
  }
}
```

---

This is an example of the panic/crash if
you try to call an index that doesn't
exist with the `&alfa[]` format.

```rust
let alfa = vec![
  String::from("apple"),
  String::from("berry"),
  String::from("cherry")
];

let bravo = &alfa[100];
```

---

Note that when you use the `&alfa[2]` format
to get a value the program will panic and crash
if the index is higher than the number of
items availabe.

Maybe that means you should use `get` but only
put it in after you talk about `Option<&T>`?

Or, maybe you leave this hear and address it
later.

---

Like variables, having a mutable refernce
to a `vec` means trying to add an immutable
one won't be allowed. For example, pulling
out one value via a reference then trying
to update the `vec` by adding a new number

```rust
let mut alfa = vec![
  String::from("apple"),
  String::from("berry"),
  String::from("cherry")
];

let bravo = &alfa[2];

alfa.push(
  String::from("date")
);

println!("bravo is {bravo}");
```

The same scoping behavior that
applies to variables applies to `vecs`.
If the last time `bravo` is used is
before the `.push()` to alfa everything
will work because `bravo` goes out
of scope which means the reference
disappears.

```rust
let mut alfa = vec![
  String::from("apple"),
  String::from("berry"),
  String::from("cherry")
];

let bravo = &alfa[2];
println!("bravo is {bravo}");

alfa.push(
  String::from("date")
);
```

---

Iterating over a vector:

```rust
let alfa = vec![
  String::from("apple"),
  String::from("berry"),
  String::from("cherry")
];

for bravo in &alfa {
  println!("bravo is {bravo}");
}
```

Mutable version

```rust
let mut alfa = vec![
  String::from("apple"),
  String::from("berry"),
  String::from("cherry")
];

for bravo in &mut alfa {
  bravo.push_str("pie")
}

for charlie in alfa {
  println!("charlie is {charlie}")
}
```

TODO: Check in the `*i += 50` derefernce
format on the "Stroing Lists of Values
with Vectors" page

---

Using Enums to hold multiple types.

```rust
enum Holder {
  Widget(String),
  Thing(String)
}

let holders = vec![
  Holder::Widget(String::from("alfa")),
  Holder::Thing(String::from("bravo"))
];

for item in &holders {
  match item {
    Holder::Widget(value) => {
      println!("got widget with {value}");
    }
    Holder::Thing(value) => {
      println!("got thing with {value}");
    }
  }
}
```
