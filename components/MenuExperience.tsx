"use client";

import { Search, Phone } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { MenuSection } from "@/data/menu";
import { site } from "@/data/site";

type MenuExperienceProps = {
  menuSections: MenuSection[];
  labels: {
    searchAria: string;
    searchPlaceholder: string;
    callToOrder: string;
    categoriesAria: string;
    digitalMenu: string;
    itemCount: string;
    popular: string;
    empty: string;
  };
};

export function MenuExperience({ menuSections, labels }: MenuExperienceProps) {
  const categories = menuSections.map((section) => section.category);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setActiveCategory(categories[0]);
    setQuery("");
  }, [categories[0]]);

  const activeSection = menuSections.find(
    (section) => section.category === activeCategory,
  );

  const filteredItems = useMemo(() => {
    const items = activeSection?.items ?? [];
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return items;
    }

    return items.filter((item) => {
      const searchable = `${item.name} ${item.description ?? ""}`.toLowerCase();
      return searchable.includes(normalizedQuery);
    });
  }, [activeSection, query]);

  return (
    <div className="menu-shell">
      <div className="menu-toolbar">
        <div className="menu-search">
          <Search aria-hidden="true" size={18} />
          <input
            aria-label={labels.searchAria}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={labels.searchPlaceholder}
            type="search"
          />
        </div>
        <div className="menu-actions">
          <a className="button button-gold" href={site.phoneHref}>
            <Phone aria-hidden="true" size={17} />
            {labels.callToOrder}
          </a>
        </div>
      </div>

      <div aria-label={labels.categoriesAria} className="menu-tabs" role="tablist">
        {categories.map((category) => (
          <button
            aria-selected={activeCategory === category}
            className="menu-tab"
            key={category}
            onClick={() => setActiveCategory(category)}
            role="tab"
            type="button"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menu-panel">
        <div className="menu-panel-header">
          <div>
            <p className="section-label">{labels.digitalMenu}</p>
            <h3>{activeSection?.category}</h3>
          </div>
          <span>
            {filteredItems.length} {labels.itemCount}
          </span>
        </div>

        {activeSection?.note ? <p className="menu-note">{activeSection.note}</p> : null}

        <div className="menu-list">
          {filteredItems.map((item) => (
            <article className="menu-item" key={`${activeSection?.category}-${item.name}`}>
              <div>
                <div className="menu-item-title">
                  <h4>{item.name}</h4>
                  {item.highlight ? <span>{labels.popular}</span> : null}
                </div>
                {item.description ? <p>{item.description}</p> : null}
              </div>
              <strong>{item.price}</strong>
            </article>
          ))}
          {filteredItems.length === 0 ? (
            <div className="menu-empty">{labels.empty}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
