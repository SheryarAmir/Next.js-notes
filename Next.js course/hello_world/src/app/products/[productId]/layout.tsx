
  export default function childLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
          {children}
          <h2>feature product in the RootLayout</h2>
      </>
    )}