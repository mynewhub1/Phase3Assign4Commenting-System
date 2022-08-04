// Define a custom element
export default class Comment extends HTMLElement {
    constructor() {
      super();
    }

    static get observedAttributes() {
       return ["name", "email", "commemt"];
     }

     attributeChangedCallback(property, oldValue, newValue) {

      if (property === "name"){
        this.commentPlaceholder.textContent = newValue;
      }
  
      if (property === "email"){
        this.commentPlaceholder.textContent = newValue;
      }
  
      if (property === "comment"){
        this.commentPlaceholder.textContent = newValue;
      }

     }

       connectedCallback() {
        // Create a new "open" shadow root so we can manipulate it
        const shadow = this.attachShadow({ mode: "open" });
        // Get the template we made in our HTML and clone it so we can use it in our component
        const template = document
          .getElementById("#template")
          .content.cloneNode(true);
    
        // Add the template to our shadow root
        shadow.append(template);

        this.namePlaceholder = this.shadowRoot.querySelector("#usersname");
        this.emailPlaceholder = this.shadowRoot.querySelector("#users-email");
        this.commentPlaceholder = this.shadowRoot.querySelector("#uesrs-comment");

        const name = this.getAttribute("name");
        if (name) {
          this.namePlaceholder.textContent = name;
        }
        
        const email = this.getAttribute("email");
        if (email) {
          this.namePlaceholder.textContent = name;
        }

        const comment = this.getAttribute("comment");
        if (comment) {
          this.namePlaceholder.textContent = comment;
        }

      }

}

customElements.define("comment-component", Comment);

export const load = () => {

  const nameValue = document.getElementById("name").value;
  const emailValue = document.getElementById("email").value;
  const commentValue = document.getElementById("comment").value;


  const component = document.createElement("comment-component");

  component.setAttribute("name", nameValue);
  component.setAttribute("email", emailValue);
  component.setAttribute("comment", commentValue);

  const results = document.querySelector("#results-field");
  results.append(component);

};
















  
  // component.setAttribute("name", nameValue);


  // document.querySelector("form").addEventListener("submit", () => {
    
  
  // });








//      // Look for changes in the "rate" attribute in HTML
//     static get observedAttributes() {
//       return ["rate"];
//     }
  
//     // Do something when an attribute has changed
//     attributeChangedCallback(property, oldValue, newValue) {
//       // If nothing's changed, stop execution
//       if (oldValue === newValue) return;
  
//       if (property === "rate") {
//           if (this.rate) {
//           this.rate.textContent = newValue;
//         }
//       }
//     }
  
//     // connectedCallback() {
//     //   // Create a new "open" shadow root so we can manipulate it
//     //   const shadow = this.attachShadow({ mode: "open" });
//     //   // Get the template we made in our HTML and clone it so we can use it in our component
//     //   const template = document
//     //     .getElementById("user-info")
//     //     .content.cloneNode(true);
  
//       // Add the template to our shadow root
//       shadow.append(template);
      
//        this.shadowRoot.querySelector(
//         'img '
//       ).src = this.getAttribute('image');
  
//       // Save the element we want to use for "name" so we can set it later
//       this.shadowRoot.querySelector("span").textContent = this.getAttribute("description");
//         }
//   }
  
//   customElements.define("user-info", UserInfo);
  
//   document.addEventListener("DOMContentLoaded", () => {
//     const user = document.querySelector("#user");
//     const form = document.querySelector("#form");
//     const imageInput = document.querySelector("#image");
//     const descriptionInput = document.querySelector("#description");
  
//     form.addEventListener("submit", (e) => {
//       e.preventDefault();
      
//       const imageValue = imageInput.value;
//       const descriptionValue = descriptionInput.value;
      
//       if(!imageValue || !descriptionValue) {
//         console.log("Please validate your input?")
//       } else {
//       const imageComponent = document.createElement('user-info');
      
//       imageComponent.setAttribute("image", imageValue);
//       imageComponent.setAttribute("description", descriptionValue);
      
//       user.appendChild(imageComponent);
//       imageInput.value = "";
//       descriptionInput.value= "";
//       }
//     });
    
    
//   });

  
// customElements.define("custom-comment", Comment);












//   // Define a custom element
// class UserInfo extends HTMLElement {
//     constructor() {
//       super();
//       this.rate;
//     }
    
//     // Look for changes in the "rate" attribute in HTML
//     static get observedAttributes() {
//       return ["rate"];
//     }
  
//     // Do something when an attribute has changed
//     attributeChangedCallback(property, oldValue, newValue) {
//       // If nothing's changed, stop execution
//       if (oldValue === newValue) return;
  
//       if (property === "rate") {
//           if (this.rate) {
//           this.rate.textContent = newValue;
//         }
//       }
//     }
  
//     connectedCallback() {
//       // Create a new "open" shadow root so we can manipulate it
//       const shadow = this.attachShadow({ mode: "open" });
//       // Get the template we made in our HTML and clone it so we can use it in our component
//       const template = document
//         .getElementById("user-info")
//         .content.cloneNode(true);
  
//       // Add the template to our shadow root
//       shadow.append(template);
      
//        this.shadowRoot.querySelector(
//         'img '
//       ).src = this.getAttribute('image');
  
//       // Save the element we want to use for "name" so we can set it later
//       this.shadowRoot.querySelector("span").textContent = this.getAttribute("description");
//         }
//   }
  
//   customElements.define("user-info", UserInfo);
  
//   document.addEventListener("DOMContentLoaded", () => {
//     const user = document.querySelector("#user");
//     const form = document.querySelector("#form");
//     const imageInput = document.querySelector("#image");
//     const descriptionInput = document.querySelector("#description");
  
//     form.addEventListener("submit", (e) => {
//       e.preventDefault();
      
//       const imageValue = imageInput.value;
//       const descriptionValue = descriptionInput.value;
      
//       if(!imageValue || !descriptionValue) {
//         console.log("Please validate your input?")
//       } else {
//       const imageComponent = document.createElement('user-info');
      
//       imageComponent.setAttribute("image", imageValue);
//       imageComponent.setAttribute("description", descriptionValue);
      
//       user.appendChild(imageComponent);
//       imageInput.value = "";
//       descriptionInput.value= "";
//       }
//     });
    
    
//   });