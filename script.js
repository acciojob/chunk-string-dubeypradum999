function chunkString(str, chunkLength) {
    // Return an empty array if the input string is null or empty
    if (!str) {
        return [];
    }

    // Initialize an empty array to hold the chunks
    let chunks = [];

    // Loop through the string, slicing out chunks of the given length
    for (let i = 0; i < str.length; i += chunkLength) {
        chunks.push(str.slice(i, i + chunkLength));
    }

    return chunks;
}

// Test cases
console.log(chunkString("Hello, world!", 5));  // Output: ["Hello", ", wor", "ld!"]
console.log(chunkString("12345", 2));          // Output: ["12", "34", "5"]
console.log(chunkString("abc", 5));            // Output: ["abc"]
console.log(chunkString("", 3));               // Output: []
console.log(chunkString(null, 4));             // Output: []
