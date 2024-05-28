interface HeaderProps {
  styling: string;
}

function Header({ styling }: HeaderProps) {
  return (
    <>
      <h1 className={`${styling}-banner`}>DK's Portfolio</h1>
    </>
  );
}

export default Header;
