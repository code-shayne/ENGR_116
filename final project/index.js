  // Function to apply theme
  function applyTheme(theme) {
    const themes = {
        'aries': {
          '--background-color': '#ffa69e', //website bg
          '--header-bgcolor': '#B8336A', //header bg color
          '--button-color': '#8882e4', //button color
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
});

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
            "You are a lost soul",
            "Details matter so ensure you research and clarify pertinent details for a work project.",
            "If you’ve been dealing with a setback or delay then be prepared for it to suddenly come good.",
            "If you’re planning on travelling this week, Virgo then double check routes and times.",
            "Owning your own feelings is liberating, Virgo. Hiding your wants and dreams is a sure fire way to be disappointed with your lot.",
            "If your relationship is plodding along then schedule some one on one time together where you don’t talk about work, the house or the kids.",
            "You are soul searching but coming up empty. You don’t need to do this alone, ask friends and family to help you as they know you best and you’ll be surprised at their suggestions.",
            "Focus on ways you can reconnect with your significant other, Virgo.",
            "Your analytical tendencies have served you well, Virgo. They will keep you in demand in the workplace and keep your career progressing, however, using the same skills on people can be to your detriment.",
            "You’ve made such good progress and are near to your goal, so don’t give up now. One last little push will get you over the finish line.",
            "As a new week starts you will be craving to spend time with a new love interest or significant other."
        ],
        libra: [
            "You are adventurous",
            "You are going down the wrong path",
            "You will encounter a creature that frightens you",
            "You may have some feelings of numbness",
            "You seek adventure",
            "If your schedule is worrying you then consider cancelling a few social engagements.",
            "Don’t let something that is bothering you fester. A heart to heart will clear the air and make things so much clearer.",
            "If you’re on the market for a new partner then you may meet your match this week, Libra.",
            "Research new ways to keep your health and fitness on track. You appear to be tiring of your current schedule and the rewards aren’t as good as you had hoped.",
            "Make spending time with loved ones a priority this week. You will find yourself relaxing and laughing which you’ve not experienced much of recently.",
            "No, life isn’t always fair but you should still seek justice and equality in the workplace.",
            "At work, there is something in the pipeline for you, Libra. It will become clear towards the end of the week what it is.",
            "Your self confidence is growing, Libra. This week is perfect to raise an emotional issue with a loved one or close friend.",
            "There are some great changes ahead, Libra. One change is a relief of a financial burden, maybe a debt will be repaid or some unexpected money will find it’s way to you.",
            "You have an urge to get to the bottom of a family matter and this is the week that you do."   
        ],
        scorpio: [
            "You will achieve your tasks",
            "You will have increased energy",
            "You will have to watch out for the people close to you",
            "You are motherly and care about others",
            "You are a colorful person",
            "You may be used to hiding your feelings but this isn’t the time to hold back.",
            "You may be feeling drawn to help your community in some way and you should definitely follow this through.",
            "You have the right to stand your ground and be assertive and don’t let anyone tell you otherwise!",
            "Try to stay centred in your own emotions when helping others navigate dark days.",
            "Someone in authority needs to catch up with you. Don’t worry, it’s not a serious matter so stop avoiding it!",
            "Someone has been greedy in wanting all of your attention and you need to put a stop to it.",
            "It’s important to be able to communicate how you feel effectively, Scorpio.",
            "Embrace your impulses, Scorpio. Never mind what others may think, change your hair if you want and buy that dress that you’re scared of being judged for – who cares!",
            "You have faced many challenges in your life alone, Scorpio. It doesn’t have to be this way, reach out to those that care about you and share your worries and concerns.",
            "This week, you will be inclined to prioritise fun, serotonin inducing behaviours. And why not?"            
        ],
        sag: [
            "Document your future",
            "You have a lot to see in your future",
            "You will receive fulfillment today",
            "You will see love all around you",
            "You will find family away from yours",
            "Focus on the activities that bring you pleasure and do your best to carve out time to do it more.",
            "You may be pushed into the spotlight at work this week and you should embrace it, not fear it.",
            "You are hungry for something challenging and will consider leaving your current role.",
            "You will be expressive and vivacious this week and others will see you in a different light.",
            "You can shape your own destiny, within reason of course. Don’t just accept what you are given, go out into the world and take what you want.",
            "Your energy is turned up to the max and you are lots of fun to be around.",
            "Sometimes, being spontaneous turns out to be a lot of fun so go with the flow this week and accept invitations you would usually turn down.",
            "You may feel your sense of security within a love match is waning, Saggi. As the week progresses, this will pass, and you will realise the opposite is in fact true.",
            "With courage and determination you get can through most things, Saggi. However, you feel there’s an obstacle that you can’t quite get over, why is that?",
            "You may be focussing on your living space this week and it is time to get the little odd jobs done and dusted before winter arrives."
          ],
          capricorn: [
            "You value family and bloodline",
            "You learn to deal with your stresses",
            "You will fight through your struggles",
            "You make great decisions",
            "You are expressive and true to yourself",
            "You’ve a busy schedule ahead and it will be an exhausting week. Make up for it at the weekend by ensuring you don’t fill up your diary with social engagements that you don’t want to attend anyway!",
            "Money matters have been weighing on your mind and this week will bring some much needed clarity.",
            "You have many good ideas and lots to contribute so what is stopping you? Speak up and get involved.",
            "If you are feeling a little blue, then look at how you prioritise you own health and wellbeing.",
            "You will make an impact this week and it will go in your favour when negotiating terms for a new role.",
            "Looking on the bright side isn’t always the answer. You are smart enough to not brush things under the carpet and expect them to be forgotten.",
            "A stimulating conversation will have you look at someone with fresh eyes – a possible love match, Capricorn?",
            "You should trust where you are being guided spiritually this week, Capricorn.",
            "You know you’ve been coasting at work and it needs to stop. You may think it’s not worth the effort but you’ve stagnated for far too long and can achieve so much more!"
          ],
          aquarius: [
            "You are great at making friends",
            "You get along with everyone",
            "You are beautiful",
            "You are hydrated",
            "You are healthy and strong",
            "The early part of the week will bring a chance to catch up with friends and it is long overdue.",
            "You may find yourself soul searching and looking for answers when the best thing would be to just get it straight from the horse’s mouth so to speak.",
            "A family reunion is just around the corner and you couldn’t be less enthusiastic if you tried.",
            "Look at your budget before committing to investments that make some time to realise.",
            "Try to maintain your composure during a tricky period at work. Speaking out in frustration may come back to bite you so do keep the worst of it to yourself!",
            "You’ve got a lot on your plate with work, errands, socialising etc. Getting stressed isn’t good so try to breakdown your diary into manageable portions.",
            "Seek advice on money making strategies and follow it carefully",
            "You will feel drawn to a business proposal that you would never usually consider.",
            "At work, putting your hand up to learn new skills will earn you brownie points.",
            "A collaboration with a colleague will propel your career. Don’t dismiss an idea because you don’t feel that you have the necessary skills, take your project to someone who does and watch it fly."
          ],
          pisces: [
            "You are fulfilled with love",
            "You are fulfilled with work",
            "You are fulfilled with your surroundings",
            "You are fashionable",
            "You are kind",
            "An item that you’ve put off selling has increased in value significantly. Now is surely the time to market it in as many places as possible.",
            "One on one relationships will flourish this week. Whether that be friends, family or your lover, you will find yourself forming deeper connections.",
            "You may find yourself making decisions based on appearances rather than emotion this week.",
            "Your empathetic side is going to be put to use this week, Pisces. You will feel like you must help everyone who comes to you but you really don’t.",
            "Your leadership abilities are strengthening and you should stray out of your comfort zone by applying for roles with more responsibility.",
            "You love to be at home and will enjoy your own company this week, Pisces. That’s fine as long as you don’t hibernate for the winter!",
            "Sometimes it is easier to write your feelings down rather than speak about them, Pisces.",
            "You will be inclined to daydream more than usual this week, Pisces. The truth of the matter is that a lot of what you wish for can happen with a little hard work and commitment to the cause.",
            "You feel like you have been betrayed, Pisces. The truth of the matter is that they had your best interests at heart and didn’t mean to hurt you.",
            "If you feel like your heart is being taken for granted then you must do something about it. Speak up and make sure you are heard, otherwise nothing will change."
          ]
      };

      function getRandomHoroscope(sheetName) {
        const scopes = horoscopes[sheetName];
        if (!scopes || scopes.length === 0) {
          console.error(`No scopes found for sheet "${sheetName}".`);
          return;
        }
      
        const randomIndex = Math.floor(Math.random() * scopes.length);
        const randomScopes = scopes[randomIndex];
      
        const scopeElement = document.getElementById('title');    
        scopeElement.textContent = randomScopes;
      }

      const aries = document.getElementById('aries');
        aries.addEventListener('click', () => {
        getRandomHoroscope('aries');
      })
      const taurus = document.getElementById('taurus');
        taurus.addEventListener('click', () => {
        getRandomHoroscope('taurus');
      })
      const gemini = document.getElementById('gemini');
        gemini.addEventListener('click', () => {
        getRandomHoroscope('gemini');
      })
      const cancer = document.getElementById('cancer');
        cancer.addEventListener('click', () => {
        getRandomHoroscope('cancer');
      })
      const leo = document.getElementById('leo');
        leo.addEventListener('click', () => {
        getRandomHoroscope('leo');
      })
      const virgo = document.getElementById('virgo');
        virgo.addEventListener('click', () => {
        getRandomHoroscope('virgo');
      })
      const libra = document.getElementById('libra');
        libra.addEventListener('click', () => {
        getRandomHoroscope('libra');
      })
      const scorpio = document.getElementById('scorpio');
        scorpio.addEventListener('click', () => {
        getRandomHoroscope('scorpio');
      })
      const sag = document.getElementById('sag');
        sag.addEventListener('click', () => {
        getRandomHoroscope('sag');
      })
      const capricorn = document.getElementById('capricorn');
        capricorn.addEventListener('click', () => {
        getRandomHoroscope('capricorn');
      })
      const aquarius = document.getElementById('aquarius');
        aquarius.addEventListener('click', () => {
        getRandomHoroscope('aquarius');
      })
      const pisces = document.getElementById('pisces');
        pisces.addEventListener('click', () => {
        getRandomHoroscope('pisces');
      })

      function keepBigButShowTXT() {
        const horos = document.getElementById("title");
        horos.style.visibility = "visible";
    }