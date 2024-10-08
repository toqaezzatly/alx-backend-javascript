
# Data Manipulation in ES6: Arrays, TypedArrays, Maps, WeakMaps, and Sets

This README provides an overview of different data manipulation structures in ES6, specifically focusing on Arrays, TypedArrays, Maps, WeakMaps, and Sets. We will explore each structure, their use cases, and highlight the differences between them.

## 1. Arrays

### Description
An `Array` in ES6 is a standard collection type that stores ordered elements. Arrays can hold any type of data (numbers, strings, objects, etc.) and provide built-in methods for manipulating and iterating through elements.

### Key Features:
- **Dynamic**: Arrays can grow and shrink as needed.
- **Index-based**: Elements are accessed by their numeric index.
- **Mixed types**: Arrays can store values of different types.
  
### Common Methods:
- `push()`, `pop()` – Add/remove elements from the end.
- `shift()`, `unshift()` – Add/remove elements from the beginning.
- `map()`, `filter()`, `reduce()` – Array manipulation and iteration.

### Example:
```javascript
const arr = [1, 2, 3];
arr.push(4);  // [1, 2, 3, 4]
const doubled = arr.map(x => x * 2);  // [2, 4, 6, 8]
```

---

## 2. TypedArrays

### Description
`TypedArrays` are specialized arrays that provide a mechanism for handling binary data in a fixed, contiguous memory allocation. They are designed for performance, especially in handling raw binary data (like in WebGL or buffer manipulation).

### Key Features:
- **Fixed size**: The length of a `TypedArray` is fixed once created.
- **Specific types**: TypedArrays are specific to a single data type (e.g., `Int8Array`, `Float32Array`).
- **Efficient**: Optimized for performance, especially when working with large datasets or binary data.

### Example:
```javascript
const typedArray = new Uint8Array(4);  // Creates an array of 4 bytes
typedArray[0] = 255;  // Uint8Array [255, 0, 0, 0]
```

---

## 3. Map

### Description
A `Map` is a collection of key-value pairs where the keys can be of any data type (primitives or objects). Unlike objects, `Map` preserves the order of insertion of key-value pairs and allows complex data types to be used as keys.

### Key Features:
- **Ordered**: Iterates over elements in the order of insertion.
- **Key flexibility**: Can use any type of key (object, function, etc.).
- **Efficient size checking**: You can get the number of elements using the `size` property.

### Common Methods:
- `set(key, value)`, `get(key)` – Set or retrieve a value.
- `has(key)`, `delete(key)` – Check or remove a key-value pair.
- `size` – Returns the number of key-value pairs.

### Example:
```javascript
const map = new Map();
map.set('name', 'Toqa');
map.set(42, 'Age');
console.log(map.get('name'));  // 'Toqa'
console.log(map.size);  // 2
```

---

## 4. WeakMap

### Description
A `WeakMap` is similar to a `Map` but with two key differences:
1. The keys must be objects.
2. The references to keys in a `WeakMap` are weak, meaning the garbage collector can clean up memory if the key object is no longer referenced elsewhere.

### Key Features:
- **Weak references**: Keys are held weakly, allowing garbage collection if there are no other references.
- **No size**: Cannot directly check the size of a `WeakMap`.
- **Objects as keys**: Only objects can be used as keys.

### Use Case:
`WeakMap` is useful when you want to associate data with an object, but you don’t want to prevent that object from being garbage-collected.

### Example:
```javascript
let obj = {};
const weakMap = new WeakMap();
weakMap.set(obj, 'secret');
console.log(weakMap.get(obj));  // 'secret'
obj = null;  // obj is garbage-collected, and weakMap will automatically remove the entry
```

---

## 5. Set

### Description
A `Set` is a collection of unique values. Unlike arrays, `Set` ensures that each element appears only once and ignores duplicates.

### Key Features:
- **Unique values**: Ensures no duplicates in the collection.
- **Order-preserving**: Maintains insertion order when iterating over elements.
- **Efficient lookups**: Fast checking of element existence with `has()`.

### Common Methods:
- `add(value)` – Adds a value to the set.
- `has(value)` – Checks if a value exists in the set.
- `delete(value)` – Removes a value from the set.
- `size` – Returns the number of elements.

### Example:
```javascript
const set = new Set([1, 2, 3]);
set.add(2);  // Ignored, since 2 already exists
set.add(4);  // Set now contains [1, 2, 3, 4]
console.log(set.has(3));  // true
```

---

## 6. WeakSet

### Description
A `WeakSet` is similar to a `Set`, but only objects can be added to a `WeakSet`. The references to the objects are weak, meaning they do not prevent garbage collection.

### Key Features:
- **Weak references**: Objects are held weakly, which allows them to be garbage-collected.
- **No size or iteration**: There’s no way to check the size of a `WeakSet` or iterate over its contents.
- **Object values**: Only objects can be stored in a `WeakSet`.

### Example:
```javascript
let obj = {};
const weakSet = new WeakSet();
weakSet.add(obj);
console.log(weakSet.has(obj));  // true
obj = null;  // obj is garbage-collected, and weakSet removes the reference
```

---

## Key Differences

| Feature          | Array         | TypedArray  | Map           | WeakMap       | Set           | WeakSet       |
|------------------|---------------|-------------|---------------|---------------|---------------|---------------|
| Size             | Dynamic       | Fixed       | Dynamic       | Dynamic       | Dynamic       | Dynamic       |
| Data Types       | Any           | Specific    | Any (key-value)| Objects (key) | Unique values | Objects       |
| Duplicates       | Allowed       | Allowed     | Unique keys   | Unique keys   | No duplicates | No duplicates |
| Iteration        | Yes           | Yes         | Yes           | No            | Yes           | No            |
| Garbage Collection| No            | No          | No            | Yes           | No            | Yes           |

---

## Conclusion

ES6 provides various data structures—`Array`, `TypedArray`, `Map`, `WeakMap`, `Set`, and `WeakSet`—each designed for specific use cases. Arrays are versatile and can hold any type of data, while TypedArrays offer high performance for binary data. Maps and WeakMaps are useful for key-value pairs, with WeakMaps adding the advantage of garbage collection. Sets and WeakSets are ideal for storing unique values, with WeakSets offering the ability to store objects that may be garbage-collected. Understanding these structures helps in selecting the right one for the task at hand.

---

