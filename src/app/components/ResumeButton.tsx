import { Button } from '@/components/ui/button';
import React from 'react';

function ResumeButton() {
  return (
    <a href="/Adrian_Podraza_cv.pdf" download className="fixed top-4 right-4 z-50 cursor-pointer">
      <Button className="cursor-pointer rounded-full bg-gradient-to-tr from-[#0026FF] to-[#C1A4FF] hover:opacity-80">
        Resume
      </Button>
    </a>
  );
}

export default ResumeButton;
