import type { ReactNode } from "react";

/** Plain long-form page for policies. Children are the policy sections. */
export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <article className="mx-auto max-w-[760px] px-6 py-[clamp(56px,8vw,112px)] [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-[20px] [&_h2]:font-bold [&_li]:mt-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mt-3 [&_table]:mt-4 [&_table]:w-full [&_table]:border-collapse [&_table]:text-[15px] [&_td]:border [&_td]:border-line [&_td]:p-2.5 [&_th]:border [&_th]:border-line [&_th]:bg-surface [&_th]:p-2.5 [&_th]:text-left [&_ul]:list-disc [&_ul]:pl-6">
      <h1 className="m-0 text-[clamp(30px,4vw,40px)] font-bold tracking-[-0.03em]">{title}</h1>
      <p className="text-[14px] text-muted">{updated}</p>
      {children}
    </article>
  );
}
