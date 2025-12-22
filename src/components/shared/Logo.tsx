import { cn } from '@/lib/utils';
import { SITE_NAME } from '@/lib/constants';

const Logo = ({ className }: { className?: string }) => (
  <div className={cn('flex items-center gap-2', className)}>
    <svg
      width="138"
      height="44"
      viewBox="0 0 138 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-auto shrink-0"
    >
      <title>{SITE_NAME} Logo</title>
      <g clipPath="url(#clip0_1_2_final)">
        <path
          d="M74.832 4.144H52.416V13.888H68.864V17.824H52.416V27.568H68.864V31.504H52.416V41.248H74.832C84.304 41.248 91.792 34.016 91.792 22.696C91.792 11.376 84.304 4.144 74.832 4.144ZM70.432 31.504H68.864V27.568H70.432C73.328 27.568 75.632 25.408 75.632 22.696C75.632 19.984 73.328 17.824 70.432 17.824H68.864V13.888H70.432C73.328 13.888 75.632 11.728 75.632 8.96C75.632 6.256 73.328 4.144 70.432 4.144V31.504Z"
          fill="#111827"
        ></path>
        <path
          d="M107.136 4.336C101.216 4.336 96.608 8.656 96.608 14.8C96.608 20.832 100.288 24.848 106.32 26.128L112.576 27.408C113.856 27.664 114.736 28.816 114.736 30.096C114.736 31.488 113.6 32.64 112.16 32.64H104.464V39.872H112.16C117.824 39.872 122.544 35.664 122.544 29.84C122.544 23.808 118.864 19.792 112.832 18.512L106.576 17.232C105.296 16.976 104.416 15.824 104.416 14.544C104.416 13.152 105.552 12 106.992 12H114.688V4.336H107.136Z"
          fill="#111827"
        ></path>
        <path
          d M="M52.091 1.5H84.395C93.443 1.5 101.443 8.128 101.443 17.488V25.92C101.443 35.28 93.443 41.908 84.395 41.908H52.091C49.931 41.908 48.179 40.156 48.179 38V5.408C48.179 3.248 49.931 1.5 52.091 1.5ZM82.843 38.344C91.115 38.344 97.907 32.224 97.907 24.16V19.264C97.907 11.2 91.115 5.08 82.843 5.08H52.091V38.344H82.843Z"
          fill="#111827"
        ></path>
        <g style={{ mixBlendMode: 'multiply' }}>
          <circle cx="9.5" cy="34.5" r="9.5" fill="#F5D631" />
        </g>
        <g style={{ mixBlendMode: 'multiply' }}>
          <circle cx="24.5" cy="34.5" r="9.5" fill="#00AEEF" />
        </g>
        <g style={{ mixBlendMode: 'multiply' }}>
          <circle cx="39.5" cy="34.5" r="9.5" fill="#FF5A5F" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1_2_final">
          <rect width="138" height="44" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <span className="sr-only">{SITE_NAME}</span>
  </div>
);

export default Logo;
