

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section className="text-primary content-center">
            <div>{children}</div>
        </section>
    );
}