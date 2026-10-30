/* ===== Base ===== */
:root {
    --link: #1a5c9e;
    --link-hover: #0b3d73;
    --heading: #1a5c9e;
    --text: #222;
    --muted: #666;
    --border: #e3e3e3;
    --notice-bg: #eef1f4;
    --nav-h: 64px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; scroll-padding-top: calc(var(--nav-h) + 16px); }

body {
    background: #fff;
    color: var(--text);
    font-family: "Times New Roman", Times, Georgia, serif;
    font-size: 18px;
    line-height: 1.5;
}

a { color: var(--link); text-decoration: underline; }
a:hover { color: var(--link-hover); }

/* ===== Top navbar ===== */
.navbar {
    position: fixed;
    top: 0; left: 0; right: 0;
    height: var(--nav-h);
    background: #fff;
    border-bottom: 1px solid var(--border);
    z-index: 100;
    font-family: Arial, Helvetica, sans-serif;
}

.nav-inner {
    max-width: 1100px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 36px;
}

.nav-link {
    color: #222;
    text-decoration: none;
    font-size: 17px;
    padding: 6px 0;
}

.nav-link:hover { color: var(--link); }
.nav-link.active { font-weight: 700; color: #000; }

.nav-toggle {
    display: none;
    background: none;
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 18px;
    cursor: pointer;
    color: #222;
}

/* ===== Page layout ===== */
.page {
    max-width: 1100px;
    margin: 0 auto;
    padding: calc(var(--nav-h) + 40px) 20px 40px;
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 12px;
    align-items: start;
}

/* ===== Sidebar ===== */
.sidebar {
    position: sticky;
    top: calc(var(--nav-h) + 24px);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13.5px;
}

.avatar {
    width: 148px;
    height: 180px;
    object-fit: cover;
    object-position: top;
    display: block;
    border: 1px solid var(--border);
    padding: 4px;
    border-radius: 4px;
    background: #fff;
    margin: 0 0 14px 10px;
}

.name {
    font-size: 19px;
    font-weight: 700;
    color: var(--heading);
    line-height: 1.25;
    margin-left: 10px;
}

.role {
    margin: 10px 0 12px 10px;
    color: #111;
}

.side-links { list-style: none; }

.side-links li {
    display: flex;
    gap: 8px;
    align-items: flex-start;
    padding: 6px 10px;
    color: #111;
}

.side-links i { width: 16px; text-align: center; margin-top: 2px; }
.side-links a { color: #111; text-decoration: none; display: flex; gap: 8px; }
.side-links a:hover { color: var(--link); }

/* ===== Content ===== */
.content { min-width: 0; }

.content p { text-align: justify; margin-bottom: 16px; }

section { padding-bottom: 28px; }

.section-title {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 24px;
    font-weight: 700;
    color: var(--heading);
    padding-bottom: 8px;
    margin: 20px 0 16px;
    border-bottom: 1px solid var(--border);
}

#home > p:first-child { margin-top: 0; }

.notice {
    background: var(--notice-bg);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    border-radius: 8px;
    padding: 14px 18px;
    font-size: 16px;
    margin: 20px 0;
}

.content ul { padding-left: 40px; margin-bottom: 16px; }
.content li { margin-bottom: 8px; text-align: justify; }

.plain-list { list-style: disc; }
#contact .plain-list { list-style: none; padding-left: 0; }
#contact .plain-list i { color: var(--heading); width: 20px; }

/* Entries (education, experience, projects) */
.entry { margin-bottom: 26px; }

.entry-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 6px 16px;
}

.entry-head h3 { font-size: 20px; color: #111; }

.date { color: var(--muted); font-size: 16px; font-style: italic; }

.entry-org { color: var(--heading); font-weight: 600; margin: 2px 0 8px; }

.sub-head { font-weight: 700; margin-bottom: 6px !important; }

.badge {
    font-family: Arial, sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    background: var(--heading);
    color: #fff;
    padding: 2px 8px;
    border-radius: 3px;
    vertical-align: middle;
    margin-left: 6px;
}

.tags { color: var(--muted); font-style: italic; font-size: 16px; }

/* Footer */
.footer {
    margin-top: 10px;
    padding-top: 16px;
    border-top: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
    color: var(--muted);
    font-size: 15px;
}

/* ===== Responsive ===== */
@media (max-width: 860px) {
    body { font-size: 17px; }

    .nav-inner { justify-content: flex-end; padding: 0 16px; }
    .nav-toggle { display: block; }

    .nav-links {
        display: none;
        position: absolute;
        top: var(--nav-h);
        left: 0; right: 0;
        background: #fff;
        border-bottom: 1px solid var(--border);
        flex-direction: column;
        gap: 0;
        padding: 8px 20px;
    }
    .nav-links.open { display: flex; }
    .nav-links li { padding: 10px 0; border-bottom: 1px solid #f0f0f0; }
    .nav-links li:last-child { border-bottom: none; }

    .page { grid-template-columns: 1fr; gap: 24px; padding-top: calc(var(--nav-h) + 24px); }

    .sidebar { position: static; display: flex; flex-wrap: wrap; gap: 4px 20px; align-items: flex-start; }
    .sidebar .avatar { margin-left: 0; }
    .sidebar .name, .sidebar .role { margin-left: 0; }
    .side-links { flex-basis: 100%; }
    .side-links li { padding-left: 0; }

    .content ul { padding-left: 24px; }
}
