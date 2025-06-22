/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]
  }
}


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?

List of Corrections and Explanations, why it’s a problem, and how I fixed it:
-Missing comma after "checkInDate": "2024-05-15" JSON requires commas between key-value pairs, I added a comma after the line
-Missing quotation marks around name in the first guest object All keys in JSON must be strings with double quotes, I added double quotes around name
-Undefined is not a valid value in JSON... JSON only supports null, strings, numbers, arrays, booleans, or objects, I replaced undefined with null
-Trailing comma in "amenities": ["WiFi", "Breakfast", "Parking",] JSON does not allow trailing commas in arrays or objects, I removed the extra comma after "Parking"
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?

  I used JSON validator to check the JSON, It pointed out where
  the syntax problems were. I also carefully looked at each line
  to make sure commas and quotation marks were in the right places.

2️⃣ How did you confirm that your corrected JSON file was valid?

  After making changes, I copied and pasted the JSON back into the JSON validator.
  When it said "Valid JSON", I knew it was fixed

3️⃣ Which errors were the most difficult to spot? Why?

  The trailing comma after "Parking" was the hardest to notice because
  it looks harmless, but it’s not allowed in JSON. Also, spotting the missing
  comma after "checkInDate" took a moment because it’s easy to overlook small things
   like that when reading code quickly.

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)

   Use a JSON linter or validator while working on JSON files and turned on
   syntax highlighting in my code editor, so I can see errors easier.
*/
