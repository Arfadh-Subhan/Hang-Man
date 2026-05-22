const WORDS_DB = {
    sports: { name: "Sports", words: [
        { word: "CRICKET", hint: "Bat and ball sport, 11 players" },
        { word: "FOOTBALL", hint: "Played with round ball, World Cup" },
        { word: "TENNIS", hint: "Racket sport, Grand Slam" },
        { word: "BASKETBALL", hint: "Hoops, dribble, NBA" },
        { word: "BASEBALL", hint: "Bat, glove, home run" },
        { word: "SOCCER", hint: "Goal, kick, Messi" },
        { word: "RUGBY", hint: "Oval ball, tackle, try" },
        { word: "HOCKEY", hint: "Stick, puck, goal" },
        { word: "GOLF", hint: "Club, hole, Tiger Woods" },
        { word: "BOXING", hint: "Punch, ring, knockout" },
        { word: "WRESTLING", hint: "Mat, pin, WWE" },
        { word: "SWIMMING", hint: "Pool, laps, freestyle" },
        { word: "ATHLETICS", hint: "Run, jump, track" },
        {word: "VOLLEYBALL", hint: "Net, spike, serve" },
        { word: "TABLE TENNIS", hint: "Ping pong, paddle" },
        { word: "BADMINTON", hint: "Shuttlecock, smash" },
        { word: "KABADDI", hint: "Raid, tackle, India" },
        { word: "KHO KHO", hint: "Tag, chase, India" },
        { word: "CHESS", hint: "King, queen, checkmate" },
        { word: "CARROM", hint: "Striker, coin, board" },
        { word: "SNOOKER", hint: "Cue, ball, pocket" },
        { word: "BILLIARDS", hint: "Pool, cue, chalk" },
        { word: "DARTS", hint: "Throw, bullseye, board" },
        { word: "BOWLING", hint: "Pin, strike, lane" },
        { word: "SKATING", hint: "Ice, blade, rink" },
        { word: "SKIING", hint: "Snow, slope, poles" },
        { word: "SNOWBOARDING", hint: "Snow, board, trick" },
        { word: "SURFING", hint: "Wave, board, ocean" },
        { word: "CYCLING", hint: "Bike, tour, pedal" },
        { word: "MARATHON", hint: "Long, run, race" },
        { word: "TRIATHLON", hint: "Swim, bike, run" },
        { word: "GYMNASTICS", hint: "Flip, beam, floor" },
        { word: "DIVING", hint: "Pool, flip, splash" },
        { word: "ARCHERY", hint: "Bow, arrow, target" },
        { word: "SHOOTING", hint: "Gun, target, pistol" },
        { word: "FENCING", hint: "Sword, duel, foil" },
        { word: "JUDO", hint: "Throw, belt, mat" },
        { word: "TAEKWONDO", hint: "Kick, punch, board" },
        { word: "KARATE", hint: "Chop, dojo, belt" },
        { word: "MUAY THAI", hint: "Elbow, knee, Thailand" },
        { word: "MMA", hint: "Cage, fight, UFC" },
        { word: "POLO", hint: "Horse, mallet, goal" },
        { word: "CURLING", hint: "Ice, broom, stone" },
        { word: "BOCCE", hint: "Throw, ball, Italy" },
        { word: "LAWN BOWLS", hint: "Grass, roll, jack" },
        { word: "SQUASH", hint: "Racket, wall, court" },
        { word: "RACQUETBALL", hint: "Racquet, wall, ball" },
        { word: "HANDBALL", hint: "Throw, goal, court" },
        { word: "WATER POLO", hint: "Pool, goal, swim" },
        { word: "BEACH VOLLEYBALL", hint: "Sand, spike, net" },
        { word: "PICKLEBALL", hint: "Paddle, net, court" }
    ]},
    
    objects: { name: "Objects", words: [
        { word: "SMARTPHONE", hint: "Touch screen, calls, apps" },
        { word: "LAPTOP", hint: "Portable computer, keyboard" },
        { word: "UMBRELLA", hint: "Rain protector, opens up" },
        { word: "BACKPACK", hint: "Carry books on shoulders" },
        { word: "WRISTWATCH", hint: "Time, strap, digital" },
        { word: "GLASSES", hint: "Vision, frames, lenses" },
        { word: "KEYBOARD", hint: "Type, keys, QWERTY" },
        { word: "MOUSE", hint: "Computer, click, scroll" },
        { word: "HEADPHONES", hint: "Music, ears, wireless" },
        { word: "SPEAKER", hint: "Sound, audio, music" },
        { word: "TELEVISION", hint: "Screen, remote, show" },
        { word: "REMOTE", hint: "TV, control, buttons" },
        { word: "FRIDGE", hint: "Cold, food, kitchen" },
        { word: "MICROWAVE", hint: "Heat, popcorn, oven" },
        { word: "TOASTER", hint: "Bread, brown, breakfast" },
        { word: "BLENDER", hint: "Mix, smoothie, shake" },
        { word: "VACUUM", hint: "Suck, dust, clean" },
        { word: "LAMP", hint: "Light, bulb, desk" },
        { word: "MIRROR", hint: "Reflection, glass, wall" },
        { word: "SOFA", hint: "Sit, couch, living" },
        { word: "BED", hint: "Sleep, mattress, pillow" },
        { word: "TABLE", hint: "Eat, desk, legs" },
        { word: "CHAIR", hint: "Sit, seat, backrest" },
        { word: "BOOK", hint: "Read, pages, story" },
        { word: "PEN", hint: "Write, ink, stationery" },
        { word: "PENCIL", hint: "Draw, lead, eraser" },
        { word: "NOTEBOOK", hint: "Paper, notes, write" },
        { word: "SCISSORS", hint: "Cut, paper, blades" },
        { word: "TAPE", hint: "Sticky, roll, adhesive" },
        { word: "GLUE", hint: "Stick, adhesive, bottle" },
        { word: "RULER", hint: "Measure, straight, inches" },
        { word: "ERASER", hint: "Rubber, pencil, remove" },
        { word: "SHARPENER", hint: "Pencil, sharpen, blade" },
        { word: "STAPLER", hint: "Papers, staple, office" },
        { word: "FOLDER", hint: "Papers, organize, file" },
        { word: "BINDER", hint: "Rings, papers, office" },
        { word: "CALCULATOR", hint: "Math, numbers, buttons" },
        { word: "CHARGER", hint: "Plug, cable, power" },
        { word: "BATTERY", hint: "Power, charge, AA" },
        { word: "CABLE", hint: "Wire, connect, USB" },
        { word: "USB DRIVE", hint: "Storage, data, memory" },
        { word: "WEBCAM", hint: "Camera, video, computer" },
        { word: "MICROPHONE", hint: "Audio, speak, record" },
        { word: "MONITOR", hint: "Screen, display, computer" },
        { word: "PRINTER", hint: "Paper, print, ink" },
        { word: "SCANNER", hint: "Scan, document, copy" },
        { word: "PROJECTOR", hint: "Screen, presentation, beam" },
        { word: "FAN", hint: "Air, cool, blades" },
        { word: "HEATER", hint: "Warm, heat, room" },
        { word: "IRON", hint: "Clothes, press, hot" }
    ]},
    
    movies: { name: "Movies", words: [
        { word: "AVENGERS", hint: "Iron Man, Thanos, Marvel" },
        { word: "TITANIC", hint: "Ship sinks, Jack and Rose" },
        { word: "INCEPTION", hint: "Dream within a dream" },
        { word: "TOYSTORY", hint: "Woody and Buzz, Pixar" },
        { word: "THE MATRIX", hint: "Red pill, Neo, bullet" },
        { word: "THE GODFATHER", hint: "Mafia, Corleone, horse" },
        { word: "PULP FICTION", hint: "Dance, burger, Ezekiel" },
        { word: "FIGHT CLUB", hint: "Soap, Tyler, first rule" },
        { word: "FORREST GUMP", hint: "Chocolate, run, shrimp" },
        { word: "THE DARK KNIGHT", hint: "Joker, Batman, Harvey" },
        { word: "INTERSTELLAR", hint: "Black hole, time, love" },
        { word: "GLADIATOR", hint: "Colosseum, revenge, emperor" },
        { word: "JURASSIC PARK", hint: "Dinosaurs, T-Rex, DNA" },
        { word: "STAR WARS", hint: "Jedi, Darth Vader, force" },
        { word: "LORD OF THE RINGS", hint: "Ring, Frodo, Middle Earth" },
        { word: "HARRY POTTER", hint: "Wizard, Hogwarts, scar" },
        { word: "THE LION KING", hint: "Simba, Mufasa, Hakuna" },
        { word: "FROZEN", hint: "Elsa, Olaf, let it go" },
        { word: "SHREK", hint: "Ogre, Donkey, Fiona" },
        { word: "FINDING NEMO", hint: "Clownfish, Dory, ocean" },
        { word: "UP", hint: "Balloon, house, old man" },
        { word: "COCO", hint: "Guitar, grandma, skeleton" },
        { word: "INSIDE OUT", hint: "Joy, Sadness, memory" },
        { word: "MOANA", hint: "Ocean, Maui, Te Fiti" },
        { word: "ENCANTO", hint: "Mirabel, Bruno, Casita" },
        { word: "SPIDERMAN", hint: "Web, Peter Parker, radioactive" },
        { word: "BATMAN", hint: "Gotham, Joker, dark knight" },
        { word: "SUPERMAN", hint: "Krypton, cape, Lois" },
        { word: "WONDER WOMAN", hint: "Amazon, lasso, Diana" },
        { word: "BLACK PANTHER", hint: "Wakanda, vibranium, TChalla" },
        { word: "JOKER", hint: "Gotham, laughing, Arthur" },
        { word: "DEADPOOL", hint: "Mercenary, funny, Ryan" },
        { word: "LOGAN", hint: "Wolverine, claws, old" },
        { word: "VENOM", hint: "Symbiote, Eddie, black" },
        { word: "SPIDERMAN NO WAY HOME", hint: "Multiverse, three Spider-men" },
        { word: "AVENGERS ENDGAME", hint: "Portals, I am Iron Man" },
        { word: "AVENGERS INFINITY WAR", hint: "Snap, Thanos, dust" },
        { word: "CAPTAIN AMERICA", hint: "Shield, super soldier, Steve" },
        { word: "THOR", hint: "Hammer, Asgard, lightning" },
        { word: "GUARDIANS OF THE GALAXY", hint: "Rocket, Groot, soundtrack" },
        { word: "DOCTOR STRANGE", hint: "Multiverse, cloak, magic" },
        { word: "ANT MAN", hint: "Shrink, grow, Paul Rudd" },
        { word: "BLACK WIDOW", hint: "Spy, Natasha, sister" },
        { word: "SHAWSHANK REDEMPTION", hint: "Prison, escape, Andy" },
        { word: "THE GREEN MILE", hint: "Death row, miracle, John" },
        { word: "SEVEN", hint: "Crime, serial killer, Brad" },
        { word: "GONE GIRL", hint: "Missing wife, twist, Ben" },
        { word: "THE SILENCE OF THE LAMBS", hint: "Hannibal, Clarice, fava" }
    ]},
    
    animals: { name: "Animals", words: [
        { word: "ELEPHANT", hint: "Big ears, trunk, gray" },
        { word: "GIRAFFE", hint: "Very long neck" },
        { word: "KANGAROO", hint: "Jumps, pouch, Australia" },
        { word: "DOLPHIN", hint: "Smart ocean mammal" },
        { word: "LION", hint: "King of jungle, mane" },
        { word: "TIGER", hint: "Stripes, big cat" },
        { word: "ZEBRA", hint: "Black and white stripes" },
        { word: "CHEETAH", hint: "Fastest land animal" },
        { word: "LEOPARD", hint: "Spots, climbs trees" },
        { word: "PANDA", hint: "Black and white, bamboo" },
        { word: "KOALA", hint: "Sleeps on eucalyptus" },
        { word: "POLAR BEAR", hint: "White fur, arctic" },
        { word: "PENGUIN", hint: "Can't fly, cold" },
        { word: "WHALE", hint: "Largest ocean animal" },
        { word: "SHARK", hint: "Sharp teeth, predator" },
        { word: "OCTOPUS", hint: "Eight arms, smart" },
        { word: "CROCODILE", hint: "Teeth, river predator" },
        { word: "SNAKE", hint: "Slither, no legs" },
        { word: "FROG", hint: "Jumps, croaks" },
        { word: "MONKEY", hint: "Swings on trees" },
        { word: "GORILLA", hint: "Strong, chest beat" },
        { word: "HORSE", hint: "Gallops, ride" },
        { word: "COW", hint: "Gives milk, moo" },
        { word: "GOAT", hint: "Climbs, horns" },
        { word: "SHEEP", hint: "Produces wool" },
        { word: "PIG", hint: "Rolls in mud" },
        { word: "DOG", hint: "Man's best friend" },
        { word: "CAT", hint: "Says meow" },
        { word: "RABBIT", hint: "Long ears, hops" },
        { word: "FOX", hint: "Sly, red fur" },
        { word: "WOLF", hint: "Howls, pack" },
        { word: "DEER", hint: "Antlers, forest" },
        { word: "BEAR", hint: "Hibernates, claws" },
        { word: "CAMEL", hint: "Hump, desert" },
        { word: "HIPPO", hint: "Big mouth, river" },
        { word: "RHINO", hint: "Horn, thick skin" },
        { word: "BUFFALO", hint: "Horns, herd" },
        { word: "OSTRICH", hint: "Big bird, can't fly" },
        { word: "EAGLE", hint: "Bird of prey" },
        { word: "OWL", hint: "Night, hoots" },
        { word: "PARROT", hint: "Colorful, talks" },
        { word: "PEACOCK", hint: "Beautiful feathers" },
        { word: "FLAMINGO", hint: "Pink, one leg" },
        { word: "BUTTERFLY", hint: "Colorful wings" },
        { word: "BEE", hint: "Honey, buzz" },
        { word: "SPIDER", hint: "Web, eight legs" },
        { word: "SCORPION", hint: "Stinger, tail" },
        { word: "CRAB", hint: "Claws, sideways" },
        { word: "SEAL", hint: "Beach, blubber" },
        { word: "WALRUS", hint: "Tusks, whiskers" }
    ]},
    
    food: { name: "Food", words: [
        { word: "PIZZA", hint: "Cheese, circle, Italian" },
        { word: "BURGER", hint: "Patty, bun, fast food" },
        { word: "SUSHI", hint: "Raw fish, rice, Japanese" },
        { word: "TACO", hint: "Mexican folded tortilla" },
        { word: "PASTA", hint: "Italian, noodles, sauce" },
        { word: "HOT DOG", hint: "Sausage, bun, mustard" },
        { word: "SANDWICH", hint: "Bread, filling, lunch" },
        { word: "SALAD", hint: "Lettuce, vegetables, healthy" },
        { word: "SOUP", hint: "Broth, warm, bowl" },
        { word: "CURRY", hint: "Spicy, Indian, gravy" },
        { word: "BIRYANI", hint: "Rice, meat, Indian" },
        { word: "DOSA", hint: "South Indian, crispy" },
        { word: "IDLI", hint: "Steamed, breakfast, India" },
        { word: "SAMOSA", hint: "Fried, potato, triangle" },
        { word: "CHOLE BHATURE", hint: "Chickpea, bread, punjabi" },
        { word: "BUTTER CHICKEN", hint: "Creamy, tomato, Indian" },
        { word: "NAAN", hint: "Bread, tandoor, garlic" },
        { word: "TANDOORI", hint: "Grilled, clay oven" },
        { word: "FRIED RICE", hint: "Chinese, egg, veggies" },
        { word: "NOODLES", hint: "Stir fry, Chinese" },
        { word: "MANCHURIAN", hint: "Gravy, Indo Chinese" },
        { word: "SPRING ROLL", hint: "Crispy, vegetables" },
        { word: "DIM SUM", hint: "Dumplings, Chinese" },
        { word: "RAMEN", hint: "Japanese, noodles, broth" },
        { word: "UDON", hint: "Thick noodles, Japanese" },
        { word: "TEMAKI", hint: "Hand roll, sushi" },
        { word: "WASABI", hint: "Green, spicy, sushi" },
        { word: "MISO", hint: "Soup, soybean, Japanese" },
        { word: "KIMCHI", hint: "Fermented, Korean, spicy" },
        { word: "BIBIMBAP", hint: "Mixed rice, Korean" },
        { word: "BULGOGI", hint: "Grilled beef, Korean" },
        { word: "KATSU", hint: "Breaded, cutlet, Japanese" },
        { word: "TERIYAKI", hint: "Glazed, chicken, Japanese" },
        { word: "PAD THAI", hint: "Stir fry, noodles, Thai" },
        { word: "TOM YUM", hint: "Soup, spicy, Thai" },
        { word: "GREEN CURRY", hint: "Thai, coconut, spicy" },
        { word: "PHO", hint: "Noodle soup, Vietnamese" },
        { word: "BANH MI", hint: "Sandwich, Vietnamese" },
        { word: "PAELLA", hint: "Spanish, rice, seafood" },
        { word: "TAPAS", hint: "Small plates, Spanish" },
        { word: "CHURROS", hint: "Fried dough, Spanish" },
        { word: "TIRAMISU", hint: "Dessert, coffee, Italian" },
        { word: "GELATO", hint: "Ice cream, Italian" },
        { word: "CREPE", hint: "Thin pancake, French" },
        { word: "CROISSANT", hint: "Buttery, French, pastry" },
        { word: "BAGUETTE", hint: "Long bread, French" },
        { word: "MACARON", hint: "Colorful, almond, French" },
        { word: "BAKLAVA", hint: "Sweet, pastry, honey" },
        { word: "KEBAB", hint: "Grilled meat, skewer" },
        { word: "HUMUS", hint: "Chickpea dip, Middle Eastern" }
    ]}
};

