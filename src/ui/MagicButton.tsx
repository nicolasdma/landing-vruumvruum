import { useRef, useState } from "react";
import confetti from "canvas-confetti";

interface MagicButtonProps {
  title: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  handleClick?: () => void;
  otherClasses?: string;
}

const MagicButton = ({
  title,
  trailingIcon,
  leadingIcon,
  handleClick,
  otherClasses,
}: MagicButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [copied, setCopied] = useState(false);

  const handleClickWithEffects = async () => {
    if (copied) return;

    try {
      await navigator.clipboard.writeText("hello@vruumvruum.studio");
      setCopied(true);

      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2 + 40) / window.innerHeight; // 40px down offset

        confetti({
          particleCount: 80,
          spread: 60,
          origin: { x, y },
        });
      }

      if (handleClick) handleClick();
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <button
      ref={buttonRef}
      disabled={copied}
      onClick={handleClickWithEffects}
      className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium backdrop-blur-3xl gap-2 ${
          copied ? "text-green-400 cursor-default" : "text-white cursor-pointer"
        } ${otherClasses}`}
      >
        {leadingIcon}
        {copied ? "email copied" : title}
        {trailingIcon}
      </span>
    </button>
  );
};

export default MagicButton;
