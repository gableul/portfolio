/* ============================================================
   app.js — thème (auto + manuel), i18n EN/FR, compteur d'âge live
   Chargé sur toutes les pages. Sans dépendance.
   ============================================================ */
(function () {
  "use strict";

  var root = document.documentElement;

  /* ---------- Thème : auto (prefers-color-scheme) + override ---------- */
  var savedTheme = null;
  try { savedTheme = localStorage.getItem("theme"); } catch (e) {}
  if (savedTheme === "light" || savedTheme === "dark") {
    root.setAttribute("data-theme", savedTheme);
  }

  function currentTheme() {
    var attr = root.getAttribute("data-theme");
    if (attr) return attr;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  window.toggleTheme = function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  };

  /* ---------- i18n EN / FR ---------- */
  // Dictionnaire : clés utilisées via data-i18n="key".
  // Ajoute/complète librement au fil de tes contenus.
  var I18N = {
    en: {
      "tagline": "Principal Software Engineer & Tech Lover",
      "nav.about": "about",
      "nav.work": "work",
      "nav.projects": "side projects",
      "nav.opensource": "open source",
      "nav.competitions": "competitions",
      "nav.research": "research",
      "nav.blog": "blog",
      "back.home": "Back to home",
      "back.projects": "Back to side projects",
      "back.research": "Back to research",
      "about.title": "About",
      "about.age": "age",
      "about.location": "location",
      "about.cv": "cv",
      "work.title": "Work",
      "work.sub": "Professional experience and roles",
      "projects.title": "Side Projects",
      "projects.sub": "Personal ventures and experiments",
      "competitions.title": "Competitions",
      "competitions.sub": "Hackathons, contests, and competitive programming achievements",
      "research.title": "Research",
      "research.sub": "Papers, protocols and deep technical write-ups",
      "team": "Team"
    },
    fr: {
      "tagline": "Ingénieur logiciel principal & passionné de tech",
      "nav.about": "à propos",
      "nav.work": "expérience",
      "nav.projects": "projets perso",
      "nav.opensource": "open source",
      "nav.competitions": "compétitions",
      "nav.research": "recherche",
      "nav.blog": "blog",
      "back.home": "Retour à l'accueil",
      "back.projects": "Retour aux projets",
      "back.research": "Retour à la recherche",
      "about.title": "À propos",
      "about.age": "âge",
      "about.location": "lieu",
      "about.cv": "cv",
      "work.title": "Expérience",
      "work.sub": "Parcours professionnel et rôles",
      "projects.title": "Projets perso",
      "projects.sub": "Aventures personnelles et expérimentations",
      "competitions.title": "Compétitions",
      "competitions.sub": "Hackathons, concours et programmation compétitive",
      "research.title": "Recherche",
      "research.sub": "Articles, protocoles et analyses techniques approfondies",
      "team": "Équipe"
    }
  };

  var savedLang = null;
  try { savedLang = localStorage.getItem("lang"); } catch (e) {}
  var lang = savedLang || (navigator.language || "en").slice(0, 2).toLowerCase();
  if (!I18N[lang]) lang = "en";

  function applyLang(l) {
    lang = I18N[l] ? l : "en";
    root.setAttribute("lang", lang);
    var dict = I18N[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    var lbl = document.querySelector("[data-lang-label]");
    if (lbl) lbl.textContent = lang.toUpperCase();
  }

  window.toggleLang = function () {
    var next = lang === "fr" ? "en" : "fr";
    try { localStorage.setItem("lang", next); } catch (e) {}
    applyLang(next);
  };

  /* ---------- Compteur d'âge live (about) ---------- */
  // Renseigne data-birth="AAAA-MM-JJ" sur l'élément #age.
  function tickAge() {
    var el = document.getElementById("age");
    if (!el) return;
    var birthStr = el.getAttribute("data-birth");
    if (!birthStr) return;
    var birth = new Date(birthStr + "T00:00:00");
    var now = new Date();
    var years = now.getFullYear() - birth.getFullYear();
    var anniv = new Date(birth); anniv.setFullYear(birth.getFullYear() + years);
    if (anniv > now) { years--; anniv.setFullYear(anniv.getFullYear() - 1); }
    var days = Math.floor((now - anniv) / 86400000);
    var startOfDay = new Date(anniv); startOfDay.setDate(startOfDay.getDate() + days);
    var secs = Math.floor((now - startOfDay) / 1000);
    el.textContent = years + "y " + days + "d " + secs.toLocaleString("en-US") + "s";
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    applyLang(lang);
    tickAge();
    setInterval(tickAge, 1000);
  });
})();