let gameState = {
    currentWord: "", currentHint: "", displayArray: [], guessedLetters: [],
    wrongGuesses: 0, maxWrong: 9, gameActive: true,
    player1Name: "Player 1", player2Name: "Player 2",
    player1Score: 0, player2Score: 0,
    gameMode: "category", selectedCategory: "sports",
    waitingForCustomWord: false,
    currentGuesser: 1
};

let currentEditingPlayer = null;
let toastTimeout = null;
let roundEnded = false;

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initGame();
    loadSavedData();
    showSetupModal();
    initShareButtons();
});

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = { game: document.getElementById('gamePage'), support: document.getElementById('supportPage') };
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    window.switchPage = (pageId) => {
        Object.values(pages).forEach(p => p?.classList.remove('active'));
        if (pages[pageId]) pages[pageId].classList.add('active');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) link.classList.add('active');
        });
        navMenu?.classList.remove('active');
    };

    navLinks.forEach(link => link.addEventListener('click', () => switchPage(link.getAttribute('data-page'))));
    if (navToggle) navToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
}

function initShareButtons() {
    const shareUrl = encodeURIComponent(window.location.href);
    const shareText = encodeURIComponent('Play Hangman - Word guessing game! 🔤');
    document.getElementById('shareTwitter')?.addEventListener('click', () => window.open(`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`, '_blank'));
    document.getElementById('shareWhatsapp')?.addEventListener('click', () => window.open(`https://wa.me/?text=${shareText}%20${shareUrl}`, '_blank'));
    document.getElementById('shareTelegram')?.addEventListener('click', () => window.open(`https://t.me/share/url?url=${shareUrl}&text=${shareText}`, '_blank'));
}

