  // Function to apply theme
  function applyTheme(theme) {
    const themes = {
        'aries': {
          '--background-color': '#ffa69e', //website bg
          '--header-bgcolor': '#B8336A', //header bg color
          '--outline-color': '#8882e4', //button outline color
          '--button-text-color': '#f7f4e3', //text color of button
          '--horoscope-color': '#476CB0' //horoscope text color
        },
        'taurus': {
          '--background-color': '#a9e3a3',
          '--prompt-container-bgcolor': '#adfbc4',
          '--header-bgcolor': '#8c69d3',
          '--outline-color': '#559a60',
          '--hr-color': '#17908a',
          '--button-textcolor': '#fff',
          '--button-hovercolor': '#000',
          '--prompt-color': '#33b876',
          '--filter-title-bgcolor': '#8b86d0',
          '--form-bgcolor': '#57c8a2',
          '--form-shadow': '#0f5c49',
          '--scroll-bgcolor': '#b0d891',
          '--scroll-color': '#70cf6d',
          '--textbox-color': 'rgba(250, 250, 250, 0.2)',
          '--bgcolor': 'rgb(26,94,79)'
        },   
        'gemini': {
          '--background-color': '#ceb1be',
          '--prompt-container-bgcolor': '#b97375',
          '--header-bgcolor': '#799185',
          '--outline-color': '#7c4048',
          '--hr-color': '#C4929A',
          '--button-textcolor': '#fff',
          '--button-hovercolor': '#000',
          '--prompt-color': '#9F7277',
          '--filter-title-bgcolor': '#b9739c',
          '--form-bgcolor': '#b290c7',
          '--form-shadow': '#0f355c',
          '--scroll-bgcolor': '#d891f',
          '--scroll-color': '#cf6d96',
          '--textbox-color': 'rgba(250, 250, 250, 0.2)',
          '--bgcolor': 'rgb(94,26,75)'
        },
        'cancer': {
          '--background-color': '#b5e2fa',
          '--prompt-container-bgcolor': '#0fa3b1',
          '--header-bgcolor': '#e4b363',
          '--outline-color': '#5fbcc5',
          '--hr-color': '#925f00',
          '--button-textcolor': '#fff',
          '--button-hovercolor': '#000',
          '--prompt-color': '#ad6a6c',
          '--filter-title-bgcolor': '#86a7d0',
          '--form-bgcolor': '#6d8cc5',
          '--form-shadow': '#0f355c',
          '--scroll-bgcolor': '#d8c491',
          '--scroll-color': '#cfa86d',
          '--textbox-color': 'rgba(250, 250, 250, 0.2)',
          '--bgcolor': 'rgb(26,82,94)'
        },
        'leo': {
          '--background-color': '#9db4b6',
          '--prompt-container-bgcolor': '#007e8c',
          '--header-bgcolor': '#914236',
          '--outline-color': '#0f666f',
          '--hr-color': '#654a0a',
          '--button-textcolor': '#fff',
          '--button-hovercolor': '#000',
          '--prompt-color': '#b86230',
          '--filter-title-bgcolor': '#223168',
          '--form-bgcolor': '#b86230',
          '--form-shadow': '#0f355c',
          '--scroll-bgcolor': '#a86258',
          '--scroll-color': '#914236',
          '--textbox-color': 'rgba(250, 250, 250, 0.2)',
          '--bgcolor': '#007e8c'
        },
        'virgo': {
          '--background-color': '#c6e1bb',
          '--prompt-container-bgcolor': '#869d7a',
          '--header-bgcolor': '#91785d',
          '--outline-color': '#5b764c',
          '--hr-color': '#28522d',
          '--button-textcolor': '#fff',
          '--button-hovercolor': '#000',
          '--prompt-color': '#785a3a',
          '--filter-title-bgcolor': '#223168',
          '--form-bgcolor': '#ACAD8C',
          '--form-shadow': '#0f355c',
          '--scroll-bgcolor': '#9cad8c',
          '--scroll-color': '#859577',
          '--textbox-color': 'rgba(250, 250, 250, 0.2)',
          '--bgcolor': '#457c45'
        },
        'libra': {
          '--background-color': '#9F817F',
          '--prompt-container-bgcolor': '#ECCEAC',
          '--header-bgcolor': '#C44536',
          '--outline-color': '#65473E',
          '--hr-color': '#28522F',
          '--button-textcolor': '#fff',
          '--button-hovercolor': '#000',
          '--prompt-color': '#3D7B46',
          '--filter-title-bgcolor': '#223168',
          '--form-bgcolor': '#4F4F31',
          '--form-shadow': '#474D37',
          '--scroll-bgcolor': '#4F4F31',
          '--scroll-color': '#938f6f',
          '--textbox-color': 'rgba(250, 250, 250, 0.2)',
          '--bgcolor': '#B14736'
        },
        'scorpio': {
          '--background-color': '#E3AA63',
          '--prompt-container-bgcolor': '#F2CD60',
          '--header-bgcolor': '#CE713B',
          '--outline-color': '#E2AE12',
          '--hr-color': '#EA85AF',
          '--button-textcolor': '#fff',
          '--button-hovercolor': '#000',
          '--prompt-color': '#E1518D',
          '--filter-title-bgcolor': '#223168',
          '--form-bgcolor': '#EC979C',
          '--form-shadow': '#EFB27E',
          '--scroll-bgcolor': '#EDABB7',
          '--scroll-color': '#E38092',
          '--textbox-color': 'rgba(250, 250, 250, 0.2)',
          '--bgcolor': '#DC7B75'
        },
        'sag': {
          '--background-color': '#4F7033',
          '--prompt-container-bgcolor': '#b42d1a',
          '--header-bgcolor': '#891515',
          '--outline-color': '#6B1A0F',
          '--hr-color': '#46622D',
          '--button-textcolor': '#fff',
          '--button-hovercolor': '#000',
          '--prompt-color': '#BEA660',
          '--filter-title-bgcolor': '#223168',
          '--form-bgcolor': '#9F2118',
          '--form-shadow': '#941B17',
          '--scroll-bgcolor': '#EF9B95',
          '--scroll-color': '#EA7971',
          '--textbox-color': 'rgba(250, 250, 250, 0.2)',
          '--bgcolor': '#79291B'
        },
        'capricorn': {
          '--background-color': '#ffffe0',
          '--prompt-container-bgcolor': '#ff6163',
          '--header-bgcolor': '#72a8ff',
          '--outline-color': '#ff3639',
          '--hr-color': '#ffd670',
          '--button-textcolor': '#fff',
          '--button-hovercolor': '#000',
          '--prompt-color': '#ff8356',
          '--filter-title-bgcolor': '#223168',
          '--form-bgcolor': '#9F2118',
          '--form-shadow': '#941B17',
          '--scroll-bgcolor': '#EF9B95',
          '--scroll-color': '#EA7971',
          '--textbox-color': 'rgba(250, 250, 250, 0.2)',
          '--bgcolor': '#79291B'
        },
        'aquarius': {
          '--background-color': '#ffffe0',
          '--prompt-container-bgcolor': '#ff6163',
          '--header-bgcolor': '#72a8ff',
          '--outline-color': '#ff3639',
          '--hr-color': '#ffd670',
          '--button-textcolor': '#fff',
          '--button-hovercolor': '#000',
          '--prompt-color': '#ff8356',
          '--filter-title-bgcolor': '#223168',
          '--form-bgcolor': '#9F2118',
          '--form-shadow': '#941B17',
          '--scroll-bgcolor': '#EF9B95',
          '--scroll-color': '#EA7971',
          '--textbox-color': 'rgba(250, 250, 250, 0.2)',
          '--bgcolor': '#79291B'
        },
        'pisces': {
          '--background-color': '#ffffe0',
          '--prompt-container-bgcolor': '#ff6163',
          '--header-bgcolor': '#72a8ff',
          '--outline-color': '#ff3639',
          '--hr-color': '#ffd670',
          '--button-textcolor': '#fff',
          '--button-hovercolor': '#000',
          '--prompt-color': '#ff8356',
          '--filter-title-bgcolor': '#223168',
          '--form-bgcolor': '#9F2118',
          '--form-shadow': '#941B17',
          '--scroll-bgcolor': '#EF9B95',
          '--scroll-color': '#EA7971',
          '--textbox-color': 'rgba(250, 250, 250, 0.2)',
          '--bgcolor': '#79291B'
        }
    };

    const root = document.documentElement;
    const themeVariables = themes[theme];
    Object.keys(themeVariables).forEach(property => {
        root.style.setProperty(property, themeVariables[property]);
    });

    // Store selected theme in localStorage for persistence
    localStorage.setItem('selectedTheme', theme);
}

