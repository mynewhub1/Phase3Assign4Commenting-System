import {load} from"./comment";
import './style.css'
document.querySelector('#app').innerHTML = `
  <div>
   <section>
    <h1>Enter Comments</h1>
   </section>
   <section>
    <form>
      <div class="formDiv">
      
      <label for ="name">Name</label>
     <br>
     <input type="text" id="name" name="name" autocomplete="on"placeholder="Add name" required />
     <div>  
     <div class="formDiv">
     <br>
     <label for ="email">Email</label>
     <br>
     <input type="text" id="email" name="email" autocomplete="on"placeholder="Add email" required />
     </div>
     <div class="formDiv">
    <br>
     <label for="comment">Comment</label>
     <br>
     <textarea name="commemt" id="comment" cols="30" row="5" placeholder="Add comment" required /></textarea>
     </div>
     <span><input type="checkbox" id="checkbox" name"ckeckbox" value="checked" required>
     </span><label id="agree"> Agreed to provided information</label>
     <br><br>
     <input value="submit" type="submit" id="submit">
     <div id="results-field">
      <comment-com 
        name="" 
        email="" 
        comment="" 
     id="comment-component"></comment-com>
     <comment-com 
       name="" 
       email="" 
       comment="" 
     id="comment-component"></comment-com>
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
        height: 35vh;
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
      <div>
    </div>
  </template>
`;

document.querySelector("form").addEventListener("submit", (ev) => {
  ev.preventDefault();
  load();  
});