function loadSavedData() {
    const savedP1 = localStorage.getItem('hangman_p1');
    const savedP2 = localStorage.getItem('hangman_p2');
    if (savedP1) gameState.player1Name = savedP1;
    if (savedP2) gameState.player2Name = savedP2;
    updateDisplayNames();
}

function savePlayerNames() {
    localStorage.setItem('hangman_p1', gameState.player1Name);
    localStorage.setItem('hangman_p2', gameState.player2Name);
}

function updateDisplayNames() {
    document.getElementById('player1Name').innerText = gameState.player1Name;
    document.getElementById('player2Name').innerText = gameState.player2Name;
    document.getElementById('displayNameP1').innerText = gameState.player1Name;
    document.getElementById('displayNameP2').innerText = gameState.player2Name;
    updateTurnDisplay();
}

function updateTurnDisplay() {
    const turnText = document.getElementById('turnText');
    const currentGuesserName = gameState.currentGuesser === 1 ? gameState.player1Name : gameState.player2Name;
    turnText.innerHTML = `${currentGuesserName}'s Turn to Guess`;
    document.getElementById('currentMode').innerHTML = gameState.gameMode === 'category' ? 'Category Mode' : 'Custom Mode';
}

function updateScoresUI() {
    document.getElementById('scoreP1').innerText = gameState.player1Score;
    document.getElementById('scoreP2').innerText = gameState.player2Score;
}

