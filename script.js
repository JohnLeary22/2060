const STORAGE_KEY = 'honeysuckle-learning-state';

const initialState = {
  tasks: {
    'lesson1 recap': false,
    'lesson1 quiz': false,
    'lesson1 exit': false,
    'fieldwork prep': false,
    'fieldwork reflection': false
  },
  exitTickets: { lesson1: '', lesson2: '', lesson3: '' },
  drafts: { lesson1: '', lesson2: '', lesson3: '' },
  quizResults: { lesson1: null, lesson2: null, lesson3: null },
  interactions: { lesson1Game: false, lesson2Opinion: false, lesson3Stakeholder: false },
  fieldworkReflection: '',
  studentFieldwork: { idea: '', evidence: '', work: '', stakeholders: '', final: '' }
};

const lessonQuestions = {
  lesson1: [
    { prompt: 'Which work arrangement usually means regular hours and an ongoing position?', options: ['Casual', 'Part-time', 'Full-time', 'Remote'], answer: 'Full-time' },
    { prompt: 'A worker who is employed for a short project is most likely working in which arrangement?', options: ['Contract', 'Apprenticeship', 'Casual', 'Remote'], answer: 'Contract' },
    { prompt: 'Which role is most likely to be an occupation rather than a work arrangement?', options: ['Teacher', 'Part-time', 'Casual', 'Remote'], answer: 'Teacher' },
    { prompt: 'Which type of work is most likely to involve structured training while earning a wage?', options: ['Apprenticeship', 'Contract', 'Full-time', 'Casual'], answer: 'Apprenticeship' },
    { prompt: 'A worker who completes tasks online from home is best described as doing which kind of work?', options: ['Remote work', 'Casual work', 'Manual labour', 'Agriculture'], answer: 'Remote work' },
    { prompt: 'Why is Honeysuckle a useful place to study the changing nature of work?', options: ['It has always had the same jobs', 'It shows how industrial activity and redevelopment changed local work', 'It has no relationship to community wellbeing', 'It only features one type of industry'], answer: 'It shows how industrial activity and redevelopment changed local work' },
    { prompt: 'Which statement best describes a historical occupation in the Honeysuckle area?', options: ['A worker on a waterfront goods operation', 'A digital media editor', 'A remote customer service worker', 'A schoolteacher'], answer: 'A worker on a waterfront goods operation' },
    { prompt: 'What usually happens when a new industry moves into an area?', options: ['The local jobs never change', 'The range of occupations and work arrangements can change', 'Nobody needs to learn new skills', 'The area becomes completely unchanged'], answer: 'The range of occupations and work arrangements can change' },
    { prompt: 'Which example is a contemporary work arrangement?', options: ['A permanent office role', 'A short-term project contract', 'A remote customer service role', 'All of the above'], answer: 'All of the above' },
    { prompt: 'What is the main idea of Lesson 1?', options: ['Work stays the same over time', 'The types of work in a place can change as industries change', 'Only one job exists in any location', 'Wellbeing is unrelated to work'], answer: 'The types of work in a place can change as industries change' }
  ],
  lesson2: [
    { prompt: 'How can job loss affect a person’s wellbeing?', options: ['It can reduce financial security and confidence', 'It always makes life easier', 'It has no impact on identity', 'It only affects local businesses'], answer: 'It can reduce financial security and confidence' },
    { prompt: 'Why is community wellbeing connected to work?', options: ['Employment can support local spending and social connection', 'Jobs never affect families', 'Only workers are affected', 'Community wellbeing is separate from industry'], answer: 'Employment can support local spending and social connection' },
    { prompt: 'Which factor is most closely linked to personal identity?', options: ['The job a person does', 'The weather outside', 'The number of windows in a house', 'The colour of a school uniform'], answer: 'The job a person does' },
    { prompt: 'What is one possible positive effect of industrial change?', options: ['Retraining opportunities', 'Permanent job loss for everyone', 'No change to local services', 'Lower wages for all workers'], answer: 'Retraining opportunities' },
    { prompt: 'What is one likely negative effect of industrial closure?', options: ['Reduced local spending and stress for families', 'No effect on workers', 'Higher wages for everyone', 'More jobs in every industry'], answer: 'Reduced local spending and stress for families' },
    { prompt: 'Why do teachers often use research sources in this lesson?', options: ['To compare different perspectives on industrial change', 'To avoid all discussion', 'To remove evidence from the lesson', 'To make the topic less important'], answer: 'To compare different perspectives on industrial change' },
    { prompt: 'How can redevelopment create both opportunity and challenge?', options: ['It can attract new jobs while also creating uncertainty for some people', 'It always benefits everyone equally', 'It removes all community issues', 'It only affects the environment'], answer: 'It can attract new jobs while also creating uncertainty for some people' },
    { prompt: 'Which example best shows environmental consequences connected to industry?', options: ['A cleaner waterfront and safer public space', 'Industrial pollution and land contamination concerns', 'New roads with no community impact', 'A school building being painted'], answer: 'Industrial pollution and land contamination concerns' },
    { prompt: 'Why might different people have different views about redevelopment?', options: ['They value different outcomes for jobs, land and community life', 'Everyone agrees on the same plan', 'Redevelopment never affects people differently', 'The issue is not connected to work'], answer: 'They value different outcomes for jobs, land and community life' },
    { prompt: 'What is the main purpose of the opinion line?', options: ['To rank students by intelligence', 'To explore different views about industrial change using evidence', 'To avoid debate completely', 'To skip research tasks'], answer: 'To explore different views about industrial change using evidence' }
  ],
  lesson3: [
    { prompt: 'What is a stakeholder?', options: ['A person or group with an interest in a decision', 'A type of worker arrangement', 'A fieldwork map', 'A school timetable'], answer: 'A person or group with an interest in a decision' },
    { prompt: 'Which group is most likely to be concerned about employment and wages?', options: ['Industrial workers and unions', 'Environment and heritage advocates', 'Property developers', 'School canteen staff'], answer: 'Industrial workers and unions' },
    { prompt: 'Why might local residents have different priorities from developers?', options: ['They may value housing, access and community amenity more than profit', 'They never care about land use', 'They always support every proposal', 'They do not participate in decisions'], answer: 'They may value housing, access and community amenity more than profit' },
    { prompt: 'Which type of decision often involves compromise?', options: ['Redevelopment planning', 'A single correct answer in maths', 'Choosing a lunch order', 'Leaving all decisions to one person'], answer: 'Redevelopment planning' },
    { prompt: 'What is one reason environmental and heritage groups may oppose a proposal?', options: ['They may want to protect land, heritage and ecological values', 'They do not care about the area', 'They want to remove all jobs', 'They want to ignore community needs'], answer: 'They may want to protect land, heritage and ecological values' },
    { prompt: 'Which group is most likely to be focused on profit and return on investment?', options: ['Property developers and investors', 'Workers and unions', 'Local residents', 'Students'], answer: 'Property developers and investors' },
    { prompt: 'In a redevelopment discussion, what does compromise usually mean?', options: ['Everyone gets exactly the same result', 'Groups adjust their position to reach a workable outcome', 'One group always wins', 'No one listens to the evidence'], answer: 'Groups adjust their position to reach a workable outcome' },
    { prompt: 'Why is negotiation an important part of planning?', options: ['It helps balance competing interests and possible consequences', 'It removes all disagreement', 'It is only used in sports', 'It creates no real decisions'], answer: 'It helps balance competing interests and possible consequences' },
    { prompt: 'What is one thing students should investigate during fieldwork in Honeysuckle?', options: ['Which stakeholder interests shaped the area and how land use has changed', 'The price of school lunch', 'Whether it rains on a particular day', 'How many students are in class'], answer: 'Which stakeholder interests shaped the area and how land use has changed' },
    { prompt: 'Which statement best reflects the overall purpose of Lesson 3?', options: ['Students learn how decisions about place are shaped by various interests and trade-offs', 'It is only about remembering names', 'The lesson avoids real local issues', 'The lesson is about one single stakeholder only'], answer: 'Students learn how decisions about place are shaped by various interests and trade-offs' }
  ]
};

