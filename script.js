// Leave repo or demo as an empty string to hide that button for a project.
// Add multiple project photos with gallery: ["images/photo-1.png", "images/photo-2.png"].
// Add details: null to hide the View Details button for a project.
const projects = [
  {
    title: "Still There?",
    image: "images/Still there/sign up page.png",
    gallery: [
      "images/Still there/sign up page.png",
      "images/Still there/Login Page.png",
      "images/capital-ship.png"
    ],
    description: "A responsive personal website with theme switching, animated sections, and project cards.",
    tags: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/cybot555/LODi-cvevp",
    demo: "https://lo-di-cvevp.vercel.app",

    details: {
      meta: "Group Project - Team LODi(Leyson, Orcasitas, Digal)",
      description: [
        '"Still There?" is a web application created by team LODi, with members of Seth Leyson, Cyrus Digal, and Franz Orcasitas. The web application\'s main purpose is to track attendance and student engagement through the use of Computer Vision and camera to check one\'s engagement and attendance. This eases the manual tracking the attendance of the students under a certain section in each session, while also checking the engagement of the students without direct contact with them. This allows the user to have insights about the student\'s attendance and engagement performance, and find the areas on how to improve the class\' way of keep engagement going, which may affect the academic performance of the student. The main users of this project are instructors/teachers and administrators but the secondary users are the students.',
        // "Second paragraph if you want."
      ],
      photos: [
        { src: "images/Still there/sign up page.png"},
        { src: "images/Still there/Login Page.png",}
      ],
      livePrototype: "https://lo-di-cvevp.vercel.app",
      figmaPrototype: "https://www.figma.com/site/6Rl4mPwoYfOjHExcmRVWIq/still-there-prototype?node-id=0-1&t=Izq7ukeq2S6Jomem-1",
      screenshots: [
        { src: "images/Still there/sign up page.png", caption: "Sign Up Page" },
        { src: "images/Still there/Login Page.png", caption: "Login Page" }
      ],
      award: {
        image: "images/Still there/Still There.jpg",
        title: "Best Machine Learning Model",
        subtitle: "CCIS Innovision 2026"
      },
      reflection: "Write your reflection here."
    },

    colors: ["#0f766e", "#172033"]
  },
  {
    title: "Task Manager App",
    image: "",
    gallery: [],
    description: "A practical app for tracking tasks, filtering status, and keeping project work organized.",
    tags: ["React", "Local Storage", "UI"],
    repo: "https://github.com/",
    demo: "https://github.com/",
    details: null,
    colors: ["#e2553f", "#7f1d1d"]
  },
  {
    title: "Weather Dashboard",
    image: "",
    gallery: [],
    description: "A clean dashboard for displaying weather data, search history, and responsive forecast cards.",
    tags: ["API", "JavaScript", "CSS Grid"],
    repo: "https://github.com/",
    demo: "https://github.com/",
    details: null,
    colors: ["#2563eb", "#0f766e"]
  },
  {
    title: "E-commerce UI",
    image: "",
    gallery: [],
    description: "Product listing, cart states, and checkout-focused layouts designed for fast browsing.",
    tags: ["Frontend", "Components", "Responsive"],
    repo: "https://github.com/",
    demo: "https://github.com/",
    details: null,
    colors: ["#4f46e5", "#be123c"]
  },
  {
    title: "Blog Platform",
    image: "",
    gallery: [],
    description: "A content-focused project with article pages, tags, and readable typography.",
    tags: ["CMS", "Markdown", "Layout"],
    repo: "https://github.com/",
    demo: "https://github.com/",
    details: null,
    colors: ["#475569", "#0f766e"]
  },
  {
    title: "API Practice Repo",
    image: "",
    gallery: [],
    description: "Backend exercises covering routes, controllers, validation, and database-ready structure.",
    tags: ["Node.js", "Express", "REST"],
    repo: "https://github.com/",
    demo: "https://github.com/",
    details: null,
    colors: ["#15803d", "#365314"]
  }
];

