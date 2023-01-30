# Function Arguments

Now that we know `i32` is a data type, we
can take another look at our function example.

First, let's start with an empty function that doesn't
take any arguments:

```rust,noplayground
fn alfa(){

}
```

To add an argument that we can pass in we define
a name followed by a `:` and then the type we
want the it to be. We'll use `incoming_data`
for the name and `i32` for the type.

```rust,noplayground
fn alfa(incoming_data: i32){

}
```

The name that we put in the parenthesis defines
a variable that we can use in the body of the
function. So, we can do this:

```rust,noplayground
fn alfa(incoming_data: i32){
  println!("alfa got {}", incoming_data);
}
```

The final step is to call the function passing
in that type of data.

#### SOURCE CODE

```rust, noplayground, EXAMPLE1
fn main() {
  alfa(9);
}

fn alfa(incoming_data: i32){
  println!("alfa got {}", incoming_data);
}
```

### CODE RUNNER

```rust, editable, CODE1

```
