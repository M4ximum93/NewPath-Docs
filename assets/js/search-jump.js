(() => {
  const PARAM_NAME = "np-search";
  const SCROLL_OFFSET = 128;

  function getSearchInput() {
    return document.querySelector(
      '#search-input, input.search-input, input[type="search"], .search-input input'
    );
  }

  function getSearchValue() {
    const input = getSearchInput();
    return input && input.value ? input.value.trim() : "";
  }

  function isInternalUrl(href) {
    try {
      const url = new URL(href, window.location.href);
      return url.origin === window.location.origin;
    } catch {
      return false;
    }
  }

  function clickedInsideSearchResults(target) {
    return Boolean(
      target.closest(
        '#search-results, .search-results, .search-results-list, .search-result, .search-result-doc, .search-result-rel-url'
      )
    );
  }

  function addQueryToSearchResult(event) {
    const link = event.target.closest("a");

    if (!link || !isInternalUrl(link.href) || !clickedInsideSearchResults(event.target)) {
      return;
    }

    const query = getSearchValue();

    if (!query) {
      return;
    }

    const url = new URL(link.href, window.location.href);
    url.searchParams.set(PARAM_NAME, query);
    link.href = url.toString();
  }

  function normalize(value) {
    return value
      .toLocaleLowerCase("de-DE")
      .replace(/\s+/g, " ")
      .trim();
  }

  function getMainContent() {
    return document.querySelector(".main-content, #main-content, main") || document.body;
  }

  function findBestTarget(root, query) {
    const normalizedQuery = normalize(query);

    if (!normalizedQuery || normalizedQuery.length < 2) {
      return null;
    }

    const candidates = root.querySelectorAll(
      "h1, h2, h3, h4, summary, li, p, .np-card-title, .np-card-text, .np-rule-list li"
    );

    for (const element of candidates) {
      if (
        element.closest("script, style, nav, header, footer, .np-site-footer, .main-header, .np-back-to-top")
      ) {
        continue;
      }

      if (normalize(element.textContent || "").includes(normalizedQuery)) {
        return element;
      }
    }

    return null;
  }

  function highlightTarget(target, query) {
    target.classList.add("np-search-jump-target");

    const textNodes = [];
    const walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT);

    while (walker.nextNode()) {
      textNodes.push(walker.currentNode);
    }

    const normalizedQuery = query.toLocaleLowerCase("de-DE");

    for (const node of textNodes) {
      const text = node.textContent || "";
      const index = text.toLocaleLowerCase("de-DE").indexOf(normalizedQuery);

      if (index === -1) {
        continue;
      }

      const before = text.slice(0, index);
      const match = text.slice(index, index + query.length);
      const after = text.slice(index + query.length);

      const mark = document.createElement("mark");
      mark.className = "np-search-jump-highlight";
      mark.textContent = match;

      const fragment = document.createDocumentFragment();

      if (before) {
        fragment.appendChild(document.createTextNode(before));
      }

      fragment.appendChild(mark);

      if (after) {
        fragment.appendChild(document.createTextNode(after));
      }

      node.parentNode.replaceChild(fragment, node);
      break;
    }
  }

  function scrollToQueryTarget() {
    const params = new URLSearchParams(window.location.search);
    const query = params.get(PARAM_NAME);

    if (!query) {
      return;
    }

    const target = findBestTarget(getMainContent(), query);

    if (!target) {
      return;
    }

    window.setTimeout(() => {
      highlightTarget(target, query);

      const top = target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;

      window.scrollTo({
        top: Math.max(top, 0),
        behavior: "smooth"
      });
    }, 180);
  }

  document.addEventListener("click", addQueryToSearchResult, true);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scrollToQueryTarget);
  } else {
    scrollToQueryTarget();
  }
})();