const certifications = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2026",
    image: "",
    credential: "https://www.freecodecamp.org/"
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2026",
    image: "",
    credential: "https://www.freecodecamp.org/"
  },
  {
    title: "Git and GitHub Foundations",
    issuer: "GitHub",
    date: "2026",
    image: "",
    credential: "https://github.com/"
  }
];

const html = document.documentElement;
const body = document.body;
const themeToggle = document.querySelector(".theme-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#navLinks");
const savedTheme = localStorage.getItem("portfolio-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
let toggleGifTimer;

html.dataset.theme = savedTheme || (prefersDark ? "dark" : "light");

const updateThemeToggleLabel = () => {
  const label = html.dataset.theme === "dark" ? "Toggle light mode" : "Toggle dark mode";
  themeToggle.setAttribute("aria-label", label);
  themeToggle.setAttribute("title", label);
};

updateThemeToggleLabel();

themeToggle.addEventListener("click", () => {
  const nextTheme = html.dataset.theme === "dark" ? "light" : "dark";
  html.dataset.theme = nextTheme;
  localStorage.setItem("portfolio-theme", nextTheme);
  updateThemeToggleLabel();

  clearTimeout(toggleGifTimer);
  themeToggle.classList.remove("playing-gif", "playing-gif-dark", "playing-gif-light");
  void themeToggle.offsetWidth;
  const gifClass = nextTheme === "dark" ? "playing-gif-dark" : "playing-gif-light";
  const gifDuration = nextTheme === "dark" ? 2800 : 2600;
  themeToggle.classList.add("playing-gif", gifClass);
  toggleGifTimer = setTimeout(() => {
    themeToggle.classList.remove("playing-gif", gifClass);
  }, gifDuration);
});

menuToggle.addEventListener("click", () => {
  const isOpen = body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  }
});

const navGlowColors = ["#38bdf8", "#4ade80", "#fb7185", "#a78bfa", "#f59e0b"];

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    const glowColor = navGlowColors[Math.floor(Math.random() * navGlowColors.length)];
    link.style.setProperty("--nav-glow", glowColor);
  });
});

