// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;

    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelectorAll('.expandButton');

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.forEach(function(button){
      console.log(button);
    });

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', expandArticle.bind(this));
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    console.log('expand');
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');











// Guided Lecture Code for reference

// // Step 3: Build out the Panel base class (clases are hoisted)

// class Panel {
//   constructor(panel) {
//     this.panel = panel;
//     this.panelButtons = this.panel.querySelector('.panel-buttons');
//     this.panelBtnOpen = this.panel.querySelector('.panel-btn-open');
//     this.panelBtnClose = this.panel.querySelector('.panel-btn-close');
//     this.panelContent = this.panel.querySelector('.panel-content');
    
//     // Explicit binding of this
//     //this.panelButtons.addEventListener('click', this.togglePanel.bind(this));
    
//     // this is NOT bound to the arrow and therefore looks up and finds the this keyword in the constructor
//     this.panelButtons.addEventListener('click', () => this.togglePanel());
//   }
//   // methods
//   togglePanel() {
//     this.panelBtnOpen.classList.toggle('hide-btn');
//     this.panelBtnClose.classList.toggle('hide-btn');
//     this.panelContent.classList.toggle('toggle-on');
//   }
// }

// // Step 1: Get the original DOM elements
// const panels = document.querySelectorAll('.panel');

// // Step 2: Return a newly constructed DOM element 
// panels.forEach(function(panel){
//   return new Panel(panel);
// });