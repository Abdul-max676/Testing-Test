// Main Application State
const appState = {
    currentUser: 'Student',
    currentTest: null,
    currentQuestionIndex: 0,
    userAnswers: {},
    tests: [],
    results: [],
    settings: {
        theme: 'light',
        autoNext: true,
        showTimer: true,
        instantFeedback: false,
        avatarColor: '#4a6fa5'
    },
    timer: null,
    timeRemaining: 0,
    shuffleQuestions: false,
    shuffledOrder: []
};

// Complete Test Data with ALL Tests
const sampleTests = [
    {
        id: 1,
        title: "General Knowledge Quiz",
        description: "Test your knowledge on various topics including history, science, and geography.",
        timeLimit: 15,
        questions: [
            {
                id: 1,
                text: "What is the capital of France?",
                options: ["London", "Berlin", "Paris", "Madrid"],
                correctAnswer: 2
            },
            {
                id: 2,
                text: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correctAnswer: 1
            },
            {
                id: 3,
                text: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                correctAnswer: 1
            },
            {
                id: 4,
                text: "What is the chemical symbol for water?",
                options: ["H2O", "CO2", "O2", "NaCl"],
                correctAnswer: 0
            },
            {
                id: 5,
                text: "Which year did World War II end?",
                options: ["1943", "1944", "1945", "1946"],
                correctAnswer: 2
            }
        ]
    },
    {
        id: 2,
        title: "JavaScript Fundamentals",
        description: "Test your understanding of basic JavaScript concepts and syntax.",
        timeLimit: 20,
        questions: [
            {
                id: 1,
                text: "Which keyword is used to declare a variable in JavaScript?",
                options: ["var", "let", "const", "All of the above"],
                correctAnswer: 3
            },
            {
                id: 2,
                text: "What does DOM stand for?",
                options: ["Document Object Model", "Data Object Model", "Digital Output Mode", "Display Object Management"],
                correctAnswer: 0
            },
            {
                id: 3,
                text: "Which method is used to add an element to the end of an array?",
                options: ["push()", "pop()", "shift()", "unshift()"],
                correctAnswer: 0
            },
            {
                id: 4,
                text: "What will typeof null return?",
                options: ["null", "object", "undefined", "number"],
                correctAnswer: 1
            },
            {
                id: 5,
                text: "Which operator is used for strict equality comparison?",
                options: ["==", "===", "=", "!="],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 3,
        title: "GST 212 - Logic and Reasoning (50 Questions)",
        description: "Complete 50-question exam on Logic and Reasoning based on GST 212 curriculum.",
        timeLimit: 60,
        questions: [
            {
                id: 1,
                text: "What is the Greek concept from which the word 'Logic' is derived?",
                options: ["Philosophia", "Logikos", "Dialectica", "Episteme"],
                correctAnswer: 1
            },
            {
                id: 2,
                text: "According to Irving Copi, logic is the study of:",
                options: ["Human behavior and psychology", "Methods and principles used to distinguish good from bad reasoning", "Language and grammar rules", "Mathematical equations"],
                correctAnswer: 1
            },
            {
                id: 3,
                text: "Who first used the term 'logic' as a Greek philosopher?",
                options: ["Aristotle", "Socrates", "Zeno", "Plato"],
                correctAnswer: 2
            },
            {
                id: 4,
                text: "What term did Aristotle use instead of 'logic'?",
                options: ["Dialectic", "Organon", "Syllogism", "Analytics"],
                correctAnswer: 1
            },
            {
                id: 5,
                text: "During which period did Aristotle live?",
                options: ["500-450 B.C.", "384-322 B.C.", "300-250 B.C.", "200-150 B.C."],
                correctAnswer: 1
            },
            {
                id: 6,
                text: "Simple apprehension is defined as:",
                options: ["Making a judgment about something", "The process by which the mind initially conceives an idea without affirming or denying it", "Drawing conclusions from premises", "Analyzing logical fallacies"],
                correctAnswer: 1
            },
            {
                id: 7,
                text: "In the logical process, which stage involves affirming or denying something?",
                options: ["Simple apprehension", "Judgment", "Reasoning", "Inference"],
                correctAnswer: 1
            },
            {
                id: 8,
                text: "Deductive logic involves moving from:",
                options: ["Specific to general", "General to specific", "Abstract to concrete only", "Concrete to abstract only"],
                correctAnswer: 1
            },
            {
                id: 9,
                text: "Inductive logic is characterized by:",
                options: ["Absolute certainty in conclusions", "Conclusions based on probability", "Moving from general to specific", "Mathematical precision"],
                correctAnswer: 1
            },
            {
                id: 10,
                text: "Which type of logic was developed by Aristotle and centers on syllogistic arguments?",
                options: ["Modal logic", "Propositional logic", "Syllogistic logic", "Epistemic logic"],
                correctAnswer: 2
            },
            {
                id: 11,
                text: "Modal logic focuses on:",
                options: ["Truth values only", "Necessity, possibility, and impossibility", "Moral obligations", "Knowledge and belief"],
                correctAnswer: 1
            },
            {
                id: 12,
                text: "Epistemic logic is concerned with:",
                options: ["Moral obligations", "Knowledge and belief", "Legal systems", "Mathematical proofs"],
                correctAnswer: 1
            },
            {
                id: 13,
                text: "Deontic logic deals with:",
                options: ["Probability and statistics", "Obligation and permission", "Scientific methods", "Historical analysis"],
                correctAnswer: 1
            },
            {
                id: 14,
                text: "The two main aspects of academic logic are:",
                options: ["Formal and informal logic", "Deductive and inductive logic", "Abstract and concrete logic", "Ancient and modern logic"],
                correctAnswer: 0
            },
            {
                id: 15,
                text: "In deductive reasoning, if the premises are true, the conclusion:",
                options: ["May be true", "Is probably true", "Must be true", "Cannot be determined"],
                correctAnswer: 2
            },
            {
                id: 16,
                text: "A syllogism consists of:",
                options: ["One premise and one conclusion", "Major premise, minor premise, and conclusion", "Only hypothetical statements", "Three or more conclusions"],
                correctAnswer: 1
            },
            {
                id: 17,
                text: "Which of the following is an example of deductive reasoning?",
                options: ["All mammals have backbones; humans are mammals; therefore humans have backbones", "I see fireflies every summer; therefore I will see them this summer", "Every dog I meet is friendly; therefore most dogs are friendly", "Some coins in the bag are pennies; therefore all coins are pennies"],
                correctAnswer: 0
            },
            {
                id: 18,
                text: "Inductive reasoning is primarily based on:",
                options: ["Mathematical certainty", "Observation and probability", "Abstract principles", "Deductive proofs"],
                correctAnswer: 1
            },
            {
                id: 19,
                text: "The main difference between deductive and inductive reasoning is:",
                options: ["Deductive uses emotions; inductive uses logic", "Deductive moves from general to specific; inductive from specific to general", "Deductive is faster; inductive is slower", "They are essentially the same"],
                correctAnswer: 1
            },
            {
                id: 20,
                text: "Discourse, according to Foucault, is:",
                options: ["Random conversation", "Organized knowledge that structures social progress", "Only written communication", "Purely verbal expression"],
                correctAnswer: 1
            },
            {
                id: 21,
                text: "Monologue discourse is characterized by:",
                options: ["Communication between two people", "Solitary talk to oneself", "Group discussions", "Written correspondence"],
                correctAnswer: 1
            },
            {
                id: 22,
                text: "Persuasive discourse aims to:",
                options: ["Describe events accurately", "Convince others to accept a viewpoint", "Explain complex theories", "Narrate historical events"],
                correctAnswer: 1
            },
            {
                id: 23,
                text: "Expository discourse primarily:",
                options: ["Tells a story", "Explains and makes something clear", "Argues a position", "Describes scenes"],
                correctAnswer: 1
            },
            {
                id: 24,
                text: "Narrative discourse involves:",
                options: ["Explaining scientific theories", "Relating events in chronological order", "Arguing philosophical positions", "Providing instructions"],
                correctAnswer: 1
            },
            {
                id: 25,
                text: "The socio-cultural approach to discourse analysis was developed by:",
                options: ["Michel Foucault", "Norman Fairclough", "Ruth Wodak", "Teun van Dijk"],
                correctAnswer: 1
            },
            {
                id: 26,
                text: "The Law of Identity states that:",
                options: ["Everything changes constantly", "What is, is; and what is not, is not", "Nothing can be known with certainty", "All propositions are relative"],
                correctAnswer: 1
            },
            {
                id: 27,
                text: "The Law of Contradiction asserts that:",
                options: ["All things contradict themselves", "Nothing can be both A and not A", "Contradictions are necessary for progress", "Truth is relative"],
                correctAnswer: 1
            },
            {
                id: 28,
                text: "The Law of Excluded Middle is also known as:",
                options: ["The law of opposition", "The either...or...proposition", "The law of separation", "The principle of duality"],
                correctAnswer: 1
            },
            {
                id: 29,
                text: "According to the Law of Excluded Middle:",
                options: ["Some things can be neither true nor false", "A proposition must be either true or false", "All propositions are uncertain", "Truth exists on a spectrum"],
                correctAnswer: 1
            },
            {
                id: 30,
                text: "The word 'fallacy' comes from the Latin word 'fallor' meaning:",
                options: ["I am correct", "I am deceived", "I am certain", "I am confused"],
                correctAnswer: 1
            },
            {
                id: 31,
                text: "Formal fallacies are errors arising from:",
                options: ["Emotional reasoning", "Mistakes about the logical form of an argument", "Cultural differences", "Personal biases"],
                correctAnswer: 1
            },
            {
                id: 32,
                text: "Linguistic fallacies arise from:",
                options: ["Mathematical errors", "Ambiguity in the use of language", "Cultural misunderstandings", "Scientific inaccuracies"],
                correctAnswer: 1
            },
            {
                id: 33,
                text: "Argumentum ad Baculum is a fallacy involving:",
                options: ["Appeal to authority", "Appeal to force or threat", "Appeal to pity", "Appeal to ignorance"],
                correctAnswer: 1
            },
            {
                id: 34,
                text: "Argumentum ad Hominem (Abusive) involves:",
                options: ["Attacking the issues at hand", "Attacking the personality of a person instead of the issues", "Using logical reasoning", "Appealing to authority"],
                correctAnswer: 1
            },
            {
                id: 35,
                text: "Argumentum ad Ignorantiam is:",
                options: ["Appeal to knowledge", "Appeal to ignorance or lack of knowledge", "Appeal to experts", "Appeal to tradition"],
                correctAnswer: 1
            },
            {
                id: 36,
                text: "Argumentum ad Misericordiam involves:",
                options: ["Appeal to logic", "Appeal to pity", "Appeal to force", "Appeal to popularity"],
                correctAnswer: 1
            },
            {
                id: 37,
                text: "Argumentum ad Populorum is:",
                options: ["Appeal to scientific evidence", "Appeal to the emotions of people", "Appeal to reason", "Appeal to tradition"],
                correctAnswer: 1
            },
            {
                id: 38,
                text: "Argumentum ad Verecundiam involves:",
                options: ["Appeal to personal experience", "Appeal to authority", "Appeal to logic", "Appeal to common sense"],
                correctAnswer: 1
            },
            {
                id: 39,
                text: "Hasty generalization is an error where:",
                options: ["One concludes from adequate evidence", "One concludes from inadequate facts", "One uses proper reasoning", "One appeals to authority"],
                correctAnswer: 1
            },
            {
                id: 40,
                text: "The fallacy of Non Causa Pro Causa involves:",
                options: ["Correct cause-effect relationships", "Linking an effect to a false cause", "Proper logical reasoning", "Valid inferences"],
                correctAnswer: 1
            },
            {
                id: 41,
                text: "The fallacy of begging the question is also called:",
                options: ["Circular reasoning", "Linear reasoning", "Deductive reasoning", "Inductive reasoning"],
                correctAnswer: 0
            },
            {
                id: 42,
                text: "How many treatises on logic did Aristotle have?",
                options: ["Four", "Five", "Six", "Seven"],
                correctAnswer: 2
            },
            {
                id: 43,
                text: "Logic enhances students' ability to:",
                options: ["Memorize facts only", "Critically analyze arguments", "Avoid all disagreements", "Accept all statements as true"],
                correctAnswer: 1
            },
            {
                id: 44,
                text: "In a hypothetical chain in deductive reasoning:",
                options: ["General statements are made", "Cause-effect statements are put together with statements about specific events", "Only observations are used", "No conclusions are drawn"],
                correctAnswer: 1
            },
            {
                id: 45,
                text: "Which approach to discourse analysis focuses on the systematic analysis of context?",
                options: ["Socio-cultural approach", "Discourse-historical approach", "Socio-cognitive approach", "Linguistic approach"],
                correctAnswer: 1
            },
            {
                id: 46,
                text: "The socio-cognitive approach to discourse was developed by:",
                options: ["Norman Fairclough", "Ruth Wodak", "Teun van Dijk", "Michel Foucault"],
                correctAnswer: 2
            },
            {
                id: 47,
                text: "Transactional discourse is characterized by:",
                options: ["Ambiguous messages", "Messages that are easily understandable without ambiguity", "Emotional appeals", "Complex philosophical arguments"],
                correctAnswer: 1
            },
            {
                id: 48,
                text: "One benefit of studying logic is that it:",
                options: ["Makes one emotional in arguments", "Helps avoid errors in the process of argument", "Encourages hasty conclusions", "Promotes irrational thinking"],
                correctAnswer: 1
            },
            {
                id: 49,
                text: "In inductive reasoning, conclusions are:",
                options: ["Certain and necessary", "Tentative and probable", "Always false", "Independent of premises"],
                correctAnswer: 1
            },
            {
                id: 50,
                text: "Argumentative discourse is characterized by:",
                options: ["Random statements", "Evidence and logical basis to support claims", "Emotional manipulation", "Fictional storytelling"],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 4,
        title: "GST 212 - Philosophy and Human Existence (50 Questions)",
        description: "Complete 50-question exam on Philosophy, Logic and Human Existence based on GST 212 curriculum.",
        timeLimit: 60,
        questions: [
            {
                id: 1,
                text: "The word philosophy is derived from which language?",
                options: ["Latin", "Greek", "Hebrew", "Sanskrit"],
                correctAnswer: 1
            },
            {
                id: 2,
                text: "What does 'philo-sophia' literally mean?",
                options: ["Love of God", "Love of wisdom", "Love of truth", "Love of nature"],
                correctAnswer: 1
            },
            {
                id: 3,
                text: "Who invented the word 'philosophy'?",
                options: ["Socrates", "Plato", "Pythagoras", "Aristotle"],
                correctAnswer: 2
            },
            {
                id: 4,
                text: "According to Aristotle, true wisdom seeks:",
                options: ["Material wealth", "Political power", "The first cause of things", "Happiness alone"],
                correctAnswer: 2
            },
            {
                id: 5,
                text: "Which of the following is NOT a reason for the difficulty in defining philosophy?",
                options: ["Cultural dynamics", "Historical antecedents", "Mathematical equations", "Diverse schools of thought"],
                correctAnswer: 2
            },
            {
                id: 6,
                text: "Idealism and realism are schools of thought in:",
                options: ["Ethics", "Logic", "Metaphysics", "Epistemology"],
                correctAnswer: 2
            },
            {
                id: 7,
                text: "Which philosopher advocated for the dictatorship of the proletariat?",
                options: ["John Locke", "Karl Marx", "Hegel", "Thomas Hobbes"],
                correctAnswer: 1
            },
            {
                id: 8,
                text: "How many modes of philosophy are there?",
                options: ["Two", "Three", "Four", "Five"],
                correctAnswer: 2
            },
            {
                id: 9,
                text: "The first step in philosophical inquiry is:",
                options: ["Analysis", "Speculation", "Observation", "Prescription"],
                correctAnswer: 2
            },
            {
                id: 10,
                text: "Which mode of philosophy is concerned with the meaning of words?",
                options: ["Observation", "Analytic", "Speculative", "Prescriptive"],
                correctAnswer: 1
            },
            {
                id: 11,
                text: "The prescriptive mode of philosophy is also known as:",
                options: ["The descriptive role", "The normative role", "The critical role", "The empirical role"],
                correctAnswer: 1
            },
            {
                id: 12,
                text: "What does the speculative mode involve?",
                options: ["Collecting data", "Analyzing words", "Reflection and synthesis", "Setting standards"],
                correctAnswer: 2
            },
            {
                id: 13,
                text: "In scientific inquiry, what comes after observation?",
                options: ["Experimentation", "Collection of data", "Formulation of hypothesis", "Formulation of law"],
                correctAnswer: 1
            },
            {
                id: 14,
                text: "A hypothesis is best described as:",
                options: ["A proven fact", "A tentative statement", "A universal law", "An observation"],
                correctAnswer: 1
            },
            {
                id: 15,
                text: "Metaphysics literally means:",
                options: ["Beyond nature", "Study of mind", "Physical reality", "Material world"],
                correctAnswer: 0
            },
            {
                id: 16,
                text: "Who coined the term 'metaphysics'?",
                options: ["Aristotle", "Plato", "Andronicus of Rhodes", "Socrates"],
                correctAnswer: 2
            },
            {
                id: 17,
                text: "Ontology is derived from the Greek word 'onto' which means:",
                options: ["God", "Universe", "To be", "Mind"],
                correctAnswer: 2
            },
            {
                id: 18,
                text: "The study of the universe in terms of its origin and composition is called:",
                options: ["Ontology", "Cosmology", "Theology", "Psychology"],
                correctAnswer: 1
            },
            {
                id: 19,
                text: "Philosophical psychology studies:",
                options: ["The universe", "God", "The human mind", "Being"],
                correctAnswer: 2
            },
            {
                id: 20,
                text: "'Theology' comes from the Greek word 'Theo' meaning:",
                options: ["Mind", "Universe", "God", "Being"],
                correctAnswer: 2
            },
            {
                id: 21,
                text: "Who proclaimed that 'everything is in a state of continuous change'?",
                options: ["Parmenides", "Heraclitus", "Plato", "Aristotle"],
                correctAnswer: 1
            },
            {
                id: 22,
                text: "'You cannot step into the same river twice' was said by:",
                options: ["Heraclitus", "Parmenides", "Socrates", "Plato"],
                correctAnswer: 0
            },
            {
                id: 23,
                text: "Parmenides held that the primary feature of reality is:",
                options: ["Change", "Permanence", "Motion", "Matter"],
                correctAnswer: 1
            },
            {
                id: 24,
                text: "Who postulated the theory of four elements (earth, air, fire, and water)?",
                options: ["Anaxagoras", "Empedocles", "Plato", "Aristotle"],
                correctAnswer: 1
            },
            {
                id: 25,
                text: "Plato's two worlds are:",
                options: ["Heaven and earth", "Physical world and world of forms", "Mind and body", "Good and evil"],
                correctAnswer: 1
            },
            {
                id: 26,
                text: "Epistemology is also known as:",
                options: ["Metaphysics", "Gnoseology", "Axiology", "Ontology"],
                correctAnswer: 1
            },
            {
                id: 27,
                text: "What does 'episteme' mean?",
                options: ["Wisdom", "Knowledge", "Truth", "Reality"],
                correctAnswer: 1
            },
            {
                id: 28,
                text: "Who founded the school of skepticism?",
                options: ["Socrates", "Plato", "Pyrrho of Ellis", "Aristotle"],
                correctAnswer: 2
            },
            {
                id: 29,
                text: "Knowledge acquired through sense perception is called:",
                options: ["Rational knowledge", "Empirical knowledge", "Intuitive knowledge", "A priori knowledge"],
                correctAnswer: 1
            },
            {
                id: 30,
                text: "Knowledge acquired through reasoning is:",
                options: ["Empirical knowledge", "Intuitive knowledge", "Rational knowledge", "Authoritative knowledge"],
                correctAnswer: 2
            },
            {
                id: 31,
                text: "A priori knowledge is acquired:",
                options: ["Through experience", "Through authority", "Prior to and independently of experience", "Through intuition only"],
                correctAnswer: 2
            },
            {
                id: 32,
                text: "A posteriori knowledge is gained through:",
                options: ["Pure reason", "Empirical experience", "Divine revelation", "Intuition"],
                correctAnswer: 1
            },
            {
                id: 33,
                text: "The correspondence theory of truth states that a proposition is true if:",
                options: ["It is logical", "It corresponds with objective facts", "It works in practice", "It is coherent with other propositions"],
                correctAnswer: 1
            },
            {
                id: 34,
                text: "The pragmatic theory of truth maintains that a proposition is true if:",
                options: ["It corresponds to reality", "It is logical", "It works in practice", "It is revealed by God"],
                correctAnswer: 2
            },
            {
                id: 35,
                text: "Axiology deals with:",
                options: ["Knowledge", "Reality", "Values", "Logic"],
                correctAnswer: 2
            },
            {
                id: 36,
                text: "Ethics is also known as:",
                options: ["Value philosophy", "Moral philosophy", "Social philosophy", "Political philosophy"],
                correctAnswer: 1
            },
            {
                id: 37,
                text: "The word 'ethics' derives from the Greek word 'ethos' meaning:",
                options: ["Values", "Character", "Conduct", "Morals"],
                correctAnswer: 1
            },
            {
                id: 38,
                text: "Aesthetics is concerned with:",
                options: ["Knowledge", "Reality", "Principles of beauty", "Moral conduct"],
                correctAnswer: 2
            },
            {
                id: 39,
                text: "According to Socrates, 'virtue is':",
                options: ["Power", "Knowledge", "Wealth", "Happiness"],
                correctAnswer: 1
            },
            {
                id: 40,
                text: "'No man does evil willingly' was said by:",
                options: ["Plato", "Aristotle", "Socrates", "Kant"],
                correctAnswer: 2
            },
            {
                id: 41,
                text: "According to Kant, moral law is:",
                options: ["Given by God", "Self-imposed from rational will", "Determined by society", "Based on consequences"],
                correctAnswer: 1
            },
            {
                id: 42,
                text: "Justice denotes:",
                options: ["Inequality", "Equality of all men", "Favoritism", "Discrimination"],
                correctAnswer: 1
            },
            {
                id: 43,
                text: "The ability to exercise self-control is known as:",
                options: ["Justice", "Honesty", "Discipline", "Tolerance"],
                correctAnswer: 2
            },
            {
                id: 44,
                text: "Tolerance is an act of:",
                options: ["Rejecting other opinions", "Forcing one's beliefs on others", "Enduring and allowing other people's different opinions", "Avoiding all conflicts"],
                correctAnswer: 2
            },
            {
                id: 45,
                text: "The major branches of philosophy include all EXCEPT:",
                options: ["Metaphysics", "Epistemology", "Biology", "Axiology"],
                correctAnswer: 2
            },
            {
                id: 46,
                text: "Who said 'the unexamined life is not worth living'?",
                options: ["Plato", "Socrates", "Aristotle", "Kant"],
                correctAnswer: 1
            },
            {
                id: 47,
                text: "Thomas Aquinas sees philosophy as:",
                options: ["Divine wisdom", "Natural wisdom", "Practical wisdom", "Mystical wisdom"],
                correctAnswer: 1
            },
            {
                id: 48,
                text: "The skeptics contributed to epistemology by:",
                options: ["Accepting all knowledge claims", "Challenging the basis of knowledge", "Rejecting philosophy entirely", "Promoting only religious knowledge"],
                correctAnswer: 1
            },
            {
                id: 49,
                text: "According to J.S. Mill, power can be rightfully exercised to:",
                options: ["Promote virtue", "Prevent harm to others", "Enforce morality", "Control all behavior"],
                correctAnswer: 1
            },
            {
                id: 50,
                text: "Mala in se refers to acts that are:",
                options: ["Wrong by prohibition", "Wrong in themselves", "Legal but immoral", "Culturally relative"],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 5,
        title: "Philosophy Fundamentals (30 Questions)",
        description: "Basic concepts in philosophy including definitions, branches, and ancient philosophers.",
        timeLimit: 40,
        questions: [
            {
                id: 1,
                text: "What is the origin of the word 'philosophy'?",
                options: ["Latin word 'philosophia'", "French word 'philosophie'", "Greek word 'philosophia'", "German word 'Philosophie'", "Spanish word 'filosofía'"],
                correctAnswer: 2
            },
            {
                id: 2,
                text: "What is the meaning of the word 'philein'?",
                options: ["Wisdom", "Knowledge", "To love", "Reality", "Existence"],
                correctAnswer: 2
            },
            {
                id: 3,
                text: "What is the meaning of the word 'sophia'?",
                options: ["Wisdom", "Knowledge", "To love", "Reality", "Existence"],
                correctAnswer: 0
            },
            {
                id: 4,
                text: "What does the word 'philosophy' mean?",
                options: ["To love knowledge", "To love wisdom", "To love ethics", "To love reality", "To love existence"],
                correctAnswer: 1
            },
            {
                id: 5,
                text: "What does the word 'philosopher' mean?",
                options: ["Lover of knowledge", "Lover of wisdom", "Lover of ethics", "Lover of reality", "Lover of existence"],
                correctAnswer: 1
            },
            {
                id: 6,
                text: "What are the fundamental questions that philosophy is concerned with?",
                options: ["Fundamental questions about mathematics", "Fundamental questions about science", "Fundamental questions about language", "Fundamental questions about existence, reality, knowledge, ethics, and other areas of human thought and experience", "Fundamental questions about history"],
                correctAnswer: 3
            },
            {
                id: 7,
                text: "Which of the following is not one of the areas of human thought and experience that philosophy deals with?",
                options: ["Existence", "Reality", "Knowledge", "Ethics", "Cooking techniques"],
                correctAnswer: 4
            },
            {
                id: 8,
                text: "Which of the following is NOT a branch of philosophy?",
                options: ["Metaphysics", "Epistemology", "Ethics", "Culinary Arts", "Logic"],
                correctAnswer: 3
            },
            {
                id: 9,
                text: "What is metaphysics concerned with?",
                options: ["The nature of reality", "The nature of knowledge", "Moral principles", "Beauty and art", "Valid reasoning"],
                correctAnswer: 0
            },
            {
                id: 10,
                text: "Which branch of philosophy studies the nature of knowledge?",
                options: ["Metaphysics", "Epistemology", "Ethics", "Aesthetics", "Logic"],
                correctAnswer: 1
            },
            {
                id: 11,
                text: "What does ethics primarily deal with?",
                options: ["The nature of reality", "The nature of knowledge", "Moral principles and values", "Beauty and art", "Valid reasoning"],
                correctAnswer: 2
            },
            {
                id: 12,
                text: "Which branch of philosophy is concerned with principles of beauty and art?",
                options: ["Metaphysics", "Epistemology", "Ethics", "Aesthetics", "Logic"],
                correctAnswer: 3
            },
            {
                id: 13,
                text: "What is logic primarily concerned with?",
                options: ["The nature of reality", "The nature of knowledge", "Moral principles", "Beauty and art", "Valid reasoning and argumentation"],
                correctAnswer: 4
            },
            {
                id: 14,
                text: "Which of the following is a characteristic of a philosopher?",
                options: ["Critical thinking", "Close-mindedness", "Accepting everything without question", "Avoiding difficult questions", "Focusing only on practical matters"],
                correctAnswer: 0
            },
            {
                id: 15,
                text: "What trait involves questioning assumptions and beliefs?",
                options: ["Curiosity", "Skepticism", "Open-mindedness", "Systematic thinking", "All of the above"],
                correctAnswer: 1
            },
            {
                id: 16,
                text: "Which of these is a function of philosophy?",
                options: ["To provide all the answers", "To question fundamental beliefs", "To eliminate all uncertainty", "To confirm existing prejudices", "To avoid complex issues"],
                correctAnswer: 1
            },
            {
                id: 17,
                text: "What does philosophy help develop in individuals?",
                options: ["Critical thinking skills", "Blind obedience", "Simple answers", "Acceptance of authority without question", "Avoidance of complexity"],
                correctAnswer: 0
            },
            {
                id: 18,
                text: "Who is considered one of the most famous ancient Greek philosophers?",
                options: ["Plato", "Isaac Newton", "Albert Einstein", "Charles Darwin", "Marie Curie"],
                correctAnswer: 0
            },
            {
                id: 19,
                text: "Which ancient philosopher founded the Academy in Athens?",
                options: ["Socrates", "Plato", "Aristotle", "Pythagoras", "Heraclitus"],
                correctAnswer: 1
            },
            {
                id: 20,
                text: "Which philosopher was a student of Plato and tutor to Alexander the Great?",
                options: ["Socrates", "Plato", "Aristotle", "Pythagoras", "Heraclitus"],
                correctAnswer: 2
            },
            {
                id: 21,
                text: "What was Socrates' main method of philosophical inquiry?",
                options: ["Experimentation", "Mathematical proofs", "The Socratic method (questioning)", "Meditation", "Reading sacred texts"],
                correctAnswer: 2
            },
            {
                id: 22,
                text: "Which philosophical school was founded by Epicurus?",
                options: ["Stoicism", "Epicureanism", "Cynicism", "Skepticism", "Platonism"],
                correctAnswer: 1
            },
            {
                id: 23,
                text: "What did the Stoics emphasize?",
                options: ["Pursuit of pleasure", "Emotional control and virtue", "Rejection of all social norms", "Skepticism about all knowledge", "Mathematical certainty"],
                correctAnswer: 1
            },
            {
                id: 24,
                text: "Who founded the school of Cynicism?",
                options: ["Diogenes", "Aristotle", "Plato", "Socrates", "Zeno of Citium"],
                correctAnswer: 0
            },
            {
                id: 25,
                text: "Which ancient philosopher believed that 'the unexamined life is not worth living'?",
                options: ["Plato", "Aristotle", "Socrates", "Pythagoras", "Heraclitus"],
                correctAnswer: 2
            },
            {
                id: 26,
                text: "What was Plato's theory of Forms about?",
                options: ["Physical objects are the most real", "Abstract, perfect forms exist beyond the physical world", "Only matter exists", "Knowledge comes only from senses", "Ethics is relative"],
                correctAnswer: 1
            },
            {
                id: 27,
                text: "Which philosopher is known for his work on logic and syllogisms?",
                options: ["Socrates", "Plato", "Aristotle", "Pythagoras", "Democritus"],
                correctAnswer: 2
            },
            {
                id: 28,
                text: "What did Heraclitus believe about reality?",
                options: ["Everything is permanent", "Everything is in constant flux", "Only ideas are real", "Only matter exists", "Reality is an illusion"],
                correctAnswer: 1
            },
            {
                id: 29,
                text: "Which philosopher proposed that everything is made of atoms?",
                options: ["Aristotle", "Plato", "Socrates", "Democritus", "Pythagoras"],
                correctAnswer: 3
            },
            {
                id: 30,
                text: "What was the main focus of Pythagoras and his followers?",
                options: ["Political theory", "Ethics", "Mathematics and harmony", "Rhetoric", "Biology"],
                correctAnswer: 2
            }
        ]
    },
    {
        id: 6,
        title: "COS211 - Java Programming (50 Questions)",
        description: "Complete 50-question exam on Java Programming fundamentals and concepts.",
        timeLimit: 60,
        questions: [
            {
                id: 1,
                text: "Which of the following is the correct file extension for a compiled Java bytecode file?",
                options: [".class", ".java", ".exe", ".byte"],
                correctAnswer: 0
            },
            {
                id: 2,
                text: "Which keyword is used to create a new object in Java?",
                options: ["build", "make", "new", "object"],
                correctAnswer: 2
            },
            {
                id: 3,
                text: "Which method serves as the entry point of every Java application?",
                options: ["start()", "main()", "begin()", "run()"],
                correctAnswer: 1
            },
            {
                id: 4,
                text: "What is the size of a Java int data type?",
                options: ["16 bits", "32 bits", "64 bits", "8 bits"],
                correctAnswer: 1
            },
            {
                id: 5,
                text: "Which of these is a valid identifier in Java?",
                options: ["2value", "first-name", "_count5", "class"],
                correctAnswer: 2
            },
            {
                id: 6,
                text: "Which operator is used for logical AND in Java?",
                options: ["||", "&&", "%", "&"],
                correctAnswer: 1
            },
            {
                id: 7,
                text: "Which data type can store decimal values?",
                options: ["int", "double", "char", "byte"],
                correctAnswer: 1
            },
            {
                id: 8,
                text: "Which symbol is used for single-line comments in Java?",
                options: ["#", "//", "/*", "<>"],
                correctAnswer: 1
            },
            {
                id: 9,
                text: "Which OOP principle hides the internal details of a class?",
                options: ["Inheritance", "Abstraction", "Polymorphism", "Encapsulation"],
                correctAnswer: 3
            },
            {
                id: 10,
                text: "Which keyword prevents inheritance in Java?",
                options: ["super", "private", "final", "static"],
                correctAnswer: 2
            },
            {
                id: 11,
                text: "Which loop is guaranteed to execute at least once?",
                options: ["for", "while", "do…while", "foreach"],
                correctAnswer: 2
            },
            {
                id: 12,
                text: "Which method is used to compare two strings by value?",
                options: ["equals()", "==", "match()", "same()"],
                correctAnswer: 0
            },
            {
                id: 13,
                text: "Java arrays are ______",
                options: ["dynamic", "fixed-size", "unlimited", "text-only"],
                correctAnswer: 1
            },
            {
                id: 14,
                text: "Which package contains built-in Java classes?",
                options: ["java.core", "java.main", "java.base", "java.lib"],
                correctAnswer: 2
            },
            {
                id: 15,
                text: "What does JVM stand for?",
                options: ["Java Visual Machine", "Java Virtual Machine", "Java Verified Mode", "Java Version Manager"],
                correctAnswer: 1
            },
            {
                id: 16,
                text: "What is the default value of a boolean variable?",
                options: ["true", "false", "0", "null"],
                correctAnswer: 1
            },
            {
                id: 17,
                text: "Which exception occurs when dividing by zero?",
                options: ["IOException", "RuntimeException", "ArithmeticException", "ZeroException"],
                correctAnswer: 2
            },
            {
                id: 18,
                text: "Which keyword is used to inherit a class?",
                options: ["using", "extends", "inherits", "super"],
                correctAnswer: 1
            },
            {
                id: 19,
                text: "Which programming paradigm does Java follow?",
                options: ["Procedural only", "Object-Oriented", "Functional only", "None"],
                correctAnswer: 1
            },
            {
                id: 20,
                text: "Which operator increases a variable by one?",
                options: ["--", "++", "+=2", "**"],
                correctAnswer: 1
            },
            {
                id: 21,
                text: "Which keyword is used to define a constant?",
                options: ["static", "final", "const", "fixed"],
                correctAnswer: 1
            },
            {
                id: 22,
                text: "Where are Java packages stored?",
                options: ["In folders", "In HTML files", "In RAM", "In BIOS"],
                correctAnswer: 0
            },
            {
                id: 23,
                text: "Which access modifier allows visibility everywhere?",
                options: ["private", "protected", "package-private", "public"],
                correctAnswer: 3
            },
            {
                id: 24,
                text: "Which of these is NOT a primitive data type?",
                options: ["long", "String", "char", "float"],
                correctAnswer: 1
            },
            {
                id: 25,
                text: "The super keyword refers to __________",
                options: ["subclass", "object", "parent class", "constructor"],
                correctAnswer: 2
            },
            {
                id: 26,
                text: "What is method overloading?",
                options: ["Two methods same name different parameters", "Two methods different names", "Two classes same name", "One method inside another"],
                correctAnswer: 0
            },
            {
                id: 27,
                text: "The new keyword allocates ______",
                options: ["CPU time", "memory", "threads", "libraries"],
                correctAnswer: 1
            },
            {
                id: 28,
                text: "Which operator compares object references?",
                options: ["==", "equals()", "<=", "compare()"],
                correctAnswer: 0
            },
            {
                id: 29,
                text: "Which loop is used to iterate over arrays?",
                options: ["switch", "enhanced for", "try", "if"],
                correctAnswer: 1
            },
            {
                id: 30,
                text: "The break statement is used to ______",
                options: ["continue a loop", "exit a loop", "repeat a loop", "end program"],
                correctAnswer: 1
            },
            {
                id: 31,
                text: "Which keyword is used to handle an exception?",
                options: ["throw", "try", "break", "final"],
                correctAnswer: 1
            },
            {
                id: 32,
                text: "Which class is the parent of all classes?",
                options: ["SuperClass", "Object", "Main", "Runtime"],
                correctAnswer: 1
            },
            {
                id: 33,
                text: "String objects in Java are ______",
                options: ["Mutable", "Immutable", "Constant only", "Optional"],
                correctAnswer: 1
            },
            {
                id: 34,
                text: "What is the output of 9 % 4?",
                options: ["2", "1", "3", "0"],
                correctAnswer: 0
            },
            {
                id: 35,
                text: "A constructor has the same name as ______",
                options: ["method", "package", "class", "object"],
                correctAnswer: 2
            },
            {
                id: 36,
                text: "Which loop runs when a condition is true?",
                options: ["until", "while", "repeat", "case"],
                correctAnswer: 1
            },
            {
                id: 37,
                text: "Which keyword is used to return a value?",
                options: ["out", "give", "return", "send"],
                correctAnswer: 2
            },
            {
                id: 38,
                text: "What is the default value of an int variable?",
                options: ["1", "0", "null", "false"],
                correctAnswer: 1
            },
            {
                id: 39,
                text: "Which method joins two strings?",
                options: ["add()", "append()", "plus()", "concat()"],
                correctAnswer: 3
            },
            {
                id: 40,
                text: "Which statement is used for decision-making?",
                options: ["if", "switch", "both A and B", "none"],
                correctAnswer: 2
            },
            {
                id: 41,
                text: "The this keyword refers to ______",
                options: ["parent object", "subclass object", "current object", "static class"],
                correctAnswer: 2
            },
            {
                id: 42,
                text: "Which keyword is used to stop further overriding?",
                options: ["sealed", "static", "final", "fixed"],
                correctAnswer: 2
            },
            {
                id: 43,
                text: "Which method converts a string to an integer?",
                options: ["Integer.parseInt()", "Integer.toString()", "int()", "convert()"],
                correctAnswer: 0
            },
            {
                id: 44,
                text: "An abstract class can contain ______",
                options: ["only abstract methods", "only concrete methods", "both abstract and concrete methods", "variables only"],
                correctAnswer: 2
            },
            {
                id: 45,
                text: "Which of the following is NOT a loop?",
                options: ["do…while", "for", "switch", "while"],
                correctAnswer: 2
            },
            {
                id: 46,
                text: "Dynamic method binding is also called ______",
                options: ["Overloading", "Polymorphism", "Encapsulation", "Data hiding"],
                correctAnswer: 1
            },
            {
                id: 47,
                text: "Which operator checks inequality?",
                options: ["==", "!=", "<<", ">="],
                correctAnswer: 1
            },
            {
                id: 48,
                text: "Which keyword is used to create a subclass object?",
                options: ["fresh", "new", "build", "object"],
                correctAnswer: 1
            },
            {
                id: 49,
                text: "Java source code is compiled to ______",
                options: ["exe", "machine code", "bytecode", "binary"],
                correctAnswer: 2
            },
            {
                id: 50,
                text: "Which method releases resources in a class?",
                options: ["final()", "finalize()", "finish()", "close()"],
                correctAnswer: 1
            }
        ]
    }
];

// Sample Results Data
const sampleResults = [
    {
        testId: 1,
        testTitle: "General Knowledge Quiz",
        date: "2023-10-15",
        score: 80,
        totalQuestions: 5,
        correctAnswers: 4,
        timeTaken: 12
    },
    {
        testId: 2,
        testTitle: "JavaScript Fundamentals",
        date: "2023-10-10",
        score: 60,
        totalQuestions: 5,
        correctAnswers: 3,
        timeTaken: 18
    },
    {
        testId: 3,
        testTitle: "GST 212 - Logic and Reasoning (50 Questions)",
        date: "2023-10-05",
        score: 85,
        totalQuestions: 50,
        correctAnswers: 42,
        timeTaken: 45
    },
    {
        testId: 4,
        testTitle: "GST 212 - Philosophy and Human Existence (50 Questions)",
        date: "2023-10-01",
        score: 78,
        totalQuestions: 50,
        correctAnswers: 39,
        timeTaken: 50
    },
    {
        testId: 5,
        testTitle: "Philosophy Fundamentals (30 Questions)",
        date: "2023-09-28",
        score: 88,
        totalQuestions: 30,
        correctAnswers: 26,
        timeTaken: 35
    },
    {
        testId: 6,
        testTitle: "COS211 - Java Programming (50 Questions)",
        date: "2023-09-25",
        score: 92,
        totalQuestions: 50,
        correctAnswers: 46,
        timeTaken: 48
    }
];

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    loadDataFromStorage();
    initializeEventListeners();
    renderTests();
    renderResults();
    updateProgress();
    applySettings();
    setupChart();
});

// Load data from localStorage
function loadDataFromStorage() {
    const savedTests = localStorage.getItem('testPortalTests');
    const savedResults = localStorage.getItem('testPortalResults');
    const savedSettings = localStorage.getItem('testPortalSettings');
    const savedUser = localStorage.getItem('testPortalUser');
    
    if (savedTests) {
        appState.tests = JSON.parse(savedTests);
    } else {
        appState.tests = sampleTests;
        saveTestsToStorage();
    }
    
    if (savedResults) {
        appState.results = JSON.parse(savedResults);
    } else {
        appState.results = sampleResults;
        saveResultsToStorage();
    }
    
    if (savedSettings) {
        appState.settings = JSON.parse(savedSettings);
    }
    
    if (savedUser) {
        appState.currentUser = savedUser;
        document.getElementById('username').textContent = savedUser;
        document.querySelector('.avatar').textContent = savedUser.charAt(0).toUpperCase();
    }
}

// Save data to localStorage
function saveTestsToStorage() {
    localStorage.setItem('testPortalTests', JSON.stringify(appState.tests));
}

function saveResultsToStorage() {
    localStorage.setItem('testPortalResults', JSON.stringify(appState.results));
}

function saveSettingsToStorage() {
    localStorage.setItem('testPortalSettings', JSON.stringify(appState.settings));
}

function saveUserToStorage() {
    localStorage.setItem('testPortalUser', appState.currentUser);
}

// Initialize all event listeners
function initializeEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-menu li').forEach(item => {
        item.addEventListener('click', () => {
            const tab = item.getAttribute('data-tab');
            switchTab(tab);
            
            document.querySelectorAll('.nav-menu li').forEach(li => li.classList.remove('active'));
            item.classList.add('active');
        });
    });
    
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Test creation
    document.getElementById('createTestBtn').addEventListener('click', openCreateTestModal);
    document.getElementById('saveTestBtn').addEventListener('click', saveNewTest);
    document.getElementById('cancelTestBtn').addEventListener('click', closeCreateTestModal);
    document.getElementById('addQuestionBtn').addEventListener('click', addQuestionToForm);
    
    // Test taking
    document.getElementById('prevBtn').addEventListener('click', showPreviousQuestion);
    document.getElementById('nextBtn').addEventListener('click', showNextQuestion);
    document.getElementById('submitTestBtn').addEventListener('click', confirmSubmitTest);
    
    // Customization
    document.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            changeTheme(theme);
            
            document.querySelectorAll('.theme-option').forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    document.getElementById('saveSettingsBtn').addEventListener('click', saveCustomSettings);
    document.getElementById('userName').addEventListener('input', function() {
        document.getElementById('username').textContent = this.value || 'Student';
        document.querySelector('.avatar').textContent = (this.value.charAt(0) || 'S').toUpperCase();
    });
    
    document.getElementById('avatarColor').addEventListener('input', function() {
        document.querySelector('.avatar').style.backgroundColor = this.value;
    });
    
    // Modals
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').classList.remove('active');
        });
    });
    
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    });
    
    // Footer buttons
    document.getElementById('exportDataBtn').addEventListener('click', exportData);
    document.getElementById('resetDataBtn').addEventListener('click', confirmResetData);
    
    // Confirmation modal
    document.getElementById('confirmCancelBtn').addEventListener('click', function() {
        document.getElementById('confirmationModal').classList.remove('active');
    });
}

