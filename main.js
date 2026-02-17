// ===================================================================
// 16 PERSONALITIES — Quiz Engine
// Questions adapted from the IPIP Big Five (Goldberg, 1992)
// Public domain: https://ipip.ori.org/
// ===================================================================

// ===== QUESTION BANK (60 items) =====
// Each maps to one MBTI dimension via Big Five correspondence:
//   E/I ← IPIP Extraversion
//   S/N ← IPIP Openness to Experience (high Openness → N)
//   T/F ← IPIP Agreeableness (high Agreeableness → F)
//   J/P ← IPIP Conscientiousness (high Conscientiousness → J)
// direction: 1 = agree → first letter (E, S, T, J)
//           -1 = agree → second letter (I, N, F, P)

const QUESTIONS = [
    // ── E/I Dimension (Extraversion vs Introversion) ──
    { id: 1, text: "I am the life of the party.", dimension: "EI", direction: 1 },
    { id: 2, text: "I don't talk a lot.", dimension: "EI", direction: -1 },
    { id: 3, text: "I feel comfortable around people.", dimension: "EI", direction: 1 },
    { id: 4, text: "I keep in the background.", dimension: "EI", direction: -1 },
    { id: 5, text: "I start conversations.", dimension: "EI", direction: 1 },
    { id: 6, text: "I have little to say.", dimension: "EI", direction: -1 },
    { id: 7, text: "I talk to a lot of different people at parties.", dimension: "EI", direction: 1 },
    { id: 8, text: "I don't like to draw attention to myself.", dimension: "EI", direction: -1 },
    { id: 9, text: "I don't mind being the center of attention.", dimension: "EI", direction: 1 },
    { id: 10, text: "I am quiet around strangers.", dimension: "EI", direction: -1 },
    { id: 11, text: "I feel energized after spending time with a group of people.", dimension: "EI", direction: 1 },
    { id: 12, text: "I prefer to work alone rather than in a team.", dimension: "EI", direction: -1 },
    { id: 13, text: "I enjoy meeting new people.", dimension: "EI", direction: 1 },
    { id: 14, text: "I prefer to keep my thoughts to myself.", dimension: "EI", direction: -1 },
    { id: 15, text: "I find it easy to approach others and introduce myself.", dimension: "EI", direction: 1 },

    // ── S/N Dimension (Sensing/Observant vs Intuition) ──
    // Mapped from Openness to Experience: high Openness → Intuitive (N)
    { id: 16, text: "I have a rich vocabulary.", dimension: "SN", direction: -1 },
    { id: 17, text: "I have difficulty understanding abstract ideas.", dimension: "SN", direction: 1 },
    { id: 18, text: "I have a vivid imagination.", dimension: "SN", direction: -1 },
    { id: 19, text: "I am not interested in abstract ideas.", dimension: "SN", direction: 1 },
    { id: 20, text: "I have excellent ideas.", dimension: "SN", direction: -1 },
    { id: 21, text: "I do not have a good imagination.", dimension: "SN", direction: 1 },
    { id: 22, text: "I am quick to understand things.", dimension: "SN", direction: -1 },
    { id: 23, text: "I use difficult words.", dimension: "SN", direction: -1 },
    { id: 24, text: "I spend time reflecting on things.", dimension: "SN", direction: -1 },
    { id: 25, text: "I am full of ideas.", dimension: "SN", direction: -1 },
    { id: 26, text: "I prefer to focus on the facts rather than the big picture.", dimension: "SN", direction: 1 },
    { id: 27, text: "I enjoy exploring new theories and concepts.", dimension: "SN", direction: -1 },
    { id: 28, text: "I trust my direct experience more than my intuition.", dimension: "SN", direction: 1 },
    { id: 29, text: "I like to think about the deeper meaning behind things.", dimension: "SN", direction: -1 },
    { id: 30, text: "I prefer practical, hands-on work over theoretical discussions.", dimension: "SN", direction: 1 },

    // ── T/F Dimension (Thinking vs Feeling) ──
    // Mapped from Agreeableness: high Agreeableness → Feeling (F)
    { id: 31, text: "I feel little concern for others.", dimension: "TF", direction: 1 },
    { id: 32, text: "I am interested in people.", dimension: "TF", direction: -1 },
    { id: 33, text: "I insult people.", dimension: "TF", direction: 1 },
    { id: 34, text: "I sympathize with others' feelings.", dimension: "TF", direction: -1 },
    { id: 35, text: "I am not interested in other people's problems.", dimension: "TF", direction: 1 },
    { id: 36, text: "I have a soft heart.", dimension: "TF", direction: -1 },
    { id: 37, text: "I am not really interested in others.", dimension: "TF", direction: 1 },
    { id: 38, text: "I take time out for others.", dimension: "TF", direction: -1 },
    { id: 39, text: "I feel others' emotions.", dimension: "TF", direction: -1 },
    { id: 40, text: "I make people feel at ease.", dimension: "TF", direction: -1 },
    { id: 41, text: "I prioritize logic over feelings when making decisions.", dimension: "TF", direction: 1 },
    { id: 42, text: "I consider how my decisions affect others emotionally.", dimension: "TF", direction: -1 },
    { id: 43, text: "I value fairness and justice above compassion.", dimension: "TF", direction: 1 },
    { id: 44, text: "I find it easy to empathize with others.", dimension: "TF", direction: -1 },
    { id: 45, text: "I believe the best decisions are based on objective analysis.", dimension: "TF", direction: 1 },

    // ── J/P Dimension (Judging vs Perceiving) ──
    // Mapped from Conscientiousness: high Conscientiousness → Judging (J)
    { id: 46, text: "I am always prepared.", dimension: "JP", direction: 1 },
    { id: 47, text: "I leave my belongings around.", dimension: "JP", direction: -1 },
    { id: 48, text: "I pay attention to details.", dimension: "JP", direction: 1 },
    { id: 49, text: "I make a mess of things.", dimension: "JP", direction: -1 },
    { id: 50, text: "I get chores done right away.", dimension: "JP", direction: 1 },
    { id: 51, text: "I often forget to put things back in their proper place.", dimension: "JP", direction: -1 },
    { id: 52, text: "I like order.", dimension: "JP", direction: 1 },
    { id: 53, text: "I shirk my duties.", dimension: "JP", direction: -1 },
    { id: 54, text: "I follow a schedule.", dimension: "JP", direction: 1 },
    { id: 55, text: "I am exacting in my work.", dimension: "JP", direction: 1 },
    { id: 56, text: "I prefer to go with the flow rather than follow a plan.", dimension: "JP", direction: -1 },
    { id: 57, text: "I like to have things decided and settled.", dimension: "JP", direction: 1 },
    { id: 58, text: "I enjoy keeping my options open.", dimension: "JP", direction: -1 },
    { id: 59, text: "I set clear goals and work steadily toward them.", dimension: "JP", direction: 1 },
    { id: 60, text: "I tend to start many projects but finish few of them.", dimension: "JP", direction: -1 },
];

