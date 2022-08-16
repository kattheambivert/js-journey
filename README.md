# js-journey
15.08.2022: Revise what was learned.
1. let, var, const:
Let vs Var: Scope of a var is the entire enclosing function, while let have their scope in the block for which they declared
Unlike var, when you use let, a variable with the same name can only be declared once.
Const: cant change the value, but can manipulate the indexes inside the array.

2. Data types:
Primitive values (immutable values represented directly at the lowest level of the language)
    Boolean type (true false)
    Null type (intentional absence - falsy for boolean operations)
    Undefined type (a valuable that has not been assigned any values or to formal arguments for which there's no actual arguments)
    Number type - a double-precision 64-bit binary format IEEE 754 value (limit the values that can be stored). Sometimes it can be expressed in literal forms like 0b101, 0o13,1e3, 1e-3
    BigInt type 0o377777777777777777 --> 9007199254740991n
    String type
    Symbol type
Objects (collections of properties)