const projectsGrid = document.getElementById("projectsGrid");
const certificationList = document.getElementById("certificationList");
const projectCount = document.getElementById("projectCount");
const certificationCount = document.getElementById("certificationCount");
const projectLightbox = document.getElementById("projectLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxCounter = document.getElementById("lightboxCounter");
const lightboxPrev = document.querySelector("[data-lightbox-prev]");
const lightboxNext = document.querySelector("[data-lightbox-next]");
const projectDetailsModal = document.getElementById("projectDetailsModal");
const projectDetailsContent = document.getElementById("projectDetailsContent");
let activeGallery = [];
let activeGalleryIndex = 0;
let activeGalleryTitle = "";
let lastFocusedElement;
let detailsLastFocusedElement;

if (projectCount) {
  projectCount.textContent = projects.length;
}

if (certificationCount) {
  certificationCount.textContent = certifications.length;
}

const tetrisBoard = document.getElementById("tetrisBoard");
const tetrisNext = document.getElementById("tetrisNext");
const tetrisScore = document.getElementById("tetrisScore");
const tetrisLines = document.getElementById("tetrisLines");
const tetrisLevel = document.getElementById("tetrisLevel");
const tetrisStart = document.getElementById("tetrisStart");
const tetrisOverlay = document.getElementById("tetrisOverlay");

if (tetrisBoard && tetrisNext) {
  const boardContext = tetrisBoard.getContext("2d");
  const nextContext = tetrisNext.getContext("2d");
  const columns = 10;
  const rows = 20;
  const cell = 24;
  const nextCell = 24;
  const empty = 0;
  const pieceColors = {
    I: "#22d3ee",
    J: "#60a5fa",
    L: "#f59e0b",
    O: "#facc15",
    S: "#4ade80",
    T: "#a78bfa",
    Z: "#fb7185"
  };
  const pieceShapes = {
    I: [[1, 1, 1, 1]],
    J: [[1, 0, 0], [1, 1, 1]],
    L: [[0, 0, 1], [1, 1, 1]],
    O: [[1, 1], [1, 1]],
    S: [[0, 1, 1], [1, 1, 0]],
    T: [[0, 1, 0], [1, 1, 1]],
    Z: [[1, 1, 0], [0, 1, 1]]
  };
  const pieceNames = Object.keys(pieceShapes);
  let arena = createArena();
  let currentPiece = createPiece();
  let nextPiece = createPiece();
  let score = 0;
  let lines = 0;
  let level = 1;
  let dropCounter = 0;
  let dropInterval = 900;
  let lastTime = 0;
  let running = false;
  let gameOver = false;
  let swappedThisTurn = false;
  let animationId;

  boardContext.canvas.width = columns * cell;
  boardContext.canvas.height = rows * cell;

  function createArena() {
    return Array.from({ length: rows }, () => Array(columns).fill(empty));
  }

  function createPiece() {
    const type = pieceNames[Math.floor(Math.random() * pieceNames.length)];
    return {
      type,
      matrix: pieceShapes[type].map((row) => row.map((value) => value ? type : empty)),
      x: 0,
      y: 0
    };
  }

  function resetPiece() {
    currentPiece = nextPiece;
    nextPiece = createPiece();
    currentPiece.y = 0;
    currentPiece.x = Math.floor((columns - currentPiece.matrix[0].length) / 2);
    swappedThisTurn = false;

    if (collides(arena, currentPiece)) {
      gameOver = true;
      running = false;
      tetrisOverlay.textContent = "Game Over";
      tetrisOverlay.classList.remove("hidden");
      tetrisStart.textContent = "Restart";
      cancelAnimationFrame(animationId);
    }
  }

  function swapPiece() {
    if (swappedThisTurn) {
      return;
    }

    const previousCurrent = currentPiece;
    const previousNext = nextPiece;
    currentPiece = previousNext;
    nextPiece = previousCurrent;
    currentPiece.y = 0;
    currentPiece.x = Math.floor((columns - currentPiece.matrix[0].length) / 2);
    nextPiece.x = 0;
    nextPiece.y = 0;

    if (collides(arena, currentPiece)) {
      currentPiece = previousCurrent;
      nextPiece = previousNext;
      return;
    }

    swappedThisTurn = true;
    dropCounter = 0;
  }

  function collides(board, piece) {
    return piece.matrix.some((row, y) => row.some((value, x) => {
      if (!value) {
        return false;
      }

      const boardY = y + piece.y;
      const boardX = x + piece.x;
      return boardY >= rows || boardX < 0 || boardX >= columns || Boolean(board[boardY]?.[boardX]);
    }));
  }

  function merge(board, piece) {
    piece.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          board[y + piece.y][x + piece.x] = piece.type;
        }
      });
    });
  }

  function sweepLines() {
    let cleared = 0;

    for (let y = arena.length - 1; y >= 0; y--) {
      if (arena[y].every(Boolean)) {
        arena.splice(y, 1);
        arena.unshift(Array(columns).fill(empty));
        cleared++;
        y++;
      }
    }

    if (cleared > 0) {
      lines += cleared;
      score += [0, 100, 300, 500, 800][cleared] * level;
      level = Math.floor(lines / 10) + 1;
      dropInterval = Math.max(140, 900 - (level - 1) * 70);
      updateReadout();
    }
  }

  function rotate(matrix) {
    return matrix[0].map((_, index) => matrix.map((row) => row[index]).reverse());
  }

  function rotatePiece() {
    const previousMatrix = currentPiece.matrix;
    const previousX = currentPiece.x;
    let offset = 1;
    currentPiece.matrix = rotate(currentPiece.matrix);

    while (collides(arena, currentPiece)) {
      currentPiece.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));

      if (Math.abs(offset) > currentPiece.matrix[0].length + 1) {
        currentPiece.matrix = previousMatrix;
        currentPiece.x = previousX;
        return;
      }
    }
  }

  function movePiece(direction) {
    currentPiece.x += direction;

    if (collides(arena, currentPiece)) {
      currentPiece.x -= direction;
    }
  }

  function dropPiece() {
    currentPiece.y++;

    if (collides(arena, currentPiece)) {
      currentPiece.y--;
      merge(arena, currentPiece);
      sweepLines();
      resetPiece();
    }

    dropCounter = 0;
  }

  function hardDrop() {
    while (!collides(arena, currentPiece)) {
      currentPiece.y++;
    }

    currentPiece.y--;
    merge(arena, currentPiece);
    score += 2 * level;
    sweepLines();
    updateReadout();
    resetPiece();
    dropCounter = 0;
  }

  function drawCell(context, x, y, color, size) {
    context.fillStyle = color;
    context.fillRect(x * size, y * size, size, size);
    context.strokeStyle = "rgba(255, 255, 255, 0.32)";
    context.lineWidth = 1;
    context.strokeRect(x * size + 0.5, y * size + 0.5, size - 1, size - 1);
    context.fillStyle = "rgba(255, 255, 255, 0.16)";
    context.fillRect(x * size + 3, y * size + 3, size - 6, 3);
  }

  function drawMatrix(context, matrix, offset, size) {
    matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          const color = pieceColors[value] || pieceColors[currentPiece.type];
          drawCell(context, x + offset.x, y + offset.y, color, size);
        }
      });
    });
  }

  function drawBoard() {
    boardContext.fillStyle = "rgba(5, 9, 21, 0.94)";
    boardContext.fillRect(0, 0, tetrisBoard.width, tetrisBoard.height);
    boardContext.strokeStyle = "rgba(56, 189, 248, 0.12)";
    boardContext.lineWidth = 1;

    for (let x = 0; x <= columns; x++) {
      boardContext.beginPath();
      boardContext.moveTo(x * cell + 0.5, 0);
      boardContext.lineTo(x * cell + 0.5, rows * cell);
      boardContext.stroke();
    }

    for (let y = 0; y <= rows; y++) {
      boardContext.beginPath();
      boardContext.moveTo(0, y * cell + 0.5);
      boardContext.lineTo(columns * cell, y * cell + 0.5);
      boardContext.stroke();
    }

    arena.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          drawCell(boardContext, x, y, pieceColors[value], cell);
        }
      });
    });

    drawMatrix(boardContext, currentPiece.matrix, currentPiece, cell);
  }

  function drawNext() {
    nextContext.clearRect(0, 0, tetrisNext.width, tetrisNext.height);
    nextContext.fillStyle = "rgba(5, 9, 21, 0.55)";
    nextContext.fillRect(0, 0, tetrisNext.width, tetrisNext.height);
    const offset = {
      x: Math.floor((4 - nextPiece.matrix[0].length) / 2),
      y: Math.floor((4 - nextPiece.matrix.length) / 2)
    };
    drawMatrix(nextContext, nextPiece.matrix, offset, nextCell);
  }

  function updateReadout() {
    tetrisScore.textContent = score;
    tetrisLines.textContent = lines;
    tetrisLevel.textContent = level;
  }

  function update(time = 0) {
    if (!running) {
      drawBoard();
      drawNext();
      return;
    }

    const delta = time - lastTime;
    lastTime = time;
    dropCounter += delta;

    if (dropCounter > dropInterval) {
      dropPiece();
    }

    drawBoard();
    drawNext();
    animationId = requestAnimationFrame(update);
  }

  function startGame() {
    arena = createArena();
    currentPiece = createPiece();
    nextPiece = createPiece();
    score = 0;
    lines = 0;
    level = 1;
    dropInterval = 900;
    dropCounter = 0;
    lastTime = 0;
    running = true;
    gameOver = false;
    swappedThisTurn = false;
    updateReadout();
    resetPiece();
    tetrisOverlay.classList.add("hidden");
    tetrisStart.textContent = "Restart";
    cancelAnimationFrame(animationId);
    animationId = requestAnimationFrame(update);
  }

  function handleAction(action) {
    if (!running || gameOver) {
      if (action === "start") {
        startGame();
      }
      return;
    }

    if (action === "left") {
      movePiece(-1);
    } else if (action === "right") {
      movePiece(1);
    } else if (action === "rotate") {
      rotatePiece();
    } else if (action === "down") {
      dropPiece();
      score += 1;
      updateReadout();
    } else if (action === "drop") {
      hardDrop();
    } else if (action === "swap") {
      swapPiece();
    }

    drawBoard();
    drawNext();
  }

  tetrisStart.addEventListener("click", startGame);

  document.querySelectorAll("[data-tetris-action]").forEach((button) => {
    button.addEventListener("click", () => handleAction(button.dataset.tetrisAction));
  });

  document.addEventListener("keydown", (event) => {
    if (projectLightbox?.classList.contains("is-open") || projectDetailsModal?.classList.contains("is-open")) {
      return;
    }

    const keyActions = {
      ArrowLeft: "left",
      ArrowRight: "right",
      ArrowUp: "rotate",
      ArrowDown: "down",
      " ": "drop",
      c: "swap",
      C: "swap"
    };
    const action = keyActions[event.key];

    if (action && running) {
      event.preventDefault();
      handleAction(action);
    }
  });

  updateReadout();
  resetPiece();
  drawBoard();
  drawNext();
}