function initGame() {
    createKeyboard();
    setupEventListeners();
}

function createKeyboard() {
    const keyboard = document.getElementById('keyboard');
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    keyboard.innerHTML = '';
    for (let letter of letters) {
        const btn = document.createElement('button');
        btn.className = 'key-btn';
        btn.textContent = letter;
        btn.dataset.letter = letter;
        btn.addEventListener('click', () => handleGuess(letter));
        keyboard.appendChild(btn);
    }
}

function handleGuess(letter) {
    if (!gameState.gameActive) return;
    if (gameState.guessedLetters.includes(letter)) return;
    
    gameState.guessedLetters.push(letter);
    const btn = document.querySelector(`.key-btn[data-letter="${letter}"]`);
    if (btn) {
        if (gameState.currentWord.toUpperCase().includes(letter)) {
            btn.style.background = '#90EE90';
            btn.style.color = '#000';
        } else {
            btn.style.background = '#FFCCCC';
            btn.style.color = '#CC0000';
        }
        btn.disabled = true;
    }
    updateUsedLettersDisplay();
    
    if (gameState.currentWord.toUpperCase().includes(letter)) {
        for (let i = 0; i < gameState.currentWord.length; i++) {
            if (gameState.currentWord[i].toUpperCase() === letter) {
                gameState.displayArray[i] = gameState.currentWord[i];
            }
        }
        updateWordDisplay();
        if (!gameState.displayArray.includes('_')) {
            roundWin(true);
        }
    } else {
        gameState.wrongGuesses++;
        updateHangmanDrawing();
        updateRemainingGuesses();
        
        const container = document.getElementById('hangmanContainer');
        container.classList.add('shake');
        setTimeout(() => container.classList.remove('shake'), 500);
        
        if (gameState.wrongGuesses >= gameState.maxWrong) {
            roundWin(false);
        }
    }
}

