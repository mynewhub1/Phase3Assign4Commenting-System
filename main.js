import {load} from"./comment";
import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
   <section>
    <h1>Enter a Comments</h1>
   </section>
   <section>
   <form>
      <div class="formDiv">
      <label for ="name">Name</label>
     <br><br>
     <input type="text" id="name" name="name" autocomplete="on"placeholder="Enter name" required />
     <div>
     <div class="formDiv">
      <label for ="email">Email</label>
     <br><br>
     <input type="text" id="email" name="email" autocomplete="on"placeholder="Enter email" required /><label for="email">Email</label>
     </div>
     <div class="formDiv">
     <label for="comment">Comment</label>
     <br><br>
     <textarea name="commemt" id="comment" cols="30" row="5" placeholder=Enter comment" required ></textarea>
     </div>
     <span><input type="checkbox" id="checkbox" name"ckeckbox" value="checked" required>
     </span><label id="agree"> Agreed to share information</label>
     <br><br>
    <input value="submit" type="submit" id="submit">
    <div id="results-field">
    <custom-comment name="Allen" email="allen7242@gmail.com" comment="Sup id="comment-component"></custom-comment>
    </div>
   </form>
   </section>
  </div>
  
  <template id="template">
    <style>
      #comment-output {
      font-weight: bold;
      color: #FFFFda;
      width: 50vw;
      height: 25vh;
      justify-content: center;
      align-items:center;
      text-align: center;
      margin: 1rem;
      align-items: center;
      border-style: solid;
      border-radius: 1rem;
      border-width: 5px;
      border-color: #000000;
      background-image: linear-gradient(135deg, #00002a, #FFFFF1);
    }

      #top {
      backgroung: black;
      border-radius: 1rem;
      width: 100%;
      height: 10vh;
      padding-top: 10px;
    }

      </style>
      <div id="comment-output">
      <div id="top">
      <h1><span id="usersname"></span> Comment</h1>
      <div>
      <div id="information">
      <p id="users-comment"></p>
      <p id="littleusers">By: <span id="users-email"></span></p>
      // <p id="usrers-email"></p>
      <div>
      </div>
      </template>
`;

document.querySelector("form").addEventListener("submit", (ev) => {
  ev.preventDefault();
  createComment();
});


// setupCounter(document.querySelector("#counter"));






// <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>



