import { useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import { useAuth } from "../../context/AuthContext";
import SavedPromptsDashboard from "./SavedPromptsDashboard";

export default function AuthSection() {
  const { isConfigured, loading, user, signIn, signOut, signUp } = useAuth();
  const [mode, setMode] = useState("sign-in");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("");
    setSubmitting(true);

    try {
      if (mode === "create-account") {
        await signUp({ email, password, fullName });
        setStatus("Account created. Check your email if confirmation is enabled in Supabase.");
      } else {
        await signIn({ email, password });
        setStatus("Signed in successfully.");
      }
    } catch (error) {
      setStatus(error.message || "Authentication failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleSignOut() {
    setStatus("");
    setSubmitting(true);

    try {
      await signOut();
      setStatus("Signed out successfully.");
    } catch (error) {
      setStatus(error.message || "Could not sign out.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="account" className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionHeader
          eyebrow="User Accounts"
          title="Create your CL360 dashboard."
          description="Sign in to save generated prompts, copy your best workflows later, and prepare for member-only prompt libraries and subscriptions."
        />

        <div className="glass-card rounded-lg p-5 sm:p-6">
          {!isConfigured ? (
            <div className="rounded-md border border-amber-300/25 bg-amber-300/10 p-4">
              <h3 className="text-lg font-black text-white">Supabase setup required</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to your local
                `.env.local` and Render environment variables to enable account creation
                and sign in.
              </p>
            </div>
          ) : loading ? (
            <div className="rounded-md border border-white/10 bg-black/25 p-4 text-sm text-slate-300">
              Loading account session...
            </div>
          ) : user ? (
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-clblue-300">
                Signed in
              </p>
              <h3 className="mt-2 text-2xl font-black text-white">
                Welcome back{user.user_metadata?.full_name ? `, ${user.user_metadata.full_name}` : ""}.
              </h3>
              <div className="mt-5 rounded-md border border-white/10 bg-black/25 p-4">
                <p className="text-sm font-semibold text-slate-400">Account email</p>
                <p className="mt-1 break-all text-base font-bold text-white">{user.email}</p>
                <p className="mt-4 text-sm font-semibold text-slate-400">User ID</p>
                <p className="mt-1 break-all text-xs text-slate-300">{user.id}</p>
              </div>
              <button
                type="button"
                onClick={handleSignOut}
                disabled={submitting}
                className="secondary-button mt-5 w-full"
              >
                {submitting ? "Signing out..." : "Sign Out"}
              </button>
              <SavedPromptsDashboard user={user} />
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-2 rounded-md border border-white/10 bg-black/25 p-1">
                {[
                  ["sign-in", "Sign In"],
                  ["create-account", "Create Account"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setMode(value)}
                    className={`min-h-10 rounded-md text-sm font-bold transition duration-300 ${
                      mode === value
                        ? "bg-clblue-500 text-white shadow-glow"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="mt-5 grid gap-4">
                {mode === "create-account" ? (
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-slate-200">Full name</span>
                    <input
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                      className="panel-input"
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </label>
                ) : null}

                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-slate-200">Email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="panel-input"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-slate-200">Password</span>
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="panel-input"
                    placeholder="Minimum 6 characters"
                    autoComplete={mode === "create-account" ? "new-password" : "current-password"}
                    minLength="6"
                    required
                  />
                </label>
              </div>

              <button type="submit" disabled={submitting} className="premium-button mt-5 w-full">
                {submitting
                  ? "Working..."
                  : mode === "create-account"
                    ? "Create CL360 Account"
                    : "Sign In"}
              </button>
            </form>
          )}

          {status ? (
            <p className="mt-4 rounded-md border border-white/10 bg-black/25 p-3 text-sm leading-6 text-slate-200">
              {status}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
