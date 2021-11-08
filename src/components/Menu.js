const Menu = ({ items }) => {
  return (<div>
<h2>{items.mealType}</h2>
<div>{items.meals.map((info, index)=>{
    return(
        <div>
            <p>{info.title}</p>
            <p>{info.description}</p>
            <p>{info.price}</p>
            <img src={info.picture} alt="meal" />
            {info.popular && <p>"Popular"</p>}
        </div>
    )
})
}</div>

</div>  );
};

export default Menu;
