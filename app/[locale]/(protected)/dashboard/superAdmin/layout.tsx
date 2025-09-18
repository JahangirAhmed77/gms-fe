import Layout from "../../layout"; 
import PageTitle from "@/components/page-title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Superadmin Panel - Helcon System",
  description: "Manage system-wide settings and users",
};

export default function SuperadminLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <PageTitle className="mb-6" title="Superadmin Panel" />
      {children}
    </Layout>
  );
}
