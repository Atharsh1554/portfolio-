/**
 * ==============================================================================
 * ATHARSH S — INTERACTIVE PORTFOLIO ENGINE (script.js)
 * Architecture: Data-driven rendering, theme switcher, document viewer modal,
 * scrollspy navigation, interactive filters, search, and form handling.
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Grab central data store
  const data = window.PORTFOLIO_DATA || {};

  // Global state
  let currentZoom = 1;
  let currentFilter = 'all';
  let certSearchQuery = '';
  let certSortMode = 'newest';

  /* ==========================================================================
     1. THEME CONTROLLER (Dark / Light) with Persistence
     ========================================================================== */
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  const getSavedTheme = () => {
    const saved = localStorage.getItem('atharsh_theme_pref');
    if (saved) return saved;
    return prefersDarkScheme.matches ? 'dark' : 'dark'; // Dark default for developer aesthetic
  };

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('atharsh_theme_pref', theme);
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = theme === 'light' 
        ? '<i class="fas fa-moon"></i>' 
        : '<i class="fas fa-sun"></i>';
      themeToggleBtn.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'dark' : 'light'} theme`);
    }
  };

  // Init theme
  applyTheme(getSavedTheme());

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      showToast(`Switched to ${nextTheme} theme`);
    });
  }

  /* ==========================================================================
     2. NAVIGATION & MOBILE DRAWER
     ========================================================================== */
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navOverlay = document.getElementById('nav-overlay');
  const navLinks = document.querySelectorAll('.nav-link');
  const header = document.querySelector('.site-header');

  const closeNav = () => {
    navMenu?.classList.remove('active');
    navOverlay?.classList.remove('active');
    if (hamburgerBtn) {
      hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
  };

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');
      navOverlay?.classList.toggle('active', isOpen);
      hamburgerBtn.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close on nav link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          closeNav();
        }
      });
    });
  }

  // Close menu when clicking overlay
  navOverlay?.addEventListener('click', closeNav);

  // Header scroll shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // ScrollSpy Active Link Tracking
  const sections = document.querySelectorAll('section[id]');
  const observeScrollSpy = () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (targetNavLink) targetNavLink.classList.add('active');
      }
    });
  };
  window.addEventListener('scroll', observeScrollSpy);

  /* ==========================================================================
     3. HERO SECTION ROLE TYPING EFFECT
     ========================================================================== */
  const typingRoleEl = document.getElementById('hero-typing-role');
  if (typingRoleEl && data.personal && data.personal.roles) {
    const roles = data.personal.roles;
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeLoop() {
      const currentRole = roles[roleIdx];
      if (isDeleting) {
        typingRoleEl.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
        typingSpeed = 50;
      } else {
        typingRoleEl.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
        typingSpeed = 110;
      }

      if (!isDeleting && charIdx === currentRole.length) {
        // Pause at full word
        isDeleting = true;
        typingSpeed = 2200;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        typingSpeed = 400;
      }

      setTimeout(typeLoop, typingSpeed);
    }
    typeLoop();
  }

  /* ==========================================================================
     4. RENDER EDUCATION RECORDS (PHASE 4)
     ========================================================================== */
  const eduContainer = document.getElementById('education-cards-container');
  if (eduContainer && data.academics && data.academics.educationHistory) {
    eduContainer.innerHTML = data.academics.educationHistory.map(item => `
      <div class="edu-card">
        <div class="edu-card-top">
          <span class="edu-level-badge">${item.level}</span>
          <span class="edu-duration"><i class="far fa-calendar-alt"></i> ${item.duration || item.yearOfCompletion}</span>
        </div>
        <h3>${item.qualification}</h3>
        <p class="edu-institution"><i class="fas fa-university"></i> ${item.institution} ${item.board ? `(${item.board})` : ''}</p>
        <div class="edu-meta-row">
          <span class="edu-grade-pill">${item.grade || 'First Class'}</span>
          <span><i class="fas fa-map-marker-alt"></i> ${item.location || 'India'}</span>
        </div>
        <p style="font-size:0.88rem; color:var(--text-secondary);">${item.highlights}</p>
        <div class="edu-card-actions">
          <button class="btn btn-secondary btn-sm" onclick="openDocModal('${item.qualification}', '${item.marksheetUrl}', 'Marksheet / Credential', ${item.hasDocument})">
            <i class="far fa-file-alt"></i> View Record
          </button>
          <a href="${item.marksheetUrl || '#'}" download class="btn btn-outline btn-sm ${!item.hasDocument ? 'doc-pending-trigger' : ''}" data-doc-title="${item.qualification}">
            <i class="fas fa-download"></i> Download
          </a>
        </div>
      </div>
    `).join('');
  }

  /* ==========================================================================
     5. RENDER ACADEMIC RECORDS & SEMESTER DASHBOARD (PHASE 5)
     ========================================================================== */
  if (data.academics) {
    const cgpaNumEl = document.querySelector('.cgpa-big-number');
    const cgpaRingEl = document.querySelector('.cgpa-ring-outer');
    const metaStatVals = document.querySelectorAll('.cgpa-meta-stats .meta-stat-value');

    if (cgpaNumEl && data.academics.cumulativeCGPA) {
      cgpaNumEl.textContent = data.academics.cumulativeCGPA;
    }
    if (cgpaRingEl && data.academics.cumulativeCGPA) {
      const cgpaFloat = parseFloat(data.academics.cumulativeCGPA) || 0;
      const cgpaScale = parseFloat(data.academics.cgpaScale) || 10.0;
      const pct = Math.min(Math.max((cgpaFloat / cgpaScale) * 100, 0), 100);
      cgpaRingEl.style.background = `conic-gradient(var(--accent-cyan) 0% ${pct}%, rgba(255, 255, 255, 0.08) ${pct}% 100%)`;
    }
    if (metaStatVals && metaStatVals.length >= 3) {
      if (data.academics.latestCompletedSemester) {
        metaStatVals[0].textContent = data.academics.latestCompletedSemester;
      }
      if (data.academics.completedSemestersCount !== undefined) {
        metaStatVals[1].textContent = `${data.academics.completedSemestersCount} / ${data.academics.totalSemestersCount || 8}`;
      }
      if (data.academics.expectedGraduation) {
        metaStatVals[2].textContent = data.academics.expectedGraduation;
      }
    }
  }

  const semGridContainer = document.getElementById('semester-cards-grid');
  if (semGridContainer && data.academics && data.academics.semesters) {
    semGridContainer.innerHTML = data.academics.semesters.map(sem => {
      const isCompleted = sem.status.toLowerCase().includes('completed');
      return `
        <div class="semester-card">
          <div class="semester-card-header">
            <span class="semester-num-badge">${sem.title}</span>
            <span class="sem-status-badge ${isCompleted ? 'status-completed' : 'status-progress'}">
              <i class="fas ${isCompleted ? 'fa-check-circle' : 'fa-hourglass-half'}"></i> ${sem.status}
            </span>
          </div>
          <p style="font-size:0.82rem; color:var(--text-tertiary); margin-bottom:0.8rem;">
            <i class="far fa-calendar-alt"></i> Academic Year: ${sem.academicYear}
          </p>
          <div class="sem-scores-row">
            <div class="sem-score-box">
              <span class="label">SGPA</span>
              <span class="value">${sem.sgpa}</span>
            </div>
            <div class="sem-score-box">
              <span class="label">Cumulative CGPA</span>
              <span class="value">${sem.cgpa}</span>
            </div>
          </div>
          <div class="sem-subjects-summary">
            <strong>Core Coursework:</strong>
            <ul class="sem-subjects-list">
              ${(sem.subjects || []).map(s => `<li><i class="fas fa-angle-right"></i> ${s}</li>`).join('')}
            </ul>
          </div>
          <div class="sem-card-actions">
            ${isCompleted ? `
              <button class="btn btn-secondary btn-sm" onclick="openDocModal('${sem.title} Marksheet', '${sem.marksheetUrl}', 'Semester Result', ${sem.hasDocument})">
                <i class="far fa-eye"></i> View
              </button>
              <a href="${sem.marksheetUrl || '#'}" download class="btn btn-outline btn-sm ${!sem.hasDocument ? 'doc-pending-trigger' : ''}" data-doc-title="${sem.title} Marksheet">
                <i class="fas fa-download"></i> Download
              </a>
            ` : `
              <span style="font-size:0.85rem; color:var(--text-tertiary); font-style:italic;">Results pending evaluation</span>
            `}
          </div>
        </div>
      `;
    }).join('');
  }

  /* ==========================================================================
     6. CERTIFICATIONS FILTERING, SEARCH & SORT (PHASE 6)
     ========================================================================== */
  const certsGrid = document.getElementById('certifications-grid');
  const certSearchInput = document.getElementById('cert-search-input');
  const certFilterPills = document.querySelectorAll('.cert-filter-pill');
  const certSortSelect = document.getElementById('cert-sort-select');

  function renderCertifications() {
    if (!certsGrid || !data.certifications) return;

    let certs = [...data.certifications];

    // Filter by category
    if (currentFilter !== 'all') {
      certs = certs.filter(c => c.category === currentFilter);
    }

    // Filter by search query
    if (certSearchQuery.trim() !== '') {
      const q = certSearchQuery.toLowerCase();
      certs = certs.filter(c => 
        c.title.toLowerCase().includes(q) ||
        c.issuer.toLowerCase().includes(q) ||
        (c.skills && c.skills.some(s => s.toLowerCase().includes(q))) ||
        (c.categoryLabel && c.categoryLabel.toLowerCase().includes(q))
      );
    }

    // Sort
    if (certSortMode === 'title') {
      certs.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      // Newest first by default
      certs.sort((a, b) => (b.issueDate || '').localeCompare(a.issueDate || ''));
    }

    if (certs.length === 0) {
      certsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--surface-card); border-radius: var(--radius-md);">
          <i class="fas fa-search" style="font-size: 2rem; color: var(--text-tertiary); margin-bottom: 1rem;"></i>
          <p style="color: var(--text-secondary); font-size: 1.1rem;">No certifications found matching "<strong>${certSearchQuery}</strong>"</p>
          <button class="btn btn-secondary btn-sm" style="margin-top: 1rem;" onclick="clearCertFilters()">Reset Filters</button>
        </div>
      `;
      return;
    }

    certsGrid.innerHTML = certs.map(c => `
      <div class="cert-card">
        <div class="cert-card-header">
          <div class="cert-icon-wrap">
            <i class="fas ${c.issuerLogoIcon || 'fa-certificate'}"></i>
          </div>
          <div class="cert-title-wrap">
            <h3>${c.title}</h3>
            <p class="cert-issuer">${c.issuer}</p>
          </div>
        </div>
        <div class="cert-meta-tags">
          <span class="cert-cat-badge">${c.categoryLabel || c.category}</span>
          <span class="cert-date-badge"><i class="far fa-calendar-alt"></i> Issued: ${c.issueDate}</span>
        </div>
        <p class="cert-desc">${c.description || ''}</p>
        <div class="cert-skills-chips">
          ${(c.skills || []).map(sk => `<span class="skill-chip">${sk}</span>`).join('')}
        </div>
        <div class="cert-card-footer">
          <button class="btn btn-secondary btn-sm" onclick="openDocModal('${c.title}', '${c.documentUrl}', 'Official Certificate', ${c.hasDocument})">
            <i class="far fa-file-pdf"></i> View
          </button>
          ${c.verificationUrl ? `
            <a href="${c.verificationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
              <i class="fas fa-check-circle"></i> Verify
            </a>
          ` : `
            <a href="${c.documentUrl || '#'}" download class="btn btn-outline btn-sm ${!c.hasDocument ? 'doc-pending-trigger' : ''}" data-doc-title="${c.title}">
              <i class="fas fa-download"></i> Download
            </a>
          `}
        </div>
      </div>
    `).join('');
  }

  window.clearCertFilters = function() {
    currentFilter = 'all';
    certSearchQuery = '';
    if (certSearchInput) certSearchInput.value = '';
    certFilterPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-filter') === 'all'));
    renderCertifications();
  };

  if (certSearchInput) {
    certSearchInput.addEventListener('input', (e) => {
      certSearchQuery = e.target.value;
      renderCertifications();
    });
  }

  certFilterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      certFilterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentFilter = pill.getAttribute('data-filter');
      renderCertifications();
    });
  });

  if (certSortSelect) {
    certSortSelect.addEventListener('change', (e) => {
      certSortMode = e.target.value;
      renderCertifications();
    });
  }

  renderCertifications();

  /* ==========================================================================
     7. EXPERIENCE & TRAINING TIMELINE (PHASE 7)
     ========================================================================== */
  const expContainer = document.getElementById('experience-timeline-container');
  if (expContainer && data.experience) {
    expContainer.innerHTML = data.experience.map(exp => `
      <div class="timeline-item-v">
        <div class="timeline-bullet-v"></div>
        <div class="timeline-content-v">
          <div class="timeline-top-row">
            <h3>${exp.role}</h3>
            <span class="timeline-date-tag">${exp.duration}</span>
          </div>
          <div class="timeline-org">
            <i class="fas fa-building"></i> ${exp.organization} &bull; <span style="font-size:0.85rem; color:var(--text-tertiary);">${exp.typeBadge}</span>
          </div>
          <p class="timeline-desc">${exp.description}</p>
          <div class="timeline-tags-row">
            ${(exp.technologies || []).map(t => `<span class="project-tech-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  /* ==========================================================================
     8. PROJECTS SHOWCASE (PHASE 8)
     ========================================================================== */
  const projectsGrid = document.getElementById('projects-grid');
  const projectFilterPills = document.querySelectorAll('.proj-filter-pill');
  let currentProjCategory = 'all';

  function renderProjects() {
    if (!projectsGrid || !data.projects) return;

    let projs = [...data.projects];
    if (currentProjCategory !== 'all') {
      projs = projs.filter(p => p.category === currentProjCategory);
    }

    projectsGrid.innerHTML = projs.map(p => `
      <div class="project-card-interactive" data-project-id="${p.id}">
        <div class="project-thumb-wrap">
          <img src="${p.image || 'assets/images/proj_portfolio.svg'}" alt="${p.name} Preview" loading="lazy">
          ${p.featured ? `<span class="project-featured-badge"><i class="fas fa-star"></i> Featured</span>` : ''}
        </div>
        <div class="project-body">
          <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:1px; color:var(--accent-violet-light); font-weight:700; margin-bottom:0.3rem;">
            ${p.categoryLabel}
          </span>
          <h3>${p.name}</h3>
          <p class="project-tagline">${p.tagline}</p>
          <p class="project-problem"><strong>Problem Solved:</strong> ${p.problemSolved}</p>
          <div class="project-tech-tags">
            ${(p.techStack || []).map(tech => `<span class="project-tech-tag">${tech}</span>`).join('')}
          </div>
          <div class="project-footer-actions">
            <button class="btn btn-secondary btn-sm" onclick="openProjectModal('${p.id}')">
              <i class="fas fa-info-circle"></i> Details
            </button>
            <div style="display:flex; gap:0.5rem;">
              <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                <i class="fab fa-github"></i> Code
              </a>
              ${p.liveDemoUrl ? `
                <a href="${p.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                  <i class="fas fa-external-link-alt"></i> Live
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  projectFilterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      projectFilterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentProjCategory = pill.getAttribute('data-category');
      renderProjects();
    });
  });

  renderProjects();

  /* ==========================================================================
     9. TECHNICAL SKILLS RENDERING (PHASE 9)
     ========================================================================== */
  const skillsGrid = document.getElementById('skills-categories-grid');
  if (skillsGrid && data.skills) {
    const categoryConfigs = [
      { key: 'programmingLanguages', title: 'Programming Languages', icon: 'fa-code' },
      { key: 'frontendDevelopment', title: 'Frontend Development', icon: 'fa-laptop-code' },
      { key: 'backendDevelopment', title: 'Backend Development', icon: 'fa-server' },
      { key: 'databases', altKey: 'databasesAndData', title: 'Databases & Storage', icon: 'fa-database' },
      { key: 'cloudAndDevOps', title: 'Cloud Computing & DevOps', icon: 'fa-cloud' },
      { key: 'developerTools', title: 'Development Tools & Testing', icon: 'fa-tools' },
      { key: 'uiuxAndOther', title: 'UI/UX & Specialized Skills', icon: 'fa-palette' }
    ];

    skillsGrid.innerHTML = categoryConfigs.map(cat => {
      const list = data.skills[cat.key] || (cat.altKey ? data.skills[cat.altKey] : []) || [];
      if (!list || list.length === 0) return '';
      return `
        <div class="skills-category-card">
          <div class="skills-category-header">
            <div class="skills-cat-icon"><i class="fas ${cat.icon}"></i></div>
            <h3>${cat.title}</h3>
          </div>
          <div class="skills-chips-wrapper">
            ${list.map(s => `
              <div class="skill-row-badge">
                <div class="skill-info-left">
                  <i class="${s.icon || 'fas fa-check'}"></i>
                  <span class="skill-name">${s.name}</span>
                </div>
                <span class="skill-note-badge">${s.note || s.level || 'Competent'}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');
  }

  /* ==========================================================================
     10. ACHIEVEMENTS RENDERING (PHASE 10)
     ========================================================================== */
  const achievementsGrid = document.getElementById('achievements-grid');
  if (achievementsGrid && data.achievements) {
    achievementsGrid.innerHTML = data.achievements.map(ach => `
      <div class="achievement-card">
        <div class="achievement-icon">
          <i class="fas ${ach.icon || 'fa-award'}"></i>
        </div>
        <h3>${ach.title}</h3>
        <p class="achievement-issuer">${ach.issuer} &bull; ${ach.date}</p>
        <p class="achievement-desc">${ach.description}</p>
        ${ach.hasProof ? `
          <button class="btn btn-secondary btn-sm" style="margin-top:auto;" onclick="openDocModal('${ach.title}', '${ach.documentUrl}', 'Award / Credential', false)">
            <i class="far fa-eye"></i> View Verification
          </button>
        ` : ''}
      </div>
    `).join('');
  }

  /* ==========================================================================
     11. UNIVERSAL DOCUMENT VIEWER MODAL
     ========================================================================== */
  const docModalOverlay = document.getElementById('document-viewer-modal');
  const docModalTitle = document.getElementById('modal-doc-title');
  const docModalBadge = document.getElementById('modal-doc-badge');
  const docModalFrame = document.getElementById('modal-doc-frame-target');
  const docDownloadBtn = document.getElementById('modal-doc-download-btn');
  const docZoomInBtn = document.getElementById('modal-zoom-in-btn');
  const docZoomOutBtn = document.getElementById('modal-zoom-out-btn');
  const docZoomResetBtn = document.getElementById('modal-zoom-reset-btn');

  window.openDocModal = function(title, filePath, docType = 'Official Record', hasDoc = false) {
    if (!docModalOverlay) return;

    docModalTitle.textContent = title;
    docModalBadge.textContent = docType;
    currentZoom = 1;

    // Check if path is valid or exists
    if (!filePath || filePath === '#' || hasDoc === false) {
      // Show clean, professional pending upload guidance state
      docModalFrame.innerHTML = `
        <div class="doc-missing-card">
          <div class="doc-missing-icon"><i class="fas fa-file-invoice"></i></div>
          <h4>Official Document Pending Upload</h4>
          <p>
            This document record (<strong>${title}</strong>) is configured in your central data model. 
            To view the actual PDF or image directly here, simply save the file into your repository:
          </p>
          <div class="doc-path-badge">${filePath || 'assets/documents/filename.pdf'}</div>
          <br>
          <button class="btn btn-secondary btn-sm" onclick="copyFilePath('${filePath || 'assets/documents/filename.pdf'}')">
            <i class="fas fa-copy"></i> Copy Destination Path
          </button>
        </div>
      `;
      if (docDownloadBtn) {
        docDownloadBtn.style.display = 'none';
      }
    } else {
      const isImage = /\.(jpg|jpeg|png|webp|svg)$/i.test(filePath);
      if (isImage) {
        docModalFrame.innerHTML = `<img src="${filePath}" alt="${title}" id="modal-active-img">`;
      } else {
        docModalFrame.innerHTML = `<iframe src="${filePath}#view=FitH" title="${title}" id="modal-active-iframe"></iframe>`;
      }
      if (docDownloadBtn) {
        docDownloadBtn.style.display = 'inline-flex';
        docDownloadBtn.setAttribute('href', filePath);
        docDownloadBtn.setAttribute('download', filePath.split('/').pop() || 'document.pdf');
      }
    }

    docModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeDocModal = function() {
    if (!docModalOverlay) return;
    docModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    docModalFrame.innerHTML = '';
  };

  // Zoom handling
  if (docZoomInBtn) {
    docZoomInBtn.addEventListener('click', () => {
      currentZoom = Math.min(currentZoom + 0.2, 2.5);
      applyZoom();
    });
  }
  if (docZoomOutBtn) {
    docZoomOutBtn.addEventListener('click', () => {
      currentZoom = Math.max(currentZoom - 0.2, 0.6);
      applyZoom();
    });
  }
  if (docZoomResetBtn) {
    docZoomResetBtn.addEventListener('click', () => {
      currentZoom = 1;
      applyZoom();
    });
  }

  function applyZoom() {
    const target = docModalFrame.querySelector('img') || docModalFrame.querySelector('iframe');
    if (target) {
      target.style.transform = `scale(${currentZoom})`;
    }
  }

  /* ==========================================================================
     12. PROJECT DETAILS MODAL
     ========================================================================== */
  const projModalOverlay = document.getElementById('project-details-modal');
  const projModalContent = document.getElementById('project-details-modal-content');

  window.openProjectModal = function(projectId) {
    if (!projModalOverlay || !data.projects) return;
    const project = data.projects.find(p => p.id === projectId);
    if (!project) return;

    projModalContent.innerHTML = `
      <div style="margin-bottom:1.5rem;">
        <span class="project-featured-badge" style="position:static; display:inline-block; margin-bottom:0.5rem;">
          ${project.categoryLabel}
        </span>
        <h2 style="font-size:1.8rem; font-weight:800; color:var(--text-primary); margin-bottom:0.4rem;">${project.name}</h2>
        <p style="color:var(--accent-cyan-light); font-weight:600; font-size:1.05rem;">${project.tagline}</p>
      </div>

      <div style="background:rgba(255,255,255,0.03); border:1px solid var(--surface-card-border); border-radius:var(--radius-md); padding:1.2rem; margin-bottom:1.5rem;">
        <h4 style="font-size:0.95rem; color:var(--accent-cyan); text-transform:uppercase; letter-spacing:0.5px; margin-bottom:0.4rem;">Problem Solved</h4>
        <p style="color:var(--text-secondary); font-size:0.95rem; line-height:1.6;">${project.problemSolved}</p>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h4 style="font-size:1.1rem; font-weight:700; margin-bottom:0.6rem;">Architecture &amp; Features</h4>
        <p style="color:var(--text-secondary); font-size:0.95rem; line-height:1.7; margin-bottom:1rem;">${project.description}</p>
        <ul style="list-style:none; display:flex; flex-direction:column; gap:0.5rem;">
          ${(project.keyFeatures || []).map(f => `
            <li style="display:flex; align-items:flex-start; gap:0.6rem; font-size:0.92rem; color:var(--text-secondary);">
              <i class="fas fa-check-circle" style="color:var(--accent-cyan); margin-top:3px;"></i>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div style="margin-bottom:1.8rem;">
        <h4 style="font-size:0.95rem; font-weight:700; margin-bottom:0.6rem; color:var(--text-primary);">Technology Stack</h4>
        <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
          ${(project.techStack || []).map(t => `<span class="project-tech-tag" style="font-size:0.85rem; padding:0.35rem 0.8rem;">${t}</span>`).join('')}
        </div>
      </div>

      <div style="display:flex; gap:1rem; flex-wrap:wrap; padding-top:1.2rem; border-top:1px solid var(--surface-card-border);">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <i class="fab fa-github"></i> View GitHub Repository
        </a>
        ${project.liveDemoUrl ? `
          <a href="${project.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <i class="fas fa-external-link-alt"></i> Open Live Deployment
          </a>
        ` : ''}
      </div>
    `;

    projModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeProjectModal = function() {
    if (!projModalOverlay) return;
    projModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Keyboard and outside click close for both modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDocModal();
      closeProjectModal();
    }
  });

  [docModalOverlay, projModalOverlay].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeDocModal();
          closeProjectModal();
        }
      });
    }
  });

  // Handle clicks on pending document triggers
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.doc-pending-trigger');
    if (trigger) {
      e.preventDefault();
      const docTitle = trigger.getAttribute('data-doc-title') || 'Document';
      openDocModal(docTitle, trigger.getAttribute('href'), 'Official Document', false);
    }
  });

  /* ==========================================================================
     13. CONTACT FORM VALIDATION & MAILTO HANDLING (PHASE 11)
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value.trim();
      const email = document.getElementById('contact-email')?.value.trim();
      const subject = document.getElementById('contact-subject')?.value.trim() || 'Software Engineering / Opportunity Inquiry';
      const message = document.getElementById('contact-message')?.value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all required fields.', 'error');
        return;
      }

      // Email format sanity check
      if (!/\S+@\S+\.\S+/.test(email)) {
        showToast('Please enter a valid email address.', 'error');
        return;
      }

      // Prepare mailto link
      const encodedSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} - from ${name}`);
      const encodedBody = encodeURIComponent(`Hello Atharsh,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent from your portfolio website.`);
      
      const mailtoUrl = `mailto:${data.personal?.email || 'atharshrmd@gmail.com'}?subject=${encodedSubject}&body=${encodedBody}`;

      showToast('Opening your default email application...', 'success');

      // Trigger user's mail client
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 400);
    });
  }

  /* ==========================================================================
     14. COPY TO CLIPBOARD & TOAST UTILITIES
     ========================================================================== */
  window.copyText = function(text, label = 'Copied to clipboard!') {
    navigator.clipboard.writeText(text).then(() => {
      showToast(label, 'success');
    }).catch(() => {
      showToast('Failed to copy. Please select and copy manually.', 'error');
    });
  };

  window.copyFilePath = function(path) {
    copyText(path, `Copied path: ${path}`);
  };

  window.showToast = function(message, type = 'info') {
    let toast = document.getElementById('toast-notice');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-notice';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }

    const icon = type === 'error' ? 'fa-exclamation-triangle' : (type === 'success' ? 'fa-check-circle' : 'fa-info-circle');
    toast.innerHTML = `<i class="fas ${icon}" style="color:${type === 'error' ? 'var(--accent-rose)' : 'var(--accent-cyan)'};"></i> <span>${message}</span>`;
    
    toast.classList.add('show');
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  };
});
