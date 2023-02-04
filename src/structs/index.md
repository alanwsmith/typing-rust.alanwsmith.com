# Structs

Structs allow you to group data together. They're
defined with the `struct` keyword followed by
the name to use then `{}` curly brackets that
contain the details. The content inside the
curly brackets defined what are known as "fields"
and the type of data they can hold.

Here's the definition for a `struct` named
`Widget` that contains two fields `alfa`
and `bravo`. Each one of the fields is
setup to hold a `String`

```rust, noplayground
struct Widget {
  alfa: String,
  bravo: String
}
```

Using a `struct` is done by assigning it
to a variable. Doing so is called making
an instance. That's done like this:

```rust, noplayground
let thing = Widget {
  alfa: String::from("apple"),
  bravo: String::from("bettey")
}
```

Accessing the values inside an instance
of a struct is does using the varialbe
name plus a dot followed by the name
of the field. For example:

```rust, noplayground
println!("{thing.alfa}");
```