// Switch between tabs
function switchTab(tabId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    document.getElementById(tabId).classList.add('active');
    
    if (tabId === 'active-test' && appState.currentTest) {
        loadTest(appState.currentTest);
    }
}

// Render available tests
function renderTests() {
    const container = document.querySelector('.test-cards');
    container.innerHTML = '';
    
    appState.tests.forEach(test => {
        const isGST212Logic = test.title.includes("Logic and Reasoning");
        const isGST212Philosophy = test.title.includes("Philosophy and Human");
        const isPhilosophyFundamentals = test.title.includes("Philosophy Fundamentals");
        const isCOS211 = test.title.includes("COS211");
        const isGST212 = isGST212Logic || isGST212Philosophy;
        const isPhilosophy = isPhilosophyFundamentals || isGST212Philosophy;
        const isProgramming = isCOS211 || test.title.includes("JavaScript");
        
        const testCard = document.createElement('div');
        testCard.className = `test-card ${isGST212 ? 'gst212-test' : ''} ${isPhilosophy ? 'philosophy-test' : ''} ${isProgramming ? 'programming-test' : ''}`;
        testCard.innerHTML = `
            ${isGST212 ? '<div class="gst212-badge">GST 212</div>' : ''}
            ${isCOS211 ? '<div class="subject-badge cos211">COS 211</div>' : ''}
            ${isPhilosophyFundamentals ? '<div class="subject-badge philosophy-fundamentals">Philosophy 101</div>' : ''}
            ${isGST212Logic ? '<div class="gst-subject-badge logic">Logic</div>' : ''}
            ${isGST212Philosophy ? '<div class="gst-subject-badge philosophy">Philosophy</div>' : ''}
            
            <h3>${test.title}</h3>
            <p>${test.description}</p>
            <div class="test-meta">
                <span><i class="far fa-clock"></i> ${test.timeLimit} min</span>
                <span><i class="far fa-question-circle"></i> ${test.questions.length} questions</span>
                ${isGST212 ? '<span><i class="fas fa-graduation-cap"></i> University Level</span>' : ''}
                ${isCOS211 ? '<span><i class="fas fa-code"></i> Programming</span>' : ''}
                ${isPhilosophyFundamentals ? '<span><i class="fas fa-brain"></i> Foundational</span>' : ''}
            </div>
            <div class="test-features">
                ${test.questions.length > 20 ? '<span class="feature-tag"><i class="fas fa-shuffle"></i> Shuffle Available</span>' : ''}
                ${isGST212 || isCOS211 ? '<span class="feature-tag"><i class="fas fa-star"></i> Graded</span>' : ''}
                ${isProgramming ? '<span class="feature-tag"><i class="fas fa-laptop-code"></i> Coding</span>' : ''}
            </div>
            <button class="btn-primary btn-start" data-test-id="${test.id}">Start Test</button>
        `;
        
        container.appendChild(testCard);
    });
    
    document.querySelectorAll('.btn-start').forEach(btn => {
        btn.addEventListener('click', function() {
            const testId = parseInt(this.getAttribute('data-test-id'));
            startTest(testId);
        });
    });
}

