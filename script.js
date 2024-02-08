//M

//V
View()
function View() {
    document.getElementById('app').innerHTML = /*HTML*/ `
        <div class="container">
            <div id="textBox" contenteditable="true"></div>
            <div class="keyboard">
                <div class=""row1>
                    <button onclick="keyPress(this.innerText)">Q</button>
                    <button onclick="keyPress(this.innerText)">W</button>
                    <button onclick="keyPress(this.innerText)">E</button>
                    <button onclick="keyPress(this.innerText)">R</button>
                    <button onclick="keyPress(this.innerText)">T</button>
                    <button onclick="keyPress(this.innerText)">Y</button>
                    <button onclick="keyPress(this.innerText)">U</button>
                    <button onclick="keyPress(this.innerText)">I</button>
                    <button onclick="keyPress(this.innerText)">O</button>
                    <button onclick="keyPress(this.innerText)">P</button>
                    <button class="backspace" onclick="removeLast()">←</button>
                </div>
                <div class="row2">
                    <button onclick="keyPress(this.innerText)">A</button>
                    <button onclick="keyPress(this.innerText)">S</button>
                    <button onclick="keyPress(this.innerText)">D</button>
                    <button onclick="keyPress(this.innerText)">F</button>
                    <button onclick="keyPress(this.innerText)">G</button>
                    <button onclick="keyPress(this.innerText)">H</button>
                    <button onclick="keyPress(this.innerText)">J</button>
                    <button onclick="keyPress(this.innerText)">K</button>
                    <button onclick="keyPress(this.innerText)">L</button>
                    <button class="enter" onclick="nextLine(this)">ENTER</button>
                </div>
                <div class="row2">
                    <button onclick="keyPress(this.innerText)">Z</button>
                    <button onclick="keyPress(this.innerText)">X</button>
                    <button onclick="keyPress(this.innerText)">C</button>
                    <button onclick="keyPress(this.innerText)">V</button>
                    <button onclick="keyPress(this.innerText)">B</button>
                    <button onclick="keyPress(this.innerText)">N</button>
                    <button onclick="keyPress(this.innerText)">M</button>
                    <button onclick="keyPress(this.innerText)">,</button>
                    <button onclick="keyPress(this.innerText)">.</button>
                    <button onclick="keyPress(this.innerText)">-</button>
                </div>
                <div><button class="space" onclick="placeSpace(this)">Space</button></div>
            </div>
        </div>
    `;
}

//C
let textBox = document.getElementById('textBox')

function keyPress(Element) {
    textBox.innerHTML += Element
}

function nextLine() {
    textBox.innerHTML += "<br>"
}

function removeLast() {
    textBox.innerHTML = textBox.innerHTML.slice(0, -1)
}

function placeSpace() {
    textBox.innerHTML += " "
}