// ===== 16 PERSONALITY TYPE DATA =====
const PERSONALITY_TYPES = {
    INTJ: {
        code: "INTJ", title: "The Architect", emoji: "🏛️",
        tagline: "Imaginative and strategic thinkers, with a plan for everything.",
        role: "analysts", roleLabel: "Analyst",
        overview: "INTJs are analytical problem-solvers, eager to improve systems and processes with their innovative ideas. They have a talent for seeing possibilities for improvement, whether at work, at home, or in themselves. Often intellectual, INTJs enjoy logical reasoning and complex problem-solving. They approach life by analyzing the theory behind what they see, and are typically focused inward, on their own thoughtful study of the world around them.",
        strengths: ["Strategic and long-range thinking", "Independent and determined", "High standards and strong work ethic", "Creative and innovative problem-solver", "Excellent at synthesizing complex information"],
        weaknesses: ["Can appear arrogant or dismissive", "Overly critical of inefficiency in others", "May struggle with emotional expression", "Tendency to overthink and over-plan", "Can be impatient with those who don't keep up"],
        relationships: "In relationships, INTJs value intellectual compatibility above all. They seek partners who can match their depth of thought and who respect their need for independence and personal space. Though they may not be the most outwardly romantic, INTJs show love through loyalty, problem-solving for their partner, and long-term commitment. They thrive in relationships built on mutual respect, honesty, and shared intellectual curiosity.",
        careers: ["Strategic Planner", "Software Architect", "Scientist / Researcher", "Investment Banker", "Project Manager", "University Professor", "Systems Engineer", "Management Consultant"],
        growth: "INTJs can grow by developing their emotional intelligence and learning to appreciate perspectives that differ from their own. Practicing patience with others, expressing feelings more openly, and being willing to adapt plans when circumstances change will help INTJs build stronger connections and become more well-rounded individuals."
    },
    INTP: {
        code: "INTP", title: "The Logician", emoji: "🔬",
        tagline: "Innovative inventors with an unquenchable thirst for knowledge.",
        role: "analysts", roleLabel: "Analyst",
        overview: "INTPs are philosophical innovators, fascinated by logical analysis, systems, and design. They are preoccupied with theory, and search for the universal law behind everything they see. They want to understand the unifying themes of life, in all their complexity. INTPs are detached, analytical observers who can seem oblivious to the world around them because they are so deeply absorbed in thought.",
        strengths: ["Exceptional analytical and logical skills", "Original and creative thinker", "Open-minded and flexible", "Objective and fair-minded", "Deeply knowledgeable in areas of interest"],
        weaknesses: ["Can be insensitive to emotional cues", "May procrastinate on practical matters", "Difficulty following through on ideas", "Can become isolated and withdrawn", "Tendency to be overly abstract"],
        relationships: "INTPs approach relationships with the same analytical mind they apply to everything. They value intellectual stimulation and need a partner who can engage in deep, thought-provoking conversations. While they may struggle with expressing emotions directly, INTPs are deeply loyal and genuinely caring partners who show love through attentiveness and creative problem-solving.",
        careers: ["Software Developer", "Mathematician", "Philosopher", "Data Scientist", "Research Scientist", "Technical Writer", "Game Designer", "Forensic Analyst"],
        growth: "INTPs benefit from pushing themselves to take action on their ideas rather than endlessly refining them in theory. Developing emotional awareness, maintaining social connections, and learning to communicate their feelings will help INTPs lead more balanced and fulfilling lives."
    },
    ENTJ: {
        code: "ENTJ", title: "The Commander", emoji: "⚔️",
        tagline: "Bold, imaginative, and strong-willed leaders, always finding a way — or making one.",
        role: "analysts", roleLabel: "Analyst",
        overview: "ENTJs are strategic leaders, motivated to organize change. They are quick to see inefficiency and conceptualize new solutions, and enjoy developing long-range plans to accomplish their vision. They excel at logical reasoning and are usually articulate and quick-witted. ENTJs are ambitious and forceful, and see themselves as leaders who are born to take charge.",
        strengths: ["Natural-born leader with confidence", "Efficient and energetic", "Strong-willed and determined", "Strategic and visionary thinker", "Excellent at organizing people and resources"],
        weaknesses: ["Can be domineering and stubborn", "Impatient with slower-paced individuals", "May struggle with emotional sensitivity", "Can be ruthlessly rational", "Tendency to overlook others' feelings"],
        relationships: "ENTJs bring the same passion and commitment to their relationships as they do to their careers. They seek partners who are equally ambitious and intellectually stimulating. ENTJs are loyal and devoted partners who invest heavily in making relationships work, though they may need to consciously practice patience and emotional vulnerability.",
        careers: ["CEO / Executive", "Entrepreneur", "Corporate Strategist", "Lawyer", "Business Consultant", "Political Leader", "Financial Manager", "Operations Director"],
        growth: "ENTJs grow by learning to slow down and consider the emotional impact of their decisions on others. Developing patience, actively listening without immediately trying to solve problems, and showing vulnerability will help ENTJs build deeper, more authentic connections."
    },
    ENTP: {
        code: "ENTP", title: "The Debater", emoji: "💡",
        tagline: "Smart and curious thinkers who cannot resist an intellectual challenge.",
        role: "analysts", roleLabel: "Analyst",
        overview: "ENTPs are inspired innovators, motivated to find new solutions to intellectually challenging problems. They are curious and clever, and seek to comprehend the people, systems, and principles that surround them. Open-minded and unconventional, ENTPs want to analyze, understand, and influence other people. ENTPs enjoy playing with ideas and especially enjoy banter and debate.",
        strengths: ["Quick-witted and clever", "Excellent brainstormer", "Charismatic and energetic", "Adaptable and resourceful", "Fearless in challenging norms"],
        weaknesses: ["Can be argumentative for sport", "May struggle with follow-through", "Insensitive to others' feelings at times", "Easily bored with routine tasks", "Can be overly competitive"],
        relationships: "ENTPs bring excitement and intellectual energy to relationships. They seek partners who can keep up with their quick minds and enjoy spirited debates. ENTPs are enthusiastic and creative partners who keep the relationship lively, though they need to remember that not every disagreement needs to be a debate.",
        careers: ["Entrepreneur", "Marketing Director", "Creative Director", "Journalist", "Venture Capitalist", "Stand-up Comedian", "Political Analyst", "Product Manager"],
        growth: "ENTPs grow by learning to follow through on commitments and developing emotional sensitivity. Practicing active listening, finishing projects before starting new ones, and being mindful of how their words affect others will help ENTPs mature personally and professionally."
    },
    INFJ: {
        code: "INFJ", title: "The Advocate", emoji: "🌟",
        tagline: "Quiet and mystical, yet very inspiring and tireless idealists.",
        role: "diplomats", roleLabel: "Diplomat",
        overview: "INFJs are creative nurturers with a strong sense of personal integrity and a drive to help others realize their potential. They are idealistic and compassionate, but also decisive and determined. INFJs are the rarest personality type, and they often feel like outsiders. Their rich inner life and deep sensitivity give them a unique perspective on the world.",
        strengths: ["Deep insight into people and situations", "Principled and passionate", "Creative and inspired", "Altruistic and compassionate", "Determined and decisive when aligned with values"],
        weaknesses: ["Can be overly idealistic", "Prone to burnout from caring too much", "Difficulty opening up to others", "Perfectionistic tendencies", "May internalize conflict unhealthily"],
        relationships: "INFJs seek deep, meaningful connections above all. They are intensely loyal partners who value authenticity and emotional depth. INFJs are attuned to their partner's needs and often anticipate them before they're expressed. They need relationships built on trust, mutual understanding, and shared values.",
        careers: ["Counselor / Therapist", "Writer / Author", "Nonprofit Director", "Psychologist", "Human Resources Manager", "Social Worker", "Professor", "UX Designer"],
        growth: "INFJs benefit from setting healthy boundaries and learning that they cannot save everyone. Practicing self-care without guilt, sharing their burdens with trusted friends, and accepting imperfection — in themselves and others — are key areas for personal growth."
    },
    INFP: {
        code: "INFP", title: "The Mediator", emoji: "🦋",
        tagline: "Poetic, kind, and altruistic people, always eager to help a good cause.",
        role: "diplomats", roleLabel: "Diplomat",
        overview: "INFPs are imaginative idealists, guided by their own core values and beliefs. To an INFP, possibilities are paramount; the reality of the moment is only of passing concern. They are compassionate and empathetic, wanting to help everyone they meet. INFPs value authenticity above nearly everything else, and their creativity and idealism drive them to find unique paths through life.",
        strengths: ["Deeply empathetic and compassionate", "Creative and imaginative", "Open-minded and flexible", "Passionate about their values", "Excellent written communicator"],
        weaknesses: ["Can be overly idealistic and impractical", "Tendency to take things too personally", "May struggle with decision-making", "Avoids conflict even when necessary", "Prone to self-isolation"],
        relationships: "INFPs are devoted and caring partners who seek deep emotional connection. They need relationships where they feel truly seen and understood. INFPs express love through thoughtful gestures, creative expressions, and unwavering loyalty. They thrive with partners who appreciate their depth and don't rush them to be more practical.",
        careers: ["Writer / Poet", "Graphic Designer", "Therapist", "Social Worker", "Musician", "Librarian", "Environmental Scientist", "Art Therapist"],
        growth: "INFPs grow by developing practical skills to bring their ideals into reality. Learning to handle constructive criticism without taking it personally, addressing conflicts directly, and setting realistic goals alongside their dreams will help INFPs feel more grounded and effective."
    },
    ENFJ: {
        code: "ENFJ", title: "The Protagonist", emoji: "🎭",
        tagline: "Charismatic and inspiring leaders, able to mesmerize their listeners.",
        role: "diplomats", roleLabel: "Diplomat",
        overview: "ENFJs are idealist organizers, driven to implement their vision of what is best for humanity. They often act as catalysts for human growth because of their ability to see potential in other people and their charisma in persuading others to their ideas. ENFJs are energetic and passionate, and they genuinely enjoy helping others succeed and reach their full potential.",
        strengths: ["Natural leader who inspires others", "Empathetic and understanding", "Reliable and devoted", "Charismatic communicator", "Excellent at bringing people together"],
        weaknesses: ["Can be overly selfless to the point of burnout", "May be manipulative when passionate", "Too idealistic at times", "Takes criticism personally", "Can be overly involved in others' lives"],
        relationships: "ENFJs are warm, generous, and deeply committed partners. They invest tremendous energy in nurturing their relationships and helping their partners grow. ENFJs are excellent communicators who create harmony and warmth in their homes. They need partners who appreciate their devotion and reciprocate with genuine emotional engagement.",
        careers: ["Teacher / Professor", "Life Coach", "Public Relations Manager", "Diplomat", "Human Resources Director", "Motivational Speaker", "Non-Profit Leader", "Event Planner"],
        growth: "ENFJs benefit from learning to prioritize their own needs alongside others'. Setting boundaries, accepting that not everyone wants to be 'helped,' and being open to criticism without feeling personally attacked will help ENFJs maintain their well-being while continuing to make a positive impact."
    },
    ENFP: {
        code: "ENFP", title: "The Campaigner", emoji: "🌈",
        tagline: "Enthusiastic, creative, and sociable free spirits, who can always find a reason to smile.",
        role: "diplomats", roleLabel: "Diplomat",
        overview: "ENFPs are people-centered creators with a focus on possibilities and a contagious enthusiasm for new ideas, people, and activities. They are energetic, warm, and passionate. ENFPs love to talk about what inspires them, and they're equally enthusiastic about hearing others' ideas and stories. ENFPs see life as a creative playground, full of possibilities to explore.",
        strengths: ["Enthusiastic and creative", "Excellent communicator", "Warm and caring", "Very perceptive about people", "Adaptable and energetic"],
        weaknesses: ["Can be disorganized and unfocused", "Overthinks and stresses easily", "May struggle with follow-through", "People-pleasing tendencies", "Difficulty with routine tasks"],
        relationships: "ENFPs are passionate, enthusiastic partners who bring creative energy and warmth to their relationships. They crave deep emotional connection and intellectual stimulation. ENFPs need freedom to explore and grow, and they thrive with partners who are equally open-minded and supportive of their ever-evolving interests.",
        careers: ["Creative Director", "Journalist", "Actor / Performer", "Entrepreneur", "Marketing Specialist", "Life Coach", "Travel Writer", "Community Organizer"],
        growth: "ENFPs grow by developing discipline and follow-through. Learning to finish projects, creating structured routines, and developing the ability to sit with difficult emotions rather than seeking distraction will help ENFPs turn their abundant ideas into meaningful accomplishments."
    },
    ISTJ: {
        code: "ISTJ", title: "The Logistician", emoji: "📋",
        tagline: "Practical and fact-minded individuals, whose reliability cannot be doubted.",
        role: "sentinels", roleLabel: "Sentinel",
        overview: "ISTJs are responsible organizers, driven to create and enforce order within systems and institutions. They are neat and orderly, inside and out, and tend to have a procedure for everything they do. Reliable and dutiful, ISTJs want to uphold tradition and follow regulations. ISTJs are thorough, dependable, and hardworking, forming the backbone of many organizations.",
        strengths: ["Highly responsible and dependable", "Excellent attention to detail", "Strong sense of duty", "Patient and methodical", "Honest and direct"],
        weaknesses: ["Can be rigid and inflexible", "Stubborn in their ways", "Insensitive to emotions at times", "May resist change", "Tendency to be judgmental"],
        relationships: "ISTJs are loyal and committed partners who take their relationships seriously. They show love through acts of service, reliability, and keeping their promises. While not the most emotionally expressive, ISTJs demonstrate devotion through consistent, dependable behavior and practical support.",
        careers: ["Accountant", "Military Officer", "Judge", "Financial Analyst", "Business Administrator", "Inspector / Auditor", "Database Administrator", "Civil Engineer"],
        growth: "ISTJs grow by developing emotional flexibility and openness to new experiences. Learning to express feelings more openly, being willing to break from routine when beneficial, and practicing empathy will help ISTJs build deeper connections and adapt more readily to change."
    },
    ISFJ: {
        code: "ISFJ", title: "The Defender", emoji: "🛡️",
        tagline: "Very dedicated and warm protectors, always ready to defend their loved ones.",
        role: "sentinels", roleLabel: "Sentinel",
        overview: "ISFJs are industrious caretakers, loyal to traditions and organizations. They are practical, compassionate, and caring, and are motivated to provide for others and protect them from the perils of life. ISFJs are conventional and grounded, and enjoy contributing to established structures of society. They are steady and committed workers with a deep sense of responsibility.",
        strengths: ["Supportive and reliable", "Excellent memory for details about people", "Patient and observant", "Enthusiastic and hardworking", "Loyal and devoted"],
        weaknesses: ["Can neglect their own needs", "Overloading themselves with responsibilities", "Reluctant to change", "Taking criticism too personally", "Difficulty saying no"],
        relationships: "ISFJs are warm, nurturing partners who express love through thoughtful acts of care. They remember small details about their loved ones and go out of their way to create comfort and stability. ISFJs seek long-term, harmonious relationships built on mutual respect and shared traditions.",
        careers: ["Nurse / Healthcare Worker", "Social Worker", "Elementary Teacher", "Librarian", "Office Manager", "Interior Designer", "Veterinarian", "Human Resources Specialist"],
        growth: "ISFJs benefit from learning to prioritize their own needs and setting healthy boundaries. Developing assertiveness, being open to new approaches and ideas, and accepting that they can't take care of everyone will help ISFJs avoid burnout and maintain their generous spirit."
    },
    ESTJ: {
        code: "ESTJ", title: "The Executive", emoji: "👔",
        tagline: "Excellent administrators, unsurpassed at managing things — or people.",
        role: "sentinels", roleLabel: "Sentinel",
        overview: "ESTJs are hardworking traditionalists, eager to take charge in organizing projects and people. Orderly, rule-abiding, and conscientious, ESTJs like to get things done, and tend to go about projects in a systematic, methodical way. They are the consummate organizers, and want to bring structure to their surroundings. They value predictability and prefer things to proceed in a clear, logical fashion.",
        strengths: ["Strong organizational skills", "Dedicated and honest", "Excellent at creating order", "Direct and confident", "Loyal and patient with responsibilities"],
        weaknesses: ["Can be inflexible and stubborn", "Uncomfortable with unconventional situations", "May be judgmental", "Difficulty expressing emotions", "Can be too focused on social status"],
        relationships: "ESTJs are steady, reliable partners who take commitments seriously. They express love through structure, planning, and providing stability. ESTJs value tradition in relationships and are dedicated to building a secure future with their partner.",
        careers: ["Business Manager", "Police Officer", "Judge", "Financial Officer", "School Administrator", "Real Estate Agent", "Insurance Agent", "Military Leader"],
        growth: "ESTJs grow by developing flexibility and emotional awareness. Learning to listen to and validate others' feelings, being open to alternative approaches, and relaxing their need for control will help ESTJs become more adaptable and emotionally connected leaders."
    },
    ESFJ: {
        code: "ESFJ", title: "The Consul", emoji: "🤝",
        tagline: "Extraordinarily caring, social, and popular people, always eager to help.",
        role: "sentinels", roleLabel: "Sentinel",
        overview: "ESFJs are conscientious helpers, sensitive to the needs of others and energetically dedicated to their responsibilities. They are highly attuned to their emotional environment and attentive to both the feelings of others and the perception others have of them. ESFJs like a sense of harmony and cooperation around them, and are eager to please and provide.",
        strengths: ["Warm and caring with strong social skills", "Loyal and reliable", "Sensitive to others' needs", "Good at connecting with people", "Practical and down-to-earth"],
        weaknesses: ["Can be too needy for approval", "Overly sensitive to criticism", "Reluctant to improvise or innovate", "May be controlling", "Too selfless and neglect own needs"],
        relationships: "ESFJs are devoted, caring partners who thrive on creating warmth and harmony in their relationships. They are attentive to their partner's needs, enjoy shared social activities, and value loyalty above all. ESFJs seek stability and appreciation in their partnerships.",
        careers: ["Healthcare Administrator", "Event Coordinator", "Social Worker", "Public Relations Specialist", "Teacher", "Retail Manager", "Receptionist", "Personal Assistant"],
        growth: "ESFJs benefit from developing independence from others' opinions and learning to embrace change. Building self-confidence that doesn't depend on external validation, exploring new ideas without fear, and learning to say no when overwhelmed are important growth areas."
    },
    ISTP: {
        code: "ISTP", title: "The Virtuoso", emoji: "🔧",
        tagline: "Bold and practical experimenters, masters of all kinds of tools.",
        role: "explorers", roleLabel: "Explorer",
        overview: "ISTPs are observant artisans with an understanding of mechanics and an interest in troubleshooting. They approach their environments with flexible logic, looking for practical solutions to the problems at hand. They are independent and adaptable, and typically interact with the world around them in a self-directed, spontaneous manner. ISTPs are action-oriented problem solvers who thrive on hands-on experience.",
        strengths: ["Practical and resourceful", "Excellent in crisis situations", "Optimistic and energetic", "Creative and hands-on", "Easygoing and adaptable"],
        weaknesses: ["Can be insensitive and private", "Difficulty with long-term commitments", "Easily bored and restless", "Risk-prone behavior", "Stubbornly independent"],
        relationships: "ISTPs show love through actions rather than words. They are relaxed, adventurous partners who enjoy shared physical activities and hands-on projects. ISTPs need space for independence in relationships and connect best with partners who respect their autonomy while enjoying spontaneous adventures.",
        careers: ["Mechanic / Engineer", "Pilot", "Forensic Scientist", "Paramedic", "Electrician", "Software Developer", "Carpenter", "Sports Coach"],
        growth: "ISTPs grow by developing emotional communication skills and long-term planning abilities. Learning to express feelings verbally, committing to goals beyond the immediate present, and engaging more deeply in emotional conversations will help ISTPs build richer relationships."
    },
    ISFP: {
        code: "ISFP", title: "The Adventurer", emoji: "🎨",
        tagline: "Flexible and charming artists, always ready to explore and experience something new.",
        role: "explorers", roleLabel: "Explorer",
        overview: "ISFPs are gentle caretakers who live in the present moment and enjoy their surroundings with cheerful, low-key enthusiasm. They are flexible and spontaneous, and like to go with the flow to enjoy what life has to offer. ISFPs are quiet and unassuming, and may be hard to get to know. But to those who know them well, ISFPs are warm and friendly, eager to share in life's many experiences.",
        strengths: ["Charming and sensitive to others", "Imaginative and artistic", "Passionate and curious", "Bold and experimental", "Strong aesthetic sense"],
        weaknesses: ["Fiercely private and independent", "Unpredictable and easily stressed", "Overly competitive at times", "Difficulty with planning ahead", "Avoids confrontation"],
        relationships: "ISFPs are warm, supportive partners who express love through creative gestures and quality time. They are deeply attuned to their partner's emotions and prefer to show affection through actions rather than words. ISFPs need relationships that allow them freedom while providing emotional security.",
        careers: ["Artist / Designer", "Musician", "Veterinarian", "Chef", "Photographer", "Fashion Designer", "Landscape Architect", "Physical Therapist"],
        growth: "ISFPs grow by developing confidence to share their ideas and standing up for themselves. Learning to plan for the future while enjoying the present, addressing conflicts directly, and building the discipline to complete creative projects will help ISFPs turn their artistic vision into tangible achievements."
    },
    ESTP: {
        code: "ESTP", title: "The Entrepreneur", emoji: "🚀",
        tagline: "Smart, energetic, and very perceptive people, who truly enjoy living on the edge.",
        role: "explorers", roleLabel: "Explorer",
        overview: "ESTPs are energetic thrill-seekers who are at their best when putting out fires, whether literal or metaphorical. They bring a sense of dynamic energy to their interactions with others and the world around them. They assess situations quickly and move adeptly to respond to immediate problems with practical solutions. ESTPs are the ultimate pragmatists, living in the moment and cutting through BS with charm.",
        strengths: ["Bold and practical", "Direct and sociable", "Original and perceptive", "Excellent in crisis management", "Adaptable and resourceful"],
        weaknesses: ["Impatient with theory and abstraction", "Risk-prone and impulsive", "Unstructured and may miss details", "Can be insensitive and blunt", "Difficulty with long-term planning"],
        relationships: "ESTPs bring excitement, spontaneity, and fun to their relationships. They are action-oriented partners who prefer to show love through experiences and adventures rather than lengthy emotional conversations. ESTPs need partners who can keep up with their energy and enjoy living in the moment.",
        careers: ["Entrepreneur", "Sales Manager", "Paramedic / Firefighter", "Detective", "Stockbroker", "Sports Coach", "Marketing Executive", "TV Reporter"],
        growth: "ESTPs grow by developing patience and the ability to think long-term. Learning to consider the emotional consequences of their actions, developing deeper emotional connections, and building the discipline to follow through on commitments will help ESTPs achieve lasting success."
    },
    ESFP: {
        code: "ESFP", title: "The Entertainer", emoji: "🎉",
        tagline: "Spontaneous, energetic, and enthusiastic people — life is never boring around them.",
        role: "explorers", roleLabel: "Explorer",
        overview: "ESFPs are vivacious entertainers who charm and engage those around them. They are spontaneous, energetic, and fun-loving, and take pleasure in the things around them: food, clothes, nature, animals, and especially people. ESFPs are typically warm and talkative, and have a contagious enthusiasm for life. They like to be in the middle of the action and the center of attention.",
        strengths: ["Enthusiastic and energetic", "Warm and generous", "Practical and observant", "Excellent people skills", "Bold and original"],
        weaknesses: ["Easily bored and unfocused", "Sensitive to criticism", "Poor long-term planner", "Can be materialistic", "Avoids difficult conversations"],
        relationships: "ESFPs are warm, affectionate partners who create joy and excitement in their relationships. They are generous with their time and energy, and they make their partners feel special and appreciated. ESFPs need relationships that are fun, spontaneous, and emotionally warm.",
        careers: ["Actor / Performer", "Event Planner", "Tour Guide", "Flight Attendant", "Interior Decorator", "Fitness Trainer", "Sales Representative", "Restaurant Manager"],
        growth: "ESFPs grow by developing focus and long-term thinking. Learning to delay gratification, building financial discipline, engaging with deeper emotional topics, and developing the ability to be alone with their thoughts will help ESFPs achieve personal depth and sustained success."
    },
};

