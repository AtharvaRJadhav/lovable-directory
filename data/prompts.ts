export interface Prompt {
  id: string;
  title: string;
  description: string;
  category: "SaaS" | "Dashboard" | "E-commerce" | "Database" | "Portfolio" | "Social" | "Booking" | "Content" | "Productivity";
  tags: string[];
  code: string;
}

export const PROMPTS: Prompt[] = [
  {
    id: "saas-starter",
    title: "Ultimate SaaS Starter",
    description: "A multi-tenant SaaS dashboard with subscription management, usage analytics, and team governance.",
    category: "SaaS",
    tags: ["Supabase", "Stripe", "Shadcn", "Auth", "Billing"],
    code: `Build a full-stack SaaS application with a multi-tenant architecture. Use a root organization model with sub-accounts, role-based access control, and per-tenant data isolation. Implement authentication via Supabase Auth with email/password and social login options. Include a subscription system powered by Stripe, with trial periods, metered usage, and webhooks for invoice events. Provide a familiar admin dashboard built with Shadcn UI components, featuring a responsive top navigation, a left-hand sidebar, and a data-heavy analytics panel. Ensure Dark Mode is enabled by default with a seamless toggle, and enable user preferences persistence in Supabase. Include a settings page for billing, team members, and plan upgrades, plus an onboarding flow that guides new tenants through initial setup. Data models should cover users, tenants, roles, subscriptions, invoices, usage metrics, projects, and permissions. Implement server actions for CRUD operations, and enforce row-level security policies to protect tenant data. Include a responsive, accessible UI with form validations, skeleton loading states, and optimistic UI updates for a smooth UX. Provide exportable reports (CSV/Excel) and a lightweight, real-time activity feed per tenant.`
  },
  {
    id: "analytics-dashboard",
    title: "Advanced Analytics Dashboard",
    description: "A modular analytics dashboard with real-time charts, filters, and role-based views.",
    category: "Dashboard",
    tags: ["Shadcn", "Supabase", "Dark Mode", "Charts", "Realtime"],
    code: `Create a data visualization dashboard with multiple chart types (bar, line, pie, area) and real-time updates using Supabase real-time features. Build a modular layout with a customizable grid, resizable panels, and a persistent layout saved per user. Implement a global dark mode with theme tokens, and a toggle in the header. Include filters for date ranges, data sources, and user roles, plus a context-aware dashboard that adapts based on the selected project or department. Provide a secure data model with tables for events, metrics, and user preferences. Add an export function for charts and tabular data (CSV/PNG). Include accessibility features (keyboard navigation, ARIA labels) and skeleton states while loading. All components should be built with Shadcn UI primitives and Tailwind styling.`
  },
  {
    id: "marketplace-store",
    title: "Marketplace Storefront",
    description: "A full-featured e-commerce storefront with catalog, cart, checkout, and order management.",
    category: "E-commerce",
    tags: ["Supabase", "Stripe", "Shadcn", "Auth", "Dark Mode"],
    code: `Develop a full-stack e-commerce application with a browsable product catalog, product detail pages, and a cart. Integrate Supabase for product, user, and order data with strong data validation and optimistic UI. Implement authentication via Supabase Auth with email/password and social providers, and enforce secure access with RLS policies. Include a checkout flow powered by Stripe, supporting coupons, taxes, shipping methods, and order tracking. Create an admin panel for product management, inventory, pricing, and order fulfillment. Use Shadcn UI components to create a cohesive, responsive UI with a dark mode by default and a user preference store. Implement a product search, filtering (category, price, rating), and related products section. Include order confirmation emails via a transactional mail service and real-time order updates for the user.`
  },
  {
    id: "supabase-playground",
    title: "Supabase-First Database Playground",
    description: "A structured database-backed app illustrating complex schemas, relationships, and role-based access.",
    category: "Database",
    tags: ["Supabase", "Auth", "RLS", "PostgreSQL", "Shadcn"],
    code: `Design a database-backed app that demonstrates multi-table relationships, foreign keys, and row-level security. Include tables for users, profiles, teams, projects, tasks, comments, and audit logs. Implement authentication with Supabase Auth and create stored procedures or server-side functions to encapsulate business logic. Build a clean UI using Shadcn UI to manage data entries, with forms that enforce validation and real-time updates. Implement user roles (admin, editor, viewer) with policy-based access to various resources. Provide data seeding scripts and a tutorial onboarding flow describing typical workflows. Ensure the UI supports dark mode and responsive layouts.`
  },
  {
    id: "creator-portfolio",
    title: "Creator Portfolio & Blog",
    description: "Personal portfolio site with project gallery, blog, contact form, and CMS backend.",
    category: "Portfolio",
    tags: ["Shadcn", "Supabase", "Auth", "Dark Mode", "CMS"],
    code: `Build a personal portfolio site with a projects gallery, case studies, and a content/blog section. Use Supabase for user authentication and a lightweight CMS to create, edit, and publish blog posts and projects. Include a contact form with spam protection and automated email responses. Implement dark mode with a toggle and a responsive, grid-based layout using Shadcn UI. Provide support for markdown content rendering, embedded media, and tags/categories. Add a simple search across projects and posts, and implement client-side and server-side content fetching with loading skeletons. Include a downloadable resume and a portfolio RSS feed.`
  },
  {
    id: "social-feed",
    title: "Social Feed & Reactions",
    description: "A social feed with posts, comments, likes, follows, and real-time updates.",
    category: "Social",
    tags: ["Supabase", "Realtime", "Shadcn", "Auth", "Dark Mode"],
    code: `Create a social feed application with user profiles, posts, comments, reactions, and follow/unfollow capabilities. Authenticate users with Supabase Auth and apply RBAC so users can only modify their own posts and comments. Implement real-time updates for new posts and activity using Supabase real-time subscriptions. Use Shadcn UI to build a clean, card-based feed with a left sidebar for navigation and a top bar with search and notifications. Include a dark mode toggle, profile editing, image uploads, and a simple post composer with rich media support. Add local caching and optimistic UI for a snappy experience, plus pagination and infinite scrolling for the feed.`
  },
  {
    id: "booking-system",
    title: "Booking & Scheduling System",
    description: "Resource booking with calendar views, availability, and reminders.",
    category: "Booking",
    tags: ["Supabase", "Calendar", "Notifications", "Shadcn", "Auth"],
    code: `Implement a booking system for resources (rooms, equipment, services) with calendar views (month/week/day), drag-select availability, and conflict resolution. Authenticate users via Supabase Auth and enforce per-resource access policies. Create a booking engine that checks real-time availability, supports recurring bookings, and sends reminders via email/SMS. Build a dashboard for resource managers to approve or cancel bookings, view utilization metrics, and export schedules. Use Shadcn UI for a polished, accessible interface with Dark Mode, responsive layouts, and keyboard navigation. Include a fallback offline mode for viewing schedules and a robust audit trail of changes.`
  },
  {
    id: "content-studio",
    title: "Content Management Studio",
    description: "A blogging platform with rich media, SEO, and content scheduling.",
    category: "Content",
    tags: ["Supabase", "Auth", "Shadcn", "Dark Mode", "SEO"],
    code: `Design a content/blog studio with post creation, rich text editing, media uploads, tagging, and scheduled publishing. Implement user authentication with Supabase Auth and per-user ownership of posts. Include SEO metadata generation, slugification, and a content calendar view for scheduling. Build a public-facing blog with search and category filtering, and a backend CMS for drafting, approving, and publishing content. Use Shadcn UI components to craft a clean, accessible editor interface and a dark-mode-ready theme. Include post versioning, comments moderation, and analytics on post views.`
  },
  {
    id: "productivity-suite",
    title: "Kanban Productivity Suite",
    description: "A task management tool with Kanban boards, swimlanes, and workflow automation.",
    category: "Productivity",
    tags: ["Shadcn", "Supabase", "Auth", "Dark Mode", "Automation"],
    code: `Build a Kanban-based productivity app with boards, columns, and drag-and-drop tasks. Include swimlanes, task assignees, due dates, priorities, and labels. Integrate with Supabase for persistent data and real-time updates. Implement user authentication with Supabase Auth, RBAC for board owners and collaborators, and per-board access controls. Add workflow automation rules (e.g., move to next status when due date passes) and a dashboard showing workload, throughput, and cycle time. Ensure a responsive UI using Shadcn UI with Dark Mode by default and keyboard accessible interactions. Include local offline support for reading boards and caching changes for sync when online.`
  }
];

