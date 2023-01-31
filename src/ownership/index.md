# Ownership

TKTKTKT: Split this up into different parts.

TKTKTKT: Update alt text ones images
are finalized

(A quick heads: we're getting into sections
of the book that deal with the more conceptually
complicated parts of Rust. Going through them
multiple times before things click happenes
more often than not.)

NOTE: My handwriting is chicken scratch.
These drawings are drafts. I'll replace
them with more legible versions once I get
things finalized.

---

We've talked a lot about binding values to
variables. Let's take a deeper look at what
that means.

A fundamental feature of Rust is that
every value has an "owner". When we bind
(aka assign) a value to a variable like this:

```rust,noplayground
let alfa = String::from("apple");
```

`alfa` becomes the owner of that particual
string instance that contains the word "apple".
You can think of an "owner" like a wrapper around
the value.

Let's go through the process of creating a variable
and binding a value to it. The `let alfa` on the
left side of our equal sign is what's responsible
for creating the variable with our specified name.

![Ownership 1](/images/ownership-1.png)

Adding in the `String::from("apple")` on the right
side completed the binding and makes `alfa` the
owner of the `String`.

![Ownership 2](/images/ownership-2.png)

---

When we want to use the value of the `String` we
don't access it directly. We get it from through
the variable by using its name.

---

Let's take a look at what happens if we bind a `String`
_value_ (e.g. "apple") to one variable (e.g. "alfa") and
then bind that _variable_ to another variable named "bravo".

The code looks like this:

```rust, noplayground
let alfa = String::from("apple");

let bravo = alfa;
```

The result we end up with is that the `String` value
with "apple" in it moves to `bravo` which becomes
it's new owner.

Here's what the diagram looks like if we draw
it out one line at a time.

---

When we move ownership of the `apple` `String`
value from `alfa` to `bravo` it can no longer
be accessed from `alfa`.

Run this code to see the error that happens when
we try.

### SOURCE CODE

```rust, EXAMPLE1
fn main() {
  let alfa = String::from("apple");
  println!("alfa has {alfa}");

  let bravo = alfa;
  println!("bravo has {bravo}");

  println!("alfa has {alfa}");

}
```

### CODE RUNNER

```rust, editable, CODE1

```
