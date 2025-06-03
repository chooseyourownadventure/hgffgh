// ========== State & Data ==========
const gameData = {
  inventory: {}, // Retained for potential future expansion, not used by current story
  slide: "1",
};

const slides = {
  "1": {
    story: "You wake up and are standing at the door of your room. Your mind is in a daze. You can’t remember why you’re there. Only thing you remember about last night is falling asleep.<br><br>What do you do?",
    choices: [
      { text: "Open the door and go out.", goto: "2" },
      { text: "Go to bed.", goto: "3" }
    ]
  },
  "2": {
    story: "You see a completely new, very royal looking hallway that is nothing like your house. It seems as if you are in a mansion. The ground has a red carpet on the ground with gold linings. The walls are red and have big torches that are lit up. The hallway goes left and right.<br><br>What do you do?",
    choices: [
      { text: "Go Left towards a dead end.", goto: "5" },
      { text: "Go right towards a T-shaped intersection.", goto: "6" },
      { text: "Try to go back into your room.", goto: "7" }
    ]
  },
  "3": {
    story: "You go to lay down in bed, but when you lay down you just phase right through it. You roll out from under the bed in pain. How did that just happen? You didn’t even feel the bed.<br><br>What do you do?",
    choices: [
      { text: "Open the door and go out.", goto: "2" },
      { text: "Look around the room.", goto: "4" }
    ]
  },
  "4": {
    story: "You see a lamp, no windows and something new in your room. You see a painting on the wall. The eyes in the painting seem to be staring at the ceiling, and it has a hand pointing towards a random wall.<br><br>What do you do?",
    choices: [
      { text: "Inspect the wall.", goto: "8" },
      { text: "Inspect the ceiling.", goto: "9" }
    ]
  },
  "5": {
    story: "You start walking towards the end of the hallway and see some random holes in the wall. They’re poked with 4 in a row with all of them next to each other.<br><br>What do you do?",
    choices: [
      { text: "Proceed.", goto: "10" },
      { text: "Go Back.", goto: "11" }
    ]
  },
  "6": {
    story: "You reach the end of the royal-looking hallway and arrive at a t-shaped intersection. You feel as if you are being beckoned to the left, but don’t know what it is.<br><br>What do you do?",
    choices: [
      { text: "Follow the feeling and go left.", goto: "12" },
      { text: "Go against your gut feeling and go right.", goto: "13" }
    ]
  },
  "7": {
    story: "You grab the handle and try to twist it. It doesn’t budge. Noises start to come from the door. They resemble that of an animal. The door wraps itself around you and defeats you.",
    end: "YOU LOSE."
  },
  "8": {
    story: "The bricks of the wall are really nice. They seem to look pretty normal.<br><br>What do you do?",
    choices: [
      { text: "Inspect it more.", goto: "14" },
      { text: "Inspect the ceiling.", goto: "9" }
    ]
  },
  "9": {
    story: "The ceiling has an upside down paper stuck to it. It’s just out of reach.<br><br>What do you do?",
    choices: [
      { text: "Get a chair to stand on to reach it.", goto: "15" },
      { text: "Open the door and leave your room.", goto: "2" }
    ]
  },
  "10": {
    story: "The dead-end wall crumbles and two eyes peer at you from the darkness. It's the Feared. It jumps out and devours you.",
    end: "YOU LOSE."
  },
  "11": {
    story: "You decide that it isn’t worth it. It looks as if some creature made those holes. You walk back to the door of your bedroom.<br><br>What do you do?",
    choices: [
      { text: "Go to the right towards the t-shaped intersection from before.", goto: "6" },
      { text: "Try to go back into your room.", goto: "7" }
    ]
  },
  "12": {
    story: "The road goes straight for a while and then turns left. You keep going and reach a weird chamber that goes around in a circle with an abyss in the middle. The only light in the room are the torches around you on the walls.<br><br>What do you do?",
    choices: [
      { text: "Think for a bit.", goto: "16" },
      { text: "Take a look into the abyss.", goto: "17" }
    ]
  },
  "13": {
    story: "You walk for a bit and find a fork. You can go left or straight. There is a painting on the wall of the road that goes straight. The painting is of two eyes in darkness peering at you with a gaze so disturbing it penetrates your soul. To the left is a very curvy and windy road. The feeling of beckoning was coming from there.<br><br>What do you do?",
    choices: [
      { text: "Go down the windy road.", goto: "18" },
      { text: "Go down the road with the painting on it.", goto: "19" }
    ]
  },
  "14": {
    story: "The bricks of the wall are looking even better. They still look pretty normal.<br><br>What do you do?",
    choices: [
      { text: "Inspect it one final time.", goto: "20" },
      { text: "Inspect the ceiling.", goto: "9" }
    ]
  },
  "15": {
    story: "You take the paper off the ceiling and see a peculiar message. \"The Truseare is hidden within the Feared\". The paper melts and dissolves into acid. You get dissolved as well.",
    end: "YOU LOSE."
  },
  "16": {
    story: "You walk in circles around the chamber while making sure to not fall into the void. You're on your 7th lap around it and you hear a chant coming from the depths of the abyss. It seems as if it is coming up, higher and higher. A burst of wind comes knocking you off your feet. A ghost with the body of a bear, and something that resembles a white tiger for a head appears.<br><br>What do you do?",
    choices: [
      { text: "\"Who are you?\".", goto: "21" },
      { text: "\"Why am I here?\".", goto: "22" }
    ]
  },
  "17": {
    story: "You peek over the edge and peer into the darkness. You hear water sloshing around at the bottom.<br><br>What do you do?",
    choices: [
      { text: "Jump in.", goto: "24" },
      { text: "Think for a bit.", goto: "16" }
    ]
  },
  "18": {
    story: "The draft continues and gets stronger and stronger the more you progress. It doesn’t make any sense. How can a road have such strong gusts of wind even with multiple turns? You reach a room, but the path continues winding to the left.<br><br>What do you do?",
    choices: [
      { text: "Go into the room.", goto: "35" },
      { text: "Continue down the curvy road.", goto: "37" }
    ]
  },
  "19": {
    story: "The road continues straight for a while and then turns to the right. You keep following the road since you don’t have anywhere else to go. You arrive at a staircase and decide to go up it since there isn’t much that could go wrong. You reach what seems to be a grate above a dark room with a tiny bit of light. Surprisingly, there are no torches here. You see two eyes. Luckily, they aren't staring at you. It seems to be the Feared. The light source is a gem. There is a small opening to jump down into the room. It might be worth risking it for.<br><br>What do you do?",
    choices: [
      { text: "Jump in.", goto: "25" },
      { text: "Keep observing.", goto: "26" }
    ]
  },
  "20": {
    story: "Upon inspecting it with even more scrutiny you realize there was nothing there. You lean against the wall in despair and suddenly, the wall gives out. The wall breaks and reveals a huge abyss. How is there such a huge abyss right behind your room?<br><br>What do you do?",
    choices: [
      { text: "Take a quick look into the abyss.", goto: "27" },
      { text: "Open the door and leave your room.", goto: "2" }
    ]
  },
  "21": {
    story: "It responds with \"I am a Feared. The guardian of the Truseare, but I am a mere shell of what I used to be. I’ve become a ghost.\"<br><br>What do you ask next?",
    choices: [
      { text: "\"What is The Truseare?\".", goto: "23" },
      { text: "\"What is The Feared?\".", goto: "28" }
    ]
  },
  "22": {
    story: "It responds with \"You are here for a reason even I cannot explain. I've lost all of the information I used to have.\"<br><br>What do you ask next?",
    choices: [
      { text: "\"Who are you?\".", goto: "21" },
      { text: "\"Who owns the mansion?\".", goto: "29" }
    ]
  },
  "23": {
    story: "He responds with, \"It is a treasure so powerful, it lets you control the entire mansion. You can bend it according to your will. It is hidden behind a Feared.\"<br><br>What do you ask next?",
    choices: [
      { text: "\"How do I get out?\".", goto: "30" }
    ]
  },
  "24": {
    story: "You jump in and fall for at least 30 seconds and feel as if you've reached Mach 5 and broken the sound barrier. You see a tunnel that seems to lead to pretty much nowhere but decide to follow it. At the end you see an animal or a creature, with the body of a bear and head of a tiger. It lunges at you and devours you.",
    end: "YOU LOSE."
  },
  "25": {
    story: "You jump in and lunge for the gem when the Feared isn't looking. You reach the gem and get a rush of power. You've ascended. You can now do whatever you want. The mansion will bend to your will.<br><br>What do you do?",
    choices: [
      { text: "Go back home.", goto: "31" },
      { text: "Break through the roof of the mansion.", goto: "32" },
      { text: "Live in the mansion from now on.", goto: "33" }
    ]
  },
  "26": {
    story: "The beast notices you. It jumps up, breaks through the grate and defeats you.",
    end: "YOU LOSE."
  },
  "27": {
    story: "A sentient vine comes out and pulls you in. You get dragged into the depths of the abyss, never to be seen again.",
    end: "YOU LOSE."
  },
  "28": {
    story: "He responds with, \"I am a Feared. There are many around the mansion and they are all meant to protect the Truseare.\"<br><br>What do you ask next?",
    choices: [
      { text: "\"How do I get out?\".", goto: "30" }
    ]
  },
  "29": {
    story: "It responds with \"It is owned by Blackford, the first Feared. He constructed this mansion with the power of the Truseare. All just to keep it out of the hands of anyone with bad intentions.\"<br><br>What do you ask next?",
    choices: [
      { text: "\"How do I get out?\".", goto: "30" }
    ]
  },
  "30": {
    story: "He responds with, \"There are only 2 ways you can get out, but you must make sure to make the correct decisions. One mistake could be fatal. Go back down the other direction that you came from. Good luck.\" With that, he disappeared back where he came from.<br><br>What do you do?",
    choices: [
      { text: "Follow his directions to exit.", goto: "34" },
      { text: "Jump in.", goto: "24" }
    ]
  },
  "31": {
    story: "You reach back home after the exhilarating adventure. You learned many different things about the mansion, and now you can finally relax. You can go back to how life used to be.",
    end: "YOU WIN."
  },
  "32": {
    story: "You break through the roof and see that all around you is a mansion. It stretches for miles and miles and miles. You decide that it isn't worth it to keep exploring especially since it looks like the same thing, over and over again. You go back into the mansion and figure out a way to get back home. You talk to a Feared, and it tells you how to use the Truseare to go back home. You give the Feared the Truseare back once you leave.",
    end: "YOU WIN."
  },
  "33": {
    story: "You become friends with the Feareds around the mansion and start to learn more and more about where you are and what happened. You are in a sub-world of your real world. A branch of your world where the genetics and world are completely different. It was caused by a power imbalance. You live happily ever after and start to make changes around the mansion. You can do whatever you want!",
    end: "YOU WIN."
  },
  "34": {
    story: "You follow the road backward and reach the T-intersection you were at before.<br><br>What do you do?",
    choices: [
      { text: "Go right since you went left and found the ghost Feared there.", goto: "13" }
    ]
  },
  "35": {
    story: "The room is darkly lit with a spotlight at the top which points down towards a pedestal with a book on it in the middle of the room. You go and open the book. It seems to be the log of a scientist. You flip to it and start reading.<br>\"...Subworlds can be entered by portals that have been created by a huge imbalance of energies...\"<br>\"...subworlds seem to be branches from the real world. These branches can be differences in genetics, land, time, and others...\"<br>\"...There hasn't been enough research conducted...\"<br>\"...I've been stuck here, but I think I know how to get out. If this is the last entry, I have escaped.\"<br>Then there's nothing else. There aren't any mentions of what was done to escape, but at least that means it's possible.<br><br>What do you do?",
    choices: [
      { text: "Look around a bit more.", goto: "36" },
      { text: "Go down the windy road.", goto: "37" }
    ]
  },
  "36": {
    story: "You start to walk around the room looking for more things if possible. You trip over a thin string and set off a trap. Before you know it you're dead.",
    end: "YOU LOSE."
  },
  "37": {
    story: "Go down the curvy road. You finally reach the end of the road and see a room. The door is very familiar. You open it and go in. It’s a perfect replica room. Everything is the exact same. WHOOOOSH. The door closes with a slam. It seems as if something changed. You go to check if you are still in the mansion. You open the door and now you’re in your house as you were before.",
    end: "YOU WIN."
  }
};

