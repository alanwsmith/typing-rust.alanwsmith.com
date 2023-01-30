# Assignment Operator Examples

The different assignment operators are:

| Operator | Description |
| -------- | ----------- |
| +=       | Addition    |
| -=       | Subtraction |
| \*=      | Multiply    |
| /=       | Division    |
| %=       | Remainder   |

Addition, subtraction, and multiplication
behave like everyday math. Here we'll
make an initial set of varilbes and
set them to `3`. Then we'll add, subtract,
and multiple them with `4` using the assignment
operators. That will give us:

```rust, noplayground
7
-1
12
```

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let mut alfa = 3;
  let mut bravo = 3;
  let mut charlie = 3;

  alfa += 4;
  println!("{}", alfa);

  bravo -= 4;
  println!("{}", bravo);

  charlie *= 4;
  println!("{}", charlie);


}
```

### CODE RUNNER

```rust, editable, CODE1

```
