# Errors: Result and panic!()

There are two categories of errors in Rust programs
and expressions the correspond with them:

1. Errors the program can't recover from which 
are triggered by `panic!()` 
2. Errors the program can recover from which is 
tied to a `Result`









These are draft notes

---

TODO: Switch over to using ENV Vars instead of
the file system.

```rust
fn main() {
  panic!("goes boom");
}
```

```rust
fn main() {
  let alfa = vec![
    3, 5, 7
  ];

  alfa[100];
}
```

## Errors - Result

From the book:

"in production code, most Rustaceans choose
`expect` rather than `unwrap` to give more
context about what happens.

```rust, noplayground
Result<T, E>
```

is defined as

```rust, noplayground
enum Result<T, E> {
  Ok(T),
  Err(E)
}
```

This panics

```rust
use std::fs::File;

fn main() {
  let the_file_result = File::open("hello.txt");

  let the_file = match the_file_result {
    Ok(file) => file,
    Err(error) => panic!("{:?}", error)
  };

  println!("Got {:?}", the_file)
}
```

Instead of the match, you can use `.unwrap()`.
This throws a panic if it hits the error.
That doesn't have to be the case, you can
do somethiing else as long as it returns
a proper value (TBD on how to do that)

```rust
use std::fs::File;

fn main() {
  let _the_file = File::open("hello.txt")
    .unwrap_or_else(|error| {
      panic!("Error {:?}", error)
    });
}
```

This will panic because there is no `_or_else`.

---

```rust
use std::fs::File;

fn main() {
  let _the_file = File::open("hello.txt").unwrap();
}
```

---

Using `.expect()` let you define an error
message. So the value gets set and then
will get an error with the message if
something goes wrong. (TODO: Figure out
what the difference is between the value
returned. i.e. do `.unwrap()` and
`.expect()` set the same value.

(Note, this didn't give the `.expect()`
error message, need to look more into
that)

```rust
use std::fs::File;

fn main() {
  let _the_file = File::open("hello.txt")
    .expect("The error happened");
}
```

---

From the book:

// I think this actualy makes a new file
// on the playground so it doesn't panic.

```rust
use std::fs::File;
use std::io::ErrorKind;

fn main() {
  let greeting_file_result = File::open("hello.txt");

  let greeting_file = match greeting_file_result {
    Ok(file) => file,
    Err(error) => match error.kind() {
      ErrorKind::NotFound => match File::create("hello.txt") {
        Ok(fc) => fc,
        Err(e) => panic!("Could not create file {:?}", e)
      },
      other_error => {
        panic!("Could not open file {:?}", other_error)
      }
    }
  };
}
```

---

### Propigating Errors

This is the first example they put in but they
say they'll do a different way next. (i.e.
this is the manual way they are using to show
some details on how things work. (no `main`
so not sure it if compiles)

From the book

```rust
use std::fs::File;
use std::io::{self, Read};

fn read_username_from_file() -> Results<String, io:Error> {
  let username_file_result = File::open("hello.txt");

  let mut username_file = match username_file_result {
    Ok(file) => file,
    Err(e) => return Err(e)
  };

  let mut username = String::new();

  match username_file.read_to_string(&mut username) {
    Ok(_) => Ok(username),
    Err(e) => Err(e),
  }
}
```

Here's the shorter version:

```rust
use std::fs::File;
use std::io::{self, Read};

fn read_username_from_file() -> Resutls<String, io:Error> {
  let mut username_file = File::open("users.txt")?;
  let mut username = String::new();
  username_file.read_to_string(&mut username)?;
  Ok(username)
}
```

And even shorter. This is a better way to show things.
Should be able to explain it directly.

NOTE: Talks about the "from" casting that happens
via the `?`

```rust
use std::fs::File;
use std::io::{self, Read};

fn read_username_from_file() -> Results<String, io::Error> {
  let mut username = String::new();

  File::open("users.txt")?.read_to_string(&mut username)?;

  Ok(username)
}
```

And then finally for the actual use case if you
need to read something in:

```rust
use std::fs;
use std::io;

fn read_username_from_file() -> Result<String, io::Error> {
  fs.read_to_string("users.txt");
}
```

---

The `?` does an early return.

The `?` can only be used for functions whose return
type is compatable. For example, you can't use one
in `main` because there is no Result return type.

You can use an `Option`, `Result`, or something
that implements `FromResidaul`

---

From the book:

The error message also mentioned that ? can be used with
Option<T> values as well. As with using ? on Result,
you can only use ? on Option in a function that returns
an Option. The behavior of the ? operator when called on
an Option<T> is similar to its behavior when called on a
Result<T, E>: if the value is None, the None will be
returned early from the function at that point. If the
value is Some, the value inside the Some is the resulting
value of the expression and the function continues. Listing
9-11 has an example of a function that finds the last
character of the first line in the given text:

```rust
fn last_character_of_first_line(text: &str) -> Option<char> {
  text.lines().next()?.chars().last()
}
```

This function returns Option<char> because it’s possible
that there is a character there, but it’s also possible
that there isn’t. This code takes the text string slice
argument and calls the lines method on it, which returns
an iterator over the lines in the string. Because this
function wants to examine the first line, it calls next
on the iterator to get the first value from the iterator.
If text is the empty string, this call to next will return
None, in which case we use ? to stop and return None from
last_char_of_first_line. If text is not the empty string,
next will return a Some value containing a string slice of
the first line in text.

---

It is possible to return a `Result<(), Box<dyn Error>>`
from `main()`

TODO: Look at `Box<dyn Error>`

If main returns a Result with a value of `0` that means
things went well. Any other value indicates a problem

---

---

Trying to use env vars.

`.is_ok()` returns `true` if a value is
`OK()` and `false` if it's not.

This just checks to see if an envvar exists
and sets `alfa` as `true` or `false`

```rust
use std::env;

fn main() {
  let alfa = env::var("FORCE_ERROR").is_ok();
  println!("alfa is {alfa}");
}
```

```rust
use std::env;

fn main() {
  let alfa = String::from("test_var");
  let bravo = check_var(&alfa);
  println!("bravo is {bravo}");
}

fn check_var(key: &String) -> String {
  match env::var(key) {
    Ok(value) => value,
    Err(e) => String::from("no_value")
  }
}
```

---

```rust
use std::env;

fn main() {
  let alfa = String::from("test_var");
  let bravo = check_var(&alfa);
  println!("bravo is {bravo}");
}

fn check_var(key: &String) -> String {
  env::var(key).expect("no var set. panicing")
}
```
