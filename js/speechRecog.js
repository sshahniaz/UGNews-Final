let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
console.log(SpeechRecognition);
const searches = document.querySelectorAll(".search-component");
for (let x = 0; x < searches.length; x++) {
    const search = searches[x];
    console.log(search);
    // const submitButton = search.querySelector("button[type='submit']");
    const dictateButton = search.querySelector("button[type='button']");
    const searchLabel = search.querySelector("label > span");
    const searchBox = search.querySelector("input");
    let listening = false;

    // submitButton.addEventListener("click", function (e) {
    //     e.preventDefault();

    //     // search thing: call API/service, get data, show data...
    // });

    if (SpeechRecognition) {
        dictateButton.classList.add("btn-danger");
        searchLabel.textContent = "Type or dictate to search"

        dictateButton.addEventListener("click", function (e) {
            console.log(listening);
            if (!listening) {
                const recognition = new SpeechRecognition();

                recognition.onspeechend = function () {
                    recognition.stop();
                    listening = false;
                    search.classList.remove("listening");
                }

                recognition.onerror = function () {
                    listening = false;
                    search.classList.remove("listening");
                }

                recognition.onresult = function (e) {
                    const transcript = e.results[0][0].transcript;
                    console.log(transcript);
                    searchBox.value = transcript;
                }

                recognition.start();
                listening = true;
                search.classList.add("listening");
            }
        })
    }
}