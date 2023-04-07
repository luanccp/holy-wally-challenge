import React from "react";

import Link from "next/link";

const BackToHomeButton: React.FC = () => {
  return (
    <div style={{ marginBottom: 16 }}>
      <Link href="/">Back to home</Link>
    </div>
  );
};

export default BackToHomeButton;
