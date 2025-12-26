"use client";

import { useMemo, useState } from "react";
import { getAllPrompts, Prompt } from "./prompts";

export function usePrompts() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterTab, setFilterTab] = useState<'all' | 'popular' | 'official'>('all'); // NEW STATE

  // Get all prompts once
  const ALL_PROMPTS = useMemo(() => getAllPrompts(), []);

  // Filter prompts by category, search, and tab
  const filteredPrompts = useMemo(() => {
    return ALL_PROMPTS.filter((prompt) => {
      // 1. Category Filter
      const matchesCategory = 
        selectedCategory === 'All' || 
        prompt.category === selectedCategory || 
        (prompt.tags && prompt.tags.includes(selectedCategory));

      // 2. Search Filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        searchQuery === "" ||
        prompt.title.toLowerCase().includes(searchLower) ||
        prompt.description.toLowerCase().includes(searchLower);

      // 3. NEW: Tab Filter
      let matchesTab = true;
      if (filterTab === 'popular') matchesTab = !!prompt.popular;
      if (filterTab === 'official') matchesTab = !!prompt.official;

      return matchesCategory && matchesSearch && matchesTab;
    });
  }, [ALL_PROMPTS, selectedCategory, searchQuery, filterTab]);

  // New Logic: Calculate counts for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    
    ALL_PROMPTS.forEach(prompt => {
      // Count the main category
      if (prompt.category) {
        counts[prompt.category] = (counts[prompt.category] || 0) + 1;
      }
      // Optional: If you want to count tags as categories later
      if (prompt.tags && prompt.tags.length > 0) {
        prompt.tags.forEach(tag => {
          counts[tag] = (counts[tag] || 0) + 1;
        });
      }
    });
    
    // Also calculate 'All' count
    counts['All'] = ALL_PROMPTS.length;
    
    return counts;
  }, [ALL_PROMPTS]);

  // Get unique categories from prompts
  const categories = useMemo(() => {
    const uniqueCategories = new Set<string>(["All"]);
    ALL_PROMPTS.forEach(prompt => {
      if (prompt.category) {
        uniqueCategories.add(prompt.category);
      }
    });
    return Array.from(uniqueCategories).sort();
  }, [ALL_PROMPTS]);

  return {
    prompts: filteredPrompts,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categories,
    categoryCounts,
    filterTab,    // Export these
    setFilterTab  // so the UI can use them
  };
}

