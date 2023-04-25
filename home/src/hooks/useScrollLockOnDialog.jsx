import React from "react";

export function useScrollLockOnDialog() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  console.log  

  React.useEffect(() => {
    // if (isDialogOpen) {
    //   document.body.style.overflow = "hidden";
    // } else {
    //   document.body.style.overflow = "auto";
    // }
  }, [isDialogOpen]);

  return {
    isDialogOpen,
    setIsDialogOpen
  };
}