import FoodImage from './images/restauranfood 1.png';

export default function Main() {
    return (
        <main>
            <div className='title'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned <br /> Mediterranean restaurant,<br /> focused on traditional <br /> recipes served with a modern <br />twist.</p>
                <div>
                    <button className='btn1'>Reserve a table</button>
                </div>
            </div>
            <div className='image'>
                <img src={FoodImage} alt="restaurant food images" />
            </div>
        </main>
    )
}