function getProjectGallery(project) {
  if (Array.isArray(project.gallery) && project.gallery.length > 0) {
    return project.gallery;
  }

  return project.image ? [project.image] : [];
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeImageItems(items = []) {
  return items
    .map((item) => typeof item === "string" ? { src: item, caption: "" } : item)
    .filter((item) => item?.src);
}

function getProjectDetails(project) {
  if (project.details === null) {
    return null;
  }

  return {
    title: project.title,
    meta: "",
    description: project.description,
    photos: getProjectGallery(project).map((src) => ({ src, caption: project.title })),
    livePrototype: "",
    figmaPrototype: "",
    screenshots: [],
    award: null,
    reflection: "",
    ...(project.details || {})
  };
}

function renderLightboxImage() {
  const image = activeGallery[activeGalleryIndex];
  const imageSrc = typeof image === "string" ? image : image.src;
  const imageCaption = typeof image === "string" ? "" : image.caption;
  lightboxImage.src = imageSrc;
  lightboxImage.alt = imageCaption || `${activeGalleryTitle} photo ${activeGalleryIndex + 1}`;
  lightboxTitle.textContent = imageCaption || activeGalleryTitle;
  lightboxCounter.textContent = `${activeGalleryIndex + 1} / ${activeGallery.length}`;
  const hasMultiplePhotos = activeGallery.length > 1;
  lightboxPrev.disabled = !hasMultiplePhotos;
  lightboxNext.disabled = !hasMultiplePhotos;
}

function openImageGallery(gallery, title, startIndex = 0) {
  if (!gallery.length) {
    return;
  }

  activeGallery = gallery;
  activeGalleryIndex = startIndex;
  activeGalleryTitle = title;
  lastFocusedElement = document.activeElement;
  renderLightboxImage();
  projectLightbox.classList.add("is-open");
  projectLightbox.setAttribute("aria-hidden", "false");
  body.classList.add("lightbox-open");
  projectLightbox.querySelector("[data-lightbox-close]").focus();
}

function openProjectGallery(projectIndex) {
  const project = projects[projectIndex];
  openImageGallery(getProjectGallery(project), project.title);
}

function closeProjectGallery() {
  projectLightbox.classList.remove("is-open");
  projectLightbox.setAttribute("aria-hidden", "true");
  if (!projectDetailsModal?.classList.contains("is-open")) {
    body.classList.remove("lightbox-open");
  }
  lightboxImage.src = "";

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function showLightboxPhoto(direction) {
  if (activeGallery.length <= 1) {
    return;
  }

  activeGalleryIndex = (activeGalleryIndex + direction + activeGallery.length) % activeGallery.length;
  renderLightboxImage();
}

function renderImageGrid(items, galleryName, className = "details-photo-grid") {
  const images = normalizeImageItems(items);

  if (!images.length) {
    return "";
  }

  return `
    <div class="${className}">
      ${images.map((image, index) => `
        <button class="details-image-card" type="button" data-details-gallery="${galleryName}" data-details-image-index="${index}" aria-label="Open ${escapeHtml(image.caption || "project photo")}">
          <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.caption || "Project photo")}" loading="lazy">
          ${image.caption ? `<span>${escapeHtml(image.caption)}</span>` : ""}
        </button>
      `).join("")}
    </div>
  `;
}