document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners to theme toggle buttons
  document.getElementById("aries").addEventListener('click', function() {
      applyTheme('aries');
  });
  document.getElementById('taurus').addEventListener('click', function() {
      applyTheme('taurus');
  });
  document.getElementById("gemini").addEventListener('click', function() {
      applyTheme('gemini');
  });
  document.getElementById('cancer').addEventListener('click', function() {
      applyTheme('cancer');
  });
  document.getElementById('leo').addEventListener('click', function() {
      applyTheme('leo');
  });
  document.getElementById('virgo').addEventListener('click', function() {
      applyTheme('virgo')
  });
  document.getElementById('libra').addEventListener('click', function() {
    applyTheme('libra')
  });
  document.getElementById('sag').addEventListener('click', function() {
  applyTheme('sag')
  });
  document.getElementById('capricorn').addEventListener('click', function() {
    applyTheme('capricorn')
    });
  document.getElementById('aquarius').addEventListener('click', function() {
    applyTheme('aquarius')
    });
document.getElementById('pisces').addEventListener('click', function() {
    applyTheme('pisces')
    });


function loadSelectedTheme() {
    const selectedTheme = localStorage.getItem('selectedTheme');
    if (selectedTheme) {
        applyTheme(selectedTheme);
    }
    }

    const horoscopes = {
        aries: [
            "You will look towards your professional growth and realise you are way further along the road than you expected to be.",
            "If you are considering kicking some unhealthy habits then start now - don't wait until January!",
            "You may find that not everyone is proud of your achievements, and that is fine. However, when it is sheer jealousy driving their emotions it makes them look ugly, and you will come out on top.",
            "You will be feeling more playful as the week progresses which will culminate in an exciting weekend!",
            "You're often in the spotlight and enjoy organising people but this week you will be more content to sit back and allow others to take charge.",
            "An obstacle that you face early in the week isn’t as daunting as it first appears. Step back, assess then form a game plan and it will work out in your favour.",
            "We are the product of our experiences, Aries. Understanding why you are who you are is vital in being able to forge lasting relationships.",
            "You may find yourself getting carried away this week, Aries. Whilst it’s good to have goals they need to be achievable so temper your expectations.",
            "You may find yourself enjoying your own company, Aries. That’s understandable considering recent events but be careful not to close yourself off too much.",
            "Good karma is finding it’s way back to you, Aries. You’ve earned it, it’s yours so enjoy it for what it is.",
            "Commitment is in your near future",
            "Hard work is in your near future",
            "You will gain wisdom today",
            "You will ace your next course",
            "You will ace your next exam"
        ],
        taurus: [
            "When looking towards your long term goals you may be feeling cautious. Nothing ventured, nothing gained so go for it with everything you’ve got.",
            "You are in the perfect position to make positive changes in your workplace.",
            "Be supportive when you see a colleague struggling, whether they accept your help or not is down to them.",
            "You need to come out of your comfort zone this week. Allow yourself to do something that excites you and maybe scares you a little – you will come away from this feeling empowered and ready to take on more in a different area of your life.",
            "Everyone shows their affection in different ways so it may be that you need to adjust your expectations.",
            "Early in the week you may feel torn at work, Taurus. A long standing colleague is struggling and you may have to cover for them.",
            "As the week starts you will feel like asserting your independence, Taurus. It will be a good opportunity to think about striking out on your own, especially if you’re thinking of starting your own business.",
            "Try to break free from interfering, Taurus as it could get you in trouble. Sometimes you don’t even realise that you are meddling!",
            "If you’re single, try engaging with a community event where you will meet lots of different types of people.",
            "You will feel in synch with a loved one, Taurus. Your hard work at improving communication has paid off and it’s time to enjoy more spontaneous, care free time together.",
            "You will be successful in your career",
            "You need to change your career path",
            "You need to treat yourself",
            "Love is coming for you",
            "Friendship is on its way"
        ],
        gemini: [
            "The higher ups are interested in hearing about your log term goals. Don’t be shy – tell them what you believe you are capable of, then show them when the opportunity presents itself.",
            "There’s lot to plan this week and your first priority is a long awaited holiday.",
            "You will learn some useful information which you will rely on later down the line. It might be a good idea to write it down while you remember so that you can accurately record it in future conversations.",
            "You may be feeling extra sensitive this week, Gemini. Not only will your own feelings be at the forefront of everything but you will tune into others, too.",
            "If you’re starting a new relationship, consider opening up about what you want long term to ensure that you are both on the same page before feelings get too involved.",
            "Think about what you have to say and how you say it before you broach a difficult topic.",
            "Showing your manager your desire to learn will carve the way for a promotion. Put your best foot forward and communicate your ideas as they will be well received.",
            "Prioritise time with friends and loves ones this week, Gemini. You’ve been absent both physically and emotionally and they miss you!",
            "A new arrival in the workplace will bring about well needed changes, Gemini. It’s normal to resist the unknown but they really will change things for the greater good.",
            "You need to study your interests",
            "You will receive a message from a past soul today",
            "You will receive a message from a loved one",
            "You will see a message from your soulmate",
            "You are full of love and passion"
        ],
        cancer: [
            "You will be expected to step up to the plate at work much to your annoyance.",
            "This week is about new experiences, Cancer. Look at ways to spend quality alone time with your partner, something different and unusual which will bond you further.",
            "You will face a struggle this week, Cancer. However, you will be able to turn it to your favour if you play you cards correctly.",
            "You need to find the nerve to have a heart to heart with a loved one. If you pick your moment carefully it will be productive and bring a sense of calm to you both.",
            "Your thoughts and feelings are just as important as anyone else’s so don’t let a certain someone tell you otherwise.",
            "You may feel like plotting an escape but the reality is a good weekend away is probably all that you need.",
            "Consider breaking out of your daily routine and doing something just for you.",
            "Being there for others is a lovely trait but someone in particular is taking up a lot of your time.",
            "Do you find your work fulfilling, Cancer? If not it is a good time to put the feelers out to see what is out there. It seems it is time to move on as you’ve achieved all that you can in your current role.",
            "It’s time to have a conversation with a loved one on a deeper level, Cancer. They seem unable to comprehend that their life choices are causing them harm and an intervention is needed.",
            "You will have a blissful evening",
            "You will max out your 401K",
            "You need to focus on saving",
            "Your emotions are soaring, Cancer, and you should feel free to indulge in your greatest fantasies.",
            "You will need to focus on your health"
        ],
        leo: [
            "Speak to your significant other about your desires, you may be surprised by their enthusiastic reaction!",
            "A unique career opportunity will be presented to you but you will dismiss it from the outset.",
            "Your reputation is important to allow your career to grow. Be careful of what you get involved with as it could have a negative impact on future prospects.",
            "You may be thinking of overhauling your health routine. Take advantage of a new class that is starting nearby, it will not only be good for your waistline it will also put you in touch with some undiscovered friends.",
            "Listen to your heart as it will let you know what is truly right for you.",
            "Are you feeling that your needs are being unmet, Leo? If so, you need to make yourself a priority for once.",
            "You are feeling extra playful and spontaneous this week, Leo. This will bring an interesting mix of social engagements with friends and new acquaintances.",
            "You don’t have to face life’s challenges alone, Leo. Reach out to a trusted friend or colleague and share your worries.",
            "You will have much energy and focus this week Leo. Put into place an action plan to achieve your goal and watch yourself smash it!",
            "You like to plan, Leo that much is true but you shouldn’t expect everything to pan out exactly as you expect it to.",
            "You are strong and independent",
            "You are calm and zen",
            "You are fabulous and stylish" ,
            "You are smart and wise",
            "You are financially responsible"
        ],
        virgo: [
            "You think before you speak",
            "You know what you want and go for it",
            "You take challenges with grace",
            "You are an advocate of the world",
            "You are a lost soul"
            
        ],
        libra: [
            "You are adventurous",
            "You are going down the wrong path",
            "You will encounter a creature that frightens you",
            "You may have some feelings of numbness",
            "You seek adventure"
            
        ],
        scorpio: [
            "You will achieve your tasks",
            "You will have increased energy",
            "You will have to watch out for the people close to you",
            "You are motherly and care about others",
            "You are a colorful person"
            
        ],
        sag: [
            "Document your future",
            "You have a lot to see in your future",
            "You will receive fulfillment today",
            "You will see love all around you",
            "You will find family away from yours"

          ],
          capricorn: [
            "You value family and bloodline",
            "You learn to deal with your stresses",
            "You will fight through your struggles",
            "You make great decisions",
            "You are expressive and true to yourself"

          ],
          aquarius: [
            "You are great at making friends",
            "You get along with everyone",
            "You are beautiful",
            "You are hydrated",
            "You are healthy and strong"

          ],
          pisces: [
            "You are fulfilled with love",
            "You are fulfilled with work",
            "You are fulfilled with your surroundings",
            "You are fashionable",
            "You are kind"

          ]
      };

      function getRandomPrompt(sheetName) {
        const prompts = horoscopes[sheetName];
        if (!prompts || prompts.length === 0) {
          console.error(`No prompts found for sheet "${sheetName}".`);
          return;
        }
      
        const randomIndex = Math.floor(Math.random() * prompts.length);
        const randomPrompt = prompts[randomIndex];
      
        const promptElement = document.querySelector('#h1Title');    
        promptElement.textContent = randomPrompt;
      }

      const seriousPrompt = document.getElementById('seriousPrompt');
        seriousPrompt.addEventListener('click', () => {
        getRandomPrompt('serious');
});