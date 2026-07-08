console.log("Instagram Clone Started");

// ==========================
// LIKE BUTTON
// ==========================

const likes = document.querySelectorAll(".like");

likes.forEach((like) => {

    const post = like.closest(".post");
    const likeText = post.querySelector(".like-count");

    let count = parseInt(likeText.innerText);

    like.addEventListener("click", () => {

        if (like.innerHTML === "🤍") {

            like.innerHTML = "❤️";
            count++;

        } else {

            like.innerHTML = "🤍";
            count--;

        }

        likeText.innerText = count + " Likes";

    });

});

// ==========================
// SAVE BUTTON
// ==========================

const saves = document.querySelectorAll(".save");

saves.forEach((save) => {

    save.addEventListener("click", () => {

        if (save.innerHTML === "🔖") {

            save.innerHTML = "✅";

        } else {

            save.innerHTML = "🔖";

        }

    });

});

// ==========================
// DOUBLE CLICK LIKE
// ==========================

const postImages = document.querySelectorAll(".post-image");

postImages.forEach((post) => {

    post.addEventListener("dblclick", () => {

        const heart = post.querySelector(".heart");
        const like = post.parentElement.querySelector(".like");

        if (like.innerHTML === "🤍") {
            like.click();
        }

        heart.classList.add("show");

        setTimeout(() => {

            heart.classList.remove("show");

        }, 700);

    });

});

// ==========================
// SHARE BUTTON
// ==========================

const shares = document.querySelectorAll(".share-icon");

shares.forEach((share) => {

    share.addEventListener("click", () => {

        if (navigator.share) {

            navigator.share({

                title: "Instagram Clone",
                text: "Check out my Instagram Clone!",
                url: window.location.href

            });

        } else {

            navigator.clipboard.writeText(window.location.href);

            alert("✅ Link Copied Successfully!");

        }

    });

});

// ==========================
// COMMENT SYSTEM
// ==========================

const buttons = document.querySelectorAll(".comment-btn");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const post = button.closest(".post");

        const input = post.querySelector(".comment-input");

        const comments = post.querySelector(".comments");

        if (input.value.trim() !== "") {

            const p = document.createElement("p");

            p.innerHTML = "<b>You:</b> " + input.value;

            comments.appendChild(p);

            input.value = "";

        }

    });

});

// ==========================
// SIDEBAR SEARCH
// ==========================

const search = document.getElementById("search");

if (search) {

    search.addEventListener("keyup", () => {

        const value = search.value.toLowerCase();

        const menu = document.querySelectorAll(".sidebar ul li");

        menu.forEach((item) => {

            if (item.innerText.toLowerCase().includes(value)) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

}

// ==========================
// DARK MODE
// ==========================

const theme = document.getElementById("theme");

if (theme) {

    theme.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (theme.innerHTML === "🌙") {

            theme.innerHTML = "☀️";

        } else {

            theme.innerHTML = "🌙";

        }

    });

}

console.log("✅ All Features Loaded Successfully");