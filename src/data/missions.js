export const missions = [
  {
    id: 1,
    title: 'The Vague Prompt Trap',
    skill: 'Direct',
    shortDescription:
      'Turn unclear workplace requests into AI instructions with a task, audience, constraints, and format.',
    whyItMatters:
      'At work, unclear AI use often leads to generic or risky output. Clear direction helps you get a useful draft while still checking the result.',
    beginnerLesson:
      'Directing AI means saying what you need, who it is for, and what a useful result should include. It also means naming limits, such as tone, length, facts to include, or what the AI should avoid.',
    badExample: 'Ask AI to write something about the internship program with no audience or purpose.',
    betterExample:
      'Ask AI to draft a friendly 150-word email for first-year students that explains the paid summer internship, deadline, and application link.',
    practiceGoal:
      'Before asking AI for help, write down: What task do I want done? Who is the audience? What format do I need? What details would make the result useful?',
    workplaceRule:
      'If a coworker would need clearer direction to do the task well, the AI probably needs it too.',
  },
  {
    id: 2,
    title: 'Context Quest',
    skill: 'Context',
    shortDescription:
      'Decide which business details help AI tailor a useful response, and which details should stay out.',
    whyItMatters:
      'AI tools can give generic answers when they do not know the situation. Good context helps the response fit the team, customer, or assignment.',
    beginnerLesson:
      'Context can include the audience, tone, deadline, role, constraints, and what has already happened. Share the details that shape the work without adding private information.',
    badExample: 'Ask AI to improve a project update without saying who will read it or what changed.',
    betterExample:
      'Tell AI the update is for your manager, should be brief and professional, and must honestly mention two tasks delayed until Friday.',
    practiceGoal:
      'List three pieces of context that would help AI answer well, then remove anything private, unnecessary, or distracting.',
    workplaceRule:
      'Give the AI the job-relevant context, but leave out details that are not needed.',
  },
  {
    id: 3,
    title: 'Hallucination Hunt',
    skill: 'Evaluate',
    shortDescription:
      'Spot confident AI claims that need verification before sharing them in a workplace setting.',
    whyItMatters:
      'Confident AI wording is not proof. Mistakes, missing context, or unfair assumptions can affect real people and workplace decisions.',
    beginnerLesson:
      'Treat AI answers as a draft, not proof. Check names, dates, numbers, policies, quotes, sources, and claims that affect decisions or people.',
    badExample:
      'Use the AI summary as-is in a client slide because it sounds polished.',
    betterExample:
      'Use the AI summary as a starting point, then verify the statistics, sources, and whether the wording could exclude or misrepresent someone.',
    practiceGoal:
      'Look at an AI answer and mark anything to check before sharing: names, dates, numbers, policies, quotes, sources, claims that affect people, and who could be excluded or misrepresented.',
    workplaceRule:
      'Trust your verification process more than the confidence of the AI response.',
  },
  {
    id: 4,
    title: 'Privacy Shield',
    skill: 'Protect',
    shortDescription:
      'Practice removing sensitive customer, employee, personal, or company information from prompts.',
    whyItMatters:
      'Workplace information can include private, sensitive, or identifying details. Beginners need habits that protect people and organizations.',
    beginnerLesson:
      'Before using an AI tool, remove names, contact details, account numbers, grades, health details, and anything your team would not want shared.',
    badExample:
      'Paste a customer email with their full name, phone number, and account issue into an AI tool.',
    betterExample:
      'Replace personal details with labels like Customer A and summarize only the issue needed for drafting a response.',
    practiceGoal:
      'Rewrite a risky prompt by removing names, emails, IDs, private company details, and anything the AI does not need.',
    workplaceRule:
      'Use the least personal information needed to complete the task.',
  },
  {
    id: 5,
    title: 'Human Judgment Check',
    skill: 'Decide',
    shortDescription:
      'Decide when AI can draft or assist, and when human review is required before action.',
    whyItMatters:
      'AI can help with drafting, summarizing, brainstorming, rewriting, explaining, comparing options, and making checklists. People are still responsible for choices with real consequences.',
    beginnerLesson:
      'Use AI for support when the risk is low or you need a starting point. A person must lead when accuracy, privacy, fairness, policy, safety, or real consequences matter.',
    badExample:
      'Let AI decide which applicant should get an interview based only on pasted resumes.',
    betterExample:
      "Ask AI to turn approved interview criteria into a checklist, then have a trained person review each applicant using the team's process.",
    practiceGoal:
      'Decide whether AI should draft, assist, or stay out. Ask: Who could be affected? What needs verification? Who owns the final decision?',
    workplaceRule:
      'AI can assist with thinking, but humans own the decision and its impact.',
  },
]
