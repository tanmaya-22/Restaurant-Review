function submitReview() {
    let name = document.getElementById("username").value;
    let rating = document.getElementById("stars").value;
    let text = document.getElementById("reviewText").value;
    let media = document.getElementById("media").files[0];

    if (name === "" || rating === "" || text === "") {
        alert("Please fill all fields");
        return;
    }

    let reviewDiv = document.createElement("div");
    reviewDiv.className = "review";

    reviewDiv.innerHTML = `
        <strong>${name}</strong> <span>${"★".repeat(rating)}</span>
        <p>${text}</p>
    `;

    if (media) {
        let mediaURL = URL.createObjectURL(media);
        if (media.type.startsWith("image")) {
            reviewDiv.innerHTML += `<img src="${mediaURL}" width="200">`;
        } else {
            reviewDiv.innerHTML += `<video src="${mediaURL}" width="250" controls></video>`;
        }
    }

    document.getElementById("reviewList").appendChild(reviewDiv);

    document.getElementById("username").value = "";
    document.getElementById("stars").value = "";
    document.getElementById("reviewText").value = "";
    document.getElementById("media").value = "";
}
