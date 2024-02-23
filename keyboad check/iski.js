
const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <div >
      <table class='style'>
        <tr>
          <th class='padd'>Key</th>
          <th class='padd'>Keycode</th> 
          <th class='padd'>Code</th>
        </tr>
        <tr>
          <td class='padd'>${e.key === " " ? "Space" : e.key}</td>
          <td class='padd'> ${e.keyCode}</td> 
          <td class='padd'>${e.code}</td>
        </tr>
      </table>
    </div>
  `;
  let styling = document.querySelector(".style");
  let space = document.querySelector(".padd");
  if (styling) {
    styling.style.color = "grey";
    styling.style.padding = "5px";

  }
  if (space) {
    space.style.padding = "10px";
  }
});