// Start a test
function startTest(testId) {
    const test = appState.tests.find(t => t.id === testId);
    if (!test) return;
    
    appState.currentTest = test;
    appState.currentQuestionIndex = 0;
    appState.userAnswers = {};
    appState.timeRemaining = test.timeLimit * 60;
    appState.shuffleQuestions = false;
    appState.shuffledOrder = [];
    
    if (appState.timer) {
        clearInterval(appState.timer);
    }
    
    if (appState.settings.showTimer) {
        startTimer();
    }
    
    switchTab('active-test');
    document.querySelectorAll('.nav-menu li').forEach(li => li.classList.remove('active'));
    document.querySelector('[data-tab="active-test"]').classList.add('active');
    
    loadTest(test);
}

// Load test into UI
function loadTest(test) {
    document.getElementById('testTitle').textContent = test.title;
    document.getElementById('questionCount').textContent = test.questions.length;
    
    updateTimerDisplay();
    loadQuestion(appState.currentQuestionIndex);
    updateQuestionIndicators();
    addShuffleButton();
}

// Get question by index (handles shuffled order)
function getQuestionByIndex(index) {
    if (!appState.currentTest) return null;
    
    if (appState.shuffleQuestions && appState.shuffledOrder.length > 0) {
        const actualIndex = appState.shuffledOrder[index];
        return {
            ...appState.currentTest.questions[actualIndex],
            originalIndex: actualIndex,
            displayIndex: index + 1
        };
    }
    
    return {
        ...appState.currentTest.questions[index],
        originalIndex: index,
        displayIndex: index + 1
    };
}

