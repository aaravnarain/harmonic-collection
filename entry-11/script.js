function postStory() {
    var storyInput = document.getElementById("storyInput").value;

    if (storyInput.trim() !== "") {
        var newStory = document.createElement("div");
        newStory.className = "userStory";
        newStory.textContent = storyInput;

        document.getElementById("storiesContainer").appendChild(newStory);

        document.getElementById("storyInput").value = "";
    }
}
        

        