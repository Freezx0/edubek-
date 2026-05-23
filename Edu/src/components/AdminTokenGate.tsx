import { useState, type FormEvent, type ReactNode } from "react";
import { getAdminToken, setAdminToken } from "../lib/adminApi";

export default function AdminTokenGate({ children }: { children: ReactNode }) {
  const [token, setToken] = useState(() => getAdminToken());
  const [input, setInput] = useState(token);
  const [error, setError] = useState<string | null>(null);
  if (token) return <>{children}</>;
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    const resp = await fetch("/api/admin/verify", { headers: { "X-Admin-Token": trimmed } });
    if (resp.status === 401) { setError("Invalid token (use campus-admin-dev)"); return; }
    setAdminToken(trimmed);
    setToken(trimmed);
  };
  return (
    <div className="isa-card p-6 space-y-3 max-w-md mx-auto">
      <h2 className="text-lg font-bold text-isa-navy">Admin token</h2>
      <p className="text-xs text-isa-muted">Default: campus-admin-dev (see .env ADMIN_TOKEN)</p>
      <form onSubmit={onSubmit} className="space-y-2">
        <input className="w-full p-3 border rounded-xl text-sm" type="password" value={input} onChange={(e) => setInput(e.target.value)} />
        {error && <p className="text-xs text-red-600">{error}</p>}
        <button type="submit" className="isa-btn-primary w-full py-2 text-sm">Continue</button>
      </form>
    </div>
  );
}