// ========== DOM Elements ==========
const titleEl = document.getElementById('title');
const subtitleEl = document.getElementById('subtitle');
const storyEl = document.getElementById('story');
const choicesEl = document.getElementById('choices');
const endEl = document.getElementById('end');
const bgm = document.getElementById('bgm');
const thunder = document.getElementById('thunder'); // Retained, but not actively used by new story logic

// ========== Utility ==========
function playBGM() {
  bgm.volume = 0.25;
  bgm.play().catch(()=>{}); // Catch autoplay errors
}

function playThunder() { // Retained, can be called if needed
  thunder.currentTime = 0;
  thunder.volume = 0.5;
  thunder.play().catch(()=>{});
}

function animateStory() {
  storyEl.style.opacity = 0.3;
  setTimeout(() => {
    storyEl.style.transition = "opacity 0.9s";
    storyEl.style.opacity = 1;
  }, 60);
}

// ========== Rendering ==========
function render() {
  const slideId = gameData.slide;
  const slide = slides[slideId];

  if (!slide) {
    console.error("Error: Slide " + slideId + " not found!");
    storyEl.innerHTML = "Error: Story progression broken. Please restart.";
    choicesEl.innerHTML = "";
    titleEl.textContent = "Error";
    subtitleEl.textContent = "";
    endEl.innerHTML = `<br><button id="restart">Restart Adventure</button>`;
    if(document.getElementById('restart')) {
        document.getElementById('restart').onclick = restartGame;
    }
    return;
  }

  let mainStory = slide.story || "";
  let currentChoices = slide.choices || []; // Renamed from 'choices' to avoid conflict
  let ending = slide.end || "";

  // Clear title and subtitle elements as per new requirement
  titleEl.textContent = "";
  subtitleEl.textContent = "";

  storyEl.innerHTML = mainStory;
  animateStory();

  // Choices
  choicesEl.innerHTML = ""; // Clear previous choices

  if (currentChoices && currentChoices.length > 0) {
    currentChoices.forEach(choice => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.textContent = choice.text;
      btn.onclick = () => {
        // No complex inventory actions or special slide logic from original game needed here
        gameData.slide = choice.goto;
        render(); // Re-render for the new slide
      };
      li.appendChild(btn);
      choicesEl.appendChild(li);
    });
  }

  // Endings
  endEl.innerHTML = ""; // Clear previous end message
  if (ending) {
    endEl.innerHTML = `<span>${ending}</span>`;
    choicesEl.innerHTML = ''; // Clear choices on game end
    setTimeout(() => {
      endEl.innerHTML += `<br><button id="restart">Restart Adventure</button>`;
      if(document.getElementById('restart')) {
          document.getElementById('restart').onclick = restartGame;
      }
    }, 1000); // Delay for restart button appearance
  }
}

// ========== Game Control ==========
function restartGame() {
  gameData.inventory = {}; // Reset inventory
  gameData.slide = "1";    // Reset to start slide
  render();
}

// ========== Audio and Start ==========
window.onload = function() {
  playBGM(); // Start background music
  render();  // Render the initial slide
  // The specific thunder trigger on story click from the old game is removed
  // as it's not part of the new story's explicit requirements.
};