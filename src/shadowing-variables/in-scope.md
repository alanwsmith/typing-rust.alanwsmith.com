# Shadowing Variables In Scope

Shadowing a variable only applies to the scope
that the shadowing happens in. If you bind
a variable in one scope, then shadow it in a child
scope the new version of the variable
will be used in that scope. For example:

```rust, noplayground
fn main() {
  let alfa = 3;
  println!("The value is {alfa}");

  {
    let alfa = 5;
    println!("The value is {alfa}");
  }

}
```

```txt
The value is 3
The value is 5
```

If you then exist the child scope and
use the variable name in the original
scope it returns to the original version.

```rust, noplayground, EXAMPLE1
fn main() {
  let alfa = 3;
  println!("The value is {alfa}");

  {
    let alfa = 5;
    println!("The value is {alfa}");
  }

  println!("The value is {alfa}");
}
```

Enter this program and run it to see the output.

#### CODE EDITOR

```rust, editable, CODE1

```
