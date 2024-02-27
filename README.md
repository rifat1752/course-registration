# Here are three project features used:

- Shopping Cart Functionality
- Error Handling and Alert
- Dynamic Data fetching

# the state managed in this project:

- **Selected Cards State (selectedCards):**

  - selectedCards is an array state variable that keeps track of the courses selected by the user.
  - It is initialized as an empty array using useState([]).

- **Remaining Credit Hours State (remaining):**

  - remaining is a state variable that represents the remaining credit hours the user can select.
  - Initially, it is set to 0 using useState(0).

- **Total Cost State (totalCost)**

  - totalCost is a state variable that keeps track of the total credit hours selected by the user.
  - It is also initialized to 0 using useState(0)

- **Fetching Data from JSON (cards State))**
- The cards state variable is used to store the data fetched from the cards.json file.
- The useState([]) hook initializes it as an empty array.

- **Updating State (setSelectedCards, setRemaining, and setTotalCost)**

  - These state-updating functions are used to modify the state variables in response to user actions.

- **State Updates within Event Handlers:**
- State variables are updated within event handlers, such as the handleSelectCard function, which is called when a user clicks the "Select" button for a course.
