import { sampleProducts } from "../../data/sampleProducts";
export default function FeaturedItems(){

    return(
        <section className="featured">
            <div className="f-text">
            <h3>Popular Items</h3>
            <button>View all items</button>
            </div>
            <div className="f-items">
                {
                    sampleProducts.slice(0,3).map((sampleProduct)=>
                        (<div key={sampleProduct.id} className="f-card">
                        <img src={sampleProduct.image}/>
                        <h3>{sampleProduct.title}</h3>
                        <p>Rent: Kes {sampleProduct.price}</p>
                        <button className="rent-btn">See Details</button>
                        </div>
                        ))
                }
            </div>
        </section>
    )
}