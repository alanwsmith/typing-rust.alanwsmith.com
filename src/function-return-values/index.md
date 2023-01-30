# Function Return Values

We've set up functions to receive argumets
by putting a name and type inside the
parenthesis after the function name:

```rust,noplayground
fn alfa(value: i32) {
  println!("alfa got {}", value);
}
```

So far, all the functions have printed
something out when called. Now we'll
get them to return data to whatever
called them. Setting that up is done by adding
`->` after the parenthesis followed by
the type of data that will be returned.

The data that gets returned is generated
by the last expression in the function's
code block. For example, this `double_number`
function takes an `i32` value and multiplies
it by `2` as it's sending it back.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main(){

  let alfa = double_number(5);
  println!("alfa is {}", alfa);

}

fn double_number(value: i32) -> i32 {
  value * 2
}
```

### CODE RUNNER

```rust, editable, CODE1

```