function autoFillRemainingLetters() {
    for (let i = 0; i < gameState.currentWord.length; i++) {
        const letter = gameState.currentWord[i];
        if (letter !== ' ' && gameState.displayArray[i] === '_') {
            gameState.displayArray[i] = letter;
            
            if (!gameState.guessedLetters.includes(letter)) {
                gameState.guessedLetters.push(letter);
                const btn = document.querySelector(`.key-btn[data-letter="${letter}"]`);
                if (btn) {
                    btn.style.background = '#FFCCCC';
                    btn.style.color = '#CC0000';
                    btn.disabled = true;
                }
            }
        }
    }
    updateWordDisplay();
    updateUsedLettersDisplay();
    
    const wordDisplay = document.getElementById('wordDisplay');
    wordDisplay.classList.add('win-glow');
    setTimeout(() => wordDisplay.classList.remove('win-glow'), 1000);
}

function updateHangmanDrawing() {
    const partsOrder = ['verticalPole', 'horizontalPole', 'rope', 'head', 'body', 'leftArm', 'rightArm', 'leftLeg', 'rightLeg'];
    for (let i = 0; i < gameState.wrongGuesses && i < partsOrder.length; i++) {
        const element = document.getElementById(partsOrder[i]);
        if (element) element.style.opacity = '1';
    }
}

