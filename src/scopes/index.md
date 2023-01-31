# Scopes

TKTKTK Come up with better descriptions
and diagrams for scope.

Rust uses scopes to define what variables
are availalbe in different parts of applicaitons.

One way to think about scopes is like one big
box a collection of smaller boxes inside it.
Each smaller box can have more boxes inside of
them and so on and so forth. A value stored in
a box is avaialble to that box and any box
surround it on the path up to the top box. But,
boxes on the sides can't access it.

```txt
> global            1
> global:main       2   fn main() {
> global:main       3     println!("in main");
> global:main       4   }
> global            5
```
