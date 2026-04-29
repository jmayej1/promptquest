export const missions = [
  {
    id: 1,
    title: 'The Vague Prompt Trap',
    skill: 'Direct',
    shortDescription:
      'Practice guiding an AI tool with a clear goal, audience, and useful boundaries.',
    whyItMatters:
      'At work, unclear AI use often leads to generic or risky output. Clear direction helps you get a useful draft while still checking the result.',
    beginnerLesson:
      'Directing AI means saying what you need, who it is for, and what a useful result should include. It also means naming limits, such as tone, length, facts to include, or what the AI should avoid.',
    badExample: 'Ask AI to write something about the internship program with no audience or purpose.',
    betterExample:
      'Ask AI to draft a friendly 150-word email for first-year students that explains the paid summer internship, deadline, and application link.',
    practiceGoal:
      'Turn a broad AI request into clear direction with a goal, audience, format, and key details.',
    workplaceRule:
      'If a coworker would need clearer direction to do the task well, the AI probably needs it too.',
  },
  {
    id: 2,
    title: 'Context Quest',
    skill: 'Context',
    shortDescription:
      'Learn which background details help AI support the real workplace task.',
    whyItMatters:
      'AI tools can give generic answers when they do not know the situation. Good context helps the response fit the team, customer, or assignment.',
    beginnerLesson:
      'Context can include the audience, tone, deadline, role, constraints, and what has already happened. Share the details that shape the work without adding private information.',
    badExample: 'Ask AI to improve a project update without saying who will read it or what changed.',
    betterExample:
      'Tell AI the update is for your manager, should be brief and professional, and must honestly mention two tasks delayed until Friday.',
    practiceGoal:
      'Choose the context an AI tool needs to support the task without oversharing.',
    workplaceRule:
      'Give the AI the job-relevant context, but leave out details that are not needed.',
  },
  {
    id: 3,
    title: 'Hallucination Hunt',
    skill: 'Evaluate',
    shortDescription:
      'Spot AI output that sounds confident but still needs checking before use.',
    whyItMatters:
      'AI can make mistakes while sounding sure. It can also miss bias, fairness concerns, or details that affect real people.',
    beginnerLesson:
      'Treat AI answers as a draft, not proof. Check names, numbers, dates, policies, claims, and whether the answer could unfairly affect someone.',
    badExample:
      'Use the AI summary as-is in a client slide because it sounds polished.',
    betterExample:
      'Use the AI summary as a starting point, then verify the statistics against the original report before adding them to the slide.',
    practiceGoal:
      'Identify which parts of an AI output need fact-checking or fairness review before they are shared.',
    workplaceRule:
      'Trust your verification process more than the confidence of the AI response.',
  },
  {
    id: 4,
    title: 'Privacy Shield',
    skill: 'Protect',
    shortDescription:
      'Decide what information should be removed before using an AI tool.',
    whyItMatters:
      'Workplace information can include private, sensitive, or identifying details. Beginners need habits that protect people and organizations.',
    beginnerLesson:
      'Before using an AI tool, remove names, contact details, account numbers, grades, health details, and anything your team would not want shared.',
    badExample:
      'Paste a customer email with their full name, phone number, and account issue into an AI tool.',
    betterExample:
      'Replace personal details with labels like Customer A and summarize only the issue needed for drafting a response.',
    practiceGoal:
      'Spot sensitive details and keep the AI request useful without exposing private information.',
    workplaceRule:
      'Use the least personal information needed to complete the task.',
  },
  {
    id: 5,
    title: 'Human Judgment Check',
    skill: 'Decide',
    shortDescription:
      'Choose when AI can help and when a person needs to make the final call.',
    whyItMatters:
      'AI can be useful for drafts, options, summaries, and practice. People are still responsible for choices that affect safety, fairness, money, or opportunity.',
    beginnerLesson:
      "Use AI for support when the risk is low or when you need a starting point. Get human review when the decision involves safety, fairness, policy, money, or someone's opportunity.",
    badExample:
      'Let AI decide which applicant should get an interview based only on pasted resumes.',
    betterExample:
      "Ask AI to summarize interview criteria, then have a trained person review each applicant using the team's approved process.",
    practiceGoal:
      'Decide whether a task is safe for AI help or needs human review before action.',
    workplaceRule:
      'AI can assist with thinking, but humans own the decision and its impact.',
  },
]