const teacherQuestions = [
  { question: 'Why are these lessons sequenced this way?', answer: 'The sequence begins with types of work because students need a clear language for describing jobs, industries and work arrangements before they can assess the effect of change. Once they have understood the local labour market, the lesson shifts to wellbeing so they can explore how job loss, industrial change and redevelopment affect identity, finances and community life. The final lesson brings in stakeholders because students are then ready to balance competing interests, weigh trade-offs and explain why decision-making around place rarely produces a single simple answer.' },
  { question: 'Why use Honeysuckle as the case study?', answer: 'Honeysuckle works well because it is a visible site of industrial transition. Students can observe evidence of changing land use and redevelopment while linking this to broader questions about jobs, social life and the future of work. The case study makes the concept of change concrete: it is not just a general discussion about industry, but a real place where students can see how landscape, employment and community values are connected.' },
  { question: 'Why do the activities focus on classification and comparison?', answer: 'Students are more likely to remember key ideas when they have to sort and compare evidence rather than simply read about it. Activities such as worker classification and stakeholder selection force students to apply concepts such as work arrangement, role, identity and priority. This helps them move from passive recognition to analytical thinking, which is a stronger foundation for later discussion and fieldwork.' },
  { question: 'How does the fieldwork strengthen the learning?', answer: 'The excursion acts as the evidence-gathering stage of the sequence. It allows students to move from abstract discussion into observation, which is where historical and contemporary ideas become visible. Looking at land use, public space, transport, heritage and work patterns gives students concrete examples to support their explanations. It also helps them connect local evidence with the wider idea of planning and change over time.' },
  { question: 'How do you justify the emphasis on wellbeing?', answer: 'In Stage 5 Commerce, students need to understand that economic change is not just about jobs and profits. Work influences identity, family life, community connections and social stability, so it has deep wellbeing implications. By discussing how industrial change can create both opportunity and disruption, students learn that redevelopment and economic adjustment can be positive for some groups while creating stress for others.' },
  { question: 'Why include stakeholder negotiation in Lesson 3?', answer: 'This lesson helps students understand that decisions about place are shaped by competing priorities, not by one single correct answer. Developers may focus on investment and productivity, residents may focus on access or amenity, and environmental groups may focus on heritage or long-term ecological effects. Negotiation creates a realistic way for students to see how compromise, evidence and public interest influence planning decisions.' },
  { question: 'How do the exit tickets help with assessment?', answer: 'Exit tickets give rapid insight into whether students can connect the lesson content to a local example. They are short enough to be manageable, but they reveal whether students can explain a concept clearly, justify a claim or identify a consequence of change. This is useful both during the lesson and as evidence for later evaluation of understanding.' },
  { question: 'Why are the quizzes used as short checks rather than heavy summative tasks?', answer: 'The quizzes are designed to consolidate key vocabulary and concepts without overshadowing the more discussion-based learning tasks. They provide a quick way to check whether students can distinguish between work arrangements, explain causes and consequences of industrial change, or identify stakeholder priorities. This keeps the learning experience balanced and allows the teacher to respond quickly to misunderstandings.' },
  { question: 'What flexibility is built into the sequence?', answer: 'The activities are designed for adaptation. A teacher can shorten discussion time, expand research tasks, or adjust the fieldwork preparation depending on student readiness. The overall sequence is robust because the structure allows for class discussion, teacher modelling, student-led reasoning and direct observation, without making the unit too rigid. That flexibility makes it easier to respond to different abilities and the realities of a school timetable.' },
  { question: 'How do you know the sequence is aligned to the inquiry?', answer: 'Every part of the sequence supports the inquiry question: students begin by identifying change in work, move to the social effects of that change, then test how different groups respond and decide what should happen next. The fieldwork provides the bridge between historical evidence and present-day planning. The result is a coherent learning arc in which students can move from evidence to explanation and then to a reasoned judgement.' }
];