// Load a specific question
function loadQuestion(index) {
    const questionData = getQuestionByIndex(index);
    if (!questionData) return;
    
    const container = document.querySelector('.question-container');
    
    let shuffleWarning = '';
    if (appState.shuffleQuestions && index === 0) {
        shuffleWarning = `
            <div class="shuffle-warning">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Questions are in shuffled order. Answer carefully as question numbers don't match original order.</p>
            </div>
        `;
    }
    
    container.innerHTML = `
        ${shuffleWarning}
        <div class="question-header">
            <span class="question-number">Question ${questionData.displayIndex} of ${appState.currentTest.questions.length}</span>
            ${appState.shuffleQuestions ? '<span class="shuffle-indicator"><i class="fas fa-random"></i> Shuffled</span>' : ''}
        </div>
        <div class="question-text">${questionData.text}</div>
        <div class="options-container">
            ${questionData.options.map((option, i) => `
                <div class="option" data-option-index="${i}">
                    <div class="option-label">${String.fromCharCode(65 + i)}</div>
                    <div class="option-text">${option}</div>
                </div>
            `).join('')}
        </div>
    `;
    
    const userAnswer = appState.userAnswers[questionData.originalIndex];
    if (userAnswer !== undefined) {
        const optionElement = container.querySelector(`[data-option-index="${userAnswer}"]`);
        if (optionElement) {
            optionElement.classList.add('selected');
        }
    }
    
    container.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', function() {
            const optionIndex = parseInt(this.getAttribute('data-option-index'));
            selectOption(questionData.originalIndex, optionIndex, index);
        });
    });
    
    document.getElementById('prevBtn').disabled = index === 0;
    document.getElementById('nextBtn').textContent = 
        index === appState.currentTest.questions.length - 1 ? 'Finish' : 'Next';
}

