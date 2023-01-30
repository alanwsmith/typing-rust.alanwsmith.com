# Assignment Operators

That while example added a new type of
expression we haven't seen yet:

```rust,noplayground
counter += 1;
```

The `+=` is an "assignment operator". They're
like the comparison operators we saw earlier (like
`<`, `>=` and `==`). But, instead of telling
us if the expression they are in is true, assignments
operators do math on the values on either side.

For example, the `+=` adds whatever is on the
right side to the value on the left. So, this
will give us an output of

```txt
1
2
3
```

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  let mut alfa = 1;
  println!("{}", alfa);

  alfa += 1;
  println!("{}", alfa);

  alfa += 1;
  println!("{}", alfa);
}
```

### CODE RUNNER

```rust, editable, CODE1

```