// ===== DIMENSION LABELS =====
const DIMENSION_LABELS = {
    EI: "Mind: Extraversion vs Introversion",
    SN: "Energy: Observant vs Intuitive",
    TF: "Nature: Thinking vs Feeling",
    JP: "Tactics: Judging vs Prospecting",
};

// ===== APP STATE =====
let currentQuestion = 0;
let answers = new Array(QUESTIONS.length).fill(null);
let slideDirection = 'forward';

// ===== DOM REFS =====
const screens = {
    landing: document.getElementById('landing-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen'),
};

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    renderTypeCards();
    bindEvents();
});

// ===== PARTICLES =====
function createParticles() {
    const container = document.getElementById('hero-particles');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 8 + 's';
        p.style.animationDuration = (6 + Math.random() * 6) + 's';
        const colors = ['#a78bfa', '#2dd4bf', '#f59e0b', '#f472b6', '#34d399'];
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        p.style.width = (2 + Math.random() * 4) + 'px';
        p.style.height = p.style.width;
        container.appendChild(p);
    }
}

// ===== TYPE CARDS ON LANDING =====
function renderTypeCards() {
    const groups = { analysts: [], diplomats: [], sentinels: [], explorers: [] };
    Object.values(PERSONALITY_TYPES).forEach(t => {
        groups[t.role].push(t);
    });

    Object.entries(groups).forEach(([role, types]) => {
        const container = document.getElementById(`${role}-cards`);
        if (!container) return;
        types.forEach(t => {
            const card = document.createElement('div');
            card.className = 'type-card';
            card.setAttribute('data-role', role);
            card.innerHTML = `
        <div class="card-emoji">${t.emoji}</div>
        <div class="card-code">${t.code}</div>
        <div class="card-name">${t.title}</div>
      `;
            container.appendChild(card);
        });
    });
}