// Select an option for current question
function selectOption(originalIndex, optionIndex, displayIndex) {
    appState.userAnswers[originalIndex] = optionIndex;
    
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    const selectedOption = document.querySelector(`[data-option-index="${optionIndex}"]`);
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }
    
    updateQuestionIndicators();
    
    if (appState.settings.autoNext && displayIndex < appState.currentTest.questions.length - 1) {
        setTimeout(() => {
            showNextQuestion();
        }, 500);
    }
    
    if (appState.settings.instantFeedback) {
        const questionData = getQuestionByIndex(displayIndex);
        const correctAnswer = questionData.correctAnswer;
        
        document.querySelectorAll('.option').forEach(option => {
            const optionIdx = parseInt(option.getAttribute('data-option-index'));
            if (optionIdx === correctAnswer) {
                option.classList.add('correct');
            } else if (optionIdx === optionIndex && optionIdx !== correctAnswer) {
                option.classList.add('incorrect');
            }
        });
    }
}

// Update question indicators
function updateQuestionIndicators() {
    const container = document.querySelector('.question-indicators');
    const questions = appState.currentTest.questions;
    
    container.innerHTML = '';
    
    for (let i = 0; i < questions.length; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'question-indicator';
        
        let originalIndex;
        if (appState.shuffleQuestions && appState.shuffledOrder.length > 0) {
            originalIndex = appState.shuffledOrder[i];
        } else {
            originalIndex = i;
        }
        
        if (i === appState.currentQuestionIndex) {
            indicator.classList.add('current');
        }
        
        if (appState.userAnswers[originalIndex] !== undefined) {
            indicator.classList.add('answered');
        }
        
        indicator.addEventListener('click', () => {
            appState.currentQuestionIndex = i;
            loadQuestion(i);
            updateQuestionIndicators();
        });
        
        container.appendChild(indicator);
    }
}

