const insert = document.getElementById("insert");
const title = document.querySelector(".title");
const body = document.body;

window.addEventListener("keydown", (e) => {
  const hue = Math.floor(Math.random() * 360);
  const randomColor = `hsl(${hue}, 80%, 40%)`;
  const darkerColor = `hsl(${hue}, 100%, 20%)`; 
  const glowColor = `hsl(${hue}, 100%, 70%)`; 

  body.style.transition = "background 0.6s ease-in-out";
  body.style.background = `linear-gradient(135deg, ${randomColor}, #292929)`;

  title.style.color = darkerColor;
  title.style.textShadow = `
    0 0 10px ${glowColor},
    0 0 20px ${glowColor},
    0 0 30px ${glowColor}
  `;

  insert.innerHTML = `
    <div class='color'>
      <h1 style="font-size: 2.4rem; trasition:toUpperCase" class="dynamic-key">${e.key === " " ? "Space" : e.key}</h1>
      <table>
        <tr>
          <th>Key</th>
          <th>KeyCode</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === " " ? "Space" : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    </div>`;

  const dynamicKey = document.querySelector(".dynamic-key");
  dynamicKey.style.color = darkerColor;
  dynamicKey.style.textShadow = `
    0 0 10px ${glowColor},
    0 0 20px ${glowColor},
    0 0 30px ${glowColor}
  `;
});

