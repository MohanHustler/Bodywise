export const StaticData = {
  stepperLoggedinUser: [
    {
      title: "Address",
      status: "active"
    },
    {
      title: "Summary",
      status: "inactive"
    },
    {
      title: "Payment",
      status: "inactive"
    }
  ],
  stepperGuestUser: [
    {
      title: "Address",
      status: "active"
    },
    {
      title: "OTP",
      status: "inactive"
    },
    {
      title: "Summary",
      status: "inactive"
    },
    {
      title: "Payment",
      status: "inactive"
    }
  ],
  consultDummyData: {
    basic: {
      select_category: {
        name: "category",
        header: "++first_name++'s Wellness Goals",
        question: "I would like to discuss my ++input++ concern(s) today",
        sub_text: "You can choose more than one",
        input: "select-checkbox",
        options: [
          {
            value: "Hair",
            text: "Avoid Hair Loss",
            icon: "url",
            option: 0
          },
          {
            value: "Performance",
            text: "Improve Intimate Experience",
            icon: "url",
            option: 1
          },
          {
            value: "Weight",
            text: "Manage Weight",
            icon: "url",
            option: 2
          },
          {
            value: "Sleep",
            text: "Improve Sleep Quality",
            icon: "url",
            option: 3
          },
          {
            value: "all",
            text: "All of the above",
            icon: "url",
            override: "all",
            option: 4
          }
        ]
      },
      input: {
        first_name: {
          id: "first_name",
          name: "First Name",
          type: "input-text",
          pattern: []
        },
        last_name: {
          id: "last_name",
          name: "Last Name",
          type: "input-text",
          pattern: []
        },
        age: {
          id: "age",
          name: "Age",
          type: "input-text",
          pattern: []
        },
        weight: {
          id: "weight",
          name: "Weight",
          type: "input-text",
          pattern: []
        },
        height: {
          id: "height",
          name: "height",
          type: "input-text",
          pattern: []
        }
      }
    },
    Hair: {
      current_condtion_hair: {
        name: "current_condtion_hair",
        display_type: "q",
        question: "I have",
        sub_text: "You can choose more than one",
        input: "select-checkbox",
        showNextItem: true,
        options: {
          "1": {
            text: "Good Hair and Clean Scalp",
            icon: "url",
            option: "1",
            score: 0,
            product: ["1605", "1610"]
          },
          "2": {
            text: "Dandruff and Itchy Scalp",
            icon: "url",
            option: "2",
            score: -20,
            product: ["1605", "1610", "001"]
          },
          "3": {
            text: "Greasy Hair",
            icon: "url",
            option: "3",
            score: -20,
            product: ["1605", "1610", "002"],
            recommend: ["1587"]
          },
          "4": {
            text: "Dull and Frizzy Hair",
            icon: "url",
            option: "4",
            score: -20,
            product: ["1605", "1610"]
          },
          "5": {
            text: "Premature Greying",
            icon: "url",
            option: "5",
            score: -20,
            product: ["1605", "1610"]
          },
          "6": {
            text: "Some Hair Loss and Thinning",
            icon: "url",
            option: "6",
            score: -20,
            product: ["1605", "1610"]
          }
        },
        conditions: {}
      },
      describe_hair_loss: {
        display_type: "q",
        name: "describe_hair_loss",
        question: "I describe my hair loss as",
        sub_text: "",
        input: "select",
        ans_text: "",
        options: [
          {
            text: "Head full of Hair",
            icon: "url",
            option: "1",
            score: 20
          },
          {
            text: "Receding Hairline",
            icon: "url",
            option: "2",
            score: -20,
            product: ["1613"]
          },
          {
            text: "Thinning Crown",
            icon: "url",
            option: "3",
            score: -20,
            product: ["1613"]
          },
          {
            text: "Both Hairline and Crown",
            icon: "url",
            option: "4",
            score: -20,
            product: ["1613"]
          }
        ],
        conditions: {
          current_condtion_hair: ["6"]
        }
      },
      start_hair_loss: {
        name: "start_hair_loss",
        display_type: "q",
        question: "I noticed my hair loss in the past",
        sub_text: "",
        input: "select",
        ans_text: "",
        options: {
          "1": {
            text: "0 - 6 months",
            icon: "",
            option: "1",
            score: 0
          },
          "2": {
            text: "6 - 12 months",
            icon: "",
            option: "2",
            score: 0
          },
          "3": {
            text: "1 - 2 years",
            icon: "",
            option: "3",
            score: -20
          },
          "4": {
            text: "2 - 5 years",
            icon: "",
            option: "4",
            score: -20
          },
          "5": {
            text: "5 years +",
            icon: "",
            option: "5",
            score: -20
          }
        },
        conditions: {
          current_condtion_hair: ["6"]
        }
      },
      hair_treatments: {
        name: "hair_treatments",
        display_type: "q",
        question: "I have tried ",
        sub_text: "You can choose more than one",
        input: "select-checkbox",
        ans_text: "",
        options: {
          "1": {
            text: "Anti Hair Fall Shampoo",
            icon: "",
            option: "1"
          },
          "2": {
            text: "Biotin Supplements",
            icon: "",
            option: "2"
          },
          "3": {
            text: "Minoxidil",
            icon: "",
            option: "3"
          },
          "4": {
            text: "Finasteride",
            icon: "",
            option: "4"
          },
          "5": {
            text: "Home Remedies",
            icon: "",
            option: "5"
          },
          "6": {
            text: "Hair Growth Oil",
            icon: "",
            option: "6"
          }
        },
        conditions: {
          current_condtion_hair: ["6"]
        }
      },
      hair_identify: {
        name: "hair_identify",
        display_type: "q",
        question: "Which of the following you identify with?",
        sub_text: "You can choose more than one",
        input: "checkbox",
        ans_text: "",
        options: {
          "1": {
            text: "I have brittle hair; breaks easily",
            icon: "",
            option: "1",
            product: ["002"]
          },
          "2": {
            text: "I use a lot of styling products",
            icon: "",
            option: "2"
          },
          "3": {
            text: "I have never used a conditioner",
            icon: "",
            option: "3"
          },
          "4": {
            text: "I wash my hair more than once a day",
            icon: "",
            option: "4"
          },
          "5": {
            text: "I keep track of the number of hair strands falling",
            icon: "",
            option: "5"
          },
          "6": {
            text: "None of the above",
            icon: "",
            option: "6"
          }
        },
        conditions: {},
        qoute:
          "An average male loses anywhere around 100 to 150 strands of hair per day. It is absolutely normal, don't Count. :)"
      },
      family_hair_loss: {
        display_type: "q",
        name: "family_hair_loss",
        question: "Does anyone in your close family have hair loss?",
        sub_text: "",
        input: "radio",
        ans_text: "",
        options: {
          "1": {
            text: "Yes",
            icon: "",
            option: "1"
          },
          "2": {
            text: "No",
            icon: "",
            option: "2"
          }
        },
        conditions: {},
        qoute:
          "50% of Male Pattern Baldness can be attributed to hereditary roots. However, 99% of hereditary Male Pattern Baldness is treatable by taking early preventive actions"
      }
    },
    Performance: {
      first_time_performance: {
        display_type: "q",
        name: "first_time_performance",
        question: "I had sex ",
        sub_text: "",
        input: "select",
        ans_text: "",
        options: {
          "1": {
            text: "Recently",
            icon: "",
            option: "1"
          },
          "2": {
            text: "> 6 months ago",
            icon: "",
            option: "2"
          },
          "3": {
            text: "> 1 year ago",
            icon: "",
            option: "3"
          },
          "4": {
            text: ">  5 years ago",
            icon: "",
            option: "4"
          },
          "5": {
            text: "Yet to experience it",
            icon: "",
            option: "5"
          }
        },
        conditions: {},
        qoute: ""
      },
      frequency_performance: {
        display_type: "q",
        name: "frequency_performance",
        question: "I normally have sex ",
        sub_text: "",
        input: "select",
        ans_text: "",
        options: {
          "1": {
            text: "Once a month",
            icon: "",
            option: "1"
          },
          "2": {
            text: "Once in two weeks",
            icon: "",
            option: "2"
          },
          "3": {
            text: "Once a week",
            icon: "",
            option: "3"
          },
          "4": {
            text: "More than once a week",
            icon: "",
            option: "4"
          },
          "5": {
            text: "Its been a while since I have been active",
            icon: "",
            option: "5"
          }
        },
        conditions: {},
        qoute:
          "Remember, it’s not about the number, but your experience that counts"
      },
      foreplay_performance: {
        display_type: "q",
        name: "foreplay_performance",
        question: "Do you indulge in any foreplay before sex?",
        sub_text: "",
        input: "radio",
        ans_text: "",
        options: {
          "1": {
            text: "Never",
            icon: "",
            option: "1"
          },
          "2": {
            text: "Sometimes",
            icon: "",
            option: "2"
          },
          "3": {
            text: "Most of the times",
            icon: "",
            option: "3"
          },
          "4": {
            text: "Always ",
            icon: "",
            option: "4"
          }
        },
        conditions: {},
        qoute: "Sexual foreplay means more sex. And that’s always good"
      },
      drive_performance: {
        display_type: "q",
        name: "drive_performance",
        question: "How would you describe your sex drive over the past year?",
        sub_text: "",
        input: "radio",
        ans_text: "",
        options: {
          "1": {
            text: "Low (don't feel like it)",
            icon: "",
            option: "1",
            product: ["478815"]
          },
          "2": {
            text: "Medium (on and off)",
            icon: "",
            option: "2",
            product: ["478815"]
          },
          "3": {
            text: "High (feel aroused very regularly)",
            icon: "",
            option: "3"
          }
        },
        conditions: {},
        qoute: ""
      },
      erections_performance: {
        display_type: "q",
        name: "erections_performance",
        question: "Which of the following you identify with?",
        sub_text: "",
        input: "radio",
        ans_text: "",
        options: {
          "1": {
            text: "I have no issues maintaining my erection ",
            icon: "",
            option: "1",
            product: ["1629"]
          },
          "2": {
            text:
              "Ocassionally, my erection is not hard enough to penetrate my partner",
            icon: "",
            option: "2",
            product: ["1629"]
          },
          "3": {
            text: "Sometimes, I find it difficult to maintain my erection",
            icon: "",
            option: "3",
            product: ["1629"]
          },
          "4": {
            text:
              "Most of the times, I find it difficult to get and maintain an erection",
            icon: "",
            option: "4",
            product: ["1629", "9969"]
          }
        },
        conditions: {},
        qoute:
          'Occasionally experiencing erection problems isn’t necessarily a cause for concern. And it doesn’t necessarily mean you have "Erectile Dysfunction" (Clickable showing Definition, common causes and corrective lifestyle actions)'
      },
      maturbation_performance: {
        display_type: "q",
        name: "maturbation_performance",
        question: "Which of the following you identify with?",
        sub_text: "Mastrubating is normal, fun and healthy!",
        input: "radio",
        ans_text: "",
        options: {
          "1": {
            text: "Poor",
            icon: "",
            option: "1"
          },
          "2": {
            text: "Average",
            icon: "",
            option: "2"
          },
          "3": {
            text: "Strong",
            icon: "",
            option: "3"
          },
          "4": {
            text: "I don't masturbate",
            icon: "",
            option: "4"
          }
        },
        conditions: {},
        qoute:
          "Masturbation by itself is not directly scientifically linked to performance issues. Enjoy your ME time."
      },
      ejaculation_performance: {
        display_type: "q",
        name: "ejaculation_performance",
        question: "Which of the following you identify with?",
        sub_text: "",
        input: "radio",
        ans_text: "",
        options: {
          "1": {
            text: "I ejaculate before penetration",
            icon: "",
            option: "1",
            product: ["1626"]
          },
          "2": {
            text: "I find myself ejaculating too early during sex",
            icon: "",
            option: "2",
            product: ["1626"]
          },
          "3": {
            text: "I have no issues with ejaculation",
            icon: "",
            option: "3"
          }
        },
        conditions: {},
        qoute:
          "If you are experiencing PE on a one-off or ongoing basis, there’s no reason to be alarmed. It is very common!"
      }
    },
    Weight: {
      display_1: {
        display_type: "m",
        main_text: "Let's talk about your Weight!",
        sub_text: "",
        timeout: 4,
        qoute: "Whatever your problem is, the answer is not in the fridge",
        conditions: {}
      },
      gain_loose_weight: {
        display_type: "q",
        name: "gain_loose_weight",
        question: "Which of the following you identify with?",
        sub_text: "",
        input: "radio",
        ans_text: "",
        options: {
          "1": {
            text: "I want to lose weight",
            icon: "",
            option: "1",
            product: ["003"]
          },
          "2": {
            text: "I want to gain weight",
            icon: "",
            option: "2",
            product: ["003"]
          },
          "3": {
            text: "I want to maintain my weight",
            icon: "",
            option: "3",
            product: ["003"]
          },
          "4": {
            text: "None of the above",
            icon: "",
            option: "4"
          }
        },
        conditions: {},
        qoute: ""
      },
      calories_weight: {
        display_type: "q",
        name: "calories_weight",
        question: "Where do you get your calories from?",
        sub_text:
          "Yes, you will have to be honest, though you can select more than one option",
        input: "checkbox",
        ans_text: "",
        options: {
          "1": {
            text: "Fruits and Vegetables",
            icon: "",
            option: "1"
          },
          "2": {
            text: "Whole grains and lean protein",
            icon: "",
            option: "2"
          },
          "3": {
            text: "Nuts and Seeds",
            icon: "",
            option: "3"
          },
          "4": {
            text: "Refined Sugar and Flour",
            icon: "",
            option: "4",
            product: ["9061"]
          },
          "5": {
            text: "Fatty and processed foods",
            icon: "",
            option: "5",
            product: ["9061"]
          },
          "6": {
            text: "All of the above",
            icon: "",
            option: "6",
            override: "all",
            product: ["9061"]
          }
        },
        conditions: {},
        qoute: "Simple question, drives the point is'nt?"
      },
      display_2: {
        display_type: "m",
        main_text: "Let's talk about your Weight!",
        sub_text: "",
        timeout: 4,
        qoute:
          "Don't focus on only the total number of calories and remember, it's QUALITY AND quantity.",
        conditions: {}
      },
      gut_weight: {
        display_type: "q",
        name: "gut_weight",
        question:
          'What is your "GUT" telling you?(Clickable - Your large intestine is a haven for trillions of mutually beneficial microbes that make up your gut microbiota. These gut bacteria form an ecosystem involved in vital functions like metabolism, hunger, and digestion.',
        sub_text: "",
        input: "checkbox",
        ans_text: "I frequently experience",
        options: {
          "1": {
            text: "Gas and Bloating",
            icon: "",
            option: "1",
            product: ["9061"]
          },
          "2": {
            text: "Constipation",
            icon: "",
            option: "2",
            product: ["9061"]
          },
          "3": {
            text: "Acidity and Belching",
            icon: "",
            option: "3",
            product: ["9061"]
          },
          "4": {
            text: "None of the above",
            icon: "",
            option: "4"
          }
        },
        conditions: {},
        qoute:
          "Listen to your gut. Scientists are calling it the second brain for a reason. "
      },
      display_3: {
        display_type: "m",
        main_text:
          "Your gut bacteria have roles in your digestion, fat storage, and hunger, all of which have major impacts on your weight. Also, 90% of the body’s serotonin (happy hormone) and 50% of the body’s dopamine (feel good hormone) actually lies in the gut.",
        sub_text: "",
        timeout: 8,
        qoute:
          "The fastest way to have a significant and lasting positive impact on your microbiome is to eat a healthier diet with lots of fruit and veg, and importantly, less refined sugar.",
        conditions: {}
      }
    },
    Lifestyle: {
      display_1: {
        display_type: "m",
        main_text: "Lets talk about your Lifestyle!",
        sub_text: "",
        timeout: 8,
        qoute:
          "According to WHO, 60% of related factors to individual health and quality of life are correlated to lifestyle. Pushing out unhealthy habits will likely improve many different health aspects.",
        conditions: {}
      },
      display_2: {
        display_type: "m",
        main_text: "Fitness",
        sub_text: "",
        timeout: 4,
        qoute: "",
        conditions: {}
      },
      exercise_lifestyle: {
        category: "Fitness",
        display_type: "q",
        name: "exercise_lifestyle",
        question: "How often do you exercise in a week?",
        sub_text:
          "This could be anything from walking or running to working out at the gym (30 mins or more)",
        input: "radio",
        ans_text: "",
        options: {
          "1": {
            text: "Never",
            icon: "",
            option: "1",
            score: -80,
            recommend: ["9061"]
          },
          "2": {
            text: "Once a week",
            icon: "",
            option: "2",
            score: -60,
            recommend: ["9061"]
          },
          "3": {
            text: "Three to Five times",
            icon: "",
            option: "3",
            score: 0,
            recommend: ["9061"]
          }
        },
        conditions: {},
        qoute: ""
      },
      display_3: {
        display_type: "m",
        main_text: "Nutrition",
        sub_text: "",
        timeout: 4,
        qoute: "",
        conditions: {}
      },
      fruits_veg_lifestyle: {
        category: "Nutrition",
        display_type: "q",
        name: "fruits_veg_lifestyle",
        question:
          "How many portions of fruits and vegetables do you usually eat in a day?",
        sub_text: "Like a medium apple, a banana, 1/2 cup cooked vegetables",
        input: "radio",
        ans_text: "",
        options: {
          "1": {
            text: "Rarely",
            icon: "",
            option: "1",
            score: -40,
            recommend: ["9061"]
          },
          "2": {
            text: "Once",
            icon: "",
            option: "2",
            score: -20,
            recommend: ["9061"]
          },
          "3": {
            text: "Two or more times",
            icon: "",
            option: "3",
            score: 0
          }
        },
        conditions: {},
        qoute: ""
      },
      eating_lifestyle: {
        category: "Nutrition",
        display_type: "q",
        name: "eating_lifestyle",
        question: "Which of the following you identify with?",
        sub_text: "You can choose more than one",
        input: "checkbox",
        ans_text: "",
        options: {
          "1": {
            text: "I crave sugary foods and salty snacks",
            icon: "",
            option: "1",
            score: -20,
            recommend: ["003"]
          },
          "2": {
            text: "I usually skip meals",
            icon: "",
            option: "2",
            score: -20,
            recommend: ["003"]
          },
          "3": {
            text: "Many a times I Binge eat",
            icon: "",
            option: "3",
            score: -20,
            recommend: ["003"]
          },
          "4": {
            text: "Most of the times I eat healthy",
            icon: "",
            option: "3",
            score: 0
          },
          "5": {
            text: "None of the above",
            icon: "",
            option: "3",
            score: 0
          }
        },
        conditions: {},
        qoute: ""
      },
      display_4: {
        display_type: "m",
        main_text: "Stress",
        sub_text: "",
        timeout: 4,
        qoute: "",
        conditions: {}
      },
      stress_lifestyle: {
        category: "Stress",
        display_type: "q",
        name: "stress_lifestyle",
        question: "Do you experience stress on a regular basis?",
        sub_text: "",
        input: "radio",
        ans_text: "",
        options: {
          "1": {
            text: "Normal stress of regular life",
            icon: "",
            option: "1",
            score: 0
          },
          "2": {
            text: "Have been more stressed lately",
            icon: "",
            option: "2",
            score: -40,
            recommend: ["004"]
          },
          "3": {
            text: "Lockdown has made me anxious",
            icon: "",
            option: "3",
            score: -40,
            recommend: ["004"]
          },
          "4": {
            text: "I am under a lot of stress",
            icon: "",
            option: "3",
            score: -60,
            recommend: ["004"]
          }
        },
        conditions: {},
        qoute: ""
      },
      tired_lifestyle: {
        category: "Stress",
        display_type: "q",
        name: "tired_lifestyle",
        question: "Have you recently been feeling tired or fatigued?",
        sub_text: "",
        input: "radio",
        ans_text: "",
        options: {
          "1": {
            text: "Never",
            icon: "",
            option: "1",
            score: 0
          },
          "2": {
            text: "Ocassionally",
            icon: "",
            option: "2",
            score: -20,
            recommend: ["561876"]
          },
          "3": {
            text: "Most days",
            icon: "",
            option: "3",
            score: -20,
            recommend: ["561876"]
          }
        },
        conditions: {},
        qoute: ""
      },
      display_5: {
        display_type: "m",
        main_text: "Sleep",
        sub_text: "",
        timeout: 4,
        qoute: "",
        conditions: {}
      },
      sleep_time_lifestyle: {
        category: "Sleep",
        display_type: "q",
        name: "sleep_time_lifestyle",
        question: "How many hours do you usually sleep at night?",
        sub_text: "",
        input: "radio",
        ans_text: "",
        options: {
          "1": {
            text: "Less than 6 hours",
            icon: "",
            option: "1",
            score: -60,
            recommend: ["004"]
          },
          "2": {
            text: "6 to 8 hours",
            icon: "",
            option: "2",
            score: -40,
            recommend: ["004"]
          },
          "3": {
            text: "More than 8 hours",
            icon: "",
            option: "3",
            score: 0
          }
        },
        conditions: {},
        qoute:
          "Sleep Matters! An average male spends 26 years sleeping in their life."
      },
      sleep_quality_lifestyle: {
        category: "Sleep",
        display_type: "q",
        name: "sleep_quality_lifestyle",
        question: "Which of the following your identify with?",
        sub_text: "You can choose more than one",
        input: "checkbox",
        ans_text: "",
        options: {
          "1": {
            text: "I get restful sleep",
            icon: "",
            option: "1"
          },
          "2": {
            text: "Sometimes I have trouble falling asleep",
            icon: "",
            option: "2"
          },
          "3": {
            text: "I feel sleepy at work",
            icon: "",
            option: "3"
          },
          "4": {
            text: "I think I have 'insomnia'",
            icon:
              "Insomnia is a sleep disorder in which you have trouble falling and/or staying asleep. It is chronic if you have it for 3 nights in a week for 3 weeks.",
            option: "4"
          }
        },
        conditions: {},
        qoute:
          "Sleep deprived people are less effective in making quality decisions. One needs to keep calm and sleep well."
      },
      display_6: {
        display_type: "m",
        main_text: "Exhausting right?",
        sub_text:
          "Well, we understand living a healthy lifestyle is difficult and will take effort. Don't worry the entire Man Matters family is with you. Together we can! Last Two Questions..",
        timeout: 4,
        qoute: "",
        conditions: {}
      },
      habit_lifestyle: {
        display_type: "q",
        name: "habit_lifestyle",
        question: "Which of the following your identify with?",
        sub_text: "You can choose more than one",
        input: "checkbox",
        ans_text: "",
        options: {
          "1": {
            text: "I smoke regularly",
            icon: "",
            option: "1"
          },
          "2": {
            text: "I drink alcohol regularly",
            icon: "",
            option: "2"
          },
          "3": {
            text: "I drink less than 4 glasses of water per day",
            icon: "",
            option: "3"
          },
          "4": {
            text: "I drink more than 3 caffeinated drinks per day",
            icon: "",
            option: "4"
          },
          "5": {
            text: "None of the above",
            icon: "",
            option: "5"
          }
        },
        conditions: {},
        qoute: ""
      },
      health_condtion_lifestyle: {
        display_type: "q",
        name: "health_condtion_lifestyle",
        question: "Do you have any known health conditions?",
        sub_text: "You can choose more than one",
        input: "checkbox",
        ans_text: "",
        options: {
          "1": {
            text: "Peptic Ulcer",
            icon: "",
            option: "1",
            product: ["-9061"]
          },
          "2": {
            text: "Hypertension",
            icon: "",
            option: "2",
            product: ["-9061"]
          },
          "3": {
            text: "Heart problems",
            icon: "",
            option: "3",
            product: ["-9061"]
          },
          "4": {
            text: "None of the above",
            icon: "",
            option: "4"
          }
        },
        conditions: {},
        qoute: ""
      },
      display_7: {
        display_type: "m",
        main_text: "Well Done, ++first_name++",
        sub_text:
          "We are analysizing your responses to curate your Personalized Wellness Plan",
        timeout: 4,
        qoute: "",
        conditions: {}
      },
      display_8: {
        display_type: "m",
        main_text: "Your Personalized Wellness Plan is ready",
        sub_text: "We just need a few more details from you.",
        timeout: 4,
        qoute: "",
        conditions: {
          rx: ["0"]
        }
      },
      display_9: {
        display_type: "m",
        main_text: "Your Personalized Wellness Plan is ready",
        sub_text:
          "We just need a few more details from you. Our doctors will run you through your wellness Plan",
        timeout: 4,
        qoute: "",
        conditions: {
          rx: ["1"]
        }
      },
      input: {
        email: {
          id: "email",
          title: "Email",
          type: "text",
          pattern: []
        },
        phone: {
          id: "phone",
          name: "Phone",
          type: "tel",
          pattern: []
        }
      }
    }
  },
  hairJson: {
    section1: "Title",
    display_kits: ["serum", "shampoo"],
    desc: "Why buy this",
    section2: "Doctor info",
    regime_details: {
      "1": {
        step_sku: "Shampoo",
        step_name: "Cleanse",
        step_desc: "What role does this play in the kit",
        step_section1: "Why you should buy this also",
        step_img: "url of image from regime perscpective"
      },
      "2": {
        step_sku: "Serum",
        step_name: "Nourish",
        step_desc: "What role does this play in the kit",
        step_section1: "Why you should buy this also",
        step_img: "url of image from regime perscpective"
      }
    },
    display: {
      product_1: {
        name: "Serum",
        price: 500,
        is_rx: "0",
        is_kit: "1",
        regime_steps: ["2"],
        image:
          "https://res.cloudinary.com/mosaic-wellness/image/upload/staging/products/serum-cat/1.png"
      },
      product_2: {
        name: "Shampoo",
        price: 2111,
        is_rx: "1",
        is_kit: "0",
        regime_steps: ["1"],
        image:
          "https://res.cloudinary.com/mosaic-wellness/image/upload/staging/products/shampoo-cat/1.png"
      }
    },
    section2: {
      title: "Science + Craft. Personalized for you.",
      desc: [
        "TO bring out the best for you, we crafted the right mix of science and nature for you.",
        "Consult our experts today to get your personal wellness solution. Be Bodywise."
      ],
      btnText: "Begin Hair Quality Test"
    },
    section3: {
      title: "Why this Regims works",
      text: "lorem ipsum text",
      doctor_name: "Dr. Shobitha Anand",
      line1: "propelyn glycol helps smoothen hair",
      for: ["Acne Control"],
      with: ["Niacin", "Hydrosulphuric acid"],
      because: ["Reduces Acne", "Exfoliates skin"],
      claims: [
        {
          icon: "icon1",
          claim: "claim 1",
          text: "text line 2"
        },
        {
          icon: "icon1",
          claim: "claim 1",
          text: "text line 2"
        },
        {
          icon: "icon1",
          claim: "claim 1",
          text: "text line 2"
        }
      ],
      key_ingredients: {
        text: "lorem ipsum",
        list: [
          {
            icon: "icon2",
            name: "Niacin",
            text: "lorem ipsum dolor"
          },
          {
            icon: "icon2",
            name: "Niacin",
            text: "lorem ipsum dolor"
          }
        ]
      }
    }
  },
  skinJson: {
    header: "Skin Care",
    title: "Let skin be the first priority",
    button_text: "Begin Assessment",
    banner_product: "Acne Control Foaming Facewash",
    banner_title:
      "Effective on active acne without sacrificing the hydration your skin needs.",
    banner_button: "BUY NOW",
    sub_text:
      "Taking care of your skin is always a good thing. But if you want real, long-lasting results, get an expert advice from a doctor on our platform. Prescription skin care tailored to your skin.",
    sections: {
      consult: {
        title: "Feeling confused?",
        text: "Think of us as your partner in skincare at every step.",
        sub_text:
          "Bodywise's skin assesment, takes you trough several questions that speak specifically to you skins health to give you scores for acne skin pigmentation and aging's impact on your skin. We give you actionable steps that will help you reclaim control over the chaos by understandin your skin. The assesment lays out clearly the information you need to take better care of your skin and achieve clear, youthful and health skin.",
        button_text: "Begin Your Skin Assessment ",
        video_url: ""
      },
      complete_regime: {
        title: "Dermatologist Recommended Products",
        sub_text: "The Bodywise Experience - Clear Skin Edition",
        steps: {
          "1": {
            text: "Cleanse",
            product: "Acne Control Foaming Wash",
            url_key: "acne-control-wash",
            imgUrl:
              "https://res.cloudinary.com/mosaic-wellness/image/upload/staging/products/acne-control-wash/Foam_Face_washl_600x600.png",
            features:
              "Clinically proven ingredients such as glycolic and salicylic acid gently lift dirt and oil to prep your skin for acne treatment—and hydrates at the same time"
          },
          "2": {
            text: "Repair",
            product: "Skin Revitilizing Oil-in-Serum",
            imgUrl:
              "https://res.cloudinary.com/mosaic-wellness/image/upload/staging/products/skin-revitilizing-oil/-Revitalizing-Serum-600x600.png",
            url_key: "skin-revitilizing-oil",
            features:
              "Niacinamide and Arginine with a power pack of glycolic & salicylic acid help reduce blemish size and redness while improving the appearance of acne"
          },
          "3": {
            text: "Moisturise",
            product: "Skin Clarifying Serum",
            url_key: "skin-clarifying",
            imgUrl:
              "https://res.cloudinary.com/mosaic-wellness/image/upload/staging/products/skin-clarifying/Bodywise__Acne_Serum_monocarton_2.png",
            features:
              "A moisturising serum that helps fade marks and soothe redness"
          }
        }
      },
      why_this_works: {
        title: "Why This Regime Works",
        sub_text: "Here's everything you need to know about skin care regimes",
        doctor_name: "Dr. Sharmatha",
        doctor_image: "",
        doctor_note:
          "Skincare regimes crafted with clinically proven ingredients to improve the overall health of your skin",
        category_note:
          "DOCTOR-DEVELOPED<br/>Discover dermatologists developed acne and aging regimens that<br/> help protect your skin against everday damage and improve the overall health of your skin.<br/>CLINICALLY PROVEN & SUSTAINABLY SOURCED INGREDIENTS <br/>We source clinically proven ingredients gathered in the most ethical way.<br/> When we find better ways forward, we take them.",
        for: [
          "Acne control",
          "Hyperpigmentation/Scar reduction",
          "Fine lines & wrinkles reduction"
        ],
        contains: [
          "Acne Control Foaming Wash",
          "Acne Spot Correction Gel",
          "Skin Clarifying Serum"
        ],
        because: [
          "Unclogs pores",
          "Reduces active acne",
          "Minimizes acne scars"
        ]
      },
      claims: {
        title: "Claims",
        items: [
          {
            text: "Daily usage",
            icon: ""
          },
          {
            text: "Developed by dermatologists",
            icon: ""
          },
          {
            text: "See results in 6 weeks",
            icon: ""
          },
          {
            text: "Clinically proven ingredients",
            icon: ""
          },
          {
            text: "Assistive Care/Doctor consultation at every step",
            icon: ""
          },
          {
            text: "Cruelty Free",
            icon: ""
          }
        ]
      },
      what_to_expect: {
        title: "What to Expect",
        items: [
          {
            title: "1-2 months",
            text:
              "There will likely be very few visible change in the first two months. Acne scars and hyperpigmentation may reduce and your skin texture will start improving."
          },
          {
            title: "3-6 months",
            text:
              "At this point, it may become noticeable that skin has started new skin cell production and there will be reduction in fine lines & wrinkles, number of pimples on your face. Take a photo to track your progress."
          },
          {
            title: "6 months beyond",
            text:
              "By now, your skin may have healed completely. Aging signs and acne may have considerably slowed or stopped, and some people may see a natural glow on their face. Consistent daily treatment is required to maintain results and increase the chance of clear skin."
          }
        ]
      },
      ingredients: {
        title: "Ingredients",
        items: [
          {
            title: "Salicyclic acid",
            text:
              "Salicylic acid is a beta-hydroxy acid (BHA), helps get rid of excessive sebum (oil) on the face and is a potent anti-inflammatory ingridient that is powerful in treating acne quickly.",
            active: {
              text: "Active Ingredient Of",
              items: [
                {
                  name: "Acne Control Foaming Wash",
                  url_key: "acne-control-wash"
                },
                {
                  name: "Acne Spot Correction Gel",
                  url_key: "acne-spot-correction"
                }
              ]
            }
          },
          {
            title: "Glycolic acid",
            text:
              "Glycolic acid is a alpha-hydroxy acid (AHA) that gently exfoliates dead skin cells. It has an antibacterial effects on P. acnes, the bacteria responsible for inflammatory acne.",
            active: {
              text: "Active Ingredient Of",
              items: [
                {
                  name: "Acne Control Foaming Wash",
                  url_key: "acne-control-wash"
                },
                {
                  name: "Acne Spot Correction Gel",
                  url_key: "acne-spot-correction"
                }
              ]
            }
          },
          {
            title: "Niacinamide",
            text:
              "Niacinamide hydrates & moisturises the skin. It is anti-inflammatory in nature, it speeds up skin's epidermal cell growth.  ",
            active: {
              text: "Active Ingredient Of",
              items: [
                {
                  name: "Skin Clarifying Serum",
                  url_key: "skin-clarifying"
                },
                {
                  name: "Skin Health Gummies",
                  url_key: "skin-health-gummies"
                }
              ]
            }
          },
          {
            title: "Retinol",
            text:
              "Retinol is the most effective anti-aging ingredient. It shows visible changes with fine lines and wrinkles, fades sun damage, spots and improves skin texture and overall appearance.",
            active: {
              text: "Active Ingredient Of",
              items: [
                {
                  name: "Skin Health Gummies",
                  url_key: "skin-health-gummies"
                },
                {
                  name: "Skin Regenerate Night Cream",
                  url_key: "skin-regenerate-night"
                }
              ]
            }
          },
          {
            title: "Vitamin C",
            text:
              "Vitamin C is a potent antioxidant that inhibits melanin production in the skin, which helps to lighten hyperpigmentation and dark spots, even out skin tone, and enhance skin radiance. ",
            active: {
              text: "Active Ingredient Of",
              items: [
                {
                  name: "Skin Rejuvenation Serum",
                  url_key: "skin-rejuvenation-serum"
                }
              ]
            }
          },
          {
            title: "CBD extract",
            text:
              "CBD Extract Oil is an antioxidant that helps lessen the visible signs of aging. By counteracting free-radical damage and reducing the look of inflammation, CBD oil visibly diminish issues such as wrinkles, skin dullness, and ruddy skin tone.",
            active: {
              text: "Active Ingredient Of",
              items: [
                {
                  name: "Skin Revitilizing Oil-in-Serum",
                  url_key: "skin-revitilizing-oil"
                }
              ]
            }
          }
        ]
      },
      how_it_works: {
        title: "How It Works",
        button_text: "SHOP NOW",
        steps: [
          {
            title: "Help us know you",
            text:
              "Know what you're looking for? Browse Our Carefully Crafted Solutions. Not sure what will work for you? Schedule a free online consultation with our renowned experts"
          },
          {
            title: "Wellness at your doorstep",
            text:
              "Free & Instant Delivery.<br/> Expect your products within 3-5 days"
          },
          {
            title: "Your Regime. Your Expert.",
            text:
              "Extended Care & Treatment. <br/> Our Doctors will track your progress post purchase and ensure you’re on the right path"
          }
        ]
      },
      experts: {
        title: "Meet Our Experts",
        subtitle:
          "Meet our experts who developed skin, hair and weight management regimens that improve the overall health of your skin, hair and body.",
        button_text: "CONSULT AN EXPERT TODAY",
        options: [
          {
            name: "Dr. Sharmatha",
            image: "",
            description:
              "Dr. Sharmatha is a practicing dermatologist with 8 years of experience. She has a keen interest in cosmetic & aesthetic dermatology. Hair restoration is her area of expertise & she has helped many patients prevent & fight hair loss.",
            qualification: "MBBS",
            desig: "Doctor",
            expertise: "Cosmetic & aesthetic dermatology, hair restoration"
          },
          {
            name: "Dr. Pallavi Rathi",
            image: "",
            description:
              "Dr. Pallavi Rathi is a Consulting Dermatologist  Trichologist and Cosmetic Surgeon. She has been practicing in Mumbai for more than 12 years and has a keen interest in the field of Aesthetic Medicine. She has been trained nationally and internationally for various Skin and Haircare procedures.",
            qualification: "MBBS",
            desig: "Doctor",
            expertise:
              "Hair Transplant, Micropigmentation, Lasers, Botox, Fillers, Threadlift"
          },
          {
            name: "Dr. Shobhita Anand",
            image: "",
            description:
              "Dr Shobita Anand is a knowledgable general physician and practising cosmetologist in Mumbai with 3 years of working experience. She is attached to various esteemed hospitals and clinics. She is a disciplined and dedicated consultant with great understanding of skin and hair conditions for early diagnosis and treatment.",
            qualification: "BMS, Internal Medicine",
            expertise: "Cosmetology",
            desig: "Doctor"
          },
          {
            name: "Dr. Mamta Nadar",
            image: "",
            description:
              "Dr. Mamta Nadar M.B.B.S. is a General Physician with an experience of more than 3 years working in Government hospitals in Mumbai. Her area of expertise is General medicine and special interest in Dermatology. She believes in Henry George Bohn's famous quote,  Nature, Time and Patience are three great physicians. ",
            qualification: "BMS, Internal Medicine",
            expertise: "Dermatology",
            desig: "Doctor"
          }
        ]
      },
      testimonials: {
        title: "Our Customers Love Us",
        customers: [
          {
            name: "Mansi",
            text:
              "I wanted to wait atleast a month before writing a review. The Clear Skin Edition kit really really works! I have been battling with acne since 12th sthandardl and never found anything that works as good as this. It is made to get rid of acne and that’s exactly what it does! I have oily skin and these products do dry out your skin so it works perfectly for me. Highly recommend to anyone wanting to get rid of acne!!!",
            regime: "The Bodywise Experience - Clear Skin Edition",
            image: ""
          },
          {
            name: "Aparna",
            text:
              "I love the fact I do not have to spend hours looking for the perfect products that complement each other. This is an one click solution for my aging skin!",
            regime: "The Bodywise Experience - Timeless Edition",
            image: ""
          }
        ]
      },
      telemedicine: {
        title: "How Telemedicine works",
        steps: [
          {
            title: "Create an account and share your details",
            sub_text:
              "Offer us information about your body and your wellness needs before we connect you with our physician. Take this quick assessment and find the right regimens that work your well-being. In this quiz, you will answer questions about your health, lifestyle, medical history and current symptoms that you’d like us to address. We take your privacy very seriously – any information you submit will be fully encrypted in our secure platform."
          },
          {
            title:
              "Schedule a free teleconsultation appointment with our doctors",
            sub_text:
              "We have now learnt everything we need to know about your body! On our online platform, there are doctors at the ready to answer your questions on your terms and in your own time. Get connected with a doctor to start your diagnosis and talk about your treatment options. "
          },
          {
            title: "Understand your treatment options",
            sub_text:
              "If you still need more answers, understand your treatment options directly from our expert doctors and get started on your wellness journey. "
          },
          {
            title: "Get your products delivered ",
            sub_text:
              "After the teleconsultation, if your doctor decides a prescription we offer is right for you, you will get the treatment products shipped to your house."
          },
          {
            title: "Follow-up sessions with our doctors",
            sub_text:
              "Your progress will be monitored by our physicians to help keep you on the right path to holistic wellness"
          }
        ]
      },
      articles: {
        title: "Key Articles",
        items: [
          {
            title: "The 10 Best Anti-Aging Natural Foods",
            link:
              "https://docs.google.com/document/d/1bj-0vucxAbjAndMmkj15qfWfhSnd_Ivq/edit",
            description:
              "Ten of the best anti-aging foods to nourish your body for a glow that comes from within"
          },
          {
            title: "Acne 101",
            link:
              "https://docs.google.com/document/d/1sOxhoc_OzkG-8AekEJj4c1d0SQsQQkXO/edit?dls=true",
            description: "Everything related to preventing and treating acne"
          },
          {
            title: "How to manage emotional effects of acne",
            link:
              "https://docs.google.com/document/d/1LDZFQ4HvV2HYRb_5pCRate0HxAFu2_vK/edit?dls=true",
            description:
              "Acne can affect more than your skin. Don't let it control your life."
          },
          {
            title: "The science behind using anti-aging products",
            link:
              "https://docs.google.com/document/d/1n_tKjMgrDzAImRYVlWGbYlj-IjQ2yzuAyNpLLi27IOg/edit",
            description:
              "From fighting those pesky free radicals, to stimulating skin's natural collagen production, learn everything about anti-aging products"
          },
          {
            title:
              "A holistics skin care guide for women, (in their 20s and 30s) WITH BLACKHEADS",
            link:
              "https://docs.google.com/document/d/14mzH6-FEJnKXqQzzzNYmHs_99D96JhPE/edit?dls=true",
            description:
              "Got blackheads? We got an expert-driven skincare routine for you!"
          },
          {
            title: "Questions every woman should ask the dermatologist",
            link:
              "https://docs.google.com/document/d/1mPMkTG6gkWE45cVdS85kVagFu191KkFT/edit",
            description:
              "It's never too late to ask questions related to your health."
          },
          {
            title:
              "A holistics skin care guide for women, (in their 20s) WITH ACNE",
            link:
              "https://docs.google.com/document/d/1s2opWW3qFAcFr6Gs7wiyb6-nYvFyAi_U/edit#heading=h.gjdgxs",
            description:
              "Tired of acne? We got an expert-driven skincare routine for you!"
          },
          {
            title:
              "A holistics skin care guide for women, (in their 20s) WITH AGING CONCERNS",
            link:
              "https://docs.google.com/document/d/12a1kiTbTbtOkWVIMY3eBzdFKa1bjWRWo/edit",
            description:
              "Age catching up? We got an expert-driven skincare routine for you!"
          },
          {
            title: "How does skincare change in your 30s",
            link:
              "https://docs.google.com/document/d/1X6TwmLUD5I9vqFN0CeEczYec5auUXp-R/edit",
            description:
              "Skin care routine change drastically as you enter the big 30s. Learn all about how to take care of your skin in 30s!"
          }
        ]
      }
    },
    safety_information: [
      "Prescription products require an online consultation with a physician who will determine if a prescription is appropriate.",
      "It is recommended to follow AM-PM routine while using retinol based products along with AHA-BHA based products.",
      "If you have senstive skin, please consult our doctors to get your personalized routine."
    ],
    display: {
      product_1: {
        name: "Acne Control Foaming Wash",
        price: 349,
        is_rx: "0",
        is_kit: "0",
        url_key: "acne-control-wash",
        regime_steps: ["1"],
        imgUrl:
          "https://res.cloudinary.com/mosaic-wellness/image/upload/staging/products/acne-control-wash/Foam_Face_washl_600x600.png"
      },
      product_2: {
        name: "Skin Health Gummies",
        price: 599,
        is_rx: "0",
        is_kit: "0",
        url_key: "skin-health-gummies",
        regime_steps: ["1"],
        imgUrl:
          "https://res.cloudinary.com/mosaic-wellness/image/upload/staging/products/skin-health-gummies/Skin_gummies_600x600.png"
      },
      product_3: {
        name: "Skin Clarifying Serum",
        price: 599,
        is_rx: "0",
        is_kit: "0",
        url_key: "skin-clarifying",
        regime_steps: ["1"],
        imgUrl:
          "https://res.cloudinary.com/mosaic-wellness/image/upload/staging/products/skin-clarifying/Bodywise__Acne_Serum_monocarton_2.png"
      }
    },
    who_its_for: [
      "Active acne",
      "Acne scars and hyperpigmentation",
      "Fine lines & wrinkles"
    ]
  }
};

export const secondaryHeaderLinks = [
  {
    title: "Skin",
    key: "/skin",
    disabled: false
  },
  {
    title: "Hair",
    key: "/hair",
    disabled: true
  },
  {
    title: "Weight Loss",
    key: "/weight",
    disabled: true
  }
  // {
  //   title: "Anti Ageing",
  //   key: "anti-ageing",
  //   disabled: true,
  // },
];