// Navigate to previous question
function showPreviousQuestion() {
    if (appState.currentQuestionIndex > 0) {
        appState.currentQuestionIndex--;
        loadQuestion(appState.currentQuestionIndex);
        updateQuestionIndicators();
    }
}

// Navigate to next question
function showNextQuestion() {
    if (appState.currentQuestionIndex < appState.currentTest.questions.length - 1) {
        appState.currentQuestionIndex++;
        loadQuestion(appState.currentQuestionIndex);
        updateQuestionIndicators();
    } else {
        confirmSubmitTest();
    }
}

// Start timer for test
function startTimer() {
    if (appState.timer) {
        clearInterval(appState.timer);
    }
    
    appState.timer = setInterval(() => {
        appState.timeRemaining--;
        updateTimerDisplay();
        
        if (appState.timeRemaining <= 0) {
            clearInterval(appState.timer);
            submitTest();
            showToast("Time's up! Test submitted automatically.");
        }
    }, 1000);
}

// Update timer display
function updateTimerDisplay() {
    const minutes = Math.floor(appState.timeRemaining / 60);
    const seconds = appState.timeRemaining % 60;
    document.getElementById('timeRemaining').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (appState.timeRemaining < 60) {
        document.getElementById('timeRemaining').style.color = 'var(--danger-color)';
    }
}

// Confirm test submission
function confirmSubmitTest() {
    const unanswered = appState.currentTest.questions.length - Object.keys(appState.userAnswers).length;
    
    let message = "Are you sure you want to submit the test?";
    if (unanswered > 0) {
        message += ` You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}.`;
    }
    
    showConfirmation("Submit Test", message, submitTest);
}

// Submit test and calculate results
function submitTest() {
    if (appState.timer) {
        clearInterval(appState.timer);
        appState.timer = null;
    }
    
    const test = appState.currentTest;
    let correctCount = 0;
    
    test.questions.forEach((question, index) => {
        if (appState.userAnswers[index] === question.correctAnswer) {
            correctCount++;
        }
    });
    
    const score = Math.round((correctCount / test.questions.length) * 100);
    const timeTaken = test.timeLimit * 60 - appState.timeRemaining;
    
    const result = {
        testId: test.id,
        testTitle: test.title,
        date: new Date().toISOString().split('T')[0],
        score: score,
        totalQuestions: test.questions.length,
        correctAnswers: correctCount,
        timeTaken: Math.floor(timeTaken / 60),
        wasShuffled: appState.shuffleQuestions
    };
    
    appState.results.unshift(result);
    saveResultsToStorage();
    
    showTestResults(result);
    updateProgress();
    renderResults();
    
    showToast(`Test submitted! Your score: ${score}%`);
}

