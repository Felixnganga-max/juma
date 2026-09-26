import { X } from "lucide-react";

export default function LoginModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-charcoal/55 flex items-center justify-center p-5"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-8 w-full max-w-[380px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3.5 right-4 text-ink-soft hover:text-ink"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        <h3 className="text-lg font-serif mb-1">Client login</h3>
        <p className="text-ink-soft text-sm mb-5">
          View your project's full gallery and updates.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Login is a UI preview — hook this up to your backend.");
          }}
          className="flex flex-col gap-3"
        >
          <input
            type="email"
            placeholder="Email"
            required
            className="border border-ink/15 rounded-lg px-3.5 py-3 text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="border border-ink/15 rounded-lg px-3.5 py-3 text-sm"
          />
          <button
            type="submit"
            className="bg-bronze text-charcoal font-semibold text-sm py-3 rounded-lg hover:bg-bronze-dark transition-colors mt-1"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
