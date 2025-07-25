import React from "react";
import { CheckCircle2 } from "lucide-react";

const SuccessModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-opacity-40">
      <div className="bg-white border-slate-100 border rounded-xl shadow-2xl p-8 max-w-sm w-full animate-bounce-in">
        <div className="flex flex-col items-center">
          <CheckCircle2 className="w-16 h-16 text-green-500 animate-pop" />
          <h2 className="text-2xl font-bold mt-4 mb-2 text-center">Registration Successful!</h2>
          <p className="text-gray-600 text-center mb-6">
            Your account has been created.<br />Welcome to Xoup
          </p>
          <button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:scale-105 transition"
            onClick={onClose}
          >
            Continue
          </button>
        </div>
      </div>
      <style>{`
        @keyframes bounce-in {
          0% { transform: scale(0.7); opacity: 0; }
          60% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); }
        }
        .animate-bounce-in { animation: bounce-in 0.6s cubic-bezier(.68,-0.55,.27,1.55); }
        @keyframes pop {
          0% { transform: scale(0.5); opacity: 0; }
          80% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); }
        }
        .animate-pop { animation: pop 0.5s; }
      `}</style>
    </div>
  );
};

export default SuccessModal;