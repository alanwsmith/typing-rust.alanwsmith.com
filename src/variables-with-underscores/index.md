# Variables Names With _ Underscores

When the Rust compiler is checking a program to 
make sure it's valid it also checks for unused
variables. TODO: Show an example where the
warning for an unused variable shows up. 

Adding an `_` underscore as the first character
of the variable name tells the compiler
that we're expecting the variable to be unused
so it shoudn't output the warning. This 
is helpful during the development process
to avoid warnings when code isn't fully 
complete. 

We'll be using the underscore in some 
of the examples to keep the code short 
without causing the warning. 