function resetHangmanDrawing() {
    const partsOrder = ['verticalPole', 'horizontalPole', 'rope', 'head', 'body', 'leftArm', 'rightArm', 'leftLeg', 'rightLeg'];
    partsOrder.forEach(part => {
        const element = document.getElementById(part);
        if (element) element.style.opacity = '0';
    });
}

function showToast(message, color) {
    let toast = document.getElementById('gameToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'gameToast';
        toast.style.cssText = `
            position: fixed; bottom: 100px; left: 50%; transform: translateX(-50%) translateY(100px);
            background: #000000; padding: 0.8rem 1.5rem;
            border-radius: 60px; font-size: 0.9rem; font-weight: 600;
            z-index: 1100; transition: transform 0.3s ease, opacity 0.3s ease;
            white-space: nowrap; box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            opacity: 1;
        `;
        document.body.appendChild(toast);
    }
    
    if (toastTimeout) clearTimeout(toastTimeout);
    
    toast.style.transform = 'translateX(-50%) translateY(0)';
    toast.style.opacity = '1';
    toast.innerHTML = `<i class="fas fa-info-circle"></i> ${message}`;
    toast.style.color = color || '#FFE87C';
    
    toastTimeout = setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(100px)';
    }, 3000);
}

function roundWin(isGuessed) {
    if (roundEnded) return;
    roundEnded = true;
    
    gameState.gameActive = false;
    disableKeyboard(true);
    
    if (isGuessed) {
        if (gameState.currentGuesser === 1) {
            gameState.player1Score++;
        } else {
            gameState.player2Score++;
        }
        updateScoresUI();
        showToast(`🎉 ${gameState.currentGuesser === 1 ? gameState.player1Name : gameState.player2Name} guessed it! +1 point! 🎉`, '#00AA00');
    } else {
        if (gameState.gameMode === 'custom') {
            if (gameState.currentGuesser === 1) {
                gameState.player2Score++;
            } else {
                gameState.player1Score++;
            }
            updateScoresUI();
            showToast(`💀 Hangman Complete! ${gameState.currentGuesser === 1 ? gameState.player2Name : gameState.player1Name} gets +1 point! 💀`, '#FF4444');
        } else {
            showToast(`💀 Hangman Complete! The word was: ${gameState.currentWord} 💀`, '#FF4444');
        }
    }
    
    autoFillRemainingLetters();
    
    setTimeout(() => {
        roundEnded = false;
    }, 3100);
}