const fieldworkActivities = [
  { number: '01', icon: '📍', title: 'Historical evidence log', purpose: 'Build background knowledge', description: 'Students compare the site with earlier land use and identify visible signs of industrial change, redevelopment and movement of work over time.' },
  { number: '02', icon: '🧭', title: 'Observation and mapping', purpose: 'Gather field evidence', description: 'Students record what they can see, note access, public space, transport and land use, and begin linking physical evidence to social and economic change.' },
  { number: '03', icon: '🤔', title: 'Prediction activity', purpose: 'Consider future change', description: 'Students propose what could happen next in the area and explain how jobs, planning and community needs might influence future decisions.' },
  { number: '04', icon: '🏘️', title: 'Community impact discussion', purpose: 'Connect the site to people', description: 'Students consider how work, housing, wellbeing and public space impact local residents and different groups in the community.' },
  { number: '05', icon: '🧾', title: 'Evidence to conclusion', purpose: 'Link observation to inquiry', description: 'Students use their notes to answer the inquiry question by explaining how the changing nature of work has shaped Honeysuckle and what may happen next.' }
];

const demoFieldworkReflections = [];

const resourceLibrary = [
  { name: 'Lesson Plans', items: [
      { name: 'Lesson Plan 1 — Types of Work', href: 'resources/lesson-plan-1.md' },
      { name: 'Lesson Plan 2 — Work and Wellbeing', href: 'resources/lesson-plan-2.md' },
      { name: 'Lesson Plan 3 — Stakeholders', href: 'resources/lesson-plan-3.md' }
    ]},
  { name: 'Teaching Resources', items: [
      { name: 'Industry Workforce Challenge', href: 'resources/resource-1.md' },
      { name: 'Honeysuckle: Then and Now', href: 'resources/resource-2.md' },
      { name: 'Honeysuckle Worker Cards', href: 'resources/resource-3.md' },
      { name: 'Research Pack', href: 'resources/resource-4.md' },
      { name: 'Where Do You Stand?', href: 'resources/resource-5.md' },
      { name: 'Redevelopment Challenge', href: 'resources/resource-6.md' }
    ]},
  { name: 'Fieldwork Resources', items: [
      { name: 'Fieldwork Booklet', href: 'resources/fieldwork-booklet.md' },
      { name: 'Fieldwork Overview', href: 'resources/fieldwork-overview.md' },
      { name: 'Student Preparation', href: 'resources/student-preparation.md' }
    ]},
  { name: 'Administrative Documents', items: [
      { name: 'Risk Assessment', href: 'resources/risk-assessment.md' },
      { name: 'Permission Forms', href: 'resources/permission-forms.md' },
      { name: 'Medical Information', href: 'resources/medical-information.md' }
    ]},
  { name: 'Curriculum Documentation', items: [
      { name: 'Syllabus Overview', href: 'resources/curriculum-overview.md' },
      { name: 'Assessment Notes', href: 'resources/assessment-notes.md' }
    ]}
];

