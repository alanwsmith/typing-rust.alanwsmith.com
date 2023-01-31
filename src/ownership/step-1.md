# Step 1

Let's go through the process of creating a variable
and binding a value to it. The `let alfa` on the
left side of our equal sign is what's responsible
for creating the variable with our specified name.

![Ownership 1](/images/ownership-1.png)

Adding in the `String::from("apple")` on the right
side completed the binding and makes `alfa` the
owner of the `String`.

![Ownership 2](/images/ownership-2.png)

