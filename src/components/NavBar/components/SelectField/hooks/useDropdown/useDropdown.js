import { useCallback, useState, useRef,  useEffect } from 'react';

const useDropdown = () => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const openDropdown = useCallback(() => setIsOpen(true), []);
  const closeDropdown = useCallback(()=> setIsOpen(false), []);
  const toggleDropdown = useCallback(() => setIsOpen((prevIsOpen) => !prevIsOpen), []);

  useEffect(() => {
    const onDocumentClick = (event) => {
      const clickTarget = event.target;

      const refElement = ref.current ;
      if (refElement && !refElement.contains(clickTarget)) {
        closeDropdown();
      }
    };

    document.addEventListener('click', onDocumentClick, true);

    return () => document.removeEventListener('click', onDocumentClick);
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