function getState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return structuredClone(initialState);
  try {
    return { ...structuredClone(initialState), ...JSON.parse(saved) };
  } catch (error) {
    return structuredClone(initialState);
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function updateProgressDisplay() {
  const state = getState();
  const tasks = Object.values(state.tasks);
  const completed = tasks.filter(Boolean).length;
  const total = tasks.length || 1;
  const percent = Math.round((completed / total) * 100);

  const progressFill = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');
  if (progressFill) progressFill.style.width = `${percent}%`;
  if (progressText) progressText.textContent = `${percent}% complete`;

  document.querySelectorAll('[data-lesson-progress]').forEach((el) => {
    const lessonKey = el.dataset.lessonProgress;
    const lessonTasks = Object.entries(state.tasks)
      .filter(([task]) => task.startsWith(lessonKey))
      .map(([, value]) => value);
    const lessonPercent = lessonTasks.length ? Math.round((lessonTasks.filter(Boolean).length / lessonTasks.length) * 100) : 0;
    el.style.width = `${lessonPercent}%`;
  });
}

function renderResourceLibrary() {
  const container = document.getElementById('resource-library');
  if (!container) return;

  container.innerHTML = resourceLibrary.map((folder, index) => `
    <article class="folder-card">
      <h4><span class="folder-icon">📁</span> ${folder.name}</h4>
      <ul class="folder-meta">
        <li>${folder.items.length} item${folder.items.length === 1 ? '' : 's'}</li>
      </ul>
      <div class="folder-content ${index === 0 ? 'open' : ''}">
        ${folder.items.length ? `
          <ul class="folder-lines">
            ${folder.items.map((item) => `
              <li>
                <span>${item.name}</span>
                <a href="${item.href}" target="_blank" rel="noreferrer">Open</a>
              </li>
            `).join('')}
          </ul>
        ` : '<p class="empty-state">No documents added yet.</p>'}
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.folder-card').forEach((card) => {
    card.addEventListener('click', (event) => {
      const content = card.querySelector('.folder-content');
      if (!content || event.target.closest('a')) return;
      content.classList.toggle('open');
    });
  });
}

function showSection(sectionId) {
  document.querySelectorAll('.student-view').forEach((section) => {
    section.classList.toggle('active-view', section.id === sectionId);
  });

  document.querySelectorAll('.nav-link').forEach((button) => {
    button.classList.toggle('active', button.dataset.section === sectionId);
  });
}

function activateTab(tabId) {
  document.querySelectorAll('.portal-panel').forEach((panel) => {
    panel.classList.toggle('active-panel', panel.id === tabId);
  });

  document.querySelectorAll('.tab-button').forEach((button) => {
    button.classList.toggle('active', button.dataset.tab === tabId);
  });
}

function bindPortalNavigation() {
  document.querySelectorAll('.nav-link').forEach((button) => {
    button.addEventListener('click', () => showSection(button.dataset.section));
  });

  document.querySelectorAll('[data-target-section]').forEach((button) => {
    button.addEventListener('click', () => {
      const type = button.dataset.targetSection;
      if (type === 'lesson1') showSection('lesson1-view');
      if (type === 'lesson2') showSection('lesson2-view');
      if (type === 'lesson3') showSection('lesson3-view');
      if (type === 'fieldwork') showSection('fieldwork-view');
      activateTab('student-portal');
      document.getElementById('student-portal').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.querySelectorAll('[data-target]').forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.target;
      const target = document.getElementById(targetId);
      if (!target) return;
      activateTab(targetId);
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.querySelectorAll('.tab-button').forEach((button) => {
    button.addEventListener('click', () => activateTab(button.dataset.tab));
  });
}

function handleLessonGame() {
  document.querySelectorAll('.option-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const game = button.dataset.game;
      const answer = button.dataset.answer;
      const selected = button.closest('.answer-group').querySelectorAll('.option-btn');
      selected.forEach((btn) => btn.classList.remove('selected'));
      button.classList.add('selected');

      if (game === 'lesson1-game') {
        const message = answer === 'full-time' || answer === 'contract'
          ? 'Correct. A regular permanent role and a project-based arrangement are both valid examples of different work arrangements.'
          : 'Not quite. Look again at the difference between permanent roles, contract work and a temporary project arrangement.';

        const result = document.querySelector('[data-result="lesson1-game"]');
        if (result) {
          result.textContent = message;
          result.style.color = answer === 'full-time' || answer === 'contract' ? '#166534' : '#b91c1c';
        }

        const state = getState();
        state.interactions.lesson1Game = true;
        saveState(state);
        updateProgressDisplay();
      }
    });
  });
}

function handleOpinionResponse() {
  const button = document.querySelector('[data-activity="lesson2 opinion"]');
  if (!button) return;

  button.addEventListener('click', () => {
    const selected = document.querySelector('input[name="opinion-lesson2"]:checked');
    const result = document.querySelector('[data-result="lesson2-opinion"]');
    if (!selected) {
      if (result) {
        result.textContent = 'Select one position before saving.';
        result.style.color = '#b45309';
      }
      return;
    }

    const state = getState();
    state.interactions.lesson2Opinion = true;
    saveState(state);
    if (result) {
      result.textContent = 'Response saved.';
      result.style.color = '#166534';
    }
    updateProgressDisplay();
  });
}

function handleStakeholderChoice() {
  let selectedStakeholder = null;
  let selectedChoice = null;

  document.querySelectorAll('.stakeholder-btn').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.stakeholder-btn').forEach((btn) => btn.classList.remove('selected'));
      button.classList.add('selected');
      selectedStakeholder = button.dataset.stakeholder;
      if (selectedStakeholder && selectedChoice) {
        const state = getState();
        state.interactions.lesson3Stakeholder = true;
        saveState(state);
        const result = document.querySelector('[data-result="lesson3-stakeholder"]');
        if (result) {
          result.textContent = 'Decision recorded.';
          result.style.color = '#166534';
        }
        updateProgressDisplay();
      }
    });
  });

  document.querySelectorAll('.choice-btn').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.choice-btn').forEach((btn) => btn.classList.remove('selected'));
      button.classList.add('selected');
      selectedChoice = button.dataset.choice;
      if (selectedStakeholder && selectedChoice) {
        const state = getState();
        state.interactions.lesson3Stakeholder = true;
        saveState(state);
        const result = document.querySelector('[data-result="lesson3-stakeholder"]');
        if (result) {
          result.textContent = 'Decision recorded.';
          result.style.color = '#166534';
        }
        updateProgressDisplay();
      }
    });
  });
}

function renderQuiz(lessonKey) {
  const shell = document.getElementById(`quiz-${lessonKey}`);
  if (!shell) return;

  const questions = lessonQuestions[lessonKey];
  const state = getState();
  const quizState = state.quizResults[lessonKey] || { current: 0, answers: [], score: 0, completed: false };

  if (quizState.completed) {
    renderResults(lessonKey, quizState.score, questions.length);
    return;
  }

  const currentQuestion = questions[quizState.current];
  shell.innerHTML = `
    <div class="quiz-step">
      <div class="quiz-question">Question ${quizState.current + 1} of ${questions.length}</div>
      <h5>${currentQuestion.prompt}</h5>
      <div class="quiz-options-list">
        ${currentQuestion.options.map((option) => `
          <label>
            <input type="radio" name="${lessonKey}-quiz" value="${option}" />
            <span>${option}</span>
          </label>
        `).join('')}
      </div>
      <div class="quiz-controls">
        <span class="muted">${quizState.current + 1}/${questions.length}</span>
        <button class="primary-btn small-btn" data-answer-next="${lessonKey}">Next</button>
      </div>
    </div>
  `;

  shell.querySelector('[data-answer-next]')?.addEventListener('click', () => {
    const selected = shell.querySelector(`input[name="${lessonKey}-quiz"]:checked`);
    if (!selected) {
      const warning = document.createElement('p');
      warning.textContent = 'Please select an answer.';
      warning.style.color = '#b45309';
      warning.style.marginTop = '12px';
      shell.querySelector('.quiz-step').appendChild(warning);
      return;
    }

    const currentState = getState();
    const existing = currentState.quizResults[lessonKey] || { current: 0, answers: [], score: 0, completed: false };
    const nextAnswers = [...existing.answers];
    nextAnswers[quizState.current] = selected.value;

    if (quizState.current < questions.length - 1) {
      currentState.quizResults[lessonKey] = { ...existing, current: quizState.current + 1, answers: nextAnswers };
      saveState(currentState);
      renderQuiz(lessonKey);
    } else {
      const score = nextAnswers.reduce((total, value, index) => total + (value === questions[index].answer ? 1 : 0), 0);
      currentState.quizResults[lessonKey] = { current: questions.length, answers: nextAnswers, score, completed: true };
      currentState.tasks[`${lessonKey} quiz`] = true;
      saveState(currentState);
      renderResults(lessonKey, score, questions.length);
      updateProgressDisplay();
    }
  });
}

function renderResults(lessonKey, score, totalQuestions) {
  const shell = document.getElementById(`quiz-${lessonKey}`);
  if (!shell) return;

  const percentage = Math.round((score / totalQuestions) * 100);
  shell.innerHTML = `
    <div class="quiz-score-box">
      <h5>Results</h5>
      <p>Final score: ${score}/${totalQuestions}</p>
      <p>Percentage correct: ${percentage}%</p>
      <p>Status: Completed</p>
      <div class="ticket-actions">
        <button class="secondary-btn small-btn" data-review="${lessonKey}">Review answers</button>
        <button class="primary-btn small-btn" data-retry="${lessonKey}">Retry</button>
      </div>
    </div>
  `;

  shell.querySelector('[data-review]')?.addEventListener('click', () => {
    const state = getState();
    const questions = lessonQuestions[lessonKey];
    const answers = state.quizResults[lessonKey]?.answers || [];
    shell.innerHTML = questions.map((item, index) => `
      <div class="quiz-step" style="margin-top:12px;">
        <div class="quiz-question">${index + 1}. ${item.prompt}</div>
        <p><strong>Your answer:</strong> ${answers[index] || 'No answer'}</p>
        <p><strong>Correct answer:</strong> ${item.answer}</p>
      </div>
    `).join('');
  });

  shell.querySelector('[data-retry]')?.addEventListener('click', () => {
    const state = getState();
    state.quizResults[lessonKey] = { current: 0, answers: [], score: 0, completed: false };
    saveState(state);
    renderQuiz(lessonKey);
  });
}

function bindQuizButtons() {
  document.querySelectorAll('[data-quiz]').forEach((button) => {
    button.addEventListener('click', () => {
      const lessonKey = button.dataset.quiz;
      const state = getState();
      if (!state.quizResults[lessonKey]) {
        state.quizResults[lessonKey] = { current: 0, answers: [], score: 0, completed: false };
        saveState(state);
      }
      renderQuiz(lessonKey);
    });
  });
}

function restoreFieldworkForm() {
  const state = getState();
  const values = state.studentFieldwork || {};
  const reflection = document.getElementById('fieldwork-reflection');
  if (reflection) reflection.value = state.fieldworkReflection || '';
  const mapping = [
    ['student-fieldwork-idea', 'idea'],
    ['student-fieldwork-evidence', 'evidence'],
    ['student-fieldwork-work', 'work'],
    ['student-fieldwork-stakeholders', 'stakeholders'],
    ['student-fieldwork-final', 'final']
  ];

  mapping.forEach(([id, key]) => {
    const input = document.getElementById(id);
    if (input) input.value = values[key] || '';
  });
}

function bindTaskButtons() {
  document.querySelectorAll('[data-task]').forEach((button) => {
    button.addEventListener('click', () => {
      const task = button.dataset.task;
      const state = getState();

      if (task === 'fieldwork reflection') {
        const value = document.getElementById('fieldwork-reflection')?.value.trim();
        const idea = document.getElementById('student-fieldwork-idea')?.value.trim() || '';
        const evidence = document.getElementById('student-fieldwork-evidence')?.value.trim() || '';
        const work = document.getElementById('student-fieldwork-work')?.value.trim() || '';
        const stakeholders = document.getElementById('student-fieldwork-stakeholders')?.value.trim() || '';
        const final = document.getElementById('student-fieldwork-final')?.value.trim() || '';

        if (!value && !idea && !evidence && !work && !stakeholders && !final) {
          alert('Write a fieldwork reflection before saving it.');
          return;
        }

        state.fieldworkReflection = value;
        state.studentFieldwork = { idea, evidence, work, stakeholders, final };
        state.tasks[task] = true;
        saveState(state);
        updateProgressDisplay();
        button.textContent = 'Saved';
        button.disabled = true;
        return;
      }

      if (task === 'fieldwork prep') {
        state.tasks[task] = true;
        saveState(state);
        updateProgressDisplay();
        button.textContent = 'Completed';
        button.disabled = true;
        return;
      }

      state.tasks[task] = true;
      saveState(state);
      updateProgressDisplay();
      button.textContent = 'Completed';
      button.disabled = true;
    });
  });
}

function bindExitTickets() {
  document.querySelectorAll('[data-exit-submit]').forEach((button) => {
    button.addEventListener('click', () => {
      const lessonKey = button.dataset.exitSubmit;
      const mode = button.dataset.mode;
      const input = document.querySelector(`[data-exit-ticket="${lessonKey}"]`);
      const state = getState();
      if (!input) return;

      const value = input.value.trim();
      if (mode === 'draft') {
        state.drafts[lessonKey] = value;
        saveState(state);
        button.textContent = 'Saved';
        return;
      }

      if (!value) {
        alert('Add a response before submitting.');
        return;
      }

      state.exitTickets[lessonKey] = value;
      state.tasks[`${lessonKey} exit`] = true;
      saveState(state);
      updateProgressDisplay();
      button.textContent = 'Submitted';
      button.disabled = true;
    });
  });

  document.querySelectorAll('[data-exit-ticket]').forEach((field) => {
    const lessonKey = field.dataset.exitTicket;
    const state = getState();
    field.value = state.drafts[lessonKey] || state.exitTickets[lessonKey] || '';
  });
}

function renderSubmissionTables() {
  const exitList = document.getElementById('teacher-exit-list');
  const quizList = document.getElementById('teacher-quiz-list');
  if (!exitList || !quizList) return;

  const state = getState();
  const lessonNames = { lesson1: 'Lesson 1', lesson2: 'Lesson 2', lesson3: 'Lesson 3' };

  exitList.innerHTML = Object.entries(lessonNames).map(([lessonKey, label]) => {
    const response = state.exitTickets[lessonKey] || 'No submission yet';
    const status = state.tasks[`${lessonKey} exit`] ? 'Submitted' : 'Not submitted';
    const date = state.tasks[`${lessonKey} exit`] ? new Date().toLocaleDateString('en-AU') : '—';
    return `
      <tr>
        <td>Demo student</td>
        <td>${label}</td>
        <td>${status}</td>
        <td>${response}</td>
        <td>${date}</td>
      </tr>
    `;
  }).join('');

  const lesson1Score = state.quizResults.lesson1?.completed ? `${state.quizResults.lesson1.score}/10` : '—';
  const lesson2Score = state.quizResults.lesson2?.completed ? `${state.quizResults.lesson2.score}/10` : '—';
  const lesson3Score = state.quizResults.lesson3?.completed ? `${state.quizResults.lesson3.score}/10` : '—';
  const overall = state.quizResults.lesson1?.completed && state.quizResults.lesson2?.completed && state.quizResults.lesson3?.completed ? 'Complete' : 'In progress';

  quizList.innerHTML = `
    <tr>
      <td>Demo student</td>
      <td>${lesson1Score}</td>
      <td>${lesson2Score}</td>
      <td>${lesson3Score}</td>
      <td>${overall}</td>
    </tr>
  `;
}

function renderTeacherQuestions() {
  const qaContainer = document.getElementById('qa-accordion');
  if (!qaContainer) return;

  qaContainer.innerHTML = teacherQuestions.map((item, index) => `
    <div class="qa-item ${index === 0 ? 'active' : ''}">
      <button class="qa-question" type="button">
        <span>${item.question}</span>
        <span>${index === 0 ? '−' : '+'}</span>
      </button>
      <div class="qa-answer">
        <p>${item.answer}</p>
      </div>
    </div>
  `).join('');

  qaContainer.querySelectorAll('.qa-question').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.qa-item');
      const isActive = item.classList.contains('active');
      item.classList.toggle('active', !isActive);
      button.lastElementChild.textContent = isActive ? '+' : '−';
    });
  });
}

function renderFieldworkActivities() {
  const container = document.getElementById('fieldwork-activity-grid');
  if (!container) return;

  container.innerHTML = fieldworkActivities.map((activity) => `
    <article class="fieldwork-activity-card">
      <span class="activity-number">${activity.number}</span>
      <div class="activity-thumb">${activity.icon}</div>
      <h4>${activity.title}</h4>
      <p><strong>Purpose:</strong> ${activity.purpose}</p>
      <p>${activity.description}</p>
    </article>
  `).join('');
}

function renderTeacherFieldworkList() {
  const list = document.getElementById('teacher-fieldwork-list');
  const detail = document.getElementById('fieldwork-reflection-detail');
  if (!list || !detail) return;

  if (!demoFieldworkReflections.length) {
    list.innerHTML = `
      <li>
        <button class="fieldwork-reflection-button" type="button" disabled>
          No fieldwork reflections yet
        </button>
      </li>
    `;
    detail.innerHTML = `
      <h4>Fieldwork reflection</h4>
      <p>No student reflections have been submitted yet.</p>
    `;
    return;
  }

  list.innerHTML = demoFieldworkReflections.map((entry, index) => `
    <li>
      <button class="fieldwork-reflection-button ${index === 0 ? 'active' : ''}" data-reflection-name="${entry.student}" type="button">
        ${entry.student}
      </button>
    </li>
  `).join('');

  const renderDetail = (entry) => {
    detail.innerHTML = `
      <h4>${entry.student} — Fieldwork reflection</h4>
      <p>${entry.summary}</p>
      <ul>
        <li><strong>Observation:</strong> ${entry.observation}</li>
        <li><strong>Evidence:</strong> ${entry.evidence}</li>
        <li><strong>Changing work:</strong> ${entry.work}</li>
        <li><strong>Stakeholder perspective:</strong> ${entry.stakeholders}</li>
      </ul>
      <p><strong>Reflection:</strong> ${entry.reflection}</p>
    `;
  };

  renderDetail(demoFieldworkReflections[0]);

  list.querySelectorAll('.fieldwork-reflection-button').forEach((button) => {
    button.addEventListener('click', () => {
      const entry = demoFieldworkReflections.find((item) => item.student === button.dataset.reflectionName);
      if (!entry) return;
      list.querySelectorAll('.fieldwork-reflection-button').forEach((btn) => btn.classList.toggle('active', btn === button));
      renderDetail(entry);
    });
  });
}

function bindSubmissionTabs() {
  document.querySelectorAll('.submission-tab').forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.submissionTab;
      document.querySelectorAll('.submission-panel').forEach((panel) => {
        panel.classList.toggle('active-panel', panel.id === target);
      });
      document.querySelectorAll('.submission-tab').forEach((tab) => tab.classList.toggle('active', tab === button));
    });
  });
}

function init() {
  renderResourceLibrary();
  renderTeacherQuestions();
  renderFieldworkActivities();
  renderTeacherFieldworkList();
  restoreFieldworkForm();
  bindPortalNavigation();
  bindTaskButtons();
  bindQuizButtons();
  bindExitTickets();
  bindSubmissionTabs();
  handleLessonGame();
  handleOpinionResponse();
  handleStakeholderChoice();
  renderSubmissionTables();
  updateProgressDisplay();
  showSection('dashboard');
}

init();
