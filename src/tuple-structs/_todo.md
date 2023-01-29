# Tuple Structs

These are like regular structs but they don't
have named fields. The values are positional
with only the type defined.

```rust
struct Widget(i32, f32, bool);

fn main() {

  let alfa = Widget(3, 7.0, true);

  println!("alfa.1 is {}", alfa.1);

}

```

---

Tuple Structs are useful for setting a type
and passing data to a function without
the need for a full struct.

```rust
struct Widget (i32, f32, bool);

fn main() {

  let alfa = Widget(3, 7.0, true);

  process_widget(alfa);

}

fn process_widget(widget_input: Widget) {

  println!("Value is {}", widget_input.1)

}
```

---

Unit-Like Structs

NOTE: Move this to later after we've
discussed the Unit type.

These structs can be used to setup a type
that implements traits but holds no data.
There will be a later example of that
that should be combined with this.

(This will have no output as it is right
now)

```rust
struct Widget;

fn main() {
  let alfa = Widget;
}
```
