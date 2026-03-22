
const chaiMap = {
  'chai-bg-blue': 'background-color: #3b82f6',
  'chai-bg-white': 'background-color: #ffffff',
  'chai-bg-blue-dark': 'background-color: #2563eb',

  'chai-p-8': 'padding: 32px',
  'chai-p-3': 'padding: 12px',
  'chai-py-3': 'padding-top: 12px; padding-bottom: 12px',
  'chai-px-4': 'padding-left: 16px; padding-right: 16px',
  'chai-mb-8': 'margin-bottom: 32px',
  'chai-mb-6': 'margin-bottom: 24px',
  'chai-mb-4': 'margin-bottom: 16px',
  'chai-mb-2': 'margin-bottom: 8px',
  'chai-mt-6': 'margin-top: 24px',

  'chai-w-full': 'width: 100%',
  'chai-max-w-sm': 'max-width: 24rem',
  'chai-min-h-screen': 'min-height: 90vh',
  'chai-flex': 'display: flex',
  'chai-items-center': 'align-items: center',
  'chai-justify-center': 'justify-content: center',

  'chai-text-2xl': 'font-size: 24px',
  'chai-text-base': 'font-size: 16px',
  'chai-text-sm': 'font-size: 14px',
  'chai-text-gray': 'color: #6b7280',
  'chai-text-white': 'color: #ffffff',
  'chai-text-blue': 'color: #3b82f6',
  'chai-font-bold': 'font-weight: 700',
  'chai-font-semibold': 'font-weight: 600',
  'chai-text-center': 'text-align: center',

  'chai-border': 'border: 1px solid #d1d5db',
  'chai-border-gray': 'border-color: #d1d5db',
  'chai-border-blue': 'border-color: #3b82f6',
  'chai-rounded': 'border-radius: 8px',

  'chai-outline-none': 'outline: none',
  'chai-transition': 'transition: all 0.2s',
  'chai-underline': 'text-decoration: underline',

  'chai-shadow': 'box-shadow: 0 1px 3px rgba(0,0,0,0.1)'
};


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[class*="chai-"]').forEach(element => {
    Object.entries(chaiMap).forEach(([className, style]) => {
      if (element.classList.contains(className)) {
        element.style.cssText += style + ';';
        element.classList.remove(className);
      }
    });
  });
});