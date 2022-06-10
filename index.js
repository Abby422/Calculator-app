let display = document.getElementById('calculator_display');

let buttons = Array.from(document.getElementsByClassName('calculator_buttons'));

let rootElement = document.querySelector(':root')

buttons.map( button => {
    button.addEventListener("click", (e) => {
        
        switch(e.target.innerText){
            case 'RESET':
                display.innerText = '';
                break;
            case 'DEL':
                if(display.innerText)
                {display.innerText = display.innerText.slice(0,-1);}
                break;
            case '=' :
                 try {
                    display.innerText = eval(display.innerText);
                 } catch{
                     display.innerText = "Error"
                 }
                break;
             default:
                display.innerText = display.innerText + e.target.innerText;
         }
    })
}
)
function set_theme1(){
    rootElement.style.setProperty('--theme_one_mainbg', 'hsl(222, 26%, 31%)')
    rootElement.style.setProperty('--theme_one_keypadbg', 'hsl(223, 31%, 20%)')
    rootElement.style.setProperty('--theme_one_screenbg', 'hsl(224, 36%, 15%)')
    rootElement.style.setProperty('--theme_one_buttonbg', 'hsl(225, 21%, 49%)')
    rootElement.style.setProperty('--key-shadowblue', 'hsl(224, 28%, 35%)')
    rootElement.style.setProperty('--togglekey-red', 'hsl(6, 63%, 50%)')
    rootElement.style.setProperty('--key-redshadow', 'hsl(6, 70%, 34%)')
    rootElement.style.setProperty('--grayish_orange_keybg', 'hsl(30, 25%, 89%)')
    rootElement.style.setProperty('--grayish_orange_keyshadow', 'hsl(28, 16%, 65%)')
    rootElement.style.setProperty('--bluetext', 'hsl(221, 14%, 31%)')
    rootElement.style.setProperty('--whitetext', 'hsl(0, 0%, 100%)')
    rootElement.style.setProperty('--logo_and_displaycolor', 'hsl(0,0,100)')
}
function set_theme2() {

    rootElement.style.setProperty('--theme_one_mainbg', 'hsl(0, 0%, 90%)')
    rootElement.style.setProperty('--theme_one_keypadbg', 'hsl(0, 5%, 81%)')
    rootElement.style.setProperty('--theme_one_screenbg', 'hsl(0, 0%, 93%)')
    rootElement.style.setProperty('--theme_one_buttonbg', 'hsl(185, 42%, 37%)')
    rootElement.style.setProperty('--key-shadowblue', 'hsl(185, 58%, 25%)')
    rootElement.style.setProperty('--togglekey-red', 'hsl(25, 98%, 40%)')
    rootElement.style.setProperty('--key-redshadow', 'hsl(25, 99%, 27%)')
    rootElement.style.setProperty('--grayish_orange_keybg', 'hsl(45, 7%, 89%)')
    rootElement.style.setProperty('--grayish_orange_keyshadow', 'hsl(35, 11%, 61%)')
    rootElement.style.setProperty('--bluetext', 'hsl(60, 10%, 19%)')
    rootElement.style.setProperty('--whitetext', 'hsl(0, 0%, 90%)')
    rootElement.style.setProperty('--logo_and_displaycolor', 'hsl(0,0,0)')
    
}

function set_theme3() {
    rootElement.style.setProperty('--theme_one_mainbg', 'hsl(268, 75%, 9%)')
    rootElement.style.setProperty('--theme_one_keypadbg', 'hsl(268, 71%, 12%)')
    rootElement.style.setProperty('--theme_one_screenbg', 'hsl(281, 71%, 12%)')
    rootElement.style.setProperty('--theme_one_buttonbg', 'hsl(281, 89%, 26%)')
    rootElement.style.setProperty('--key-shadowblue', 'hsl(285, 91%, 52%)')
    rootElement.style.setProperty('--togglekey-red', 'hsl(176, 100%, 44%)')
    rootElement.style.setProperty('--key-redshadow', 'hsl(177, 92%, 70%)')
    rootElement.style.setProperty('--grayish_orange_keybg', 'hsl(268, 47%, 21%)')
    rootElement.style.setProperty('--grayish_orange_keyshadow', 'hsl(290, 70%, 36%)')
    rootElement.style.setProperty('--bluetext', 'hsl(52, 100%, 62%)')
    rootElement.style.setProperty('--whitetext', 'hsl(0, 0%, 90%)')
    rootElement.style.setProperty('--logo_and_displaycolor', 'hsl(52, 100%, 62%)')
}
