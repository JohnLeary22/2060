const STORAGE_KEY = 'honeysuckle-learning-demo-v2';
const LEGACY_STORAGE_KEY = 'honeysuckle-learning-state';
const LESSON_LABELS = { lesson1: 'Lesson 1', lesson2: 'Lesson 2', lesson3: 'Lesson 3' };
const EXIT_QUESTIONS = {
  lesson1: 'Explain one workplace or industry change in Honeysuckle and describe how it might affect workers or the local economy.',
  lesson2: 'Describe one positive and one negative effect of industrial change on a community or local area.',
  lesson3: 'Identify one compromise made during your redevelopment decision and explain why it may be necessary.'
};
const FIELDWORK_FIELDS = [
  ['idea', 'Proposed change to Honeysuckle'],
  ['evidence', 'Evidence collected during the excursion'],
  ['work', 'Types of work or industries affected'],
  ['stakeholders', 'Stakeholders who may benefit or have concerns'],
  ['final', 'Final reflection on past and future work']
];

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

const resourceLibrary = [
  { name: 'Lesson Plans', items: [
      { name: 'Lesson Plan 1 (DOCX)', href: 'Files/Lesson%20plan%201%20EDUC2060.docx' },
      { name: 'Lesson Plan 2 (DOCX)', href: 'Files/Lesson%20plan%202%20EDUC2060.docx' },
      { name: 'Lesson Plan 3 (DOCX)', href: 'Files/Lesson%20plan%203%20EDUC2060.docx' }
    ]},
  { name: 'Teaching Resources', items: [
      { name: 'Lesson 1 — Resource 1 (PDF)', href: 'Files/EDUC2060___Lesson_1___Resource_1%20copy.pdf' },
      { name: 'Lesson 1 — Resource 2 (PDF)', href: 'Files/EDUC2060___Lesson_1___Resource_2%20copy.pdf' },
      { name: 'Lesson 1 — Resource 3 (PDF)', href: 'Files/EDUC2060___Lesson_1___Resource_3%20copy.pdf' },
      { name: 'Lesson 2 — Resource 4 (PDF)', href: 'Files/EDUC2060___Lesson_2___Resource_4%20copy.pdf' },
      { name: 'Lesson 2 — Resource 5 (PDF)', href: 'Files/EDUC2060___Lesson_2___Resource_5%20copy.pdf' },
      { name: 'Lesson 3 — Resource 6 (PDF)', href: 'Files/EDUC2060___Lesson_3___Resource_6%20copy.pdf' },
      { name: 'Lesson 3 — Resource 7 (PDF)', href: 'Files/EDUC2060___Lesson_3___Resource_7%20copy.pdf' }
    ]},
  { name: 'Fieldwork Resources', items: [
      { name: 'Fieldwork Overview', href: 'resources/fieldwork-overview.md' },
      { name: 'Student Preparation', href: 'resources/student-preparation.md' },
      { name: 'Fieldwork Booklet (PDF)', href: 'Files/WORK%20%20PLACE%20fieldwork%20booklet%20(2)%20copy.pdf' }
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

function newStudentId() {
  return globalThis.crypto?.randomUUID
    ? globalThis.crypto.randomUUID()
    : `student-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function createStudent(name = '') {
  return {
    id: newStudentId(),
    name,
    createdAt: new Date().toISOString(),
    quizDrafts: {},
    quizResults: {},
    exitDrafts: {},
    exitTickets: {},
    fieldworkReflection: null
  };
}

function saveStore(store) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

function getStore() {
  const raw = localStorage.getItem(STORAGE_KEY);
  let store;
  try {
    store = JSON.parse(raw || 'null');
  } catch (error) {
    store = null;
  }

  if (!store || store.version !== 2 || !store.students || typeof store.students !== 'object') {
    if (raw) localStorage.setItem(`${STORAGE_KEY}-recovery-${Date.now()}`, raw);
    store = { version: 2, activeStudentId: null, students: {} };
  }

  Object.values(store.students).forEach((student) => {
    student.quizDrafts ||= {};
    student.quizResults ||= {};
    student.exitDrafts ||= {};
    student.exitTickets ||= {};
    student.name ||= '';
  });

  if (!store.students[store.activeStudentId]) {
    const student = createStudent();
    store.students[student.id] = student;
    store.activeStudentId = student.id;
    saveStore(store);
  }

  return store;
}

function getActiveStudent(store = getStore()) {
  return store.students[store.activeStudentId];
}

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}

function formatDateTime(value) {
  if (!value) return '—';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? '—' : date.toLocaleString('en-AU');
}

function isQuizSubmitted(result) {
  return Boolean(result && Array.isArray(result.answers) && result.answers.length === 10 && result.answers.every(Boolean) && result.submittedAt);
}

function isExitTicketSubmitted(ticket) {
  return Boolean(ticket && ticket.response?.trim() && ticket.submittedAt);
}

function isFieldworkSubmitted(reflection) {
  return Boolean(reflection && reflection.submittedAt && FIELDWORK_FIELDS.every(([key]) => reflection[key]?.trim()));
}

function getCompletionMap(student) {
  const completion = {};
  Object.keys(LESSON_LABELS).forEach((lessonKey) => {
    completion[`quiz-${lessonKey}`] = isQuizSubmitted(student.quizResults?.[lessonKey]);
    completion[`exit-${lessonKey}`] = isExitTicketSubmitted(student.exitTickets?.[lessonKey]);
  });
  completion.fieldwork = isFieldworkSubmitted(student.fieldworkReflection);
  return completion;
}

function renderStudentIdentity() {
  const store = getStore();
  const student = getActiveStudent(store);
  const nameField = document.getElementById('student-name');
  const date = document.getElementById('student-date');
  const profileSelect = document.getElementById('student-profile-select');
  if (nameField && nameField.value !== student.name) nameField.value = student.name;
  if (date) date.textContent = new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
  if (profileSelect) {
    const profiles = Object.values(store.students);
    profileSelect.innerHTML = profiles.map((profile, index) => {
      const label = profile.name.trim() || 'Name not entered';
      return `<option value="${escapeHTML(profile.id)}" ${profile.id === student.id ? 'selected' : ''}>Student ${index + 1} — ${escapeHTML(label)}</option>`;
    }).join('');
  }
}

function updateProgressDisplay() {
  const student = getActiveStudent();
  const completion = getCompletionMap(student);
  const completed = Object.values(completion).filter(Boolean).length;
  const percent = Math.round((completed / 7) * 100);
  const progressFill = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');

  if (progressFill) progressFill.style.width = `${percent}%`;
  if (progressText) progressText.textContent = `${percent}% complete`;

  document.querySelectorAll('[data-activity-status]').forEach((element) => {
    const isComplete = completion[element.dataset.activityStatus];
    element.textContent = isComplete ? 'Submitted' : 'Not submitted';
    element.classList.toggle('complete', Boolean(isComplete));
  });

  document.querySelectorAll('[data-lesson-progress]').forEach((element) => {
    const lessonKey = element.dataset.lessonProgress;
    const lessonCompleted = Number(completion[`quiz-${lessonKey}`]) + Number(completion[`exit-${lessonKey}`]);
    element.style.width = `${lessonCompleted * 50}%`;
  });

  renderStudentIdentity();
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

    if (result) {
      result.textContent = 'Response saved.';
      result.style.color = '#166534';
    }
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
        const result = document.querySelector('[data-result="lesson3-stakeholder"]');
        if (result) {
          result.textContent = 'Decision recorded.';
          result.style.color = '#166534';
        }
      }
    });
  });

  document.querySelectorAll('.choice-btn').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.choice-btn').forEach((btn) => btn.classList.remove('selected'));
      button.classList.add('selected');
      selectedChoice = button.dataset.choice;
      if (selectedStakeholder && selectedChoice) {
        const result = document.querySelector('[data-result="lesson3-stakeholder"]');
        if (result) {
          result.textContent = 'Decision recorded.';
          result.style.color = '#166534';
        }
      }
    });
  });
}

function requireStudentName() {
  const student = getActiveStudent();
  const status = document.getElementById('identity-status');
  if (student.name.trim()) return true;
  if (status) status.textContent = 'Enter and save a student name before submitting work.';
  document.getElementById('student-name')?.focus();
  return false;
}

function renderQuiz(lessonKey) {
  const shell = document.getElementById(`quiz-${lessonKey}`);
  if (!shell) return;

  const questions = lessonQuestions[lessonKey];
  const store = getStore();
  const student = getActiveStudent(store);
  const result = student.quizResults[lessonKey];
  if (isQuizSubmitted(result)) {
    renderResults(lessonKey, result);
    return;
  }

  const draft = student.quizDrafts[lessonKey] || { current: 0, answers: Array(10).fill(''), revealed: false };
  const current = Math.min(draft.current || 0, questions.length - 1);
  const question = questions[current];
  const chosenAnswer = draft.answers?.[current] || '';
  const isCorrect = chosenAnswer === question.answer;

  shell.innerHTML = `
    <div class="quiz-step">
      <div class="quiz-question">Question ${current + 1} of ${questions.length}</div>
      <h5>${escapeHTML(question.prompt)}</h5>
      <div class="quiz-options-list">
        ${question.options.map((option) => `
          <label>
            <input type="radio" name="${lessonKey}-quiz" value="${escapeHTML(option)}" ${chosenAnswer === option ? 'checked' : ''} ${draft.revealed ? 'disabled' : ''} />
            <span>${escapeHTML(option)}</span>
          </label>
        `).join('')}
      </div>
      ${draft.revealed ? `<p class="quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}" aria-live="polite">${isCorrect ? 'Correct' : 'Incorrect'}</p>` : ''}
      <div class="quiz-controls">
        <span class="muted">${current + 1}/${questions.length}</span>
        ${draft.revealed
          ? `<button class="primary-btn small-btn" data-answer-next="${lessonKey}">${current === questions.length - 1 ? 'Submit quiz' : 'Next question'}</button>`
          : `<button class="primary-btn small-btn" data-answer-check="${lessonKey}">Check answer</button>`}
      </div>
    </div>
  `;

  shell.querySelector('[data-answer-check]')?.addEventListener('click', () => {
    const selected = shell.querySelector(`input[name="${lessonKey}-quiz"]:checked`);
    if (!selected) {
      const warning = shell.querySelector('.quiz-warning') || document.createElement('p');
      warning.className = 'quiz-warning';
      warning.textContent = 'Please select an answer.';
      warning.style.color = '#b45309';
      if (!warning.parentElement) shell.querySelector('.quiz-step').appendChild(warning);
      return;
    }
    const latestStore = getStore();
    const latestStudent = getActiveStudent(latestStore);
    const latestDraft = latestStudent.quizDrafts[lessonKey] || { current, answers: Array(10).fill(''), revealed: false };
    latestDraft.answers[current] = selected.value;
    latestDraft.revealed = true;
    latestStudent.quizDrafts[lessonKey] = latestDraft;
    saveStore(latestStore);
    renderQuiz(lessonKey);
  });

  shell.querySelector('[data-answer-next]')?.addEventListener('click', () => {
    const latestStore = getStore();
    const latestStudent = getActiveStudent(latestStore);
    const latestDraft = latestStudent.quizDrafts[lessonKey];
    if (!latestDraft || !latestDraft.revealed) return;

    if (current < questions.length - 1) {
      latestDraft.current = current + 1;
      latestDraft.revealed = false;
      latestStudent.quizDrafts[lessonKey] = latestDraft;
      saveStore(latestStore);
      renderQuiz(lessonKey);
      return;
    }

    if (!Array.isArray(latestDraft.answers) || latestDraft.answers.length !== 10 || !latestDraft.answers.every(Boolean)) return;
    const score = latestDraft.answers.reduce((total, answer, index) => total + (answer === questions[index].answer ? 1 : 0), 0);
    latestStudent.quizResults[lessonKey] = {
      answers: latestDraft.answers,
      score,
      submittedAt: new Date().toISOString(),
      reviewed: false,
      feedback: ''
    };
    delete latestStudent.quizDrafts[lessonKey];
    saveStore(latestStore);
    renderResults(lessonKey, latestStudent.quizResults[lessonKey]);
    updateProgressDisplay();
    renderSubmissionTables();
  });
}

function renderResults(lessonKey, result) {
  const shell = document.getElementById(`quiz-${lessonKey}`);
  if (!shell) return;
  const questions = lessonQuestions[lessonKey];
  shell.innerHTML = `
    <div class="quiz-score-box">
      <h5>${LESSON_LABELS[lessonKey]} quiz submitted</h5>
      <p>Final score: ${result.score}/10</p>
      <p>Status: Submitted</p>
      <button class="secondary-btn small-btn" data-student-quiz-review="${lessonKey}" type="button">Review answers</button>
      <div class="student-quiz-review" hidden></div>
    </div>
  `;
  shell.querySelector('[data-student-quiz-review]')?.addEventListener('click', (event) => {
    const review = shell.querySelector('.student-quiz-review');
    review.hidden = !review.hidden;
    event.currentTarget.textContent = review.hidden ? 'Review answers' : 'Hide answers';
    if (!review.hidden) {
      review.innerHTML = questions.map((question, index) => `
        <div class="quiz-step quiz-review-item">
          <strong>${index + 1}. ${escapeHTML(question.prompt)}</strong>
          <p>Your answer: ${escapeHTML(result.answers[index])}</p>
          <p>${result.answers[index] === question.answer ? 'Correct' : 'Incorrect'}</p>
        </div>
      `).join('');
    }
  });
}

function bindQuizButtons() {
  document.querySelectorAll('[data-quiz]').forEach((button) => {
    button.addEventListener('click', () => {
      const lessonKey = button.dataset.quiz;
      if (!requireStudentName()) return;
      renderQuiz(lessonKey);
    });
  });
}

let selectedExitLesson = 'lesson1';

function restoreStudentForms() {
  const student = getActiveStudent();
  document.querySelectorAll('[data-exit-ticket]').forEach((field) => {
    const lessonKey = field.dataset.exitTicket;
    field.value = student.exitDrafts[lessonKey] ?? student.exitTickets[lessonKey]?.response ?? '';
    const submitButton = document.querySelector(`[data-exit-submit="${lessonKey}"][data-mode="submit"]`);
    if (submitButton) submitButton.textContent = isExitTicketSubmitted(student.exitTickets[lessonKey]) ? 'Update submission' : 'Submit';
  });
  FIELDWORK_FIELDS.forEach(([key]) => {
    const input = document.getElementById(`student-fieldwork-${key}`);
    if (input) input.value = student.fieldworkReflection?.[key] || '';
  });
}

function bindStudentIdentity() {
  document.getElementById('save-student-name')?.addEventListener('click', () => {
    const input = document.getElementById('student-name');
    const name = input?.value.trim() || '';
    const status = document.getElementById('identity-status');
    if (!name) {
      if (status) status.textContent = 'Enter a name before saving.';
      input?.focus();
      return;
    }
    const store = getStore();
    const student = getActiveStudent(store);
    const hasSavedWork = Object.keys(student.quizDrafts).length > 0
      || Object.values(student.quizResults).some(isQuizSubmitted)
      || Object.keys(student.exitDrafts).length > 0
      || Object.values(student.exitTickets).some(isExitTicketSubmitted)
      || isFieldworkSubmitted(student.fieldworkReflection);
    if (student.name && student.name !== name && hasSavedWork
      && !window.confirm('This profile already has work saved. Rename it only to correct this student’s name; choose New student to keep another student’s work separate. Continue with this name correction?')) {
      input.value = student.name;
      return;
    }
    student.name = name;
    saveStore(store);
    if (status) status.textContent = 'Name saved for this demo profile. Use “New student” to create a separate profile.';
    updateProgressDisplay();
    renderSubmissionTables();
  });

  document.getElementById('new-demo-student')?.addEventListener('click', () => {
    const store = getStore();
    const student = createStudent();
    store.students[student.id] = student;
    store.activeStudentId = student.id;
    saveStore(store);
    document.getElementById('identity-status').textContent = 'New separate demo profile created. Enter and save its student name.';
    document.querySelectorAll('[id^="quiz-lesson"]').forEach((shell) => { shell.innerHTML = ''; });
    restoreStudentForms();
    updateProgressDisplay();
    renderSubmissionTables();
  });

  document.getElementById('student-profile-select')?.addEventListener('change', (event) => {
    const store = getStore();
    if (!store.students[event.currentTarget.value]) return;
    store.activeStudentId = event.currentTarget.value;
    saveStore(store);
    document.getElementById('identity-status').textContent = 'Switched to a separate browser demo profile. Its submissions and progress are independent.';
    document.querySelectorAll('[id^="quiz-lesson"]').forEach((shell) => { shell.innerHTML = ''; });
    restoreStudentForms();
    updateProgressDisplay();
    renderSubmissionTables();
  });
}

function bindExitTickets() {
  document.querySelectorAll('[data-exit-submit]').forEach((button) => {
    button.addEventListener('click', () => {
      const lessonKey = button.dataset.exitSubmit;
      const mode = button.dataset.mode;
      const input = document.querySelector(`[data-exit-ticket="${lessonKey}"]`);
      if (!input) return;
      const value = input.value.trim();
      const store = getStore();
      const student = getActiveStudent(store);

      if (mode === 'draft') {
        student.exitDrafts[lessonKey] = value;
        saveStore(store);
        button.textContent = 'Draft saved';
        return;
      }

      if (!requireStudentName()) return;
      if (!value) {
        input.focus();
        input.setCustomValidity('Write a response before submitting.');
        input.reportValidity();
        input.setCustomValidity('');
        return;
      }

      const previous = student.exitTickets[lessonKey];
      student.exitTickets[lessonKey] = {
        response: value,
        submittedAt: new Date().toISOString(),
        reviewed: previous?.response === value ? Boolean(previous.reviewed) : false,
        feedback: previous?.response === value ? previous.feedback || '' : ''
      };
      delete student.exitDrafts[lessonKey];
      saveStore(store);
      button.textContent = 'Update submission';
      updateProgressDisplay();
      renderSubmissionTables();
    });
  });
}

function bindFieldworkSubmission() {
  document.getElementById('submit-fieldwork-reflection')?.addEventListener('click', () => {
    if (!requireStudentName()) return;
    const values = Object.fromEntries(FIELDWORK_FIELDS.map(([key]) => [
      key,
      document.getElementById(`student-fieldwork-${key}`)?.value.trim() || ''
    ]));
    const missing = FIELDWORK_FIELDS.find(([key]) => !values[key]);
    if (missing) {
      const input = document.getElementById(`student-fieldwork-${missing[0]}`);
      input?.focus();
      input?.setCustomValidity('Complete each reflection field before submitting.');
      input?.reportValidity();
      input?.setCustomValidity('');
      return;
    }

    const store = getStore();
    const student = getActiveStudent(store);
    const previous = student.fieldworkReflection;
    student.fieldworkReflection = {
      ...values,
      submittedAt: new Date().toISOString(),
      reviewed: previous && FIELDWORK_FIELDS.every(([key]) => previous[key] === values[key]) ? Boolean(previous.reviewed) : false,
      feedback: previous && FIELDWORK_FIELDS.every(([key]) => previous[key] === values[key]) ? previous.feedback || '' : ''
    };
    saveStore(store);
    updateProgressDisplay();
    renderSubmissionTables();
  });
}

function bindStudentNameKey() {
  document.getElementById('student-name')?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.getElementById('save-student-name')?.click();
    }
  });
}

function renderExitReview(studentId, lessonKey) {
  const panel = document.getElementById('exit-review-panel');
  const store = getStore();
  const student = store.students[studentId];
  const ticket = student?.exitTickets?.[lessonKey];
  if (!panel || !student || !isExitTicketSubmitted(ticket)) return;
  panel.hidden = false;
  panel.innerHTML = `
    <div class="review-panel-heading">
      <div><p class="eyebrow">${LESSON_LABELS[lessonKey]} — Exit Ticket</p><h4>${escapeHTML(student.name || 'Unnamed demo student')}</h4></div>
      <button class="chip-button small-btn" type="button" data-close-review="exit">Close</button>
    </div>
    <p class="muted">Submitted ${escapeHTML(formatDateTime(ticket.submittedAt))} · ${ticket.reviewed ? 'Reviewed' : 'Submitted'}</p>
    <h5>Question</h5><p>${escapeHTML(EXIT_QUESTIONS[lessonKey])}</p>
    <h5>Student response</h5><div class="review-response">${escapeHTML(ticket.response)}</div>
    <label class="review-feedback-label" for="exit-feedback">Teacher feedback (optional)</label>
    <textarea id="exit-feedback" rows="3" placeholder="Add feedback for this response...">${escapeHTML(ticket.feedback || '')}</textarea>
    <div class="ticket-actions">
      <button class="secondary-btn small-btn" type="button" data-save-feedback="exit" data-student-id="${escapeHTML(studentId)}" data-lesson="${lessonKey}">Save feedback</button>
      <button class="primary-btn small-btn" type="button" data-mark-reviewed="exit" data-student-id="${escapeHTML(studentId)}" data-lesson="${lessonKey}" ${ticket.reviewed ? 'disabled' : ''}>${ticket.reviewed ? 'Reviewed' : 'Mark as Reviewed'}</button>
    </div>
  `;
  bindReviewPanelActions(panel);
}

function renderQuizReview(studentId, lessonKey) {
  const panel = document.getElementById('quiz-review-panel');
  const student = getStore().students[studentId];
  const result = student?.quizResults?.[lessonKey];
  if (!panel || !student || !isQuizSubmitted(result)) return;
  panel.hidden = false;
  panel.innerHTML = `
    <div class="review-panel-heading">
      <div><p class="eyebrow">${LESSON_LABELS[lessonKey]} quiz · ${result.score}/10</p><h4>${escapeHTML(student.name || 'Unnamed demo student')}</h4></div>
      <button class="chip-button small-btn" type="button" data-close-review="quiz">Close</button>
    </div>
    <p class="muted">Submitted ${escapeHTML(formatDateTime(result.submittedAt))} · Submitted</p>
    <div class="quiz-teacher-review">
      ${lessonQuestions[lessonKey].map((question, index) => `
        <article class="quiz-review-item">
          <h5>${index + 1}. ${escapeHTML(question.prompt)}</h5>
          <p><strong>Selected answer:</strong> ${escapeHTML(result.answers[index])}</p>
          <p class="${result.answers[index] === question.answer ? 'correct' : 'incorrect'}">${result.answers[index] === question.answer ? 'Correct' : 'Incorrect'}</p>
        </article>
      `).join('')}
    </div>
  `;
  bindReviewPanelActions(panel);
}

function renderFieldworkReview(studentId) {
  const panel = document.getElementById('fieldwork-reflection-detail');
  const student = getStore().students[studentId];
  const reflection = student?.fieldworkReflection;
  if (!panel || !student || !isFieldworkSubmitted(reflection)) return;
  panel.hidden = false;
  panel.innerHTML = `
    <div class="review-panel-heading">
      <div><p class="eyebrow">Fieldwork reflection</p><h4>${escapeHTML(student.name || 'Unnamed demo student')}</h4></div>
      <button class="chip-button small-btn" type="button" data-close-review="fieldwork">Close</button>
    </div>
    <p class="muted">Submitted ${escapeHTML(formatDateTime(reflection.submittedAt))} · ${reflection.reviewed ? 'Reviewed' : 'Submitted'}</p>
    ${FIELDWORK_FIELDS.map(([key, label]) => `
      <section class="fieldwork-answer"><h5>${escapeHTML(label)}</h5><div class="review-response">${escapeHTML(reflection[key])}</div></section>
    `).join('')}
    <label class="review-feedback-label" for="fieldwork-feedback">Teacher feedback (optional)</label>
    <textarea id="fieldwork-feedback" rows="3" placeholder="Add feedback for this reflection...">${escapeHTML(reflection.feedback || '')}</textarea>
    <div class="ticket-actions">
      <button class="secondary-btn small-btn" type="button" data-save-feedback="fieldwork" data-student-id="${escapeHTML(studentId)}">Save feedback</button>
      <button class="primary-btn small-btn" type="button" data-mark-reviewed="fieldwork" data-student-id="${escapeHTML(studentId)}" ${reflection.reviewed ? 'disabled' : ''}>${reflection.reviewed ? 'Reviewed' : 'Mark as Reviewed'}</button>
    </div>
  `;
  bindReviewPanelActions(panel);
}

function bindReviewPanelActions(panel) {
  panel.querySelector('[data-close-review]')?.addEventListener('click', () => { panel.hidden = true; });
  panel.querySelectorAll('[data-save-feedback]').forEach((button) => {
    button.addEventListener('click', () => {
      const store = getStore();
      const student = store.students[button.dataset.studentId];
      if (!student) return;
      const record = button.dataset.saveFeedback === 'exit'
        ? student.exitTickets[button.dataset.lesson]
        : student.fieldworkReflection;
      if (!record) return;
      const feedbackId = button.dataset.saveFeedback === 'exit' ? 'exit-feedback' : 'fieldwork-feedback';
      record.feedback = document.getElementById(feedbackId)?.value.trim() || '';
      saveStore(store);
      button.textContent = 'Feedback saved';
    });
  });
  panel.querySelectorAll('[data-mark-reviewed]').forEach((button) => {
    button.addEventListener('click', () => {
      const store = getStore();
      const student = store.students[button.dataset.studentId];
      if (!student) return;
      const record = button.dataset.markReviewed === 'exit'
        ? student.exitTickets[button.dataset.lesson]
        : student.fieldworkReflection;
      if (!record) return;
      const feedbackId = button.dataset.markReviewed === 'exit' ? 'exit-feedback' : 'fieldwork-feedback';
      record.feedback = document.getElementById(feedbackId)?.value.trim() || record.feedback || '';
      record.reviewed = true;
      saveStore(store);
      renderSubmissionTables();
      if (button.dataset.markReviewed === 'exit') renderExitReview(button.dataset.studentId, button.dataset.lesson);
      else renderFieldworkReview(button.dataset.studentId);
    });
  });
}

function renderSubmissionTables() {
  const store = getStore();
  const students = Object.values(store.students);
  const exitList = document.getElementById('teacher-exit-list');
  const quizList = document.getElementById('teacher-quiz-list');
  const fieldworkList = document.getElementById('teacher-fieldwork-list');
  const fieldworkEmpty = document.getElementById('fieldwork-empty-state');

  if (exitList) {
    const entries = students.flatMap((student) => {
      const ticket = student.exitTickets?.[selectedExitLesson];
      return isExitTicketSubmitted(ticket) ? [{ student, ticket }] : [];
    }).sort((a, b) => b.ticket.submittedAt.localeCompare(a.ticket.submittedAt));
    exitList.innerHTML = entries.length ? entries.map(({ student, ticket }) => `
      <tr>
        <td>${escapeHTML(student.name || 'Unnamed demo student')}</td>
        <td>${LESSON_LABELS[selectedExitLesson]}</td>
        <td>${escapeHTML(formatDateTime(ticket.submittedAt))}</td>
        <td>${ticket.reviewed ? 'Reviewed' : 'Submitted'}</td>
        <td>${escapeHTML(ticket.response.length > 120 ? `${ticket.response.slice(0, 117)}…` : ticket.response)}</td>
        <td><button class="secondary-btn small-btn" type="button" data-review-exit="${escapeHTML(student.id)}">Review</button></td>
      </tr>
    `).join('') : `<tr><td colspan="6" class="muted">No ${LESSON_LABELS[selectedExitLesson]} exit tickets submitted yet.</td></tr>`;
    exitList.querySelectorAll('[data-review-exit]').forEach((button) => {
      button.addEventListener('click', () => renderExitReview(button.dataset.reviewExit, selectedExitLesson));
    });
  }

  if (quizList) {
    const entries = students.flatMap((student) => Object.keys(LESSON_LABELS).flatMap((lessonKey) => {
      const result = student.quizResults?.[lessonKey];
      return isQuizSubmitted(result) ? [{ student, lessonKey, result }] : [];
    })).sort((a, b) => b.result.submittedAt.localeCompare(a.result.submittedAt));
    quizList.innerHTML = entries.length ? entries.map(({ student, lessonKey, result }) => `
      <tr>
        <td>${escapeHTML(student.name || 'Unnamed demo student')}</td>
        <td>${LESSON_LABELS[lessonKey]}</td>
        <td>${result.score}/10</td>
        <td>${escapeHTML(formatDateTime(result.submittedAt))}</td>
        <td>Submitted</td>
        <td><button class="secondary-btn small-btn" type="button" data-review-quiz="${escapeHTML(student.id)}" data-lesson="${lessonKey}">Review</button></td>
      </tr>
    `).join('') : '<tr><td colspan="6" class="muted">No quiz results submitted yet.</td></tr>';
    quizList.querySelectorAll('[data-review-quiz]').forEach((button) => {
      button.addEventListener('click', () => renderQuizReview(button.dataset.reviewQuiz, button.dataset.lesson));
    });
  }

  if (fieldworkList) {
    const entries = students.filter((student) => isFieldworkSubmitted(student.fieldworkReflection))
      .sort((a, b) => b.fieldworkReflection.submittedAt.localeCompare(a.fieldworkReflection.submittedAt));
    fieldworkList.innerHTML = entries.map((student) => {
      const reflection = student.fieldworkReflection;
      return `
        <tr>
          <td>${escapeHTML(student.name || 'Unnamed demo student')}</td>
          <td>${escapeHTML(formatDateTime(reflection.submittedAt))}</td>
          <td>${reflection.reviewed ? 'Reviewed' : 'Submitted'}</td>
          <td>${escapeHTML(reflection.idea.length > 100 ? `${reflection.idea.slice(0, 97)}…` : reflection.idea)}</td>
          <td><button class="secondary-btn small-btn" type="button" data-review-fieldwork="${escapeHTML(student.id)}">Review</button></td>
        </tr>
      `;
    }).join('');
    if (fieldworkEmpty) fieldworkEmpty.hidden = entries.length > 0;
    fieldworkList.querySelectorAll('[data-review-fieldwork]').forEach((button) => {
      button.addEventListener('click', () => renderFieldworkReview(button.dataset.reviewFieldwork));
    });
  }
}

function bindExitFilters() {
  document.querySelectorAll('[data-exit-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      selectedExitLesson = button.dataset.exitFilter;
      document.querySelectorAll('[data-exit-filter]').forEach((filter) => filter.classList.toggle('active', filter === button));
      const panel = document.getElementById('exit-review-panel');
      if (panel) panel.hidden = true;
      renderSubmissionTables();
    });
  });
}

function bindDemoReset() {
  document.getElementById('reset-demo-progress')?.addEventListener('click', () => {
    const confirmed = window.confirm('Reset this site’s demonstration profiles, quizzes, drafts, exit tickets, fieldwork reflections and teacher feedback stored in this browser? Older archived data and unrelated browser data will be preserved.');
    if (!confirmed) return;

    const freshStudent = createStudent();
    const store = { version: 2, activeStudentId: freshStudent.id, students: { [freshStudent.id]: freshStudent } };
    saveStore(store);
    document.querySelectorAll('[id^="quiz-lesson"]').forEach((shell) => { shell.innerHTML = ''; });
    document.querySelectorAll('[data-exit-submit][data-mode="submit"]').forEach((button) => { button.textContent = 'Submit'; });
    document.querySelectorAll('[data-exit-submit][data-mode="draft"]').forEach((button) => { button.textContent = 'Save draft'; });
    ['exit-review-panel', 'quiz-review-panel', 'fieldwork-reflection-detail'].forEach((id) => {
      const panel = document.getElementById(id);
      if (panel) {
        panel.hidden = true;
        panel.innerHTML = '';
      }
    });
    document.getElementById('demo-reset-status').textContent = 'Demo profiles and progress reset for this browser.';
    restoreStudentForms();
    updateProgressDisplay();
    renderSubmissionTables();
  });
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

function bindSubmissionTabs() {
  document.querySelectorAll('.submission-tab').forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.submissionTab;
      if (!target) return;
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
  restoreStudentForms();
  bindStudentIdentity();
  bindStudentNameKey();
  bindPortalNavigation();
  bindQuizButtons();
  bindExitTickets();
  bindFieldworkSubmission();
  bindExitFilters();
  bindDemoReset();
  bindSubmissionTabs();
  handleLessonGame();
  handleOpinionResponse();
  handleStakeholderChoice();
  renderSubmissionTables();
  updateProgressDisplay();
  const legacyNote = document.getElementById('legacy-storage-note');
  if (legacyNote && localStorage.getItem(LEGACY_STORAGE_KEY)) {
    legacyNote.textContent = 'Previous demo data is preserved separately and excluded from current progress because it has no reliable student identity.';
    legacyNote.hidden = false;
  }
  showSection('dashboard');
}

init();
