# Structs

- NOTE: I make an effort to keep the code blocks
  small, but they are going to be growing in size
  as we work with more comlex parts of the language.

- Structs hold data with names associated with them.

- They are defined with the keyword `struct` followed
  by a name (with Capital_Snake_Case), then a code
  block surrounded by `{}` curly braces.

- Note the `,` at the end of the last field.

- Note that things are called fields.

A struct looks like:

```rust, noplayground
struct Widget {
  alfa: bool,
  bravo: i32,
}
```

The struct definition acts like a template that we
fill in when we "make an instance" of it which
is done by binding it to a variable like this.

```rust,noplayground
struct Widget {
  alfa: bool,
  bravo: i32,
}

fn main() {
  let thing = Widget {
    alfa: true,
    bravo: 7,
  };
}
```

Using the values in an instance of a struct is
done using "dot notation" which is the name of
the varialbe then a dot then the name of the
value to use.

Run this one for an example:

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
struct Widget {
  alfa: bool,
  bravo: i32,
}

fn main() {
  let thing = Widget {
    alfa: true,
    bravo: 7,
  };

  println!("thing.alfa is {}", thing.alfa);
  println!("thing.bravo is {}", thing.bravo);

}
```

### CODE RUNNER

```rust, editable, CODE1

```

---

Trying to change a value of a field when the
struct instance is immutable won't work. If
we run this we'll get an error.

```rust
struct Widget {
  alfa: bool,
}

fn main() {
  let thing = Widget {
    alfa: true,
  };

  thing.alfa = false;

  println!("thing.alfa is {}", thing.alfa);

}
```

The fix is to make the varible mutable by changing:
`let thing` to `let mut thing`. Here's the code
with that in place that will work.

```rust
struct Widget {
  alfa: bool,
}

fn main() {
  let mut thing = Widget {
    alfa: true,
  };

  thing.alfa = false;

  println!("thing.alfa is {}", thing.alfa);

}

```

---

NOTE: You can't make just some of the fields mutable.
The entire struct has to be made mutable.

But, each instance can be either mutable or immutable.

```rust
struct Widget {
  alfa: bool,
}

fn main() {
  let thing1 = Widget {
    alfa: true,
  };

  let mut thing2 = Widget {
    alfa: false
  };

  println!("thing1.alfa is {}", thing1.alfa);
  println!("thing2.alfa is {}", thing2.alfa);

}
```

---

You have to define each field when you make
a struct (TODO: Verify that's the case or
that there's not another way to do it
where the fields aren't required.) This won't
work:

```rust
struct Widget {
  alfa: bool,
  bravo: i32,
}

fn main() {

  let thing = Widget {
    alfa: true,
  };

  println!("thing.alfa is {}", thing.alfa);

}
```

---

Creating an instance is an expression which means
it can be returend from a function. This is
a way to set default values for fields. For example
this struct has `alfa` and `bravo` fields. We
create a function that takes only an incoming
alfa field and sets a default bravo then
returns the insatance.

Things to point out:

- The return value of make_thing is `Widget`

```rust
struct Widget {
  alfa: bool,
  bravo: i32,
}

fn main() {

  let thing = make_thing(true);

  println!("thing.alfa is {}", thing.alfa);

}

fn make_thing(input_value: bool) -> Widget {

  Widget {
    alfa: input_value,
    bravo: 7,
  }

}
```

---

It's also possible to name the fields in the input
parenthesis the same things and the field names.
Doing that lets you shorten the instantiation
of the instance field values to just the.

For example, we start with this where we use
`alfa: alfa`.

```rust
struct Widget {
  alfa: bool,
}

fn main() {

  let thing = make_thing(true);

  println!("thing.alfa {}", thing.alfa);

}

fn make_thing(alfa_value: bool) -> Widget {

  Widget {
    alfa: alfa_value,
  }

}

```

And here we can name the input parameter and just
use `alfa` instead of `alfa: alfa_value` to set
things:

```rust
struct Widget {
  alfa: bool,
}

fn main() {

  let thing = make_thing(true);

  println!("thing.alfa {}", thing.alfa);

}

fn make_thing(alfa: bool) -> Widget {

  Widget {
    alfa,
  }

}
```

### Struct Update Syntax

This lets us make a new instance with all
the values from a prior instance except
ones that we decide to overwrite.

Things to note:

- `..thing1` can't have a comma after it.

```rust
struct Widget {
  alfa: i32,
  bravo: i32,
  charlie: i32,
}

fn main() {

  let thing1 = Widget {
    alfa: 3,
    bravo: 5,
    charlie: 7,
  };

  let thing2 = Widget {
    bravo: 100,
    ..thing1
  };

  println!("thing2.alfa {}", thing2.alfa);
  println!("thing2.bravo {}", thing2.bravo);
  println!("thing2.charlie {}", thing2.charlie);

}
```

---

### Struct Update Syntax Moves Values

Note that the struct update syntax moves values. So,
unless they implement the copy trait (like i32), the
values are moved which means the original can't be
used. For example, this will break.

```rust
struct Widget {
  alfa: String,
  bravo: bool,
}

fn main() {

  let thing1 = Widget {
    alfa: String::from("hello"),
    bravo: true,
  };

  let thing2 = Widget {
    bravo: false,
    ..thing1
  };

  println!("thing1.alfa {}", thing1.alfa);
  println!("thing2.alfa {}", thing2.alfa);

}
```

### Update With Copy variables

TODO: Figure out if you want to get into this
here or if you want to push it to later
when you have a deeper conversation about
the heap and the stack. That probably makes
the most sense.

Note that if you overwrite all the variables
that don't implement the copy trait (e.g.
`String`) you can leave the ones that do (e.g.
`i32`, and bool). If we take the same struct and `thing1`
from the prior example but change the `String`
in `alfa` instead of the `bool` in `bravo` the
program will run properly.

```rust
struct Widget {
  alfa: String,
  bravo: bool,
}

fn main() {

  let thing1 = Widget {
    alfa: String::from("hello"),
    bravo: true,
  };

  let thing2 = Widget {
    alfa: String::from("goodbye"),
    ..thing1
  };

  println!("thing1.alfa {}", thing1.alfa);
  println!("thing2.alfa {}", thing2.alfa);

}
```
