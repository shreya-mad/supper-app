const Chip = ({ color, id, setCategories, categories}) => {
    return (
      <div style={{ width: "260px",marginTop:'0px',height:'56px',overflowY:'auto',scrollbarWidth:'5px'}}>
        {categories.map((category) =>(
          <button
            style={{
              background: `${color}`,
              borderRadius: "8px",
              width: "50px",
              color: "white",
              border: "none",
              padding: "6px",
              height: "15px",
              flexShrink: 0,
              margin: "6px",
              fontSize:'9px',
              padding:'2px'
            }}
          >
            {category}
          </button>
        ))}
      </div>
    );
  };
  
  export default Chip;