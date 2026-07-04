export const LegalSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="border-t border-border py-8">
      <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
      <div className="space-y-4 text-muted-foreground leading-8">{children}</div>
    </section>
  );
};