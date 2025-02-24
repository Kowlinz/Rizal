document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.querySelector(".date");
    const today = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = today.toLocaleDateString("en-US", options);
    const [weekday, day, month, year] = formattedDate.replace(",", "").split(" ");
    dateElement.innerHTML = `${weekday} ${month} ${day} ${year}`;
});



document.addEventListener("DOMContentLoaded", function () {
    const imageData = [
        {
            image: "images1.JPG",
            title: "PART 1: THE MYTH OF FILIPIN O INDOLENCE",
            text: "Rizal begins by acknowledging the common accusation from Spanish colonizers that Filipinos are lazy and unproductive. He does not outright deny the existence of indolence but challenges the claim that it is an inherent racial trait. Instead, he asks why this perception exists and seeks to provide an explanation grounded in history."
        },
        {
            image: "images2.JPG",
            title: "PART 2: THE CAUSES OF INDOLENCE",
            text: "Rizal identifies several major factors contributing to what is perceived as Filipino laziness. One significant factor was the forced labor system (polo y servicios) imposed by Spanish authorities, which required Filipino men to work on colonial projects for extended periods without pay. This system exhausted them and left little time for personal enterprises. Another major issue was unfair taxation and economic exploitation—Filipinos were burdened with heavy tribute payments, and government monopolies on trade and industry deprived them of economic opportunities. Additionally, warfare and instability played a role, as frequent pirate raids, conflicts between Spanish authorities and indigenous Filipinos, and colonial wars drained local communities and made stable economic life difficult. Moreover, religious and cultural suppression contributed to the problem. Spanish friars discouraged scientific inquiry, commerce, and native industry, prioritizing religious instruction over practical education. Lastly, Rizal also acknowledged climatic factors, noting that the tropical climate of the Philippines might encourage a more relaxed lifestyle. However, he argued that this was not the root cause of indolence, as pre-colonial Filipinos were productive traders and farmers."
        },
        {
            image: "images3.JPG",
            title: "PART 3: PRE-COLONIAL INDUSTRY VS. SPANISH COLONIZATION",
            text: "To disprove the idea that Filipinos are naturally lazy, Rizal presents historical evidence that the islands were once thriving trade hubs before Spanish colonization. Early Filipinos engaged in agriculture, shipbuilding, and commerce with China, Japan, and neighboring Southeast Asian countries. He contrasts this past prosperity with the economic decline under Spanish rule, where businesses were stifled, industries collapsed, and local initiative was discouraged."
        },
        {
            image: "images4.JPG",
            title: "PART 4: THE EFFECTS OF SPANISH COLONIALISM",
            text: "Rizal argues that centuries of Spanish rule systematically destroyed Filipino motivation and productivity. He criticizes the education system, which denied Filipinos access to quality education, preventing them from learning modern sciences, engineering, and commerce. He also condemns the influence of Spanish friars, who deliberately kept the population uneducated out of fear that educated Filipinos would question colonial rule. Additionally, he highlights the corruption in government, where public officials enriched themselves at the expense of the Filipino people, making economic and social progress nearly impossible."
        },
        {
            image: "images5.JPG",
            title: "PART 5: CONCLUSION AND CALL FOR REFORM",
            text: "Rizal concludes that Filipino 'indolence' is not a racial defect but a symptom of colonial oppression. He calls for reforms in governance, education, and economic policies to uplift Filipinos and restore their industriousness. He stresses that true progress can only be achieved if Filipinos are given freedom to develop their talents and contribute to society."
        }
    ];

    let currentIndex = 0;

 
    const prevImage = document.querySelector(".prev-image");
    const currentImage = document.querySelector(".current-image");
    const nextImage = document.querySelector(".next-image");
    const contentTitle = document.querySelector(".article-title");
    const contentText = document.querySelector(".article-text");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    function updateCarousel() {
        let prevIndex = (currentIndex - 1 + imageData.length) % imageData.length;
        let nextIndex = (currentIndex + 1) % imageData.length;

        // Update Images
        prevImage.style.backgroundImage = `url(${imageData[prevIndex].image})`;
        currentImage.style.backgroundImage = `url(${imageData[currentIndex].image})`;
        nextImage.style.backgroundImage = `url(${imageData[nextIndex].image})`;

        // Update Content
        contentTitle.textContent = imageData[currentIndex].title;
        contentText.textContent = imageData[currentIndex].text;
    }

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + imageData.length) % imageData.length;
        updateCarousel();
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % imageData.length;
        updateCarousel();
    });

    updateCarousel();
});

