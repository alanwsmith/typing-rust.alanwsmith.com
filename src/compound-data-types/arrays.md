# Arrays

---

NOTE: Arrays are covered in chapter 3 of
The Rust Book. I'm putting them later based
off the sentence "If you're unsure whether
to use an array or a vector, chances are you
should use a vector.

---

Arrays are like tuples. They're containers
that hold a collection of values. Arrays
are different from tuples in two ways:

1. Every value the contain must be of
   the same type.

2. The number of items in an array is set
   when the array is created and cannot be
   changed.

Arrays are created with square brackets. The
format the defines them is the type followed
by a semicolon then the number of items in
the array. The format looks like this for
an array of three integers.

```rust,noplayground
let alfa: [i32, 3] = [3, 5, 7];
```

Accessing the elements of an array is
done using the name of the array followed
by the desired values index number
surrounded by square brackets.

```rust,noplayground
println!("Value {}", alfa[0]);
```

Putting those parts together we get

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let alfa: [i32; 3] = [3, 5, 7];

  println!("1st {}", alfa[0]);
  println!("2nd {}", alfa[1]);
  println!("3rd {}", alfa[2]);

}
```

#### CODE RUNNER

```rust, editable, CODE1

```
