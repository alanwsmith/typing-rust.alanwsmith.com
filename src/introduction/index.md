# Welcome to Typing Rust

---

_NOTE: This site is a working draft. All the
pages before DRAFTS in the side navivagtion
are in pretty good shape. The ones after it
are in various stages of in progress_

---

Hi. I'm Alan and I'm building this site to
learn Rust.

The site has traditional pages and code samples
as well as two interactive features. The
first is a "Step By Step" explination
of the code examples. Each step some code
and provides an explination of what's happening.

Here's one with three steps for a program
that print out "Hello, World".

#### Step By Step

<script>
const rawSourceCode = `fn main() {
  println!("Hello, World"); //   println!(<code>"Hello, World"</code>); //   println!();
}

Hello, World`.split('\n')


const lineSets = [
{ 
  lines: [`0_r`, `0_r`, `0_r`, `0_e`, `0_o`],
  text: `<p>That code is a full program. It will compile, run, and output &quot;Hello, World&quot;</p>`
},
{ 
  lines: [`0_r`, `0_s`, `0_r`, `0_e`, `0_w`],
  text: `<p>Well start all our code samples with a <code>main</code> function like the one shown here.</p>`
},
{ 
  lines: [`0_c`, `2_r`, `0_c`, `0_e`, `0_w`],
  text: `<p>We'll use the <code>println!()</code> expression to output text from our programs. Here we add a line to print &quot;Hello, World&quot;.</p>`
},
{ 
  lines: [`0_c`, `1_u`, `0_c`, `0_e`, `0_w`],
  text: `<p>We'll use the <code>println!()</code> expression to output text from our programs. Here we add a line to print &quot;Hello, World&quot;.</p>`
},
]
</script>