// Show test results
function showTestResults(result) {
    const container = document.querySelector('.question-container');
    
    let scoringHTML = '';
    let isGST212 = result.testTitle.includes("GST 212");
    let isCOS211 = result.testTitle.includes("COS211");
    
    if (isGST212 || isCOS211) {
        const totalPoints = result.correctAnswers * 2;
        const percentage = totalPoints;
        const passed = totalPoints >= 50;
        const subject = isGST212 ? "GST 212" : "COS 211";
        
        scoringHTML = `
            <div class="gst212-scoring">
                <h4>${subject} Scoring Details</h4>
                <div class="scoring-grid">
                    <div class="scoring-item">
                        <span class="scoring-label">Total Points:</span>
                        <span class="scoring-value">${totalPoints}/100</span>
                    </div>
                    <div class="scoring-item">
                        <span class="scoring-label">Correct Answers:</span>
                        <span class="scoring-value">${result.correctAnswers}/${result.totalQuestions}</span>
                    </div>
                    <div class="scoring-item">
                        <span class="scoring-label">Percentage:</span>
                        <span class="scoring-value">${percentage}%</span>
                    </div>
                    <div class="scoring-item">
                        <span class="scoring-label">Pass Mark:</span>
                        <span class="scoring-value">50 points</span>
                    </div>
                    <div class="scoring-item">
                        <span class="scoring-label">Status:</span>
                        <span class="scoring-value ${passed ? 'passed' : 'failed'}">
                            ${passed ? 'PASSED ✓' : 'FAILED ✗'}
                        </span>
                    </div>
                    <div class="scoring-item">
                        <span class="scoring-label">Grade:</span>
                        <span class="scoring-value ${getGrade(totalPoints)}">
                            ${getGrade(totalPoints)}
                        </span>
                    </div>
                </div>
            </div>
        `;
    }
    
    let shuffleNote = '';
    if (result.wasShuffled) {
        shuffleNote = `
            <div class="shuffle-result-note">
                <i class="fas fa-random"></i> This test was taken with questions in shuffled order.
            </div>
        `;
    }
    
    container.innerHTML = `
        <div class="result-summary-card">
            ${shuffleNote}
            <h3>Test Results: ${result.testTitle}</h3>
            <div class="score-display">
                <div class="score-circle">
                    <span class="score-value">${result.score}%</span>
                </div>
                <div class="score-details">
                    <p><strong>Correct Answers:</strong> ${result.correctAnswers} out of ${result.totalQuestions}</p>
                    <p><strong>Time Taken:</strong> ${result.timeTaken} minutes</p>
                    <p><strong>Date:</strong> ${result.date}</p>
                    ${isGST212 || isCOS211 ? '<p><strong>Scoring:</strong> 2 points per correct answer (100 max)</p>' : ''}
                </div>
            </div>
            
            ${scoringHTML}
            
            <div class="question-review">
                <h4>Question Review (showing first 10 questions)</h4>
                ${appState.currentTest.questions.slice(0, 10).map((question, index) => {
                    const userAnswer = appState.userAnswers[index];
                    const isCorrect = userAnswer === question.correctAnswer;
                    
                    return `
                        <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
                            <div class="review-question">
                                <strong>Q${index + 1}:</strong> ${question.text}
                            </div>
                            <div class="review-answer">
                                <span class="your-answer">Your answer: ${userAnswer !== undefined ? question.options[userAnswer] : 'Not answered'}</span>
                                ${!isCorrect ? `<span class="correct-answer">Correct answer: ${question.options[question.correctAnswer]}</span>` : ''}
                                ${isCorrect ? '<span class="answer-status correct-status">✓ Correct</span>' : '<span class="answer-status incorrect-status">✗ Incorrect</span>'}
                            </div>
                        </div>
                    `;
                }).join('')}
                ${appState.currentTest.questions.length > 10 ? 
                    `<div class="review-note">+ ${appState.currentTest.questions.length - 10} more questions (scroll in review panel to see all)</div>` : ''}
            </div>
            
            <div class="result-actions">
                <button id="retakeTestBtn" class="btn-secondary">Retake Test</button>
                <button id="viewAllQuestionsBtn" class="btn-secondary">View All Questions</button>
                <button id="viewResultsBtn" class="btn-primary">View All Results</button>
            </div>
        </div>
    `;
    
    document.getElementById('retakeTestBtn').addEventListener('click', () => {
        startTest(appState.currentTest.id);
    });
    
    document.getElementById('viewResultsBtn').addEventListener('click', () => {
        switchTab('results');
        document.querySelectorAll('.nav-menu li').forEach(li => li.classList.remove('active'));
        document.querySelector('[data-tab="results"]').classList.add('active');
    });
    
    document.getElementById('viewAllQuestionsBtn')?.addEventListener('click', () => {
        showAllQuestionsReview();
    });
}

// Helper function to get grade
function getGrade(points) {
    if (points >= 70) return 'A';
    if (points >= 60) return 'B';
    if (points >= 50) return 'C';
    if (points >= 45) return 'D';
    if (points >= 40) return 'E';
    return 'F';
}

