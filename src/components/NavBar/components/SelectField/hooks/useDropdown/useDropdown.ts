import { useCallback, useState, useRef, RefObject, useEffect } from 'react';

type TUseDropdownHook = {
  ref: RefObject<HTMLDivElement>;
  isOpen: boolean;
  openDropdown: () => void;
  closeDropdown: () => void;
  toggleDropdown: () => void;
};

const useDropdown = (): TUseDropdownHook => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const openDropdown = useCallback((): void => setIsOpen(true), []);
  const closeDropdown = useCallback((): void => setIsOpen(false), []);
  const toggleDropdown = useCallback((): void => setIsOpen((prevIsOpen) => !prevIsOpen), []);

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent): void => {
      const clickTarget = event.target as Node;

      const refElement = ref.current as HTMLElement | null;
      if (refElement && !refElement.contains(clickTarget)) {
        closeDropdown();
      }
    };

    document.addEventListener('click', onDocumentClick, true);

    return (): void => document.removeEventListener('click', onDocumentClick);
  }, [closeDropdown, ref]);

  return {
    ref,
    isOpen,
    openDropdown,
    closeDropdown,
    toggleDropdown,
  };
};

export default useDropdown;