// ===== EVENTS =====
function bindEvents() {
    // Start test
    document.getElementById('start-test-btn')?.addEventListener('click', () => startQuiz());

    // Nav links
    document.querySelectorAll('[data-action="test"]').forEach(el => {
        el.addEventListener('click', e => { e.preventDefault(); startQuiz(); });
    });
    document.querySelectorAll('[data-action="types"]').forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault();
            document.getElementById('types-showcase')?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Type group cards on hero
    document.querySelectorAll('.type-card-mini').forEach(el => {
        el.addEventListener('click', () => {
            document.getElementById('types-showcase')?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Likert buttons
    document.querySelectorAll('.likert-btn').forEach(btn => {
        btn.addEventListener('click', () => selectAnswer(parseInt(btn.dataset.value)));
    });

    // Nav buttons
    document.getElementById('prev-btn')?.addEventListener('click', prevQuestion);
    document.getElementById('next-btn')?.addEventListener('click', nextQuestion);

    // Retake
    document.getElementById('retake-btn')?.addEventListener('click', e => { e.preventDefault(); retakeTest(); });
    document.getElementById('retake-btn-bottom')?.addEventListener('click', retakeTest);

    // Profile tabs
    document.querySelectorAll('.profile-tab').forEach(tab => {
        tab.addEventListener('click', () => switchProfileTab(tab.dataset.tab));
    });
}

// ===== SCREEN MANAGEMENT =====
function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[name].classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== QUIZ FLOW =====
function startQuiz() {
    currentQuestion = 0;
    answers = new Array(QUESTIONS.length).fill(null);
    showScreen('quiz');
    renderQuestion();
}

function renderQuestion() {
    const q = QUESTIONS[currentQuestion];
    const total = QUESTIONS.length;

    // Question text
    document.getElementById('question-text').textContent = q.text;

    // Dimension label
    document.getElementById('quiz-dimension-label').textContent = DIMENSION_LABELS[q.dimension];

    // Counter
    document.getElementById('question-counter').textContent = `${currentQuestion + 1} / ${total}`;

    // Progress bar
    document.getElementById('progress-bar').style.width = `${((currentQuestion + 1) / total) * 100}%`;

    // Highlight selected answer
    document.querySelectorAll('.likert-btn').forEach(btn => {
        btn.classList.toggle('selected', parseInt(btn.dataset.value) === answers[currentQuestion]);
    });

    // Nav buttons
    document.getElementById('prev-btn').disabled = currentQuestion === 0;

    const nextBtn = document.getElementById('next-btn');
    if (currentQuestion === total - 1) {
        nextBtn.querySelector('span').textContent = 'See Results';
    } else {
        nextBtn.querySelector('span').textContent = 'Next';
    }
    nextBtn.disabled = answers[currentQuestion] === null;

    // Animate card
    const card = document.getElementById('question-card');
    card.style.animation = 'none';
    card.offsetHeight; // reflow
    card.style.animation = slideDirection === 'forward' ? 'questionSlide 0.4s var(--ease)' : 'questionSlideBack 0.4s var(--ease)';
}

function selectAnswer(value) {
    answers[currentQuestion] = value;

    // Update highlight
    document.querySelectorAll('.likert-btn').forEach(btn => {
        btn.classList.toggle('selected', parseInt(btn.dataset.value) === value);
    });

    // Enable next
    document.getElementById('next-btn').disabled = false;

    // Auto-advance after short delay
    setTimeout(() => {
        if (currentQuestion < QUESTIONS.length - 1) {
            nextQuestion();
        }
    }, 350);
}

function nextQuestion() {
    if (answers[currentQuestion] === null) return;
    slideDirection = 'forward';

    if (currentQuestion < QUESTIONS.length - 1) {
        currentQuestion++;
        renderQuestion();
    } else {
        showResults();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        slideDirection = 'back';
        currentQuestion--;
        renderQuestion();
    }
}

// ===== SCORING =====
function calculateScores() {
    const scores = { EI: 0, SN: 0, TF: 0, JP: 0 };
    const counts = { EI: 0, SN: 0, TF: 0, JP: 0 };

    QUESTIONS.forEach((q, i) => {
        if (answers[i] !== null) {
            scores[q.dimension] += answers[i] * q.direction;
            counts[q.dimension]++;
        }
    });

    return scores;
}

function getPersonalityType(scores) {
    let type = '';
    type += scores.EI >= 0 ? 'E' : 'I';
    type += scores.SN >= 0 ? 'S' : 'N';
    type += scores.TF >= 0 ? 'T' : 'F';
    type += scores.JP >= 0 ? 'J' : 'P';
    return type;
}

function getPercentages(scores) {
    const maxPerDimension = 15 * 3; // 15 questions × max value 3

    const pcts = {};
    ['EI', 'SN', 'TF', 'JP'].forEach(dim => {
        const raw = scores[dim];
        const ratio = Math.abs(raw) / maxPerDimension;
        const dominant = Math.round(50 + ratio * 50);
        const secondary = 100 - dominant;

        const letters = dim.split('');
        if (raw >= 0) {
            pcts[letters[0]] = dominant;
            pcts[letters[1]] = secondary;
        } else {
            pcts[letters[0]] = secondary;
            pcts[letters[1]] = dominant;
        }
    });

    return pcts;
}

// ===== RESULTS =====
function showResults() {
    const scores = calculateScores();
    const type = getPersonalityType(scores);
    const pcts = getPercentages(scores);
    const profile = PERSONALITY_TYPES[type];

    if (!profile) {
        console.error('Unknown type:', type);
        return;
    }

    showScreen('results');

    // Role color
    const roleColors = {
        analysts: '#a78bfa',
        diplomats: '#34d399',
        sentinels: '#2dd4bf',
        explorers: '#f59e0b',
    };
    const roleBgs = {
        analysts: 'rgba(167, 139, 250, 0.15)',
        diplomats: 'rgba(52, 211, 153, 0.15)',
        sentinels: 'rgba(45, 212, 191, 0.15)',
        explorers: 'rgba(245, 158, 11, 0.15)',
    };

    // Type reveal
    const badge = document.getElementById('type-reveal-badge');
    badge.style.background = roleBgs[profile.role];
    document.getElementById('type-emoji').textContent = profile.emoji;

    const roleLabel = document.getElementById('type-role-label');
    roleLabel.textContent = profile.roleLabel;
    roleLabel.style.color = roleColors[profile.role];

    const codeEl = document.getElementById('type-code');
    codeEl.textContent = profile.code;
    codeEl.style.background = `linear-gradient(135deg, ${roleColors[profile.role]}, ${roleColors[profile.role]}aa)`;
    codeEl.style.webkitBackgroundClip = 'text';
    codeEl.style.webkitTextFillColor = 'transparent';
    codeEl.style.backgroundClip = 'text';

    document.getElementById('type-title').textContent = `"${profile.title}"`;
    document.getElementById('type-tagline').textContent = profile.tagline;

    // Trait bars
    const dims = [
        { dim: 'EI', left: 'E', right: 'I' },
        { dim: 'SN', left: 'S', right: 'N' },
        { dim: 'TF', left: 'T', right: 'F' },
        { dim: 'JP', left: 'J', right: 'P' },
    ];

    dims.forEach(({ dim, left, right }) => {
        const leftPct = pcts[left];
        const rightPct = pcts[right];

        document.getElementById(`pct-${left}`).textContent = `${leftPct}%`;
        document.getElementById(`pct-${right}`).textContent = `${rightPct}%`;

        // Add dominant class
        const leftPctEl = document.getElementById(`pct-${left}`);
        const rightPctEl = document.getElementById(`pct-${right}`);
        leftPctEl.classList.toggle('dominant', leftPct > rightPct);
        rightPctEl.classList.toggle('dominant', rightPct > leftPct);

        // Animate bars after a short delay
        setTimeout(() => {
            document.getElementById(`bar-${left}`).style.width = `${leftPct}%`;
            document.getElementById(`bar-${right}`).style.width = `${rightPct}%`;
        }, 800);
    });

    // Render profile
    window._currentProfile = profile;
    switchProfileTab('overview');
}

function switchProfileTab(tab) {
    const profile = window._currentProfile;
    if (!profile) return;

    // Update active tab
    document.querySelectorAll('.profile-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.tab === tab);
    });

    const content = document.getElementById('profile-content');
    content.style.animation = 'none';
    content.offsetHeight;
    content.style.animation = 'fadeIn 0.4s var(--ease)';

    switch (tab) {
        case 'overview':
            content.innerHTML = `
        <h3>${profile.emoji} ${profile.title} — ${profile.code}</h3>
        <p>${profile.overview}</p>
      `;
            break;
        case 'strengths':
            content.innerHTML = `
        <h3>✦ Strengths</h3>
        <ul>${profile.strengths.map(s => `<li class="strength-item">${s}</li>`).join('')}</ul>
        <h3>⚠ Weaknesses</h3>
        <ul>${profile.weaknesses.map(w => `<li class="weakness-item">${w}</li>`).join('')}</ul>
      `;
            break;
        case 'relationships':
            content.innerHTML = `
        <h3>💕 Relationships</h3>
        <p>${profile.relationships}</p>
      `;
            break;
        case 'career':
            content.innerHTML = `
        <h3>💼 Career Paths</h3>
        <p>Careers that leverage the natural strengths of ${profile.code}s:</p>
        <ul>${profile.careers.map(c => `<li>${c}</li>`).join('')}</ul>
      `;
            break;
        case 'growth':
            content.innerHTML = `
        <h3>🌱 Personal Growth</h3>
        <p>${profile.growth}</p>
      `;
            break;
    }
}

// ===== RETAKE =====
function retakeTest() {
    currentQuestion = 0;
    answers = new Array(QUESTIONS.length).fill(null);
    window._currentProfile = null;

    // Reset trait bars
    ['E', 'I', 'S', 'N', 'T', 'F', 'J', 'P'].forEach(l => {
        const bar = document.getElementById(`bar-${l}`);
        if (bar) bar.style.width = '0%';
    });

    showScreen('landing');
}