function renderProjectDetails(projectIndex) {
  const project = projects[projectIndex];
  const details = getProjectDetails(project);

  if (!details) {
    return "";
  }

  const description = Array.isArray(details.description) ? details.description : [details.description];
  const photos = normalizeImageItems(details.photos);
  const screenshots = normalizeImageItems(details.screenshots);
  const award = details.award;
  const detailLinks = [
    details.livePrototype ? `<a href="${escapeHtml(details.livePrototype)}" target="_blank" rel="noreferrer">Live Prototype <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>` : "",
    details.figmaPrototype ? `<a href="${escapeHtml(details.figmaPrototype)}" target="_blank" rel="noreferrer">Figma Prototype <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>` : ""
  ].join("");

  return `
    <header class="details-header">
      <h2 id="detailsTitle">${escapeHtml(details.title || project.title)}</h2>
      ${details.meta ? `<p><i class="fa-solid fa-user-group" aria-hidden="true"></i>${escapeHtml(details.meta)}</p>` : ""}
    </header>

    <section class="details-section">
      <div class="details-copy">
        ${description.filter(Boolean).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      </div>
      ${renderImageGrid(photos, "photos")}
      ${detailLinks ? `<div class="details-links">${detailLinks}</div>` : ""}
    </section>

    ${screenshots.length ? `
      <section class="details-section">
        <h3>Screenshots</h3>
        ${renderImageGrid(screenshots, "screenshots", "details-screenshot-grid")}
      </section>
    ` : ""}

    ${award ? `
      <section class="details-section">
        <h3><i class="fa-solid fa-trophy" aria-hidden="true"></i>Award Received</h3>
        <button class="details-award" type="button" data-details-gallery="award" data-details-image-index="0" aria-label="Open award photo">
          ${award.image ? `<img src="${escapeHtml(award.image)}" alt="${escapeHtml(award.title || "Award")}" loading="lazy">` : ""}
          <span>
            ${award.title ? `<strong>${escapeHtml(award.title)}</strong>` : ""}
            ${award.subtitle ? `<small>${escapeHtml(award.subtitle)}</small>` : ""}
          </span>
        </button>
      </section>
    ` : ""}

    ${details.reflection ? `
      <section class="details-section">
        <h3>Reflection</h3>
        <blockquote>${escapeHtml(details.reflection)}</blockquote>
      </section>
    ` : ""}
  `;
}

