const currentPage = window.location.pathname.split("/").pop() || "index.html";

const navStructure = [
  {
    label: "Services",
    href: "services.html",
    pages: [
      "services.html",
      "service-single.html",
      "crm-consulting.html",
      "ai-crm-automation.html",
      "crm-integration.html",
      "custom-crm-development.html",
      "crm-audit-support.html",
    ],
    items: [
      {
        href: "services.html",
        label: "Services Overview",
        description: "CRM consulting, AI automation, integrations, and custom CRM development.",
        icon: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
          </svg>
        `,
      },
      {
        href: "crm-consulting.html",
        label: "CRM Consulting",
        description: "Zoho CRM setup, customization, migration, training, and optimization.",
        icon: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        `,
      },
      {
        href: "ai-crm-automation.html",
        label: "AI CRM Automation",
        description: "AI-assisted workflows, lead qualification, follow-ups, email support, and Zia or AI agent setup.",
        icon: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2a4 4 0 0 1 4 4c0 1.6-1 3-2.5 3.5C14.8 11.4 16 13.5 16 16a4 4 0 0 1-8 0c0-2.5 1.2-4.6 3.5-6.5C10 9 9 7.6 9 6a4 4 0 0 1 4-4z"/>
            <path d="M12 22v-2"/>
            <path d="M12 8v2"/>
          </svg>
        `,
      },
      {
        href: "crm-integration.html",
        label: "CRM Integration",
        description: "Connect Zoho CRM with websites, eCommerce, accounting, payments, email, and third-party apps.",
        icon: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        `,
      },
      {
        href: "custom-crm-development.html",
        label: "Custom CRM Development",
        description: "Custom widgets, portals, dashboards, embedded CRM apps, and marketplace-ready extensions.",
        icon: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
        `,
      },
      {
        href: "crm-audit-support.html",
        label: "CRM Audit & Support",
        description: "CRM health checks, AI readiness audits, automation gap analysis, and managed CRM support.",
        icon: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        `,
      },
    ],
  },
  {
    label: "Extensions",
    href: "extensions.html",
    pages: [
      "extensions.html",
      "extension-single.html",
      "workdrive-zoho-crm.html",
      "sharepoint-zoho-crm.html",
      "google-address-toolkit.html",
      "easy-email-zoho-crm.html",
      "dropbox-zoho-crm.html",
      "onedrive-zoho-crm.html",
    ],
    items: [
      {
        href: "extensions.html",
        label: "Extensions Overview",
        description: "Zoho CRM extensions, widgets, integrations, and marketplace tools.",
        icon: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
          </svg>
        `,
      },
      {
        href: "workdrive-zoho-crm.html",
        label: "WorkDrive for Zoho CRM",
        description: "Manage, sync, preview, and organize WorkDrive files directly inside Zoho CRM.",
        icon: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
        `,
      },
      {
        href: "sharepoint-zoho-crm.html",
        label: "SharePoint for Zoho CRM",
        description: "Connect SharePoint document management with Zoho CRM records.",
        icon: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
          </svg>
        `,
      },
      {
        href: "google-address-toolkit.html",
        label: "Google Address Toolkit",
        description: "Improve address accuracy, autocomplete, and location-based CRM workflows.",
        icon: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="22" y1="12" x2="18" y2="12"/>
            <line x1="6" y1="12" x2="2" y2="12"/>
            <line x1="12" y1="6" x2="12" y2="2"/>
            <line x1="12" y1="22" x2="12" y2="18"/>
          </svg>
        `,
      },
      {
        href: "easy-email-zoho-crm.html",
        label: "Easy Email for Zoho CRM",
        description: "Manage CRM-related email activity with a faster, cleaner workflow.",
        icon: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        `,
      },
      {
        href: "dropbox-zoho-crm.html",
        label: "Dropbox for Zoho CRM",
        description: "Access and manage Dropbox files from inside Zoho CRM.",
        icon: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
            <line x1="12" y1="11" x2="12" y2="17"/>
            <line x1="9" y1="14" x2="15" y2="14"/>
          </svg>
        `,
      },
      {
        href: "onedrive-zoho-crm.html",
        label: "OneDrive for Zoho CRM",
        description: "Connect OneDrive files and folders with Zoho CRM records.",
        icon: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
            <circle cx="12" cy="13" r="4"/>
          </svg>
        `,
      },
    ],
  },
  {
    label: "Resources",
    href: "blog.html",
    pages: ["blog.html", "blog-single.html", "guides.html", "case-studies.html"],
    items: [
      {
        href: "blog.html",
        label: "Blog",
        description: "Practical guides on CRM consulting, Zoho automation, integrations, and AI workflows.",
        icon: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 13a2 2 0 0 1-2-2V7m2 13a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
          </svg>
        `,
      },
      {
        href: "case-studies.html",
        label: "Case Studies",
        description: "Real workflow improvements, CRM automation results, and operational efficiency examples.",
        icon: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
        `,
      },
      {
        href: "guides.html",
        label: "Guides",
        description: "Step-by-step CRM, automation, and integration resources for business teams.",
        icon: `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
          </svg>
        `,
      },
    ],
  },
];

const topLevelLinks = [
  { label: "Our Process", href: "process.html", pages: ["process.html"] },
  { label: "About", href: "about.html", pages: ["about.html"] },
  { label: "Contact", href: "contact.html", pages: ["contact.html"] },
];

function isCurrentPage(pages, href) {
  return pages.includes(currentPage) || href === currentPage;
}

function createMenuItem(item) {
  const current = item.href === currentPage ? ' aria-current="page"' : "";
  return `
    <a href="${item.href}"${current}>
      <div class="menu-icon" aria-hidden="true">
        ${item.icon}
      </div>
      <div>
        <strong>${item.label}</strong>
        <span>${item.description}</span>
      </div>
    </a>
  `;
}

function createNavGroup(group) {
  const current = isCurrentPage(group.pages, group.href) ? ' aria-current="page"' : "";
  const menu = group.items.map(createMenuItem).join("");
  return `
    <div class="nav-group">
      <a class="nav-trigger" href="${group.href}"${current}>${group.label}</a>
      <div class="nav-group-menu">
        ${menu}
      </div>
    </div>
  `;
}

function createTopLevelLink(link) {
  const current = isCurrentPage(link.pages, link.href) ? ' aria-current="page"' : "";
  return `<a href="${link.href}"${current}>${link.label}</a>`;
}

function renderSharedNavigation() {
  const navLinks = document.querySelector(".nav-links");
  if (!navLinks) {
    return;
  }

  const navMarkup = [
    ...navStructure.map(createNavGroup),
    ...topLevelLinks.map(createTopLevelLink),
    '<a class="button nav-project-button nav-cta-mobile" href="contact.html">Start a Project</a>',
  ].join("");

  navLinks.innerHTML = navMarkup;

  const desktopCta = document.querySelector(".nav-cta-desktop");
  if (desktopCta) {
    desktopCta.className = "button nav-project-button nav-cta-desktop";
    desktopCta.href = "contact.html";
    desktopCta.textContent = "Start a Project";
  }
}

renderSharedNavigation();

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const mobileBreakpoint = window.matchMedia("(max-width: 1024px)");

function closeAllNavGroups() {
  document.querySelectorAll(".nav-group.is-open").forEach((group) => {
    group.classList.remove("is-open");
  });
}

function setUpResponsiveDropdowns() {
  document.querySelectorAll(".nav-group").forEach((group) => {
    const trigger = group.querySelector(".nav-trigger");
    if (!trigger) {
      return;
    }

    trigger.addEventListener("click", (event) => {
      const isOpen = group.classList.contains("is-open");
      const clickedInsideOpenGroup = isOpen && !mobileBreakpoint.matches;

      if (!clickedInsideOpenGroup) {
        event.preventDefault();
        closeAllNavGroups();
        if (!isOpen) {
          group.classList.add("is-open");
        }
      }
    });
  });
}

setUpResponsiveDropdowns();

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    if (!isOpen) {
      closeAllNavGroups();
    }
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (link.classList.contains("nav-trigger")) {
        return;
      }

      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      closeAllNavGroups();
    });
  });
}

document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav-wrap")) {
    closeAllNavGroups();
  }
});

mobileBreakpoint.addEventListener("change", () => {
  closeAllNavGroups();
  if (!mobileBreakpoint.matches && navLinks) {
    navLinks.classList.remove("is-open");
  }
  if (navToggle) {
    navToggle.setAttribute("aria-expanded", "false");
  }
});

function setUpHomeHeaderTheme() {
  const homeHeader = document.querySelector("body.home-page .site-header");
  const homeHero = document.querySelector("body.home-page .home-hero");

  if (!homeHeader || !homeHero) {
    return;
  }

  const syncHeaderTheme = () => {
    const heroBottom = homeHero.getBoundingClientRect().bottom;
    const headerHeight = homeHeader.offsetHeight;
    const onLightSection = heroBottom <= headerHeight + 24;

    homeHeader.classList.toggle("header-on-light", onLightSection);
  };

  syncHeaderTheme();
  window.addEventListener("scroll", syncHeaderTheme, { passive: true });
  window.addEventListener("resize", syncHeaderTheme);
}

setUpHomeHeaderTheme();

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});
