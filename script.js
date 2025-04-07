const images = [
  "https://cdn.pixabay.com/photo/2024/03/02/21/09/ai-generated-8609481_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/03/02/19/03/gas-mask-8609208_1280.png",
  "https://cdn.pixabay.com/photo/2023/12/12/21/16/ai-generated-8445903_1280.png",
  "https://cdn.pixabay.com/photo/2024/07/20/07/55/ai-generated-8907785_1280.jpg"
];

const themeContent = {
  1: {
    header: "Theme 1 To-Do",
    task1: "Explore gaming keyboards",
    task2: "Finish the report",
    task3: "View Phone's Warranty",
    task4: "Check Processor Specs"
  },
  2: {
    header: "Theme 2 Plan",
    task1: "Grocery Shopping",
    task2: "Laundry",
    task3: "Pay Bills",
    task4: "Clean the House"
  },
  3: {
    header: "Theme 3 Agenda",
    task1: "Learn HTML",
    task2: "Study CSS",
    task3: "Practice JavaScript",
    task4: "Build a Website"
  },
  4: {
    header: "Theme 4 Schedule",
    task1: "Workout",
    task2: "Meditate",
    task3: "Read a Book",
    task4: "Go for a Walk"
  }
};

function setThemeAndImage(themeNumber) {
  document.body.className = `theme-${themeNumber}`;
  document.body.style.backgroundImage = `url('${images[themeNumber - 1]}')`;

  const content = themeContent[themeNumber];
  document.getElementById("main-header").textContent = content.header;
  document.getElementById("task1-label").textContent = content.task1;
  document.getElementById("task2-label").textContent = content.task2;
  document.getElementById("task3-label").textContent = content.task3;
  document.getElementById("task4-label").textContent = content.task4;
}