function nextRound() {
    document.getElementById('resultModal')?.classList.remove('active');
    gameState.currentGuesser = gameState.currentGuesser === 1 ? 2 : 1;
    
    if (gameState.gameMode === 'custom') {
        gameState.waitingForCustomWord = true;
        showSetupModal();
    } else {
        startNewRound();
    }
}

function startNewRound() {
    roundEnded = false;
    gameState.gameActive = true;
    gameState.guessedLetters = [];
    gameState.wrongGuesses = 0;
    gameState.waitingForCustomWord = false;
    resetHangmanDrawing();
    
    document.querySelectorAll('.key-btn').forEach(btn => {
        btn.disabled = false;
        btn.style.background = '#FFFFFF';
        btn.style.color = '#000000';
    });
    
    updateUsedLettersDisplay();
    updateRemainingGuesses();
    updateTurnDisplay();
    
    if (gameState.gameMode === 'category') {
        const category = WORDS_DB[gameState.selectedCategory];
        const randomIndex = Math.floor(Math.random() * category.words.length);
        const wordData = category.words[randomIndex];
        gameState.currentWord = wordData.word.toUpperCase();
        gameState.currentHint = wordData.hint;
        setupWordDisplay();
        document.getElementById('hintText').innerHTML = `<i class="fas fa-lightbulb"></i> Hint: ${gameState.currentHint}`;
    }
}

function startCustomRound() {
    roundEnded = false;
    const word = document.getElementById('customWord').value.trim().toUpperCase();
    const hint = document.getElementById('customHint').value.trim();
    if (!word) { alert('Please enter a secret word!'); return; }
    
    gameState.currentWord = word;
    gameState.currentHint = hint || 'No hint provided';
    gameState.gameActive = true;
    gameState.guessedLetters = [];
    gameState.wrongGuesses = 0;
    gameState.waitingForCustomWord = false;
    resetHangmanDrawing();
    
    document.querySelectorAll('.key-btn').forEach(btn => {
        btn.disabled = false;
        btn.style.background = '#FFFFFF';
        btn.style.color = '#000000';
    });
    
    document.getElementById('hintText').innerHTML = `<i class="fas fa-lightbulb"></i> Hint: ${gameState.currentHint}`;
    setupWordDisplay();
    updateUsedLettersDisplay();
    updateRemainingGuesses();
    
    document.getElementById('customWord').value = '';
    document.getElementById('customHint').value = '';
    closeSetupModal();
}

function setupWordDisplay() {
    gameState.displayArray = [];
    for (let i = 0; i < gameState.currentWord.length; i++) {
        gameState.displayArray.push(gameState.currentWord[i] === ' ' ? ' ' : '_');
    }
    updateWordDisplay();
}

function updateWordDisplay() {
    const wordDisplay = document.getElementById('wordDisplay');
    wordDisplay.innerHTML = '';
    for (let letter of gameState.displayArray) {
        const slot = document.createElement('div');
        slot.className = 'letter-slot';
        slot.textContent = letter === '_' ? '_' : letter;
        wordDisplay.appendChild(slot);
    }
}

