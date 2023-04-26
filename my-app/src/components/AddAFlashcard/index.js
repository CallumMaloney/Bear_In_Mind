//We need a h1 ☑️
//We need a div to contain the 2 inputs and the 2 labels ☑️
//We need a card element in the middle of the page with 2 input fields
//Card element has an outher border ☑️
//Need to sort styling
//Each input field has a label ☑️
//Labels: Question and Answer ☑️
//Two buttons at the bottom:
//Buttons: Cancel and Submit ☑️
//Buttons outside the div ☑️

//Main element - colour cream ☑️
  //h1
    //DIV - colour - orange☑️
      //Input field
  //Buttons

  import './AddAFlashcard.css'

function AddAFlashcard() {
  return (
  <main className='addAFlashCard'>
  <h1>CREATE A FLASHCARD</h1>
  <div className = 'flashcard-div'>
    <label htmlFor="question">QUESTION</label>
    <input type="text" name="question"/>
    <br></br>
    <br></br>
    <br></br>
    <label htmlFor="answer">ANSWER</label>
    <input type="text" name="answer"/>
  </div>
    <button className="submit">SUBMIT</button>
    <button className="cancel">CANCEL</button>
  </main>
  )
}

export default AddAFlashcard;
