# Admin Expansion

This folder is reserved for admin-only views and workflows.

Recommended next modules:

- `PromptManager.jsx` for CRUD over prompt codes.
- `CategoryManager.jsx` for category ordering and metadata.
- `UserEntitlements.jsx` for Stripe subscription status and feature access.
- `AuditLog.jsx` for admin changes.

Keep admin routes protected at the router/API layer before exposing live data.
