document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector(".input")
  input.addEventListener("keydown", handleInput)

  function handleInput(e) {
    // We only want the function to run if the key pressed is the Enter key
    if (e.key !== 'Enter') return;

    // Run the formatSearch function on the current value of the input
    const query = formatSearch(input.value)

    // Redirect to         [   uv prefix    ] + [   encoded search query   ]
    window.location.href = __uv$config.prefix + __uv$config.encodeUrl(query)
  }
})

function formatSearch(query) {
  // This function turns the inputted value into a Google search if it's not a normal URL
  try {
    return new URL(query).toString()
  } catch (e) { }

  try {
    const url = new URL(`http://${query}`)
    if (url.hostname.includes('.')) return url.toString()
  } catch (e) { }

  return new URL(`https://google.com/search?q=${query}`).toString()
}

function Redir(url) {
  window.location.href = url
}

// Search history spammer
function SHS() {
  window.open("https://docs.google.com")
  window.open("https://drive.google.com")
  window.open("https://classroom.google.com")
  window.open("https://classroom.google.com/H")
  window.open("https://slides.google.com")
  window.open("https://google.com")
  window.open("https://youtube.com")
  window.open("https://www.edpuzzle.com")
  window.open("https://www.gmail.com")
  window.open("https://sheets.google.com")
  window.open("https://www.google.com/search?q=12*24&sca_esv=3a3d99a76b27b006&sca_upv=1&rlz=1C1RXQR_enUS1083US1083&sxsrf=ACQVn09V_SVsiKr0Gc3aMU_yZ5-rWYiOAQ%3A1713404586665&ei=qnogZumLKJ-q5NoP2cq7iAw&ved=0ahUKEwjpiPq90cqFAxUfFVkFHVnlDsEQ4dUDCBA&uact=5&oq=12*24&gs_lp=Egxnd3Mtd2l6LXNlcnAiBTEyKjI0MgsQABiABBixAxiDATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEiuKlAAWMQncAh4AJABApgBX6ABpAeqAQIxM7gBA8gBAPgBAZgCE6AC1QaoAhTCAgcQIxgnGOoCwgIWEAAYAxi0AhjlAhjqAhiMAxiPAdgBAcICFhAuGAMYtAIY5QIY6gIYjAMYjwHYAQHCAgQQIxgnwgIKECMYgAQYJxiKBcICChAAGIAEGEMYigXCAhAQABiABBixAxhDGIMBGIoFwgINEAAYgAQYsQMYQxiKBcICDhAAGIAEGLEDGIMBGIoFwgIREAAYgAQYkQIYsQMYgwEYigWYAwW6BgYIARABGAuSBwIxOaAHrkM&sclient=gws-wiz-serp")
  window.open("https://www.google.com/search?q=288%2F61&sca_esv=3a3d99a76b27b006&sca_upv=1&rlz=1C1RXQR_enUS1083US1083&sxsrf=ACQVn0-8V_Om2LcIX8JcrGlDeWXVynNqAQ%3A1713404594440&ei=snogZq6GGsLj5NoPxNK5qAo&ved=0ahUKEwiup9TB0cqFAxXCMVkFHURpDqUQ4dUDCBA&uact=5&oq=288%2F61&gs_lp=Egxnd3Mtd2l6LXNlcnAiBjI4OC82MTICECYyBBAAGB4yBBAAGB4yBBAAGB4yBBAAGB4yBhAAGB4YDzIEEAAYHjIGEAAYCBgeMgYQABgIGB4yBhAAGAgYHkiLuwFQoKABWIq6AXADeAGQAQKYAWugAfcFqgEDOS4xuAEDyAEA-AEBmAIKoALPBKgCFMICChAAGLADGNYEGEfCAgoQIxiABBgnGIoFwgIFEAAYgATCAgsQABiABBiRAhiKBcICCxAAGIAEGLEDGIMBwgIHECMYJxjqAsICFhAAGAMYtAIY5QIY6gIYjAMYjwHYAQHCAhYQLhgDGLQCGOUCGOoCGIwDGI8B2AEBwgIEECMYJ8ICChAAGIAEGEMYigXCAgsQLhiABBixAxiDAcICERAAGIAEGJECGLEDGIMBGIoFwgILEC4YgAQYsQMY1ALCAggQLhiABBixA8ICCBAAGIAEGLEDmAMKiAYBkAYIugYGCAEQARgLkgcDOS4xoAf_Sw&sclient=gws-wiz-serp")
  window.open("https://www.google.com/search?q=formula+for+volume+of+a+cylinder&rlz=1C1RXQR_enUS1083US1083&oq=formula+for+&gs_lcrp=EgZjaHJvbWUqDQgCEAAYgwEYsQMYgAQyBggAEEUYOTINCAEQABiDARixAxiABDINCAIQABiDARixAxiABDIHCAMQABiABDIHCAQQABiABDIKCAUQABixAxiABDIKCAYQABixAxiABDIHCAcQABiPAjIHCAgQABiPAjIHCAkQABiPAtIBCDI5MzNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8")
  window.open("https://www.google.com/search?q=formula+for+circufrence+of+a+circle&rlz=1C1RXQR_enUS1083US1083&oq=formula+for+&gs_lcrp=EgZjaHJvbWUqDQgCEAAYgwEYsQMYgAQyBggAEEUYOTINCAEQABiDARixAxiABDINCAIQABiDARixAxiABDIHCAMQABiABDIHCAQQABiABDIKCAUQABixAxiABDIKCAYQABixAxiABDIHCAcQABiPAjIHCAgQABiPAjIHCAkQABiPAtIBCDI5MzNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8")
  window.open("https://drive.google.com/drive/u/0/")
  window.open("https://drive.google.com/drive/u/0/my-drive")
  window.open("https://drive.google.com/drive/u/0/starred")
  window.open("https://drive.google.com/drive/u/0/sharedwithme")
  window.open("https://drive.google.com/drive/u/0/sharedwithme/settings")
  window.open("https://drive.google.com/drive/u/0/computers")
  window.open("https://drive.google.com/drive/u/0/trash")
  window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#snoozed")
  window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#drafts")
  window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#sent")
  window.open("https://www.google.com/search?q=calculator")
}

// Added BLNKR functionality
function create(url) {
  var win = window.open();
  win.document.body.style.margin = '0';
  win.document.body.style.height = '100vh';
  var iframe = win.document.createElement('iframe');
  iframe.style.border = 'none';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.margin = '0';
  iframe.src = url;
  win.document.body.appendChild(iframe);
}

function create_blnkr() {
  let x = prompt("What site would you like to open? Note that some sites will not work with this")
  create(x)
}