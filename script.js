// Take2 Collective - Interactive Scripts
// Supports Marathi / English language toggle, article reading modals,
// hero space switcher, video preview modal, lightbox, newsletter signup,
// and the Interactive Regulation Toolkit.

(function () {
  'use strict';

  // --- Translation Dictionary (Aligned with Notion Copy) ---
  const translations = {
    mr: {
      // Navigation
      'nav.home': 'मुख्यपृष्ठ',
      'nav.about': 'संस्थापकाबद्दल',
      'nav.offerings': 'सेवा व अनुभव',
      'nav.therapy': 'थेरपी',
      'nav.aspirants': 'अ‍ॅस्परंट्स',
      'nav.projects': 'प्रकल्प',
      'nav.resources': 'संसाधने',
      'nav.contact': 'संपर्क',
      'nav.cta': 'संवाद साधा',
      'lang.toggle': 'English',

      // Hero
      'hero.kicker': 'टेक २ कलेक्टिव्ह • दैनंदिन जीवनासाठी मानसशास्त्र',
      'hero.title': 'जाणीवपूर्वक जगण्यासाठी, <em>सामायिक जागा.</em>',
      'hero.premise': 'प्रौढत्वाचे (Adulting) कोणतेही मॅन्युअल नसते.',
      'hero.collective': 'टेक २ कलेक्टिव्ह हे विचार, पद्धती, लोक आणि प्रकल्पांना एकत्र आणून एक परिपूर्ण प्रौढ जीवन कसे जगावे याचा शोध घेणारे व्यासपीठ आहे.',
      'hero.btn.spaces': 'आमच्या जागा जाणून घ्या ↓',
      'hero.btn.connect': 'संवाद सुरू करा ↗',
      'hero.tag.therapy': 'वैयक्तिक थेरपी',
      'hero.tag.workshops': 'सामूहिक कार्यशाळा',
      'hero.tag.dance': 'भरतनाट्यम व सोमाटिक्स',
      'hero.tag.aspirants': 'स्पर्धा परीक्षा व मेंदूचे आरोग्य',
      'hero.tag.newsletter': 'मराठी व इंग्रजी वृत्तपत्रिका',

      // Philosophy
      'manifesto.title': 'टेक २ दृष्टिकोन (तत्त्वज्ञान)',
      'manifesto.lead': 'आयुष्य समजून घेणे ही एका वेळेची प्रक्रिया नाही. आपण वाढतो, परिस्थिती बदलते. <em>टेक २ म्हणजे शून्यातून सुरुवात करणे नव्हे, तर अधिक जाणीवेने पुढे चालू ठेवणे.</em>',
      'manifesto.desc': 'हे आपोआप (automatically) जगणे आणि जाणीवपूर्वक (intentionally) जगणे यामधील अंतर आहे: विचार करण्यासाठी, शिकण्यासाठी, जोडण्यासाठी आणि निवडण्यासाठी एक हक्काची जागा.',

      // Offers
      'offers.eyebrow': 'टेक २ काय ऑफर करते',
      'offers.title': 'प्रौढ आयुष्यातील विविध पैलू समजून घेण्यासाठी जागा, अनुभव आणि संसाधने.',
      'offers.lead': 'थांबण्यासाठी, जोडले जाण्यासाठी आणि वाढण्यासाठी चार मार्ग.',
      'offers.caption': 'टेक २ ही नव्याने सुरुवात करण्याची जागा आहे.',
      'offers.01.title': 'थेरपी',
      'offers.01.desc': 'चिंतन, मानसिक आधार आणि विकासासाठी वैयक्तिक जागा.',
      'offers.02.title': 'कार्यशाळा व सामूहिक जागा',
      'offers.02.desc': 'इतरांसोबत शिकण्यासाठी, व्यक्त होण्यासाठी आणि संवाद साधण्यासाठी सामायिक जागा.',
      'offers.03.title': 'प्रकल्प व सहकार्य',
      'offers.03.desc': 'मानसशास्त्र, संशोधन, कलात्मक सराव आणि सहकार्याद्वारे अर्थपूर्ण प्रश्नांचा शोध.',
      'offers.04.title': 'संवाद व संसाधने',
      'offers.04.desc': 'थांबून पुन्हा नव्याने पाहण्यासाठी विचार, कथा आणि दृष्टिकोन.',

      // 5 Segments of Adulting
      'adulting.eyebrow': 'आपण एकत्र काय शोधू शकतो',
      'adulting.title': 'प्रौढत्वाचे पाच पैलू',
      'adulting.note': 'हे कोणतेही साचे (boxes) नाहीत ज्यात तुम्हाला बसायचे आहे. आपले आयुष्य सहसा अशा कप्प्यांमध्ये येत नाही. आपण तुमच्या संपूर्ण संदर्भात याचा शोध घेतो.',
      'adulting.01.name': 'मानसिक स्वास्थ्य व विश्रांती',
      'adulting.01.q': 'मी खरं तर कसा/कशी आहे?',
      'adulting.01.desc': 'तणाव, चिंता, बर्नआउट, भावनांचा अतिरेक, आणि अपराधीपणाशिवाय विश्रांती घेणे.',
      'adulting.02.name': 'स्व-ओळख व मूल्ये',
      'adulting.02.q': 'मी कोण आहे, आणि मी काय बनत आहे?',
      'adulting.02.desc': 'आत्मसन्मान, आत्मविश्वास, समाजाच्या अपेक्षा आणि स्वतःची मूल्ये समजून घेणे.',
      'adulting.03.name': 'नातेसंबंध व संवाद',
      'adulting.03.q': 'माझे स्वतःशी आणि इतरांशी नाते कसे आहे?',
      'adulting.03.desc': 'कौटुंबिक व वैयक्तिक सीमा (boundaries), संवादशैली, मतभेद आणि आपलेपणा.',
      'adulting.04.name': 'जीवनातील स्थित्यंतरे',
      'adulting.04.q': 'जेव्हा आयुष्य बदलते तेव्हा काय होते?',
      'adulting.04.desc': 'कॉलेज ते नोकरी, स्पर्धा परीक्षांचा प्रवास, करिअर बदल, अनिश्चितता आणि आव्हाने.',
      'adulting.05.name': 'आंतरिक विकास व फुलणे',
      'adulting.05.q': 'माझे वाटेल असे आयुष्य घडवणे म्हणजे काय?',
      'adulting.05.desc': 'जीवनाला अर्थ देणे, लवचिकता (resilience), वर्तनातील बदल आणि फुलणे.',

      // Toolkit
      'toolkit.eyebrow': 'सोपे आणि व्यावहारिक मानसशास्त्र',
      'toolkit.title': 'टेक २ रेग्युलेशन टूलकिट',
      'toolkit.lead': 'शरीर आणि मनाला शांत करण्यासाठी काही सोपे, पुरावा-आधारित उपाय जे तुम्ही आत्ताच वापरून पाहू शकता.',

      // Founder
      'founder.eyebrow': 'संस्थापकाबद्दल',
      'founder.title': 'नमस्कार, मी प्रचिती.',
      'founder.lead': 'मी एक समुपदेशन मानसशास्त्रज्ञ (Counselling Psychologist) आहे. मी सेंट झेवियर्स कॉलेज, मुंबई येथून लाइफस्पॅन काउन्सिलिंगमध्ये पदव्युत्तर शिक्षण पूर्ण केले आहे.',
      'founder.q': 'प्रौढ जीवन आपण अधिक जाणीव, स्वायत्तता आणि स्वास्थ्याने कसे जगू शकतो?',
      'founder.threads': 'मानसशास्त्र, यूपीएससी (UPSC) परीक्षेची तयारी, आणि वैयक्तिक वित्त (Personal Finance) या माझ्या स्वतःच्या प्रवासाने या कामातील माझे प्रश्न घडवले आहेत. कामाव्यतिरिक्त: पॉडकास्ट, रोपे आणि कॉफीसोबत शांत सकाळ.',
      'founder.link': 'प्रचितीशी संपर्क साधा →',

      // Newsletter
      'newsletter.eyebrow': 'मासिक संवाद',
      'newsletter.title': 'या महिन्याचे टेक २',
      'newsletter.lead': 'तुमच्या इनबॉक्समध्ये येणारा एक शांत, विचारप्रवर्तक मासिक संवाद. तुमची भाषा आणि आवडीचे विषय निवडा.',
      'newsletter.btn': 'सदस्य व्हा'
    },
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.offerings': 'Offerings',
      'nav.therapy': 'Therapy',
      'nav.aspirants': 'Aspirants',
      'nav.projects': 'Projects',
      'nav.resources': 'Resources',
      'nav.contact': 'Contact',
      'nav.cta': 'Get in Touch',
      'lang.toggle': 'मराठी',

      // Hero
      'hero.kicker': 'TAKE2 COLLECTIVE • PSYCHOLOGY FOR EVERYDAY LIFE',
      'hero.title': 'Creating spaces for <em>intentional living.</em>',
      'hero.premise': 'Adulting doesn’t come with a manual.',
      'hero.collective': 'Take2 Collective brings together ideas, practices, people and projects exploring what it means to navigate, understand and build a wholesome adult life.',
      'hero.btn.spaces': 'Discover our spaces ↓',
      'hero.btn.connect': 'Start a conversation ↗',
      'hero.tag.therapy': 'Personal Therapy',
      'hero.tag.workshops': 'Group Circles',
      'hero.tag.dance': 'Movement & Somatics',
      'hero.tag.aspirants': 'Aspirants & Brain Health',
      'hero.tag.newsletter': 'Bilingual Newsletters',

      // Philosophy
      'manifesto.title': 'The Take Two Approach (Philosophy)',
      'manifesto.lead': 'Figuring life out isn’t a one-time process. We grow. Life changes around us. <em>A Take Two isn’t about starting over. It’s about continuing with greater awareness.</em>',
      'manifesto.desc': 'It’s the space between living automatically and living intentionally: a space to reflect, learn, connect, experiment and choose how we want to live.',

      // Offers
      'offers.eyebrow': 'What Take2 Offers',
      'offers.title': 'Spaces, experiences and resources for navigating the many dimensions of adult life.',
      'offers.lead': 'Four ways to pause, connect and grow.',
      'offers.caption': 'Take2 is a space to begin.',
      'offers.01.title': 'Therapy',
      'offers.01.desc': 'Personal spaces for reflection, psychological support and growth.',
      'offers.02.title': 'Workshops & Group Spaces',
      'offers.02.desc': 'Shared spaces to learn, reflect, connect and explore.',
      'offers.03.title': 'Projects & Collaborations',
      'offers.03.desc': 'Exploring meaningful questions through psychology, research, creative practice and collaboration.',
      'offers.04.title': 'Conversations & Resources',
      'offers.04.desc': 'Ideas, stories and perspectives to pause, think and look again.',

      // 5 Segments of Adulting
      'adulting.eyebrow': 'What We Can Explore Together',
      'adulting.title': '5 Segments of Adulting',
      'adulting.note': 'These aren’t boxes you need to fit into. Our lives rarely come with neatly separated concerns. We explore what is happening for you in the context of your whole experience.',
      'adulting.01.name': 'Wellbeing',
      'adulting.01.q': 'How am I actually doing?',
      'adulting.01.desc': 'Stress · Anxiety · Burnout · Emotional overwhelm · Self-care · Motivation · Performance · Rest.',
      'adulting.02.name': 'Identity',
      'adulting.02.q': 'Who am I, and who am I becoming?',
      'adulting.02.desc': 'Self-worth · Confidence · Values · Beliefs · Purpose · Changing identities · Expectations.',
      'adulting.03.name': 'Relationships',
      'adulting.03.q': 'How do I relate to myself and others?',
      'adulting.03.desc': 'Family · Friendships · Romantic relationships · Boundaries · Communication · Conflict · Belonging.',
      'adulting.04.name': 'Transitions',
      'adulting.04.q': 'What happens when life changes?',
      'adulting.04.desc': 'College → Work · Exams → Uncertainty · Career changes · Breakups · Setbacks · Relocation · Adult roles.',
      'adulting.05.name': 'Growth',
      'adulting.05.q': 'What does it mean to build a life that feels like mine?',
      'adulting.05.desc': 'Meaning · Intentionality · Resilience · Achievement · Choices · Behaviour change · Flourishing.',

      // Toolkit
      'toolkit.eyebrow': 'Practical Psychology',
      'toolkit.title': 'Take2 Regulation Toolkit',
      'toolkit.lead': 'Gentle, somatic and psychological micro-practices you can experience right here in this cozy corner.',

      // Founder
      'founder.eyebrow': 'About the Founder',
      'founder.title': 'Hi, I’m Prachiti.',
      'founder.lead': 'I’m a Counselling Psychologist with a Master’s in Lifespan Counselling from St. Xavier’s College, Mumbai.',
      'founder.q': 'How can we navigate adult life with greater awareness, agency and wellbeing?',
      'founder.threads': 'My own experiences across psychology, UPSC preparation and personal finance have shaped the questions I bring to this work. And outside of work: podcasts, plants and slow mornings with coffee.',
      'founder.link': 'Connect with Prachiti →',

      // Newsletter
      'newsletter.eyebrow': 'Monthly Dialogue',
      'newsletter.title': 'This Month at Take2',
      'newsletter.lead': 'A gentle pause delivered directly to your inbox. Choose your preferred language edition and areas of interest.',
      'newsletter.btn': 'Subscribe'
    }
  };

  // --- Article Content Database ---
  window.take2Articles = {
    'pause-regulation': {
      category: 'Therapy & Somatics',
      title: 'De-stigmatizing the Pause: Why Nervous System Rest Precedes Action',
      titleMr: 'थांबण्याचे महत्त्व: कृतीपूर्वी मज्जासंस्थेची शांतता का आवश्यक असते?',
      readTime: '4 min read',
      date: 'October 2026',
      content: `
        <p class="lead-drop">In an achievement-driven culture, pausing is often pathologized as laziness, avoidance, or lack of discipline. We treat rest as a reward that must be earned rather than an essential physiological prerequisite for functioning.</p>
        <p>From a polyvagal and nervous system perspective, when the body detects chronic hyperarousal or perceived threat (deadlines, identity crises, comparison), it operates from sympathetic fight-or-flight or dorsal vagal shutdown. In these states, our prefrontal cortex (responsible for perspective, creativity, and conscious decision-making) goes offline.</p>
        <h4>The Myth of Constant Forward Motion</h4>
        <p>When clients come to therapy feeling 'stuck', what they often need is not a harsher productivity regimen, but safe permission to orient to the present moment. Taking a pause is not quitting; it is an active deceleration that allows internal calibration.</p>
        <blockquote>"You cannot negotiate with an exhausted nervous system. Grounding must come before direction."</blockquote>
        <h4>Everyday Micro-Pauses to Practice:</h4>
        <ul>
          <li><strong>The Somatic Exhale:</strong> Double inhale through the nose, long sigh through the mouth to signal parasympathetic safety.</li>
          <li><strong>Sensory Grounding:</strong> Stepping away from screens to notice 3 tactile textures around you.</li>
          <li><strong>Reframing the Gap:</strong> Viewing an unoccupied hour not as empty time, but as fertile psychological soil.</li>
        </ul>
        <p>At Take2, we view the 'take two' not as a mistake or a restart from zero, but as a tender acknowledgment that we have the agency to look again.</p>
      `
    },
    'first-session': {
      category: 'Therapy Demystified',
      title: 'What Really Happens in a First Therapy Session?',
      titleMr: 'पहिल्या थेरपी सत्रात नेमके काय घडते?',
      readTime: '3 min read',
      date: 'October 2026',
      content: `
        <p class="lead-drop">Booking a first therapy session is an act of vulnerability. Popular media often paints therapy as either an interrogation on a leather couch or an instant eureka moment. In reality, a first session is gentle, collaborative, and entirely paced by you.</p>
        <h4>The 15-Minute Groundwork</h4>
        <p>Before any formal intake, we begin with a brief 15-minute introductory video call. This isn’t a therapy session: it is a two-way fit assessment. You get to feel my voice and tone, and I understand the broad contours of what brings you in.</p>
        <h4>Inside the 50-Minute First Meeting</h4>
        <p>When we sit down for session one, we don’t expect you to have an autobiography prepared. We typically explore:</p>
        <ul>
          <li><strong>What is currently heavy:</strong> What prompted you to reach out this week or this month?</li>
          <li><strong>Your context and story:</strong> The relationships, work environments, and past experiences framing your current moment.</li>
          <li><strong>Hopes and boundaries:</strong> What would feel like meaningful support? What feels too tender to touch today?</li>
          <li><strong>Our working alliance:</strong> Understanding confidentiality, pacing, and our therapeutic framework.</li>
        </ul>
        <p>You will never be pushed to reveal trauma before trust is established. The first session is simply laying out a shared map together.</p>
      `
    },
    'boundaries-guilt': {
      category: 'Relationships & Identity',
      title: 'When Boundaries Feel Like Guilt: Relearning Emotional Safety',
      titleMr: 'जेव्हा सीमा (Boundaries) अपराधी वाटतात: भावनिक सुरक्षिततेचा पुनर्विचार',
      readTime: '4 min read',
      date: 'September 2026',
      content: `
        <p class="lead-drop">In collectivistic Indian families and social circles, the concept of a boundary is often misinterpreted as selfishness, abandonment, or disrespect. If you grew up learning that being 'good' means anticipating everyone else's needs at your own expense, setting a boundary triggers acute guilt.</p>
        <h4>Why Guilt Appears First</h4>
        <p>Guilt is not proof that you did something wrong; it is simply proof that you violated an internalized conditioning rule. When you say 'no' to an unreasonable demand or decline an emotionally draining gathering, your survival brain fears disconnection.</p>
        <h4>Shifting from Walls to Doors</h4>
        <p>A boundary is not a barbed-wire fence meant to punish the other person; it is a clear door with a doorbell. It defines where you end and the other person begins. Without boundaries, empathy curdles into resentment.</p>
        <p>In our therapy spaces, we practice holding boundaries alongside warmth. You can love someone deeply and still say, <em>"I cannot be available for this conversation tonight; let’s talk on Saturday."</em></p>
      `
    },
    'myth-together-25': {
      category: 'Adulting & Lifespan',
      title: 'The Myth of Having It All Together by 25: A Lifespan Perspective',
      titleMr: '२५ व्या वर्षी सर्वकाही साध्य असण्याचा भ्रम: मानसशास्त्रीय दृष्टिकोन',
      readTime: '5 min read',
      date: 'September 2026',
      content: `
        <p class="lead-drop">Developmental psychologist Jeffrey Arnett coined the term 'Emerging Adulthood' for the ages between 18 and 29. It is characterized by identity exploration, instability, self-focus, and feeling 'in-between'. Yet social media continues to sell the narrative that your twenties should be an unbroken ascent.</p>
        <p>Through lifespan counselling at Take2, we view adulting not as a checklist (degrees, corporate ladder, marital status, financial milestones), but as an ongoing relational evolution.</p>
        <h4>The 5 Tensions of Emerging Adulthood:</h4>
        <ol>
          <li>Autonomy versus familial loyalty</li>
          <li>Career experimentation versus financial anxiety</li>
          <li>Curating an online identity versus tolerating messy internal realities</li>
          <li>The illusion of infinite choices leading to decision paralysis</li>
          <li>Learning how to self-soothe without institutional structures like school or college</li>
        </ol>
        <p>You are not behind. You are simply in the dense, foundational middle of becoming.</p>
      `
    },
    'aspirants-silent-grief': {
      category: 'Take2 × Aspirants',
      title: 'The Silent Grief of the Exam Gap Year: Navigating Invisible Transitions',
      titleMr: 'स्पर्धा परीक्षांच्या गॅप इयरमधील मूक दुःख: अदृश्य स्थित्यंतरांचा प्रवास',
      readTime: '5 min read',
      date: 'October 2026',
      content: `
        <p class="lead-drop">Whether preparing for UPSC, MPSC, CAT, or competitive postgraduate examinations, aspirants often exist in a state of suspended animation. While peers are getting promotions, moving cities, and celebrating social milestones, an aspirant's year is marked by 12-hour library days and silent isolation.</p>
        <h4>The Ambiguous Loss</h4>
        <p>In psychology, 'ambiguous loss' refers to grief without a clear ending or societal ritual. When an exam cycle ends without a rank, there is no funeral, no certificate of effort: only the question from relatives: <em>"So, what is your next attempt?"</em></p>
        <h4>How Take2 × Aspirants Supports You:</h4>
        <p>In our dedicated aspirant circles and individual sessions, we don’t give superficial motivation talks. Instead, we create a space to:</p>
        <ul>
          <li>Acknowledge the grief of missed milestones without internalizing failure.</li>
          <li>Rebuild self-worth independent of mock percentiles.</li>
          <li>Establish non-negotiable mental health hygiene (movement, sunlight, social contact).</li>
          <li>Plan compassionate contingencies that preserve dignity and agency.</li>
        </ul>
        <p>Remember: You are an adult living a rich, complex life who happens to be preparing for an exam, not an exam machine trying to simulate human life.</p>
      `
    },
    'aspirants-mock-scores': {
      category: 'Take2 × Aspirants',
      title: 'Decoupling Self-Worth from Mock Scores and Rank Lists',
      titleMr: 'मॉक टेस्टचे गुण आणि स्वतःची योग्यता: दोघांची गल्लत टाळणे',
      readTime: '4 min read',
      date: 'October 2026',
      content: `
        <p class="lead-drop">A mock test is an analytical feedback loop designed to identify knowledge gaps, timing errors, and negative marking patterns. Somewhere along the intense journey, however, a low score transforms from an objective data point into a moral judgment on your character and intelligence.</p>
        <p>When this cognitive fusion occurs, opening test feedback triggers panic and shame rather than curiosity. Aspirants either over-study in an anxious panic or enter avoidance cycles where they procrastinate taking tests altogether.</p>
        <h4>The Analytical Mindset:</h4>
        <p>Separate yourself from the score sheet. When reviewing an error, ask: <em>Was this a conceptual lapse, a comprehension misread, or fatigue?</em> None of those three mean you are fundamentally incapable.</p>
      `
    },
    'aspirants-burnout-rest': {
      category: 'Take2 × Aspirants',
      title: 'Burnout vs. Rest: Why Guilt-Free Rest is a Prerequisite for Focus',
      titleMr: 'बर्नआउट आणि विश्रांती: अपराधीपणाशिवाय विश्रांती का आवश्यक आहे?',
      readTime: '4 min read',
      date: 'September 2026',
      content: `
        <p class="lead-drop">Many aspirants confuse 'not studying' with 'resting'. Lying in bed with an unread book on your lap while scrolling newsfeeds and berating yourself for wasting time is not rest: it is cognitive torture that keeps cortisol elevated.</p>
        <p>True restorative rest requires psychological safety. It is scheduled, intentional, and guilt-free. Our brains synthesize memory and consolidate complex conceptual connections during downtime and sleep.</p>
        <p>Protecting your sleep and scheduling half a day of genuine play each week is not lost study time; it is the fuel that allows high-order analytical retention.</p>
      `
    },
    'aspirants-holding-life': {
      category: 'Take2 × Aspirants',
      title: 'Holding Life Alongside Preparation: Preserving Joy and Relationships',
      titleMr: 'अभ्यासासोबत आयुष्यही जगणे: नातेसंबंध आणि आनंद जपणे',
      readTime: '5 min read',
      date: 'September 2026',
      content: `
        <p class="lead-drop">The common myth is that complete ascetic renunciation (cutting off all friendships, music, hobbies, and family celebrations) is the only path to competitive exam success. In our clinical work with aspirants, we see that extreme deprivation leads to brittle resilience.</p>
        <p>When your entire emotional ecosystem rests on a single pillar (the exam), any slight tremor in that pillar causes existential crisis. When you maintain small anchors in everyday life (a weekly walk with a trusted friend, listening to music, cooking a favorite meal), you create psychological shock absorbers.</p>
        <p>Take2 offers specialized sliding-scale fee structures for competitive exam aspirants (₹800–₹1000) because we believe mental healthcare during this demanding chapter is an essential right, not a luxury.</p>
      `
    },
    'bharatanatyam-somatics': {
      category: 'Dance & Somatics',
      title: 'Rhythm, Mudras & Grounding: The Psychological Science Behind Expressive Movement',
      titleMr: 'ताल, मुद्रा आणि भावनिक समतोल: हालचालींमागील मानसशास्त्र',
      readTime: '4 min read',
      date: 'October 2026',
      content: `
        <p class="lead-drop">Classical Indian dance traditions like Bharatanatyam are profound somatic technologies. Through Araimandi (the grounded demi-plié posture), rhythmic footwork (tattadavu), and deliberate hand gestures (hastas/mudras), the dancer establishes an unbroken channel between internal emotional states and physical expression.</p>
        <h4>Somatic Grounding Through Tala and Posture</h4>
        <p>In our experiential workshop <em>'Bharatanatyam for Mental Health'</em>, young dancers and movers discover how the physical principles of dance map onto emotional regulation:</p>
        <ul>
          <li><strong>The Earth Connection:</strong> The stamped footfall (Thattu) discharges accumulated sympathetic stress through ground-reaction forces.</li>
          <li><strong>Abhinaya as Emotion Processing:</strong> Expressing Navarasas (the 9 emotions) in a contained aesthetic container allows safe exploration of anger (Raudra), sorrow (Karuna), and peace (Shanta).</li>
          <li><strong>Bilateral Integration:</strong> Moving both sides of the body in coordinated rhythmic counterpoint stimulates interhemispheric communication in the brain.</li>
        </ul>
        <p class="note">This preventive workshop is not dance therapy or clinical treatment, but an empowering bridge between ancient movement wisdom and contemporary affective neuroscience.</p>
      `
    },
    'brain-health-longevity': {
      category: 'Take2 × Brain Health',
      title: 'Everyday Practices for Cognitive Longevity: An Interdisciplinary View',
      titleMr: 'मेंदूचे आरोग्य आणि दीर्घायुष्य: मानसशास्त्र व फिजिओथेरपीचा संगम',
      readTime: '4 min read',
      date: 'October 2026',
      content: `
        <p class="lead-drop">Between the ages of 45 and 60, our brains undergo subtle structural and neurochemical transitions. Memory lapses, reduced cognitive processing speed, and changes in sleep architecture can evoke anxiety about neurodegeneration.</p>
        <h4>The Power of Dual-Task Interventions</h4>
        <p>Take2 × Brain Health is an interdisciplinary initiative pairing a counselling psychologist with a licensed neurophysiotherapist. Together, we explore:</p>
        <ul>
          <li><strong>Cognitive Agility:</strong> Engaging in novel problem-solving, bilingual reading, and spatial navigation exercises that promote neuroplasticity.</li>
          <li><strong>Motor-Cognitive Dual Tasking:</strong> Performing balance drills and coordination games while recalling sequences or articulating ideas.</li>
          <li><strong>Sleep and Glymphatic Clearance:</strong> How slow-wave sleep clears neurotoxic waste from the brain parenchyma.</li>
          <li><strong>Emotional Regulation:</strong> Mitigating chronic cortisol elevation, which directly affects hippocampal volume.</li>
        </ul>
      `
    }
  };

  // --- Current Language State ---
  let currentLang = localStorage.getItem('take2_lang') || 'en';

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('take2_lang', lang);

    document.documentElement.lang = lang;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    const toggles = document.querySelectorAll('.lang-toggle-btn');
    toggles.forEach(btn => {
      const label = btn.querySelector('.lang-label');
      if (label) {
        label.textContent = lang === 'en' ? 'मराठी' : 'English';
      }
      btn.setAttribute('aria-label', lang === 'en' ? 'Switch to Marathi' : 'Switch to English');
    });
  }

  // --- Hero Space Switcher ---
  function initHeroSpaceSwitcher() {
    const tabs = document.querySelectorAll('.space-tab-btn');
    const displayImg = document.getElementById('heroSpaceImage');
    const displayCaption = document.getElementById('heroSpaceCaption');
    const displayBadge = document.getElementById('heroSpaceBadge');

    if (!tabs.length || !displayImg) return;

    const spaces = {
      house: {
        src: 'take2-house.png',
        badge: 'The Sanctuary',
        caption: 'A space to pause, reflect and begin again.',
        captionMr: 'थांबण्यासाठी, विचार करण्यासाठी आणि पुन्हा सुरुवात करण्यासाठी एक हक्काची जागा.'
      },
      workshops: {
        src: 'offer-workshops.png',
        badge: 'Group Gatherings',
        caption: 'Learning, reflecting, and connecting with others in supportive community circles.',
        captionMr: 'एकमेकांच्या साथीने शिकणे, संवाद साधणे आणि सहप्रवास अनुभवणे.'
      },
      movement: {
        src: 'offer-projects.png',
        badge: 'Movement & Projects',
        caption: 'Psychology meets classical dance, exam journeys, and brain health research.',
        captionMr: 'मानसशास्त्र, नृत्य, स्पर्धा परीक्षा मार्गदर्शन आणि मेंदूच्या आरोग्याचा संगम.'
      },
      resources: {
        src: 'offer-resources.png',
        badge: 'Resources & Library',
        caption: 'Books, quiet corners, cat companionship, and thoughtful tools to return to.',
        captionMr: 'पुस्तके, शांत कोपरे, आणि जेव्हा गरज असेल तेव्हा हक्काचा आधार.'
      },
      therapy: {
        src: 'therapy-illustration.png',
        badge: '1-on-1 Therapy Room',
        caption: 'A personal, confidential space to unpack what is heavy and find your rhythm.',
        captionMr: 'मनातले ओझे हलके करण्यासाठी आणि स्वतःचा तोल शोधण्यासाठी एक खाजगी जागा.'
      }
    };

    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');

        const spaceKey = this.getAttribute('data-space');
        const data = spaces[spaceKey];
        if (data) {
          displayImg.style.opacity = '0';
          displayImg.style.transform = 'scale(0.97)';
          setTimeout(() => {
            displayImg.src = data.src;
            displayImg.alt = data.caption;
            if (displayBadge) displayBadge.textContent = data.badge;
            if (displayCaption) {
              displayCaption.textContent = currentLang === 'mr' ? data.captionMr : data.caption;
            }
            displayImg.style.opacity = '1';
            displayImg.style.transform = 'scale(1)';
          }, 200);
        }
      });
    });
  }

  // --- Regulation Toolkit Tabs ---
  function initRegulationToolkit() {
    const tabs = document.querySelectorAll('.toolkit-tab');
    const panels = document.querySelectorAll('.toolkit-panel');

    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));

        this.classList.add('active');
        const targetId = this.getAttribute('data-target');
        const panel = document.getElementById(targetId);
        if (panel) {
          panel.classList.add('active');
        }
      });
    });
  }

  // --- Article Modal Reader ---
  function initArticleModal() {
    const modal = document.getElementById('articleModal');
    if (!modal) return;

    const modalCategory = document.getElementById('modalArticleCategory');
    const modalTitle = document.getElementById('modalArticleTitle');
    const modalTime = document.getElementById('modalArticleTime');
    const modalBody = document.getElementById('modalArticleBody');
    const closeBtn = document.getElementById('closeModalBtn');
    const backdrop = modal.querySelector('.modal-backdrop');

    function openArticle(key) {
      const art = window.take2Articles[key];
      if (!art) return;

      modalCategory.textContent = art.category;
      modalTitle.textContent = currentLang === 'mr' && art.titleMr ? art.titleMr : art.title;
      modalTime.textContent = art.readTime + ' • ' + art.date;
      modalBody.innerHTML = art.content;

      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('[data-open-article]').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const articleKey = this.getAttribute('data-open-article');
        openArticle(articleKey);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal();
      }
    });
  }


  // --- Photo Lightbox ---
  function initLightbox() {
    const lightbox = document.getElementById('photoLightbox');
    if (!lightbox) return;

    const lbImg = document.getElementById('lightboxImg');
    const lbCaption = document.getElementById('lightboxCaption');
    const closeBtn = document.getElementById('closeLightboxBtn');
    const backdrop = lightbox.querySelector('.modal-backdrop');

    function openLightbox(src, alt) {
      lbImg.src = src;
      lbImg.alt = alt || '';
      lbCaption.textContent = alt || 'Take2 Collective Archive';
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('[data-lightbox]').forEach(el => {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        const src = this.getAttribute('data-lightbox-src') || this.src;
        const alt = this.getAttribute('data-lightbox-caption') || this.alt;
        openLightbox(src, alt);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (backdrop) backdrop.addEventListener('click', closeLightbox);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
        closeLightbox();
      }
    });
  }

  // --- Newsletter Form Submission ---
  function initNewsletterForm() {
    const forms = document.querySelectorAll('.take2-newsletter-form');
    forms.forEach(form => {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        const edition = form.querySelector('input[name="newsletter_edition"]:checked')?.value || 'both';
        const msgBox = form.querySelector('.form-feedback');

        if (!emailInput || !emailInput.value.trim()) return;

        const successMsgEn = `Thank you! You’re subscribed to the Take2 newsletter (${edition} edition). Welcome to our monthly pause.`;
        const successMsgMr = `धन्यवाद! आपण टेक २ च्या मासिक पत्रिकेचे सदस्य झाला आहात (${edition === 'mr' ? 'मराठी आवृत्ती' : 'मासिक आवृत्ती'}).`;

        if (msgBox) {
          msgBox.className = 'form-feedback success';
          msgBox.textContent = currentLang === 'mr' ? successMsgMr : successMsgEn;
          msgBox.style.display = 'block';
        }

        emailInput.value = '';
      });
    });
  }

  // --- Contact Form Submission & Validation (connect.html) ---
  function initContactForm() {
    const form = document.getElementById('take2ContactForm');
    const feedback = document.getElementById('contactFormFeedback');
    if (!form || !feedback) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = form.querySelector('#contactName');
      const emailInput = form.querySelector('#contactEmail');
      const topicInput = form.querySelector('#contactTopic');
      const messageInput = form.querySelector('#contactMessage');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const topic = topicInput ? topicInput.value : '';
      const message = messageInput ? messageInput.value.trim() : '';

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || name.length < 2) {
        feedback.className = 'contact-form-feedback error';
        feedback.textContent = currentLang === 'mr'
          ? 'कृपया आपले नाव प्रविष्ट करा (किमान २ अक्षरे).'
          : 'Please enter your name (at least 2 characters).';
        feedback.style.display = 'block';
        if (nameInput) nameInput.focus();
        return;
      }

      if (!email || !emailRegex.test(email)) {
        feedback.className = 'contact-form-feedback error';
        feedback.textContent = currentLang === 'mr'
          ? 'कृपया एक वैध ईमेल पत्ता प्रविष्ट करा.'
          : 'Please enter a valid email address.';
        feedback.style.display = 'block';
        if (emailInput) emailInput.focus();
        return;
      }

      if (!topic) {
        feedback.className = 'contact-form-feedback error';
        feedback.textContent = currentLang === 'mr'
          ? 'कृपया विषयाची निवड करा.'
          : 'Please select an area of interest from the dropdown.';
        feedback.style.display = 'block';
        if (topicInput) topicInput.focus();
        return;
      }

      if (!message || message.length < 10) {
        feedback.className = 'contact-form-feedback error';
        feedback.textContent = currentLang === 'mr'
          ? 'कृपया किमान १० अक्षरांचा संदेश लिहा.'
          : 'Please share a brief note or context (at least 10 characters).';
        feedback.style.display = 'block';
        if (messageInput) messageInput.focus();
        return;
      }

      // Success state
      feedback.className = 'contact-form-feedback success';
      feedback.textContent = currentLang === 'mr'
        ? 'धन्यवाद! आपला संदेश प्राप्त झाला आहे. प्रचिती २४ ते ४८ तासांत आपल्याशी संपर्क साधेल.'
        : 'Thank you for reaching out! Your message has been received with care. Prachiti typically responds within 24-48 business hours.';
      feedback.style.display = 'block';

      form.reset();
    });
  }

  // --- Testimonial Arrow Slider ---
  function initTestimonialSlider() {
    const carousels = document.querySelectorAll('.testimonial-carousel');
    if (!carousels.length) return;

    carousels.forEach(carousel => {
      const cards = carousel.querySelectorAll('.testimonial-slide');
      const dotsContainer = carousel.querySelector('.carousel-dots');
      const counterEl = carousel.querySelector('.carousel-counter');
      const prevBtn = carousel.querySelector('.carousel-prev');
      const nextBtn = carousel.querySelector('.carousel-next');

      if (!cards.length) return;

      let currentIndex = 0;

      if (dotsContainer && !dotsContainer.children.length) {
        cards.forEach((_, i) => {
          const dot = document.createElement('button');
          dot.type = 'button';
          dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
          dot.setAttribute('aria-label', `Testimonial ${i + 1}`);
          dot.setAttribute('role', 'tab');
          dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
          dot.addEventListener('click', () => goToSlide(i));
          dotsContainer.appendChild(dot);
        });
      }

      function updateSlides() {
        cards.forEach((card, idx) => {
          const isActive = idx === currentIndex;
          card.classList.toggle('active', isActive);
          card.setAttribute('aria-hidden', isActive ? 'false' : 'true');
        });

        if (counterEl) {
          const currentStr = String(currentIndex + 1).padStart(2, '0');
          const totalStr = String(cards.length).padStart(2, '0');
          counterEl.textContent = `${currentStr} / ${totalStr}`;
        }

        if (dotsContainer) {
          Array.from(dotsContainer.children).forEach((dot, idx) => {
            const isActive = idx === currentIndex;
            dot.classList.toggle('active', isActive);
            dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
          });
        }
      }

      function goToSlide(index) {
        currentIndex = (index + cards.length) % cards.length;
        updateSlides();
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', function (e) {
          e.preventDefault();
          goToSlide(currentIndex - 1);
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', function (e) {
          e.preventDefault();
          goToSlide(currentIndex + 1);
        });
      }

      // Keyboard navigation
      carousel.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') {
          goToSlide(currentIndex - 1);
        } else if (e.key === 'ArrowRight') {
          goToSlide(currentIndex + 1);
        }
      });

      // Touch swipe support for mobile
      let touchStartX = 0;
      let touchEndX = 0;

      carousel.addEventListener('touchstart', function (e) {
        if (e.changedTouches && e.changedTouches[0]) {
          touchStartX = e.changedTouches[0].screenX;
        }
      }, { passive: true });

      carousel.addEventListener('touchend', function (e) {
        if (e.changedTouches && e.changedTouches[0]) {
          touchEndX = e.changedTouches[0].screenX;
          const threshold = 40;
          if (touchEndX < touchStartX - threshold) {
            goToSlide(currentIndex + 1);
          } else if (touchEndX > touchStartX + threshold) {
            goToSlide(currentIndex - 1);
          }
        }
      }, { passive: true });

      updateSlides();
    });
  }

  // --- Interactive Anxiety Regulation Slider (Resources Page) ---
  function initAnxietySlider() {
    const slider = document.getElementById('anxietyRangeSlider');
    const display = document.getElementById('anxietyValueDisplay');
    const pill = document.getElementById('zoneIndicatorPill');
    const rangeText = document.getElementById('zoneScoreRange');
    const msg = document.getElementById('zoneDynamicMessage');
    const zoneGreen = document.getElementById('zone-green');
    const zoneAmber = document.getElementById('zone-amber');
    const zoneRed = document.getElementById('zone-red');

    if (!slider) return;

    function updateAnxietyState(val) {
      const score = parseInt(val, 10);
      if (display) display.textContent = `${score}/10`;

      // Remove existing active states
      [zoneGreen, zoneAmber, zoneRed].forEach(z => {
        if (z) z.classList.remove('active-zone');
      });

      if (score <= 3) {
        // Green Zone (0-3)
        if (pill) {
          pill.className = 'anxiety-zone-pill green';
          pill.textContent = 'Green zone';
        }
        if (rangeText) rangeText.textContent = '(Score: 0 to 3)';
        if (msg) msg.textContent = "I'm relatively okay. I have the capacity to engage.";
        if (zoneGreen) zoneGreen.classList.add('active-zone');
      } else if (score <= 8) {
        // Amber Zone (4-8)
        if (pill) {
          pill.className = 'anxiety-zone-pill amber';
          pill.textContent = 'Amber zone';
        }
        if (rangeText) rangeText.textContent = '(Score: 4 to 8)';
        if (msg) msg.textContent = "Your anxiety is increasing. A pause may help before you engage further.";
        if (zoneAmber) zoneAmber.classList.add('active-zone');
      } else {
        // Red Zone (9-10)
        if (pill) {
          pill.className = 'anxiety-zone-pill red';
          pill.textContent = 'Red zone';
        }
        if (rangeText) rangeText.textContent = '(Score: 9 to 10)';
        if (msg) msg.textContent = "I'm extremely overwhelmed. Regulation comes first.";
        if (zoneRed) zoneRed.classList.add('active-zone');
      }
    }

    slider.addEventListener('input', function () {
      updateAnxietyState(this.value);
    });

    // Initialize with default value
    updateAnxietyState(slider.value);
  }

  // --- Crisis Helplines Collapsible Toggle ---
  function initCrisisToggle() {
    const toggleBtn = document.getElementById('crisisToggleBtn');
    const header = document.getElementById('crisisToggleHeader');
    const content = document.getElementById('crisisHelplinesContent');

    if (!toggleBtn || !content) return;

    let isExpanded = true;
    function toggle() {
      isExpanded = !isExpanded;
      content.style.display = isExpanded ? 'grid' : 'none';
      toggleBtn.textContent = isExpanded ? 'Hide Helplines ↑' : 'Show Helplines ↓';
      toggleBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    }

    toggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      toggle();
    });

    if (header) {
      header.addEventListener('click', function (e) {
        if (e.target.closest('a') || e.target.closest('button')) return;
        toggle();
      });
    }
  }

  // --- Scroll Animations, Progress & Mobile Polish ---
  function initScrollExperience() {
    const progressLine = document.getElementById('scrollProgressLine');
    const header = document.querySelector('.site-header');
    const leaves = document.querySelectorAll('.falling-leaf');

    // 1. Intersection Observer for Scroll Reveals
    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      });

      document.querySelectorAll('.reveal-on-scroll, .reveal-stagger').forEach(el => {
        revealObserver.observe(el);
      });
    } else {
      document.querySelectorAll('.reveal-on-scroll, .reveal-stagger').forEach(el => {
        el.classList.add('is-revealed');
      });
    }

    // 2. Scroll Progress & Header Shadow & Leaf Drift
    let ticking = false;
    function onScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      if (progressLine) {
        progressLine.style.width = `${Math.min(100, Math.max(0, progress))}%`;
      }

      if (header) {
        header.classList.toggle('is-scrolled', scrollTop > 20);
      }

      // Subtle botanical leaf parallax in hero
      if (leaves.length && scrollTop < window.innerHeight) {
        leaves.forEach((leaf, i) => {
          const speed = (i + 1) * 0.14;
          leaf.style.transform = `translateY(${scrollTop * speed}px) rotate(${scrollTop * 0.04}deg)`;
        });
      }

      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });

    onScroll();

    // 3. Auto-close mobile navigation drawer on link click
    const mobileNav = document.querySelector('.mobile-nav');
    if (mobileNav) {
      mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileNav.removeAttribute('open');
        });
      });
    }

    // 4. Smooth Anchor Scrolling for jump chips
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#' || href === '#main') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // --- DOM Ready ---
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const nextLang = currentLang === 'en' ? 'mr' : 'en';
        setLanguage(nextLang);
      });
    });

    if (currentLang !== 'en') {
      setLanguage(currentLang);
    }

    initRegulationToolkit();
    initArticleModal();
    initLightbox();
    initNewsletterForm();
    initContactForm();
    initTestimonialSlider();
    initAnxietySlider();
    initCrisisToggle();
    initScrollExperience();
  });

})();
