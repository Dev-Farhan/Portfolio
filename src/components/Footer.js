import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="flex items-center justify-between py-8">
        <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
        <div>
          Build With ❤️ by&nbsp;<Link href="/">Dev-Farhan</Link>
        </div>
        <Link href="/">Say Hello👋</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
