
import React from 'react';

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM50 94C74.3005 94 94 74.3005 94 50C94 25.6995 74.3005 6 50 6C25.6995 6 6 25.6995 6 50C6 74.3005 25.6995 94 50 94Z"
        fill="currentColor"
      />
      <path
        d="M49.9999 28.3333V81.6667M49.9999 28.3333L49.9999 23.3333M49.9999 28.3333H78.3333L70.8333 46.6667H29.1666L21.6666 28.3333H49.9999Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M70.8333 46.6667L74.5833 66.6667H67.0833L70.8333 46.6667Z"
        fill="currentColor"
      />
      <path
        d="M29.1667 46.6667L25.4167 66.6667H32.9167L29.1667 46.6667Z"
        fill="currentColor"
      />
      <path
        d="M50 10L52.9367 18.9189L62.5833 20.3647L55.2917 27.4721L57.0633 37.0811L48.5 32.5L40.02 37.1667L41.7083 27.4721L34.4167 20.3647L44.0633 18.9189L50 10Z"
        fill="currentColor"
      />
      <path
        d="M18.3333 75C21.6666 70 24.1666 65 25.8333 60.8333C27.4166 56.8333 28.3333 52.5 28.3333 48.3333C28.3333 44.1667 27.5 40.8333 25.8333 37.5C24.1666 34.1667 21.6666 30.8333 18.3333 27.5M81.6667 75C78.3334 70 75.8334 65 74.1667 60.8333C72.5834 56.8333 71.6667 52.5 71.6667 48.3333C71.6667 44.1667 72.5001 40.8333 74.1667 37.5C75.8334 34.1667 78.3334 30.8333 81.6667 27.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
       <path
        d="M40 85C42.7614 85 45 82.7614 45 80C45 77.2386 42.7614 75 40 75C37.2386 75 35 77.2386 35 80C35 82.7614 37.2386 85 40 85Z"
        fill="currentColor"
      />
      <path
        d="M60 85C62.7614 85 65 82.7614 65 80C65 77.2386 62.7614 75 60 75C57.2386 75 55 77.2386 55 80C55 82.7614 57.2386 85 60 85Z"
        fill="currentColor"
      />
       <path
        d="M40 85C43.3333 88.3333 46.6667 90 50 90C53.3333 90 56.6667 88.3333 60 85"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LogoWithText({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
     <div className="flex items-center gap-2">
      <Logo className={className} {...props} />
      <span className="font-bold text-lg">E-Advocate</span>
    </div>
  );
}