function openProjectDetails(projectIndex) {
  const details = getProjectDetails(projects[projectIndex]);

  if (!details) {
    return;
  }

  projectDetailsContent.innerHTML = renderProjectDetails(projectIndex);
  projectDetailsModal.dataset.projectIndex = String(projectIndex);
  detailsLastFocusedElement = document.activeElement;
  projectDetailsModal.classList.add("is-open");
  projectDetailsModal.setAttribute("aria-hidden", "false");
  body.classList.add("lightbox-open");
  projectDetailsModal.querySelector("[data-details-close]").focus();
}

function closeProjectDetails() {
  projectDetailsModal.classList.remove("is-open");
  projectDetailsModal.setAttribute("aria-hidden", "true");
  body.classList.remove("lightbox-open");
  projectDetailsContent.innerHTML = "";

  if (detailsLastFocusedElement) {
    detailsLastFocusedElement.focus();
  }
}

function openDetailsImageGallery(galleryName, imageIndex) {
  const project = projects[Number(projectDetailsModal.dataset.projectIndex)];
  const details = getProjectDetails(project);
  const galleries = {
    photos: normalizeImageItems(details.photos),
    screenshots: normalizeImageItems(details.screenshots),
    award: details.award?.image ? [{ src: details.award.image, caption: details.award.title || "Award Received" }] : []
  };

  openImageGallery(galleries[galleryName] || [], details.title || project.title, imageIndex);
}