function updateUsedLettersDisplay() {
    document.getElementById('usedLettersList').innerHTML = gameState.guessedLetters.join(', ') || 'None';
}

function updateRemainingGuesses() {
    document.getElementById('remainingGuesses').innerHTML = `Remaining Guesses: ${gameState.maxWrong - gameState.wrongGuesses}`;
}

function disableKeyboard(disabled) {
    document.querySelectorAll('.key-btn').forEach(btn => btn.disabled = disabled);
}

function showSetupModal() {
    if (gameState.gameMode === 'custom') {
        document.querySelector('.custom-option').style.display = 'block';
        document.querySelector('.category-option').style.display = 'none';
    } else {
        document.querySelector('.custom-option').style.display = 'none';
        document.querySelector('.category-option').style.display = 'block';
    }
    document.getElementById('setupModal').classList.add('active');
}

function closeSetupModal() { 
    document.getElementById('setupModal').classList.remove('active'); 
}

function setupEventListeners() {
    document.getElementById('homeMenuBtn')?.addEventListener('click', () => showSetupModal());
    document.getElementById('newGameBtn')?.addEventListener('click', () => showSetupModal());
    document.getElementById('resetRoundBtn')?.addEventListener('click', () => {
        if (confirm('End current round and start new round?')) {
            nextRound();
        }
    });
    document.getElementById('nextRoundBtn')?.addEventListener('click', () => nextRound());
    document.getElementById('startGameBtn')?.addEventListener('click', () => {
        if (gameState.gameMode === 'custom') {
            if (gameState.waitingForCustomWord || document.getElementById('customWord').value.trim()) {
                startCustomRound();
            } else { 
                closeSetupModal(); 
                gameState.currentGuesser = 1;
                gameState.waitingForCustomWord = true; 
                showSetupModal(); 
            }
        } else { 
            closeSetupModal(); 
            gameState.currentGuesser = 1;
            startNewRound(); 
        }
    });
    
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            gameState.gameMode = btn.dataset.mode;
            const categoryOpt = document.querySelector('.category-option');
            const customOpt = document.querySelector('.custom-option');
            if (gameState.gameMode === 'category') { 
                categoryOpt.style.display = 'block'; 
                customOpt.style.display = 'none'; 
            } else { 
                categoryOpt.style.display = 'none'; 
                customOpt.style.display = 'block'; 
            }
        });
    });
    
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            gameState.selectedCategory = btn.dataset.cat;
        });
    });
    
    document.querySelectorAll('.player-name-wrapper').forEach(wrapper => {
        wrapper.addEventListener('click', () => {
            const player = wrapper.dataset.player;
            currentEditingPlayer = player;
            const label = document.getElementById('nameEditorLabel');
            const input = document.getElementById('nameEditorInput');
            if (player === '1') { label.innerHTML = 'Player 1 Name'; input.value = gameState.player1Name; }
            else { label.innerHTML = 'Player 2 Name'; input.value = gameState.player2Name; }
            document.getElementById('nameEditorModal').classList.add('active');
        });
    });
    
    document.getElementById('saveNameBtn')?.addEventListener('click', () => {
        const input = document.getElementById('nameEditorInput');
        const newName = input.value.trim();
        if (!newName) return;
        if (currentEditingPlayer === '1') gameState.player1Name = newName;
        else gameState.player2Name = newName;
        savePlayerNames(); updateDisplayNames();
        document.getElementById('nameEditorModal').classList.remove('active');
    });
    
    document.getElementById('cancelNameBtn')?.addEventListener('click', () => document.getElementById('nameEditorModal').classList.remove('active'));
    document.getElementById('closeNameEditorBtn')?.addEventListener('click', () => document.getElementById('nameEditorModal').classList.remove('active'));
    
    document.querySelector('.mode-btn[data-mode="category"]')?.classList.add('active');
    document.querySelector('.category-btn[data-cat="sports"]')?.classList.add('active');
}

setTimeout(() => {
    document.querySelector('.mode-btn[data-mode="category"]')?.classList.add('active');
    document.querySelector('.category-btn[data-cat="sports"]')?.classList.add('active');
}, 100);