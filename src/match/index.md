# match

The enum type lets us define a set of available
options and ensure that it must contain one
of them and that it can't contain more than one. 
(That is, it contains exactly one)

`match` expressions provide a way to figure out
which one of those options the enum contains
and to do something based on that. For example, 
here's an enum with two empty options called
`Alfa` and `Bravo`. 

```rust, noplayground
enum Widget {
  Alfa,
  Bravo
}
```

We can create a variable with an enum that's 
using `Bravo` like this:

```rust,noplayground
let thing = Widget::Bravo;
```

We then use `match` to check `thing`

```rust, noplayground
match thing {

}
```

The check is done with `arms` which
are all the different options 
from the enum type. In our case, 
that's `Alfa` and `Bravo`. Because
we're accessing them through the 
variable, we have to include the
`Widget` name of the enum as well
which gives us:

```rust, noplayground
Widget::Alfa
```

And

```rust, noplayground
Widget::Bravo
```

So, we use those two items as the
things to match on. For each one
we have a `=>` that points to a code
block to run that's contained in 
the `{}` curly brackets. 
 











```rust 
enum Widget {
  Alfa,
  Bravo
}

fn main() {
  let thing = Widget::Bravo;

  match thing {
    Widget::Alfa => {
      println!("it's alfa");
    }
    Widget::Bravo => {
      println!("it's bravo");
    }
  }
}

```