projectsGrid.innerHTML = projects.map((project, index) => {
  const tags = project.tags.map((tag) => `<li>${tag}</li>`).join("");
  const projectGallery = getProjectGallery(project);
  const previewImage = project.image || projectGallery[0];
  const previewContent = previewImage
    ? `<img src="${previewImage}" alt="${project.title} project preview" loading="lazy">`
    : `<span class="project-number">${String(index + 1).padStart(2, "0")}</span>`;
  const previewElement = projectGallery.length
    ? `<button class="project-preview" type="button" data-gallery-index="${index}" aria-label="Open ${project.title} gallery">
        ${previewContent}
      </button>`
    : `<div class="project-preview" aria-label="${project.title} preview">
        ${previewContent}
      </div>`;
  const projectButtons = [
    getProjectDetails(project) ? `<button type="button" data-details-index="${index}">View Details</button>` : "",
    project.repo ? `<a href="${project.repo}" target="_blank" rel="noreferrer">Repo</a>` : "",
    project.demo ? `<a href="${project.demo}" target="_blank" rel="noreferrer">Demo</a>` : ""
  ].join("");

  return `
    <article class="project-card reveal" style="--preview-a: ${project.colors[0]}; --preview-b: ${project.colors[1]}; transition-delay: ${index * 60}ms;">
      ${previewElement}
      <div class="project-body">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <ul class="tags">${tags}</ul>
        ${projectButtons ? `<div class="project-links">${projectButtons}</div>` : ""}
      </div>
    </article>
  `;
}).join("");

document.querySelectorAll("[data-gallery-index]").forEach((button) => {
  button.addEventListener("click", () => openProjectGallery(Number(button.dataset.galleryIndex)));
});

document.querySelectorAll("[data-details-index]").forEach((button) => {
  button.addEventListener("click", () => openProjectDetails(Number(button.dataset.detailsIndex)));
});

if (projectLightbox) {
  projectLightbox.querySelectorAll("[data-lightbox-close]").forEach((button) => {
    button.addEventListener("click", closeProjectGallery);
  });

  lightboxPrev.addEventListener("click", () => showLightboxPhoto(-1));
  lightboxNext.addEventListener("click", () => showLightboxPhoto(1));

  document.addEventListener("keydown", (event) => {
    if (!projectLightbox.classList.contains("is-open")) {
      return;
    }

    if (event.key === "Escape") {
      closeProjectGallery();
    } else if (event.key === "ArrowLeft") {
      showLightboxPhoto(-1);
    } else if (event.key === "ArrowRight") {
      showLightboxPhoto(1);
    }
  });
}

if (projectDetailsModal) {
  projectDetailsModal.querySelectorAll("[data-details-close]").forEach((button) => {
    button.addEventListener("click", closeProjectDetails);
  });

  projectDetailsContent.addEventListener("click", (event) => {
    const imageButton = event.target.closest("[data-details-gallery]");

    if (imageButton) {
      openDetailsImageGallery(imageButton.dataset.detailsGallery, Number(imageButton.dataset.detailsImageIndex));
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!projectDetailsModal.classList.contains("is-open") || projectLightbox.classList.contains("is-open")) {
      return;
    }

    if (event.key === "Escape") {
      closeProjectDetails();
    }
  });
}

certificationList.innerHTML = certifications.map((certification, index) => `
  <article class="certification-card reveal" style="transition-delay: ${index * 60}ms;">
    <a class="certification-preview" href="${certification.credential}" target="_blank" rel="noreferrer" aria-label="Open ${certification.title} credential">
      ${certification.image
        ? `<img src="${certification.image}" alt="${certification.title} certificate" loading="lazy">`
        : `<span class="certification-number">${String(index + 1).padStart(2, "0")}</span>`}
    </a>
    <div>
      <h3>${certification.title}</h3>
      <p>${certification.issuer}</p>
    </div>
    <a class="certification-date" href="${certification.credential}" target="_blank" rel="noreferrer">${certification.date}</a>
  </article>
`).join("");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
