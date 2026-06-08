# The Tailored Closet Business Intelligence Platform

Executive Business Intelligence & Operations Management Platform — MVP prototype built with Next.js, Tailwind CSS, and Recharts.

## Modules (MVP)

| Module | Route | Features |
|--------|-------|----------|
| Overview | `/overview` | Executive summary, KPI row, 12-month revenue trend, marketing/sales/team/project snapshots |
| Marketing | `/marketing` | ROI dashboard, scorecard, donut chart, conversion analysis, recommendations, health score |
| Sales | `/sales` | Funnel visualization, conversion analysis, lost opportunities, lead source performance, health score |
| Projects | `/projects` | Kanban board (8 stages), project cards, detail drawer, delayed projects, upcoming installations |
| Team | `/team` | Leaderboard, designer performance, capacity, coaching alerts, succession tracker, directory |
| Reports | `/reports` | Sales, Marketing, Project, Team reports with PDF/Excel/CSV export UI |
| Settings | `/settings` | Company profile, user management & roles, notification toggles |

## Design System

- **Style:** Warm Executive Residential
- **Colors:** Charcoal, Warm White, Soft Beige, Brass Gold
- **Fonts:** Playfair Display (headings), Inter (body)

## Run

```bash
pnpm install
pnpm run dev
```

Open: `http://localhost:3000/overview`

## Notes

- Mock data only — no backend or authentication
- Phase 2 items (ServiceMinder, QuickBooks, AI forecasting, etc.) are not included
- Built for client vision validation and executive demos
