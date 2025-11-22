"use client";

import { useEffect } from "react";

export default function ImageProtection() {
  useEffect(() => {
    // Disable right-click on images and image containers
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "IMG" ||
        target.closest("img") ||
        target.closest("[data-image-protected]")
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Disable drag and drop on images
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "IMG" ||
        target.closest("img") ||
        target.closest("[data-image-protected]")
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Disable image selection
    const handleSelectStart = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "IMG" ||
        target.closest("img") ||
        target.closest("[data-image-protected]")
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Disable keyboard shortcuts for saving images
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable Ctrl+S, Ctrl+Shift+S, Ctrl+U, F12 (DevTools)
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "s" || e.key === "S" || e.key === "u" || e.key === "U" || e.key === "i" || e.key === "I")
      ) {
        const target = e.target as HTMLElement;
        if (
          target.tagName === "IMG" ||
          document.querySelector("img:hover") ||
          document.querySelector("[data-image-protected]:hover")
        ) {
          e.preventDefault();
          return false;
        }
      }
      // Disable F12 and Ctrl+Shift+I (DevTools)
      if (e.key === "F12" || ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "I")) {
        e.preventDefault();
        return false;
      }
    };

    // Prevent image copying via clipboard
    const handleCopy = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "IMG" ||
        target.closest("img") ||
        target.closest("[data-image-protected]")
      ) {
        e.clipboardData?.setData("text/plain", "");
        e.preventDefault();
        return false;
      }
    };

    // Add event listeners
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("selectstart", handleSelectStart);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("copy", handleCopy);

    // Add CSS to prevent image selection and dragging
    const style = document.createElement("style");
    style.id = "image-protection-styles";
    style.textContent = `
      img, [data-image-protected] {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
        -webkit-user-drag: none !important;
        -khtml-user-drag: none !important;
        -moz-user-drag: none !important;
        -o-user-drag: none !important;
        user-drag: none !important;
        pointer-events: auto;
      }
      img::selection, [data-image-protected]::selection {
        background: transparent !important;
      }
      img::-moz-selection, [data-image-protected]::-moz-selection {
        background: transparent !important;
      }
      /* Prevent image inspection */
      img {
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: transparent;
      }
    `;
    
    // Only add style if it doesn't exist
    if (!document.getElementById("image-protection-styles")) {
      document.head.appendChild(style);
    }

    // Mark all image containers with data attribute
    const imageContainers = document.querySelectorAll("img, [class*='image'], [class*='Image']");
    imageContainers.forEach((container) => {
      if (container.tagName === "IMG") {
        container.setAttribute("data-image-protected", "true");
      } else {
        container.setAttribute("data-image-protected", "true");
      }
    });

    // Cleanup
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("copy", handleCopy);
      const styleElement = document.getElementById("image-protection-styles");
      if (styleElement) {
        document.head.removeChild(styleElement);
      }
    };
  }, []);

  return null;
}