// Function to show all questions review
function showAllQuestionsReview() {
    const container = document.querySelector('.question-container');
    
    container.innerHTML = `
        <div class="full-review">
            <div class="review-header">
                <h3>Complete Question Review: ${appState.currentTest.title}</h3>
                <button id="backToSummaryBtn" class="btn-secondary">
                    <i class="fas fa-arrow-left"></i> Back to Summary
                </button>
            </div>
            
            <div class="all-questions-list">
                ${appState.currentTest.questions.map((question, index) => {
                    const userAnswer = appState.userAnswers[index];
                    const isCorrect = userAnswer === question.correctAnswer;
                    const answerLetter = userAnswer !== undefined ? String.fromCharCode(65 + userAnswer) : 'N/A';
                    const correctLetter = String.fromCharCode(65 + question.correctAnswer);
                    
                    return `
                        <div class="full-review-item ${isCorrect ? 'correct' : 'incorrect'}">
                            <div class="question-number">Q${index + 1}</div>
                            <div class="question-content">
                                <div class="question-text">${question.text}</div>
                                <div class="options-grid">
                                    ${question.options.map((option, optIndex) => {
                                        const isUserAnswer = optIndex === userAnswer;
                                        const isCorrectAnswer = optIndex === question.correctAnswer;
                                        let optionClass = '';
                                        if (isUserAnswer && isCorrectAnswer) optionClass = 'user-correct';
                                        else if (isUserAnswer && !isCorrectAnswer) optionClass = 'user-incorrect';
                                        else if (!isUserAnswer && isCorrectAnswer) optionClass = 'correct-option';
                                        
                                        return `
                                            <div class="option-item ${optionClass}">
                                                <span class="option-letter">${String.fromCharCode(65 + optIndex)}</span>
                                                <span class="option-text">${option}</span>
                                                ${isUserAnswer ? '<span class="user-choice">(Your choice)</span>' : ''}
                                                ${isCorrectAnswer ? '<span class="correct-mark">✓ Correct</span>' : ''}
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                                <div class="answer-analysis">
                                    <span class="user-answer-label">Your answer: ${answerLetter}</span>
                                    <span class="correct-answer-label">Correct answer: ${correctLetter}</span>
                                    <span class="status-badge ${isCorrect ? 'correct-badge' : 'incorrect-badge'}">
                                        ${isCorrect ? 'Correct' : 'Incorrect'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
    
    document.getElementById('backToSummaryBtn').addEventListener('click', () => {
        showTestResults(appState.results.find(r => r.testId === appState.currentTest.id));
    });
}

// Render results list
function renderResults() {
    const container = document.querySelector('.result-cards');
    if (!container) return;
    
    container.innerHTML = '';
    
    appState.results.slice(0, 5).forEach(result => {
        const resultCard = document.createElement('div');
        resultCard.className = 'result-card';
        resultCard.innerHTML = `
            <div class="result-header">
                <div class="result-title">${result.testTitle}</div>
                <div class="result-score">${result.score}%</div>
            </div>
            <div class="result-details">
                <span>${result.correctAnswers}/${result.totalQuestions} correct</span>
                <span>${result.date}</span>
            </div>
        `;
        
        container.appendChild(resultCard);
    });
}

// Update progress circle and stats
function updateProgress() {
    if (appState.results.length === 0) return;
    
    const totalTests = appState.results.length;
    const avgScore = appState.results.reduce((sum, result) => sum + result.score, 0) / totalTests;
    const overallProgress = Math.min(avgScore, 100);
    
    const progressFill = document.querySelector('.progress-fill');
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (overallProgress / 100) * circumference;
    progressFill.style.strokeDashoffset = offset;
    
    document.getElementById('progressPercent').textContent = `${Math.round(overallProgress)}%`;
    document.getElementById('testsTaken').textContent = totalTests;
    document.getElementById('avgScore').textContent = `${Math.round(avgScore)}%`;
}

// Setup performance chart
function setupChart() {
    const ctx = document.getElementById('performanceChart');
    if (!ctx) return;
    
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: appState.results.slice(-10).map(r => r.date),
            datasets: [{
                label: 'Test Scores',
                data: appState.results.slice(-10).map(r => r.score),
                borderColor: 'var(--primary-color)',
                backgroundColor: 'rgba(74, 111, 165, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Theme Management
function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    changeTheme(newTheme);
}

function changeTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme', 'blue-theme', 'green-theme');
    
    if (theme !== 'light') {
        document.body.classList.add(`${theme}-theme`);
    }
    
    appState.settings.theme = theme;
    saveSettingsToStorage();
    
    const themeBtn = document.getElementById('themeToggle');
    const icon = themeBtn.querySelector('i');
    const text = themeBtn.querySelector('span');
    
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    text.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    
    document.querySelectorAll('.theme-option').forEach(opt => {
        opt.classList.remove('active');
        if (opt.getAttribute('data-theme') === theme) {
            opt.classList.add('active');
        }
    });
}

// Apply saved settings
function applySettings() {
    changeTheme(appState.settings.theme);
    
    document.getElementById('userName').value = appState.currentUser;
    document.getElementById('avatarColor').value = appState.settings.avatarColor;
    document.querySelector('.avatar').style.backgroundColor = appState.settings.avatarColor;
    
    document.getElementById('autoNext').checked = appState.settings.autoNext;
    document.getElementById('showTimer').checked = appState.settings.showTimer;
    document.getElementById('instantFeedback').checked = appState.settings.instantFeedback;
}

// Save customization settings
function saveCustomSettings() {
    appState.currentUser = document.getElementById('userName').value || 'Student';
    appState.settings.avatarColor = document.getElementById('avatarColor').value;
    appState.settings.autoNext = document.getElementById('autoNext').checked;
    appState.settings.showTimer = document.getElementById('showTimer').checked;
    appState.settings.instantFeedback = document.getElementById('instantFeedback').checked;
    
    document.getElementById('username').textContent = appState.currentUser;
    document.querySelector('.avatar').textContent = appState.currentUser.charAt(0).toUpperCase();
    document.querySelector('.avatar').style.backgroundColor = appState.settings.avatarColor;
    
    saveSettingsToStorage();
    saveUserToStorage();
    
    showToast('Settings saved successfully!');
}

// Shuffle Features
function addShuffleButton() {
    const testControls = document.querySelector('.test-controls');
    
    if (!document.getElementById('shuffleQuestionsBtn')) {
        const shuffleBtn = document.createElement('button');
        shuffleBtn.id = 'shuffleQuestionsBtn';
        shuffleBtn.className = 'btn-secondary';
        shuffleBtn.innerHTML = '<i class="fas fa-random"></i> Shuffle Questions';
        
        const submitBtn = document.getElementById('submitTestBtn');
        testControls.insertBefore(shuffleBtn, submitBtn);
        
        shuffleBtn.addEventListener('click', toggleShuffleQuestions);
    }
    
    updateShuffleButton();
}

function toggleShuffleQuestions() {
    appState.shuffleQuestions = !appState.shuffleQuestions;
    
    if (appState.shuffleQuestions) {
        shuffleQuestionOrder();
        showToast('Questions have been shuffled!');
    } else {
        appState.shuffledOrder = [];
        showToast('Questions restored to original order!');
    }
    
    updateShuffleButton();
    
    if (appState.currentTest) {
        appState.currentQuestionIndex = 0;
        loadQuestion(0);
        updateQuestionIndicators();
    }
}

function shuffleQuestionOrder() {
    const questions = appState.currentTest.questions;
    const indices = Array.from({length: questions.length}, (_, i) => i);
    
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    
    appState.shuffledOrder = indices;
}

function updateShuffleButton() {
    const shuffleBtn = document.getElementById('shuffleQuestionsBtn');
    if (!shuffleBtn) return;
    
    if (appState.shuffleQuestions) {
        shuffleBtn.innerHTML = '<i class="fas fa-times"></i> Unshuffle Questions';
        shuffleBtn.classList.add('btn-warning');
        shuffleBtn.classList.remove('btn-secondary');
    } else {
        shuffleBtn.innerHTML = '<i class="fas fa-random"></i> Shuffle Questions';
        shuffleBtn.classList.remove('btn-warning');
        shuffleBtn.classList.add('btn-secondary');
    }
}

// Test Creation Modal Functions
function openCreateTestModal() {
    document.getElementById('createTestModal').classList.add('active');
    document.getElementById('testForm').reset();
    document.querySelector('.questions-container').innerHTML = '';
    
    addQuestionToForm();
}

function closeCreateTestModal() {
    document.getElementById('createTestModal').classList.remove('active');
}

function addQuestionToForm() {
    const container = document.querySelector('.questions-container');
    const questionCount = container.children.length + 1;
    
    const questionHTML = `
        <div class="question-item">
            <div class="question-item-header">
                <h4>Question ${questionCount}</h4>
                <button type="button" class="remove-question">&times;</button>
            </div>
            <div class="form-group">
                <label>Question Text</label>
                <input type="text" class="question-text-input" placeholder="Enter the question" required>
            </div>
            <div class="form-group">
                <label>Options</label>
                ${['A', 'B', 'C', 'D'].map(letter => `
                    <div class="option-item">
                        <span>${letter}:</span>
                        <input type="text" class="option-input" placeholder="Option ${letter}" required>
                    </div>
                `).join('')}
            </div>
            <div class="correct-option">
                <span>Correct Answer:</span>
                <select class="correct-answer-select">
                    <option value="0">A</option>
                    <option value="1">B</option>
                    <option value="2">C</option>
                    <option value="3">D</option>
                </select>
            </div>
        </div>
    `;
    
    container.insertAdjacentHTML('beforeend', questionHTML);
    
    const removeBtn = container.lastElementChild.querySelector('.remove-question');
    removeBtn.addEventListener('click', function() {
        this.closest('.question-item').remove();
        renumberQuestions();
    });
}

function renumberQuestions() {
    document.querySelectorAll('.question-item').forEach((item, index) => {
        const header = item.querySelector('.question-item-header h4');
        header.textContent = `Question ${index + 1}`;
    });
}

function saveNewTest() {
    const title = document.getElementById('newTestTitle').value.trim();
    const description = document.getElementById('newTestDescription').value.trim();
    const timeLimit = parseInt(document.getElementById('newTestTime').value);
    
    if (!title) {
        showToast('Please enter a test title');
        return;
    }
    
    const questionItems = document.querySelectorAll('.question-item');
    if (questionItems.length === 0) {
        showToast('Please add at least one question');
        return;
    }
    
    const questions = [];
    let hasError = false;
    
    questionItems.forEach((item, index) => {
        const questionText = item.querySelector('.question-text-input').value.trim();
        const optionInputs = item.querySelectorAll('.option-input');
        const correctAnswer = parseInt(item.querySelector('.correct-answer-select').value);
        
        if (!questionText) {
            showToast(`Please enter text for question ${index + 1}`);
            hasError = true;
            return;
        }
        
        const options = [];
        optionInputs.forEach(input => {
            const optionText = input.value.trim();
            if (!optionText) {
                showToast(`Please fill all options for question ${index + 1}`);
                hasError = true;
                return;
            }
            options.push(optionText);
        });
        
        if (hasError) return;
        
        questions.push({
            id: index + 1,
            text: questionText,
            options: options,
            correctAnswer: correctAnswer
        });
    });
    
    if (hasError) return;
    
    const newTest = {
        id: appState.tests.length > 0 ? Math.max(...appState.tests.map(t => t.id)) + 1 : 1,
        title: title,
        description: description,
        timeLimit: timeLimit,
        questions: questions
    };
    
    appState.tests.push(newTest);
    saveTestsToStorage();
    
    renderTests();
    closeCreateTestModal();
    showToast('Test created successfully!');
    
    switchTab('tests');
    document.querySelectorAll('.nav-menu li').forEach(li => li.classList.remove('active'));
    document.querySelector('[data-tab="tests"]').classList.add('active');
}

// Confirmation Modal Functions
function showConfirmation(title, message, confirmCallback) {
    document.getElementById('confirmationTitle').textContent = title;
    document.getElementById('confirmationMessage').textContent = message;
    
    const confirmBtn = document.getElementById('confirmActionBtn');
    const modal = document.getElementById('confirmationModal');
    
    const newConfirmBtn = confirmBtn.cloneNode(true);
    confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
    
    newConfirmBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        confirmCallback();
    });
    
    modal.classList.add('active');
}

// Data Export
function exportData() {
    const data = {
        tests: appState.tests,
        results: appState.results,
        settings: appState.settings,
        user: appState.currentUser,
        exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `test-portal-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    showToast('Data exported successfully!');
}

// Data Reset
function confirmResetData() {
    showConfirmation(
        'Reset All Data',
        'This will reset all tests, results, and settings to default. This action cannot be undone.',
        resetData
    );
}

function resetData() {
    appState.tests = [...sampleTests];
    appState.results = [...sampleResults];
    appState.currentUser = 'Student';
    appState.settings = {
        theme: 'light',
        autoNext: true,
        showTimer: true,
        instantFeedback: false,
        avatarColor: '#4a6fa5'
    };
    
    localStorage.clear();
    
    saveTestsToStorage();
    saveResultsToStorage();
    saveSettingsToStorage();
    saveUserToStorage();
    
    renderTests();
    renderResults();
    updateProgress();
    applySettings();
    setupChart();
    
    if (appState.currentTest) {
        appState.currentTest = null;
        switchTab('tests');
        document.querySelectorAll('.nav-menu li').forEach(li => li.classList.remove('active'));
        document.querySelector('[data-tab="tests"]').classList.add('active');
    }
    
    showToast('All data has been reset to default.');
}

// Toast Notification
function showToast(message) {
    const toast = document.getElementById('successToast');
    document.getElementById('toastMessage').textContent = message;
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
                }
