
export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <h2>inner layout</h2>
            {children}
        </div>
    );
}
