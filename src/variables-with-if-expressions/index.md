# Variables With If Expressions

Let's use variables in the condition section
of our if/else expression. The first step is to
bind the values to our variables.

```rust,noplayground
let alfa = 7;
let bravo = 8;
```

Then, we'll replace the numbers in the `condition`
section of the `if` statement with the variable
names. So, this:

```rust,noplayground
if 7 == 8 {
  ...
}
```

Becomes this:

```rust,noplayground
if alfa == bravo {
  ...
}
```

Here's the code for the full example which
outputs:

```txt
They don't match
```

### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {

  let alfa = 7;
  let bravo = 8;

  if alfa == bravo {
    println!("They match");
  } else {
    println!("They don't match");
  }

}
```

### CODE RUNNER

```rust, editable, CODE1

```
