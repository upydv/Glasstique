const Footer = () => {
    const year = new Date().getFullYear();
  
    return (
      <div className="bg-dark text-sky-blue d-flex justify-content-center align-items-center" style={{ height: '60px' }}>
        <footer>{`Copyright ©Glasstique  ${year}`}</footer>
      </div>
    );
  };
  
  export default Footer;
  