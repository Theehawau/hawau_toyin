import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-200">
      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#141828] border border-amber-400/40 text-slate-100 text-xs font-medium shadow-2xl backdrop-blur-md">
        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
        <span>{message}</span>
      </div>
    </div>
  );
};
